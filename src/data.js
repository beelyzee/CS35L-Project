import * as React from "react";
import { getUserItemsData } from "./firebase-config.js";
import { getUserItemsKey } from "./firebase-config.js";
import { getValueWithKey } from "./firebase-config.js";
import { getCategories as getListOfCategories } from "./firebase-config.js";
import { updateUserItemsData } from "./firebase-config.js";
import { writeUserItemsData } from "./firebase-config.js";
import { addBookmark } from "./firebase-config.js";
import { getMostBookmarkedItem } from "./firebase-config.js";
import { getUsers } from "./firebase-config.js";
import { getUsername as getUsernameFromUserID} from "./firebase-config.js";

// Returns a list of users matching the search query
export function getMatchingUsers(input) {
    let users = getUsers();
    return users;
}

// Returns a username when given user ID
export function getUsername(userID) {
    return getUsernameFromUserID(userID);
}

// Returns the most bookmarked item in each category
export function getTopRankedItems(categories) {
    const item_keys = getMostBookmarkedItem(categories);
    let items = new Array(categories.length);

    for (let i = 0; i < item_keys.length; i++) {
	items[i] = (getValueWithKey(item_keys[i]));
    }

    console.log(items);
    return items;
}

// Return associated data to the username in profileData, or -1 if username is not found
export default function getData(username, category) {
    return getUserItemsData(username, category);
}

// Return list of item objects in a user's bookmarks
export function getBookmarks(username) {
    const bookmarks_keys = getData(username, "bookmarks");
    let bookmarks_data = [];
    
    for (let i = 0; i < bookmarks_keys.length; i++) {
	const key = bookmarks_keys[i].key;
	const data = getValueWithKey(key);

	if (data.title != "Error") bookmarks_data.push({title: data.title, description: data.description, key: key});
    }

    return bookmarks_data;
}

// Update user data
export function updateData(username, category, index, replacement) {
    updateUserItemsData(username, category, index, replacement);
}

// Delete item
export function deleteItem(username, category, index) {
    updateUserItemsData(username, category, index, {title: null, description: null});
}

// Create new item
export function createItem(username, category) {
    writeUserItemsData(username, category, "", "");
}

// Create new bookmark
export function createBookmark(username, from_user, from_category, from_index) {
    const key = getUserItemsKey(from_user, from_category, from_index);
    addBookmark(username, key);
}

// Returns key of item
export function getItemKey(username, category, index) {
    return getUserItemsKey(username, category, index);
}

// Return an array of category names
export function getCategories() {
    return getListOfCategories();
}
