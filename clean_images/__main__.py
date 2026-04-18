import sys

from clean_images.clean_images import clean_images

minify = sys.argv[1] == "minify" if len(sys.argv) >= 2 else False
clean_images(minify)
