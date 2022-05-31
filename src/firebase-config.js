import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase, once, on, ref, child, get, set, onValue, push, update, onChildAdded, onChildChanged, onDataChange } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: "https://prfl-8d27f-default-rtdb.firebaseio.com",
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

const app = initializeApp(firebaseConfig);

function StartFirebase() {
  return getDatabase(app);
}




export const auth = getAuth(app);
export default StartFirebase;

// based on example
function writeUserData(userID, name, email, imageURL) {
    const db = getDatabase();
    const reference = ref(db, "users/" + userID);

    set(reference, {profile_picture: imageURL});
}

// Fetch data from Firebase
const fetchDataFromDB = (path) => {
    const db = getDatabase();
    const reference = ref(db, path);
    const dataList = [];
    return get(reference).then((doc) => {
	const data = doc.val();
	
	if (data == null) {
	    return [];
	}
	
	for (const [key, value] of Object.entries(data)) {
	    dataList.push(value);
	}
	return dataList;
    });
};

// Returns a list of users
export async function getUsers() {
    const firebaseData = await fetchDataFromDB("users/");
    const users = [];

    for (let i = 0; i < firebaseData.length; i++) {
	if (firebaseData[i].username != null) users.push(firebaseData[i].username);
    }

    return users;    
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
    const allBookmarksReference = ref(db, "bookmarks/");
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
	    onChildAdded(data.ref, (data2) => {
		onChildAdded(data2.ref, (data3) => {
		    onChildAdded(data3.ref, (data4) => {
			const key = data4.ref.toString().split("/bookmarks/")[1];
			if (key == bookmark_key.replace(" ", "%20") && !found) {
			    update(allBookmarksReference, {count: data.val() + 1});
			    found = true;
			}
		    });
		});
	    });
	});

	if (!found) {
	    const newRef = ref(db, "bookmarks/" + bookmark_key);
	    set(newRef, {count: 1});
	}
    }
}

// Returns keys to most bookmarked item in each category
export function getMostBookmarkedItem(categories) {
    const db = getDatabase();
    const reference = ref(db, "bookmarks/");
    const top_items_keys = [];
    const best_category_count = [];

    for (let i = 0; i < categories.length; i++) {
	categories[i].replace(" ", "%20");
	best_category_count.push(0);
	top_items_keys.push("");
    }

    // Iterate through fourth-order children of bookmarks (the node containing count data)
    onChildAdded(reference, (data) => {
	onChildAdded(data.ref, (data2) => {
	    onChildAdded(data2.ref, (data3) => {
		onChildAdded(data3.ref, (data4) => {
		    const subpath = data4.ref.toString().split("/bookmarks/")[1];
		    const category = subpath.split("/")[2];

		    let index = 0;
		    for (let k = 0; k < categories.length; k++) {
			if (categories[k] == category) index = k;
		    }

		    if (data4.val().count > best_category_count[index] && getValueWithKey(subpath).title != "Error") {
			best_category_count[index] = data4.val().count;
			top_items_keys[index] = subpath;
			if (top_items_keys[index] != subpath) console.log("Error");
		    }
		});
	    });
	});
    });

    return top_items_keys;
}

// Returns item object that a bookmark links too
export function getValueWithKey(key) {
    const db = getDatabase();
    const paths = key.split("/");
    let val = {title: "Error", description: "Bookmark not found (this item was removed)"};

    if (paths.length != 4) return val;    
    const reference = ref(db, paths[0] + "/" + paths[1] + "/" + paths[2].replace("%20", " ") + "/");

    
    onChildAdded(reference, (snapshot) => {
	if (paths[3] == snapshot.key)
	    val = snapshot.val();
    });

    return val;
}

export function getTitleWithKey(key) {//tailored from Cameron's getValueWithKey
    const db = getDatabase();
    const paths = key.split("/");
    const reference = ref(db, paths[0] + "/" + paths[1] + "/" + paths[2].replace("%20", " ") + "/" + paths[3] + "/");
    let val = {title: "Error", description: "Bookmark not found (this item was removed)"};
    
    onChildAdded(reference, (snapshot) => {
	    val = snapshot.val();
    });

    return val;
}

export function updateUserItemsData(userID, category, index, replacement) {
    const db = getDatabase();
    const reference = ref(db, "users/" + userID + "/" + category);
    let i = 0;
    
    onValue(reference, (snapshot) => {
	snapshot.forEach((childSnapshot) => {
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

// Get user's name from uid
//modified vesion of Cameron's getUserItemsKey
export function getUsername(userID) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userID);
  let val = "";

  onChildAdded(reference, (snapshot) => {
    if (snapshot.key == "username")
      val = snapshot.val();
  });
  
  return (val);
}

// Push new category to the list of categories
function writeCategoryData(category) {
    const db = getDatabase();
    const reference = ref(db, "categories/");
    const newCategoryRef = push(reference);
    
    set(newCategoryRef, {category: category});
}

// Returns an array of strings with the category name
export async function getCategories() {
    const firebaseData = await fetchDataFromDB("categories");
    const categories = []
    
    for (let i = 0; i < firebaseData.length; i++) {
	categories.push(firebaseData[i].category);
    }
    
    return categories;
}

// Returns an array of objects (items) with title and description members
export async function getUserItemsData(userID, category) {
    const firebaseData = await fetchDataFromDB("users/" + userID + "/" + category);
    const items = [];

    for (let i = 0; i < firebaseData.length; i++) {
	items.push(firebaseData[i]);
    }

    return items;
}
