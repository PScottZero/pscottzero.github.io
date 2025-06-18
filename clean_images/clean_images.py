import json
import os
import shutil

from PIL import Image

IMAGES_PATH = "static/images"
IMAGES_BACKUP_PATH = "clean_images/images_backup"
CONTENT_PATH = "src/lib/content.json"

MAX_IMAGE_PXS = 256000
IMAGE_EXTS = ["jpg", "jpeg", "png", "svg", "webp"]
UNUSED_WHITELIST = [
  "static/images/banner/profile.jpg",
  "static/images/banner/background.jpg",
]

content_json = open(CONTENT_PATH, "r").read()


def clean_images() -> None:
  backup_public()
  images = get_images()
  remove_unused_images(images)
  convert_images_to_jpegs(images)
  normalize_names(images)
  compress_large_images(images)
  minify_svgs(images)
  save_content()


def backup_public() -> None:
  if os.path.exists(IMAGES_BACKUP_PATH):
    shutil.rmtree(IMAGES_BACKUP_PATH)
  shutil.copytree(IMAGES_PATH, IMAGES_BACKUP_PATH)


def get_images() -> list[str]:
  images: list[str] = []
  for subfolder in os.listdir(IMAGES_PATH):
    subfolder_path = f"{IMAGES_PATH}/{subfolder}"
    for image in os.listdir(subfolder_path):
      image_path = f"{subfolder_path}/{image}"
      images.append(image_path)
  return images


def remove_unused_images(images: list[str]) -> None:
  global content_json
  print("Removing Unused Images...")
  unused_images: list[str] = []
  for image in images:
    basename = os.path.basename(image)
    if image not in UNUSED_WHITELIST and basename not in content_json:
      unused_images.append(image)
      os.remove(image)
      print(f"- Removed: {image}")
  for unused_image in unused_images:
    images.remove(unused_image)


def convert_images_to_jpegs(images) -> None:
  global content_json
  print("Converting images to JPEGs...")
  replacements = []
  for image in images:
    if image.endswith(".png") or image.endswith(".webp"):
      basename = os.path.basename(image)
      new_image = image.replace(".png", ".jpg")
      new_image = new_image.replace(".webp", ".jpg")
      new_basename = os.path.basename(new_image)
      content_json = content_json.replace(basename, new_basename)
      image_data = Image.open(image)
      image_data = image_data.convert("RGB")
      image_data.save(new_image, format="JPEG", quality=100)
      os.remove(image)
      replacements.append((image, new_image))
      print(f"- Image to JPEG: {image} -> {new_image}")
  for replacement in replacements:
    images.remove(replacement[0])
    images.append(replacement[1])


def normalize_names(images) -> None:
  global content_json
  print("Normalizing Image Names...")
  replacements = []
  for image in images:
    basename = os.path.basename(image)
    new_basename = basename
    if image.endswith(".jpeg"):
      new_basename = basename.replace(".jpeg", ".jpg")
    new_basename = new_basename.lower()
    new_basename = new_basename.replace("_", "-")
    if new_basename != basename:
      content_json = content_json.replace(basename, new_basename)
      new_image = image.replace(basename, new_basename)
      replacements.append((image, new_image))
      os.rename(image, new_image)
      print(f"- Normalized: {image} -> {new_image}")
  for replacement in replacements:
    images.remove(replacement[0])
    images.append(replacement[1])


def compress_large_images(images) -> None:
  print("Compressing Large Images...")
  for image in images:
    if not image.endswith(".svg"):
      image_size = os.path.getsize(image)
      if image_size > MAX_IMAGE_PXS:
        new_image_size, resize_factor, quality = compress_image(image)
        change = (image_size - new_image_size) / image_size * 100
        print(
          f"- Compressed: {image} Resize=1/{resize_factor} "
          f"Quality={quality} Change={change:.2f}%"
        )


def compress_image(image) -> tuple[int, int, int]:
  quality = 95
  resize_factor = 1
  image_data = Image.open(image)
  while True:
    image_data.save(image, format="JPEG", quality=quality)
    image_size = os.path.getsize(image)
    if image_size <= MAX_IMAGE_PXS:
      break
    quality -= 5
    if quality < 70:
      quality = 95
      resize_factor *= 2
      image_data = image_data.resize(
        (int(image_data.width / 2), int(image_data.height / 2)),
        Image.Resampling.BILINEAR,
      )
  return image_size, resize_factor, quality


def minify_svgs(images) -> None:
  print("Minifying SVGs...")
  for image in images:
    if image.endswith(".svg"):
      os.system(f"npx svgo {image}")


def save_content() -> None:
  global content_json
  j = json.loads(content_json)
  open(CONTENT_PATH, "w").write(json.dumps(j, indent=2))
