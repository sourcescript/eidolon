BUILD_PATH = ./dist
FONT_EXT = {woff2,ttf,otf,woff,eot,svg}
FONT_PATH = $(BUILD_PATH)/fonts
NPM_PATH = ./node_modules/.bin
BOWER_PATH = ./bower_components
#
WEBPACK = $(NPM_PATH)/webpack
WEBPACK_OPT = -d --display-error-details
#
STYLUS = $(NPM_PATH)/stylus
STYLUS_PATH = ./styles
STYLUS_OPT = -m --include-css --include ./styles/ --use ./stylus.js < ./styles/main.styl > ./dist/css/style.css

# Builds the scripts
build:
	$(WEBPACK) -p $(WEBPACK_OPT)

# Build stylus
#
# The explanation of `-p` option on mkdir:
# http://stackoverflow.com/questions/793858/how-to-mkdir-only-if-a-dir-does-not-already-exist
style:
	$(STYLUS) $(STYLUS_OPT)
	mkdir -p $(BUILD_PATH)

	# copy font-awesome
	cp $(BOWER_PATH)/font-awesome/fonts/*.$(FONT_EXT) $(FONT_PATH)
	# copy google fonts
	# we're not using $(FONT_EXT) since using the brace notation
	# (e.g., {woff2,woff,ttf}) throws an error when none of the
	# specified extension exists
	cp $(STYLUS_PATH)/vendor/*/*.woff2 $(FONT_PATH)

# Watches for files changes, and runs `build`
watch:
	$(WEBPACK) -w $(WEBPACK_OPT) || $(STYLUS) -w $(STYLUS_OPT)

# Installs dependencies
install:
	npm install webpack babel bower -g
	npm install
	bower install

# Run tests
test:
	NPM_PATH test

.PHONY: build style
