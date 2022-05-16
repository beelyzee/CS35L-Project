import * as React from "react";

var usernames = [];
var profileData = [];
var categories = ["TV Shows", "Movies", "Songs"];

// Return associated data to the username in profileData, or -1 if username is not found
export default function getData(username) {
    for (let i = 0; i < usernames.length; i++)
	if (usernames[i] === username) return profileData[i];

    return -1; // error
}

// Return category
export function getCategory(index) {
    return categories[index];
}

// Items is 2D array where each row are the recommendations for the corresponding category
export function setData(username, items) {
    usernames.push(username);
    profileData.push(items);
}

setData("example-user", [ ["tv-1", "tv-2"], ["movie-1", "movie-2", "movie-3"], ["song-1"] ]);
