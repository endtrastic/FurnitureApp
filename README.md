# FurnitureApp

## Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** v25.6.1 or later
- **npm** v11.12.1 or later

---

## Getting Started

There are two ways to run this project locally depending on which version of Expo you want to use.

---

### Option 1 — Expo 54 (Recommended, faster setup)

```bash
git clone git@github.com:endtrastic/FurnitureApp.git
cd FurnitureApp
npm install
npm install expo@^54.0.0
npx expo start
```

> **Note:** Make sure your phone is using Expo version 54 when using this option.

---

### Option 2 — Expo 55 (Latest, takes more time)

This option requires a few extra steps to ensure assets are compatible with the latest Expo version.

```bash
git clone git@github.com:endtrastic/FurnitureApp.git
cd FurnitureApp
npm install
npm install expo@^55.0.0
npm install -g sharp-cli
npx expo install --fix && npx expo-doctor
```

Resize the app icon to meet Expo 55 requirements:

```bash
cd assets/images
sharp -i icon.png -o icon.png resize 1024 1024
cd ../..
```

Then finish up and start the app:

```bash
npx expo install --fix
npx expo start
```

---

## Running the App

Once `npx expo start` is running, you can open the app in:

- [Expo Go](https://expo.dev/go) on your physical device
- An Android emulator
- An iOS simulator
