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
                    errorHandler.js                  
                    by zertybee_5                       */
/* FILE INFORMATION */
/* Name: errorHandler.js */
/* Author: zertybee_5 */
/* Created (DD-MM-YYYY @ HH:MM): 09-07-2023 @ 19:20CEST */
/* Updated (DD-MM-YYYY @ HH:MM): N/A */
/* Use: Used to load the error page, display the error code. */

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('c');
const infoElement = document.getElementById('information');
const codeElement = document.getElementById('code');

console.warn("Error code: "+code)

function displayError(code, info) {
    if (!info) {
        infoElement.textContent = "";
    } else {
        infoElement.textContent = info;
    }

    codeElement.textContent = code;
}



if (code == 404) { /*404*/
    displayError(404,'That means the page you wanted to load doesn\'t exist.')
} 

if (code == "F001") {
    displayError('f001','Function "robloxlink(linktype, id)" failed. ID not provided.')
}

if (code === 'custom') {
    const customCode = urlParams.get('customcode');
    const customInfo = urlParams.get('info');
    if (!customInfo) {
        displayError(customCode);
    }
    else {
        displayError(customCode, customInfo);
    }

}