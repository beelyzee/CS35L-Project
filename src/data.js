import * as React from "react";
import { getUserItemsData } from "./firebase-config.js";
import { getCategories as getListOfCategories } from "./firebase-config.js";
import { updateUserItemsData } from "./firebase-config.js";
import { writeUserItemsData } from "./firebase-config.js";

var usernames = [];
var profileData = [];
var categories = ["TV Shows", "Movies", "Songs"];

// Return associated data to the username in profileData, or -1 if username is not found
export default function getData(username, category) {
    return getUserItemsData(username, category);
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

// Return an array of category names
export function getCategories() {
    return getListOfCategories();
}

// Return top ten (or less) ranked items in the category indicated by index
export function getTop10(index) {
    return profileData[0][index];
}

// Items is 2D array where each row are the recommendations for the corresponding category
export function setData(username, items) {
    usernames.push(username);
    profileData.push(items);
}

setData("example-user", [ ["tv-1", "tv-2"], ["movie-1", "movie-2", "movie-3"], ["song-1"] ]);
