import os
import shutil
import json
from PIL import Image

# constants
max_image_size = 256000
image_exts = ["jpg", "jpeg", "png", "svg", "webp"]
public_dir = "public"
public_backup_dir = "public_backup"
content_json = open(f"{public_dir}/content.json").read()
whitelist = ["banner.jpg", "profile.jpg", "favicon.png"]


def get_images():
    images = []
    dir_queue = [public_dir]
    while len(dir_queue) > 0:
        curr_dir = dir_queue.pop()
        for path in os.listdir(curr_dir):
            full_path = os.path.join(curr_dir, path)
            if os.path.isdir(full_path):
                dir_queue.append(full_path)
            elif full_path.split(".")[-1] in image_exts:
                images.append(full_path)
    return images


def remove_unused_images(images):
    print("Removing Unused Images...")
    unused_images = []
    for image in images:
        basename = os.path.basename(image)
        if (
            basename not in content_json
            and basename not in whitelist
            and "icons" not in image
        ):
            unused_images.append(image)
            os.remove(image)
            print(f"- Removed: {image}")
    for unused_image in unused_images:
        images.remove(unused_image)


def convert_images_to_jpegs(images):
    global content_json
    print("Converting images to JPEGs...")
    replacements = []
    for image in images:
        if "icons" in image or "favicon.png" in image:
            continue
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


def normalize_names(images):
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


def compress_image(image):
    quality = 95
    resize_factor = 1
    image_data = Image.open(image)
    while True:
        image_data.save(image, format="JPEG", quality=quality)
        image_size = os.path.getsize(image)
        if image_size <= max_image_size:
            break
        quality -= 5
        if quality < 70:
            quality = 95
            resize_factor *= 2
            image_data = image_data.resize(
                (int(image_data.width / 2), int(image_data.height / 2)),
                Image.BILINEAR,
            )
    return image_size, resize_factor, quality


def compress_large_images(images):
    print("Compressing Large Images...")
    for image in images:
        basename = os.path.basename(image)
        if not image.endswith(".svg") and basename not in whitelist:
            image_size = os.path.getsize(image)
            if image_size > max_image_size:
                new_image_size, resize_factor, quality = compress_image(image)
                change = (image_size - new_image_size) / image_size * 100
                print(
                    f"- Compressed: {image} Resize=1/{resize_factor} "
                    f"Quality={quality} Change={change:.2f}%"
                )


def minify_svgs(images):
    print("Minifying SVGs...")
    for image in images:
        if image.endswith(".svg"):
            os.system(f"npx svgo {image}")


def backup_public():
    shutil.copytree(public_dir, public_backup_dir)


def save_content():
    j = json.loads(content_json)
    open(f"{public_dir}/content.json", "w").write(json.dumps(j, indent=2))


def clean_images():
    images = get_images()
    backup_public()
    remove_unused_images(images)
    convert_images_to_jpegs(images)
    normalize_names(images)
    compress_large_images(images)
    minify_svgs(images)
    save_content()


clean_images()
