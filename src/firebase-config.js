import { initializeApp } from "firebase/app";
import { getDatabase, once, on, ref, child, get, set, onValue, push, update, onChildAdded, onChildChanged, onDataChange } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyACMOd6VXktUZpNqudzKvyXPEgiiOThe7Y",
  authDomain: "prfl-8d27f.firebaseapp.com",
  databaseURL: "https://prfl-8d27f-default-rtdb.firebaseio.com",
  projectId: "prfl-8d27f",
  storageBucket: "prfl-8d27f.appspot.com",
  messagingSenderId: "750525471821",
  appId: "1:750525471821:web:3ed40874533fc15b3bd004",
  measurementId: "G-7VKY4CFFPG"
};

const app = initializeApp(firebaseConfig);

// Create a new user
function createUser(userID, imageURL) {
    const db = getDatabase();
    const reference = ref(db, "users/" + userID);

    set(reference, {profile_picture: imageURL});
}

// Push new item to a user's list for a given category
export function writeUserItemsData(userID, category, item_title, item_description) {
    const db = getDatabase();
    const reference = ref(db, "users/" + userID + "/" + category);
    const newItemRef = push(reference);
    
    set(newItemRef, {title: item_title, description: item_description});
}

// Push new boomark to a user's list of bookmarks as well as the list of all bookmarks
export function addBookmark(userID, bookmark_key) {
    const db = getDatabase();
    const userBookmarksReference = ref(db, "users/" + userID + "/bookmarks/");
    const allBookmarksReference = ref(db, "bookmarks/" + bookmark_key);
    const newBookmarkRef = push(userBookmarksReference);

    set(newBookmarkRef, {key: bookmark_key});

    onValue(allBookmarksReference, (snapshot) => {
	if (snapshot.exists()) update(allBookmarksReference, {count: snapshot.val().count + 1});
	else set(allBookmarksReference, {count: 0});
    }, (errorObject) => {
	console.log("Failure: " + errorObject.name);
    });
}

// Returns item object that a bookmark links too
export function getValueWithKey(key) {
    const db = getDatabase();
    const reference = ref(db, key);
    
    onValue(reference, (snapshot) => {
	console.log(snapshot.val());
	return snapshot.val();
    }, (errorObject) => {
	console.log("The read failed: " + errorObject.name);
    });
}

// Finds most common bookmarks
// TODO

// Returns an array of objects (items) with title and description members
export function getUserItemsData(userID, category) {
    const db = getDatabase();
    const reference = ref(db, "users/" + userID + "/" + category);
    let items = [];

    onChildAdded(reference, (data) => {
	items.push(data.val());
    });

    return items;
}

export function updateUserItemsData(userID, category, index, replacement) {
    const db = getDatabase();
    const reference = ref(db, "users/" + userID + "/" + category);
    let i = 0;
    
    onValue(reference, (snapshot) => {
	snapshot.forEach(async (childSnapshot) => {
	    const childKey = childSnapshot.key;
	    const childData = childSnapshot.val();

	    if (i == index) {
		const childRef = ref(db, "users/" + userID + "/" + category + "/" + childKey);
		set(childRef, replacement);
	    }
	    i++;
	});
    }, {
	onlyOnce: true
    });
}

// Get key/path to data entry in user items data
export function getUserItemsKey(userID, category, index) {
    const db = getDatabase();
    const reference = ref(db, "users/" + userID + "/" + category);
    let i = 0;

    console.log("getUserItemsKey(" + userID + ", " + category + ", " + index + ");");

    onValue(reference, async (snapshot) => {
	await snapshot.forEach(async (childSnapshot) => {
	    const childKey = childSnapshot.key;
	    const childData = childSnapshot.val();

	    await (() => {return "hello"});
	    
	    if (i == index) {
		console.log(("users/" + userID + "/" + category + "/" + childKey));
		return ("users/" + userID + "/" + category + "/" + childKey);
		//await (new Promise(() => {return ("users/" + userID + "/" + category + "/" + childKey)}));
	    }
	    i++;
	});
    }, {
	onlyOnce: true
    });
}

// Push new category to the list of categories
function writeCategoryData(category) {
    const db = getDatabase();
    const reference = ref(db, "categories/");
    const newCategoryRef = push(reference);
    
    set(newCategoryRef, {category: category});
}

// Returns an array of strings with the category name
export function getCategories() {
    const db = getDatabase();
    const reference = ref(db, "categories/");
    const categories = [];

    return ["TV Shows", "Movies", "Songs"];
}


/*createUser("example-user", "url goes here");
//writeCategoryData("TV Shows"); //to stop duplicate categories
//writeCategoryData("Movies");
//writeCategoryData("Songs");
writeUserItemsData("example-user", "TV Shows", "tv-1", "This is my justification. It is verbose. I have nothing to say but I am going to use as many words as I possibly ever could to say just exactly that, which is that I have nothing to say. Thank you for reading this.");
    writeUserItemsData("example-user", "TV Shows", "tv-2", "This is my justification. It is verbose. I have nothing to say but I am going to use as many words as I possibly ever could to say just exactly that, which is that I have nothing to say. Thank you for reading this.");
    writeUserItemsData("example-user", "Movies", "movie-1", "This is my justification. It is verbose. I have nothing to say but I am going to use as many words as I possibly ever could to say just exactly that, which is that I have nothing to say. Thank you for reading this.");
    writeUserItemsData("example-user", "Movies", "movie-2", "This is my justification. It is verbose. I have nothing to say but I am going to use as many words as I possibly ever could to say just exactly that, which is that I have nothing to say. Thank you for reading this.");
    writeUserItemsData("example-user", "Movies", "movie-3", "This is my justification. It is verbose. I have nothing to say but I am going to use as many words as I possibly ever could to say just exactly that, which is that I have nothing to say. Thank you for reading this.");
    writeUserItemsData("example-user", "Songs", "song-1", "This is my justification. It is verbose. I have nothing to say but I am going to use as many words as I possibly ever could to say just exactly that, which is that I have nothing to say. Thank you for reading this.");
*/
