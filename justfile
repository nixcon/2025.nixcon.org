default:
  @just --list

dev: 
  bunx vinxi dev --port 1234

build: 
  bunx vinxi build

install:
  bun install

clear-cache:
  rm -rf node_modules/.vinxi
  rm -rf .vinxi

clean:
  rm -rf node_modules
  rm -rf .vinxi
  rm -rf .output
  @echo "✨ Cleand everything up 🧹✨"
