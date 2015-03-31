# Builds the scripts
build:
	@echo "Building file.. Please use `make prod` in production"
	webpack -d --display-error-details

# Watches for files changes, and runs `build`
watch:
	webpack -w -d --display-error-details

# Builds the scripts for production (uglification)
prod:
	webpack -p -d --display-error-details

# Installs dependencies
install:
	npm install -g bower webpack
	npm install
	bower install

# Build stylus
style:
	./node_modules/.bin/stylus -m --include-css --include ./styles/ \
		--use ./stylus.js < ./styles/main.styl > ./dist/style.css

# Run tests
test:
	npm test

.PHONY: build
