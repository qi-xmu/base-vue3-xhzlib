.PHONY: run dist preview

all: run

run:
	npm run dev

preview:
	npm run preview

dist:
	npm run build