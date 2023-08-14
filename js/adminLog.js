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
/* Updated (DD-MM-YYYY @ HH:MM): 14-08-2023 @ UNDEFINED:UNDEFINED CEST */
/* Use: Provides information about the command used, and the user who used it. */
/* Notes: Script only used on adminlog.html */

const preTxt = "adminLog.js:"
const urlParams = new URLSearchParams(window.location.search);
const usernamePrm = urlParams.get('name');
const useridPrm = urlParams.get('id');
const cmdPrm = urlParams.get('cmd');
const authPrm = urlParams.get('auth')
const rankPrm = urlParams.get('rank')
const timePrm = urlParams.get('time')
const placePrm = urlParams.get('place')
console.log(preTxt+"Parameters successfully loaded!\nUsername:"+usernamePrm+"\nUserID:"+useridPrm+"\nauthPrm:"+authPrm+"\nrankPrm:"+rankPrm+"\ntimePrm:"+timePrm+"\nplacePrm:"+placePrm+"\n")
const usernameElement = document.getElementById('username');
const cmdElement = document.getElementById('cmd');
const rankElement = document.getElementById('rank');
const timeElement = document.getElementById('time');
const placeElement = document.getElementById('place');
const pfpElement = document.getElementById('pfp');
const hyrabtn = document.getElementById('hyrabtn');
const robloxbtn = document.getElementById('robloxbtn');

function displayInfo(username, userid, command, rank, time, place) {
  usernameElement.textContent = username;
  cmdElement.textContent = command;
  rankElement.textContent = rank;
  hyrabtn.textContent = `View ${username}'s Hyra Profile`;
  robloxbtn.textContent = `View ${username}'s Roblox Profile`;
  const date = new Date(time * 1000);
  timeElement.textContent = date.toLocaleString();
  placeElement.textContent = place;
  pfpElement.src = `https://bloxtech.tech/admin/api/userthumb.php?userId=${userid}&width=75&height=75&format=png`;
  console.log(preTxt+"displayInfo ran successfully. Page loaded.")
}

if (!authPrm) {
  sectionElement.textContent = "You cannot view this page.";
  console.warn(preTxt+"User has no permission to view the page.")
} else {
  console.log(preTxt+"Loading page by displayInfo()..")
  displayInfo(usernamePrm, useridPrm, cmdPrm, rankPrm, timePrm, placePrm);
}

function btn(platform) {
  if (platform === 'Hyra') {
    window.open(`https://app.hyra.io/6338747abe283e70e7d5b28b/staff/profile/${useridPrm}`, '_blank');
    console.log(preTxt+"Hyra button clicked. User opened url:"+`https://app.hyra.io/6338747abe283e70e7d5b28b/staff/profile/${useridPrm}`)
  } else if (platform === 'Rblx') {
    window.open(`https://www.roblox.com/users/${useridPrm}/profile`, '_blank');
    console.log(preTxt+"Roblox button clicked. User opened url:"+`https://www.roblox.com/users/${useridPrm}/profile`)
  }
}
