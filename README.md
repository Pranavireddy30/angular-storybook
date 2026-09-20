# Angular Storybook

A reusable Angular design system and component showcase built with Storybook. This project includes an Angular app for demoing components and a library package named `my-storybook` for reusable UI components.

## Overview

- Angular 21 application
- Storybook integration with docs and accessibility add-ons
- Library package under `projects/my-storybook`
- Component stories under `src/stories`

## Prerequisites

- Node.js 20+
- npm 10+

## Installation

```bash
npm install
```

## Run Storybook locally

```bash
npm run storybook
```

Open the browser at:

```text
http://localhost:6006
```

Storybook will reload automatically when you change story or component files.

## Build Storybook

To generate a static Storybook build:

```bash
npm run build-storybook
```

The output will be created in the `storybook-static` folder.

## Build the Angular app

```bash
npm run build
```

## Run tests

```bash
npm test
```

## Build the library package

```bash
ng build my-storybook
```

This compiles the reusable Angular library in `projects/my-storybook`.

## Generate the package as a .tgz file

The publishable tarball is created from the built library output, not from the Storybook app root.

### Step 1: build the library

```bash
ng build my-storybook
```

This generates the distributable package under:

```text
dist/my-storybook
```

### Step 2: create the .tgz file

```bash
cd dist/my-storybook
npm pack
```

This creates a file like:

```text
my-storybook-0.0.1.tgz
```

### Step 3: install it in another Angular app

From the app that should consume the package:

```bash
npm install ./dist/my-storybook/my-storybook-0.0.1.tgz
```

If you already have the tarball in the same folder, you can also install it with:

```bash
npm install ./my-storybook-0.0.1.tgz
```

## Project structure

```text
storybook/
├── src/
│   ├── app/
│   └── stories/
├── projects/
│   └── my-storybook/
├── angular.json
├── package.json
├── .storybook/
├── public/
├── README.md
└── tsconfig.json
```

## Useful commands

```bash
npm run start
npm run storybook
npm run build-storybook
npm run build
npm test
```

## Notes

This project is intended for component development, visual testing, and documentation of Angular UI elements in a Storybook environment.
