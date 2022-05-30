How to run this app:

Use 'npm start' when within the project directory to open the web app on a web browser. The app connects to a Firebase Realtime Database, which works on both local connections and remote hosting. Therefore, the cloned app will be accessing the same database as the original app. To change this, one can go to src/firebase-config.js and change the details stored in the firebaseConfig object. If you have your own Firebase project set up, you can change these details to the ones shown in the Firebase console. Otherwise, you can leave them be and any changes to the data will effect our database. Additionally, if there is not a file called .env.local in the project directory's top level, create it and put the following information in:
REACT_APP_apiKey="AIzaSyACMOd6VXktUZpNqudzKvyXPEgiiOThe7Y"
REACT_APP_authDomain="prfl-8d27f.firebaseapp.com"
REACT_APP_projectId="prfl-8d27f"
REACT_APP_storageBucket="prfl-8d27f.appspot.com"
REACT_APP_messagingSenderId="750525471821"
REACT_APP_appId="1:750525471821:web:3ed40874533fc15b3bd004"
REACT_APP_measurementId="G-7VKY4CFFPG"
(if you want to connect to a different database, these details may be different)

After launching the app using 'npm start' from the project directory, you can create an account and navigate the app using the app bar. When on your own profile, click on the 'Edit' button to make changes to your recommendations (there will be none initially). On any profile page, click on the '+' button on any item to make a bookmark, which will show up on your profile. The most bookmarked items overall in each category will show up on a 'Top Rankings' page, which is accessable via the app bar. To find other profiles, go to the search page and type in the username (first name + " " + last name) of the user you want to find. This will then redirect you to that user's profile page, if it exists.


delete the stuff below later:


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
