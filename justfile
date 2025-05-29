default:
  @just --list

dev: 
  bunx vinxi dev --port 1234

build: 
  bunx vinxi build

install:
  bun install