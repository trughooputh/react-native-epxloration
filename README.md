# React Native Masterclass hands on 📖

Welcome to the React Native Masterclass Hands-On project! 

This project serves as a hands-on introduction to React Native, providing you with a practical learning experience as you develop a mobile application. Designed for those who already have a foundation in React and JavaScript, this project covers the basics of React Native development, from setup to API integration, allowing you to quickly adapt your web development skills to mobile.

![Porsche Digital x React Native](assets/porsche%20digital%20x%20react%20native.png)

## Who is this for?
This project is ideal for:

Recent graduates or students who are experienced with React and JavaScript

Developers eager to transition from web to mobile development

Anyone interested in a step-by-step approach to understanding the key elements of React Native

## What is React Native?

[React Native](https://reactnative.dev/docs/getting-started) is an open-source framework developed by Facebook/Meta for building cross-platform mobile applications. It allows developers to write code in JavaScript and create native-like apps for iOS and Android platforms. 

When creating a React or Vanilla JS project, you can see the product of your code in the browser, in this case, things are different - as React Native develops a mobile app, usually you will need to setup Android Studio or Xcode tools to run the code in a iPhone or android emulators.

You will see that React Native components import React and uses hooks in the same way in a web-app, but instead of DOM elements like `h1` and `div`, React Native provides a set of in-built components, like `Text` and `View`.

## Expo and Setup

With [Expo](https://expo.dev/), you can skip the need for Android Studio or Xcode and instead run your code directly on your own mobile phone.
Simply install the Expo Go app, scan the QR code, and see your project live on your device! We’ll guide you through the steps in the next section to ensure a smooth setup and a quick path to seeing your code in action.

*Download the Expo Go app* on your own mobile device to scan it and so see your app alive!


## Getting started

Clone the repository

`git clone https://github.com/trughooputh/react-native-exploration.git`

Go to the folder

`cd react-native-exploration`

Run the app with Expo

`yarn expo start`

Ensure to have expo-cli

`yarn global add expo-cli@latest`

You will see a QR code. With your phone scan it, and you will see your app on a real device

## Functionality and structure overview

This project is partially started, so once you get it up and running, before starting any code, take your time to take a look at the existing one - which is actually a good exercises to prepare you for your day-to-day as a professional developer!

As a summary, under src/ you will find

* a component folder, containing already the basic part of the application, like a searchBar component, a core subfolder with a card component
* a style folder, which contains a helper and themes files: like a real-life project, this dictionary uses a unified way to handle styling to ensure all part of the app looks coherents
* an API folder, with already the connection to the [dictionary api](https://dictionaryapi.dev/)
* A Context provider - if you never used this before, check the [React documentation](https://react.dev/learn/passing-data-deeply-with-context) about Context and useContext - it's a way to share information across components avoiding overusing props. We suggest using it as it is a good practice to avoid prop drilling! 
  
## Code the next steps!

Once you are familiar with the existing code and with the dictionary API

* Display the results from the get call in the way you prefer: you can choose to display besides the definitions also the phonetics, synonyms and other info about the searched word
* Improve the styling by modifying the current styling helpers and palette, and ensure all your components look the same! 
* Add error handling flow: right now we are not handling possible errors, ensure your code is ready in case a 404 arrives!

**Extra**

* Add a [new API](https://www.pexels.com/api/documentation/)to this project to show also an image representing the searched word
* Personalise the app even more by incorporating a custom font


## Additional Resources

* To find [color inspiration](https://colorhunt.co/)
* [React Native components](https://reactnative.dev/docs/components-and-apis)
* [Expo](https://expo.dev/)
* [React Native in 100 sec](https://www.youtube.com/watch?v=gvkqT_Uoahw)

---

## Please note:
If you want to download a project on your local machine, do not fork it but clone the repo locally, on your computer. After that, create a new repo in your own GitHub account *with exactly the same project name*, and link the local repo to the remote repo in your GitHub account (see below). Why should you clone and not fork? It will show the project as **your own project** and not a fork of someone else's project. You can use it as a project for your portfolio.

You can connect a local project to a new, empty GitHub repo [as follows](https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line). It is very good to know this so that you can start a project locally and afterwards link it with a remote GitHub repo.

If you clone the project without forking it, you will have to change the 'remote origin' repository after cloning. Check the remote of your local project using `git remote -v`. 

To link your local project to your own GitHub repo, you need to change the remote origin. Have a look at this article: https://devconnected.com/how-to-change-git-remote-origin/. With `git remote -v` you can again check if remote origin has been reset and now shows the name of your GitHub account.

---
  
