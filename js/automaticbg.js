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
                    automaticbg.js                  
                    by zertybee_5                       */
/* FILE INFORMATION */
/* Name: automaticbg.js */
/* Author: zertybee_5 */
/* Created (DD-MM-YYYY @ HH:MM): 08-07-2023 @ 18:48CEST */
/* Updated (DD-MM-YYYY @ HH:MM): 08-07-2023 @ 18:48CEST */
/* Use: Automatically sets background of the profile pictures in the card to a random selected color. All colors are chosen atleast once if possible. */


//hyra colors
const colors = ['blue', 'purple', 'yellow', 'cyan', 'pink', 'green', 'orange'];

 // find all images with the shrprofilepic id
 const images = [...document.querySelectorAll('img[id="shrProfilePic"]')];

//shufle the array using the shufflearray function below
const shuffledColors = shuffleArray(colors);

let colorIndex = 0;
let previousColor = null;

images.forEach(image => {
  let selectedColor = shuffledColors[colorIndex % shuffledColors.length];

  if (previousColor === selectedColor) {
    // make it so two colors cant be next to eachother
    const availableColors = shuffledColors.filter(c => c !== previousColor && c !== shuffledColors[(colorIndex + 1) % shuffledColors.length]);
    selectedColor = availableColors[Math.floor(Math.random() * availableColors.length)];
  }

 // add class
  image.classList.add(`bgh-${selectedColor}`);
  previousColor = selectedColor;
  colorIndex++;
});

// shuffle array
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
