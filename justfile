dev:
  bun vite --port 1234

build:
  bun tsc -b && bun vite build
  
preview:
  bun vite preview

install:
  bun install