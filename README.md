# React Native Masterclass hands on 📖

Welcome to the React Native exploration project! 

This project serves as a hands-on introduction to React Native, providing you with a practical learning experience as you develop a mobile application. Designed for those who already have a foundation in React and JavaScript, some knowledge about TypeScript, this project covers the basics of React Native development, from setup to API integration, allowing you to quickly adapt your web development skills to mobile.

![Porsche Digital x React Native](assets/porsche%20digital%20x%20react%20native.png)

## Who is this for?
This project is ideal for:

Recent graduates or students who are experienced with React and JavaScript, wants to touch a bit of TypeScript

Developers eager to transition from web to mobile development

Anyone interested in a step-by-step approach to understanding the key elements of React Native

## What is React Native?

[React Native](https://reactnative.dev/docs/getting-started) is an open-source framework developed by Facebook (now Meta) for building cross-platform mobile applications. It enables developers to use JavaScript to create native-like apps for both iOS and Android, all from a single codebase.

Unlike web development with React or Vanilla JavaScript, where you can preview your work directly in the browser, React Native requires mobile-specific tools. To see your app on an iOS or Android emulator, you’ll typically need to set up Android Studio or Xcode.

React Native shares many familiar concepts with React for the web. Components import React and use hooks similarly to web applications, but instead of traditional HTML elements like h1 or div, React Native offers a suite of mobile-specific components, such as Text and View, designed for building robust mobile interfaces.

## Expo and Setup

With [Expo](https://expo.dev/), you can skip the setup of Android Studio or Xcode and run your React Native code directly on your mobile device. Simply install the Expo Go app, scan the provided QR code, and watch your project come to life on your phone! In the next section, we’ll walk you through each step to ensure a smooth setup so you can quickly see your code in action.

Download the Expo Go app on your mobile device to scan the QR code and instantly view your app live!


## Getting started


To run this project locally, follow these steps:

### Prerequisites

Ensure you have the following installed on your development machine:

- **Node.js**: Download and install the latest LTS version from [nodejs.org](https://nodejs.org/).
- **npm** (comes with Node.js) or **Yarn**: For managing dependencies.
- **Expo CLI**: Run `npm install -g expo-cli` or `yarn global add expo-cli` to install Expo globally.

### Installation

1. **Clone the repository**:

`git clone https://github.com/trughooputh/react-native-exploration.git`

`cd react-native-exploration`

2. **install dependencies**:

`npm install` or `yarn install`

3. **Run the app with Expo**
Ensure to have expo-cli

`yarn global add expo-cli@latest`

`yarn expo start`

### Running the App on Your Device

1. **Install the Expo Go app**  
   Download Expo Go on your iOS or Android device from the [App Store](https://apps.apple.com/app/expo-go/id982107779) or [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).

2. **Scan the QR code**  
   After running `expo start` in your terminal, a QR code will be generated. Open the Expo Go app on your device and scan this code to view the app live on your device.


## Functionality and structure overview

This project is partially started, so once you get it up and running, before starting any code, take your time to take a look at the existing one - which is actually a good exercises to prepare you for your day-to-day as a professional developer!

As a summary, under src/ you will find

* a component folder, containing already the basic part of the application, like a searchBar component, a core subfolder with a card component
* a style folder, which contains a helper and themes files: like a real-life project, this dictionary uses a unified way to handle styling to ensure all part of the app looks coherents
* an API folder, with already the connection to the [dictionary api](https://dictionaryapi.dev/)
* A Context provider - if you never used this before, check the [React documentation](https://react.dev/learn/passing-data-deeply-with-context) about Context and useContext - it's a way to share information across components avoiding overusing props. We suggest using it as it is a good practice to avoid prop drilling! 
  
## Code the next steps!

Once you are familiar with the existing code:

* Display the results from the get call from your favourite API
* Improve the styling by modifying the current styling helpers and theme, and ensure all your components look the same! 
* Add error handling flow: right now we are not handling possible errors, ensure your code is ready in case a 404 arrives!
* Add some navigation to browse different section of your app!
* Personalise the app even more by incorporating a custom font

## Additional Resources

* To find [color inspiration](https://colorhunt.co/)
* [React Native components](https://reactnative.dev/docs/components-and-apis)
* [Expo](https://expo.dev/)
* [React Native in 100 sec](https://www.youtube.com/watch?v=gvkqT_Uoahw)

---

## Please note:
Feel free to copy and play with the code to your dedicated new repo in your own GitHub account.

---
  
