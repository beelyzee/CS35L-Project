# Overview

Prfl is a web application that elevates the way that people can interact with one another in a post-pandemic society. Users can create a public profile with lists of their favorite things and view the profiles of others as well.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting the App
1. Clone the repository from github by using
```sh
git clone https://github.com/beelyzee/CS35L-Project.git
```
2. Change directory to the app by using
```sh
cd CS35L-Project
```
3. Install the necessary dependencies by using
```sh
npm install
```

## Running the App
1. Run the app in development mode by using 
```sh
npm start
```
when within the project directory to open the web app on a web browser. The app connects to a Firebase Realtime Database, which works on both local connections and remote hosting. Therefore, the cloned app will be accessing the same database as the original app. To change this, one can go to src/firebase-config.js and change the details stored in the firebaseConfig object. If you have your own Firebase project set up, you can change these details to the ones shown in the Firebase console. Otherwise, you can leave them be and any changes to the data will effect our database. Additionally, if there is not a file called .env.local in the project directory's top level, create it and put the following information in:
```sh
REACT_APP_apiKey="AIzaSyACMOd6VXktUZpNqudzKvyXPEgiiOThe7Y"
REACT_APP_authDomain="prfl-8d27f.firebaseapp.com"
REACT_APP_projectId="prfl-8d27f"
REACT_APP_storageBucket="prfl-8d27f.appspot.com"
REACT_APP_messagingSenderId="750525471821"
REACT_APP_appId="1:750525471821:web:3ed40874533fc15b3bd004"
REACT_APP_measurementId="G-7VKY4CFFPG"
```
(if you want to connect to a different database, these details may be different)

## Using the App
1. After launching the app using 'npm start' from the project directory, you can create an account and navigate the app using the app bar. When on your own profile, click on the 'Edit' button to make changes to your recommendations (there will be none initially). On any profile page, click on the '+' button on any item to make a bookmark, which will show up on your profile. The most bookmarked items overall in each category will show up on a 'Top Rankings' page, which is accessable via the app bar. To find other profiles, go to the search page and type in the username (first name + " " + last name) of the user you want to find. This will then redirect you to that user's profile page, if it exists.