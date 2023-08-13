/*
_      _                                                  
| |    | |                                                 
| |__  | |  ___  __  __  ___   ___       ___   _ __   __ _ 
| '_ \ | | / _ \ \ \/ / / __| / _ \     / _ \ | '__| / _` |
| |_) || || (_) | >  < | (__ | (_) | _ | (_) || |   | (_| |
|_.__/ |_| \___/ /_/\_\ \___| \___/ (_) \___/ |_|    \__, |
                                                      __/ |
                                                     |___/ 
                    bloxco.org              
                    adminLog.js                  
                    by zertybee_5                       */
/* FILE INFORMATION */
/* Name: adminLog.js */
/* Author: zertybee_5 */
/* Created (DD-MM-YYYY @ HH:MM): 13-08-2023 @ 21:13CEST */
/* Updated (DD-MM-YYYY @ HH:MM): 08-07-2023 @ 18:48CEST */
/* Use: Provides information about the command used, and the user who used it. */
/* Notes: Script only used on adminlog.html */

const urlParams = new URLSearchParams(window.location.search);
const usernamePrm = urlParams.get('name');
const useridPrm = urlParams.get('id');
const cmdPrm = urlParams.get('cmd');
const authPrm = urlParams.get('auth')
const rankPrm = urlParams.get('rank')
const timePrm = urlParams.get('time')
const placePrm = urlParams.get('place')

const usernameElement = document.getElementById('username');
const cmdElement = document.getElementById('cmd');
const rankElement = document.getElementById('rank');
const timeElement = document.getElementById('time');
const placeElement = document.getElementById('place');
const sectionElement = document.getElementById('s1');

function displayInfo(username, userid, command, rank, time, place) {
    usernameElement.textContent = username;
    cmdElement.textContent = command;
    rankElement.textContent = rank;
    
    // Convert epoch time to human-readable format (assuming timePrm is in seconds)
    const date = new Date(time * 1000);
    timeElement.textContent = date.toLocaleString(); // Change format as needed
    
    placeElement.textContent = place;
}

if (!authPrm) {
  sectionElement.textContent = "You cannot view this page.";
} else {
    displayInfo(usernamePrm, useridPrm, cmdPrm, rankPrm, timePrm, placePrm);
}

function btn(platform) {
  const playerName = usernamePrm || 'USERNAME'; // Default to 'USERNAME' if not available
  if (platform === 'Hyra') {
    window.open(`https://app.hyra.io/6338747abe283e70e7d5b28b/staff/profile/${useridPrm}`, '_blank');
  } else if (platform === 'Rblx') {
    window.open(`https://www.roblox.com/users/${useridPrm}/profile`, '_blank');
  }
}
