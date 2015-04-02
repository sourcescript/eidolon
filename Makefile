# For some windows shit, I don't know why.
# Anyway, @maebe / Brian committed this ../..
SYSTEM_32 = C:/Windows/System32
if [ -d $(SYSTEM_32) ]; then \
	SHELL = $(SYSTEM_32)/cmd.exe \
fi

BUILD_PATH = ./dist
NPM = ./node_modules/.bin
BOWER_PATH = ./bower_components
WEBPACK = $(NPM)/webpack
WEBPACK_OPT = -d --display-error-details
STYLUS = $(NPM)/stylus
STYLUS_PATH = ./styles
STYLUS_OPT = -m --include-css --include ./styles/ --use ./stylus.js < ./styles/main.styl > ./dist/style.css

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

	# copy typicons
	cp $(BOWER_PATH)/typicons/src/font/*.{ttf,woff,eot,svg} $(BUILD_PATH)
	# copy google fonts
	cp $(STYLUS_PATH)/vendor/*/*.woff2 $(BUILD_PATH)

# Watches for files changes, and runs `build`
watch:
	$(WEBPACK) -w $(WEBPACK_OPT) || $(STYLUS) -w $(STYLUS_OPT)

# Installs dependencies
install:
	npm install bower -g
	npm install
	bower install

# Run tests
test:
	npm test

.PHONY: build style
