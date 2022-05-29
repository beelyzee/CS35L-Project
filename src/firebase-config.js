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

    let bookmarkExists = false;
    onChildAdded(userBookmarksReference, (data) => {
	if (data.val().key == bookmark_key)
	    bookmarkExists = true;
    });

    if (!bookmarkExists) {
	set(newBookmarkRef, {key: bookmark_key});

	let found = false;
	onChildAdded(allBookmarksReference, (data) => {
	    const key = data.ref.toString().split("/bookmarks/")[1].slice(0,-6);
	    console.log(key);
	    console.log(bookmark_key.replace(" ", "%20"));
	    if (key == bookmark_key.replace(" ", "%20")) {
		update(allBookmarksReference, {count: data.val() + 1});
		found = true;
	    }
	});

	if (!found) set(allBookmarksReference, {count: 1});

    }
}

// Returns keys to most bookmarked item in each category
export function getMostBookmarkedItem(bookmark_key) {
    const db = getDatabase();
    const reference = ref(db, "bookmarks/" + bookmark_key);
    const top_items_keys = [];
    const best_category_count = [];
    const categories = getCategories();

    for (let i = 0; i < categories.length; i++) {
	categories[i].replace(" ", "%20");
	best_category_count.push(0);
	top_items_keys.push("");
    }
    
    onChildAdded(reference, (data) => {
	const category = data.ref.toString().split("/bookmarks/")[1].split("/")[2];
	let index = 0;
	for (let k = 0; k < categories.length; k++) {
	    if (categories[k] == category) index = k;
	}
	
	if (data.val() > best_category_count[index]) {
	    best_category_count[index] = data.val();
	    top_items_keys[index] = data.ref.toString().split("/bookmarks/")[1];
	}
    });

    return top_items_keys;
}

// Returns item object that a bookmark links too
export function getValueWithKey(key) {
    const db = getDatabase();
    const reference = ref(db, key);

    onChildAdded(reference, (snapshot) => {
	return snapshot.val();
    });

    return {title: "Error", description: "Bookmark not found"};
}

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
    let key = "";

    onChildAdded(reference, (data) => {
	if (i == index) key = data.key;
	i++;
    });
    
    return ("users/" + userID + "/" + category + "/" + key);
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

    onChildAdded(reference, (data) => {
	categories.push(data.val().category);
    });
    
    return categories;
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
