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
const usernameElement = document.getElementById('username');
const cmdElement = document.getElementById('cmd');
const sectionElement = document.getElementById('s1');

function displayInfo(username, userid, command) {
    usernameElement.textContent = username;
    cmdElement.textContent = command;
    
}

if (!authPrm) {
  sectionElement.textContent = "You cannot view this page."
} else {
    displayInfo(usernamePrm, useridPrm, cmdPrm);
}

