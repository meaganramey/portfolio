# Makefile for Portfolio Website

.PHONY: help install start build deploy lint test clean

# Default target
help:
	@echo "Available commands:"
	@echo "  make install    - Install dependencies"
	@echo "  make start      - Start development server"
	@echo "  make build      - Build production bundle"
	@echo "  make deploy     - Deploy to GitHub Pages"
	@echo "  make lint       - Run ESLint on source files"
	@echo "  make test       - Run tests"
	@echo "  make clean      - Remove node_modules and build artifacts"

# Install dependencies
install:
	@echo "Installing dependencies..."
	npm install

# Start development server
start:
	@echo "Starting development server..."
	npm start

# Build production bundle
build:
	@echo "Building production bundle..."
	npm run build

# Deploy to GitHub Pages
deploy:
	@echo "Deploying to GitHub Pages..."
	npm run deploy

# Run ESLint
lint:
	@echo "Running ESLint..."
	npm run lint
	npx prettier --write .
	npx eslint src --fix

# Run tests
test:
	@echo "Running tests..."
	npm test

# Clean build artifacts and node_modules
clean:
	@echo "Cleaning build artifacts and node_modules..."
	rm -rf node_modules
	rm -rf build
	rm -f package-lock.json
	@echo "Clean complete!"
