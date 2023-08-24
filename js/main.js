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
                    main.js                  
                    by zertybee_5                       */
/* FILE INFORMATION */
/* Name: main.js */
/* Author: zertybee_5 */
/* Created (DD-MM-YYYY @ HH:MM): 08-07-2023 @ 18:48CEST */
/* Updated (DD-MM-YYYY @ HH:MM): 09-07-2023 @ 22:39CEST */
/* Use: This is the main file JavaScript , which is loaded onto all pages in the site. It contains all necessary stuff. */


/* PRINT WELCOME MESSAGE */
const bloxcoMsgb64 = "IF8gICAgICBfICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKfCB8ICAgIHwgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKfCB8X18gIHwgfCAgX19fICBfXyAgX18gIF9fXyAgIF9fXyAgICAgICBfX18gICBfIF9fICAgX18gXyAKfCAnXyBcIHwgfCAvIF8gXCBcIFwvIC8gLyBfX3wgLyBfIFwgICAgIC8gXyBcIHwgJ19ffCAvIF9gIHwKfCB8XykgfHwgfHwgKF8pIHwgPiAgPCB8IChfXyB8IChfKSB8IF8gfCAoXykgfHwgfCAgIHwgKF98IHwKfF8uX18vIHxffCBcX19fLyAvXy9cX1wgXF9fX3wgXF9fXy8gKF8pIFxfX18vIHxffCAgICBcX18sIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX18vIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8X19fLyAKICAgICAgICAgICAgICAgICAgICBibG94Y28ub3JnICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICBERVZFTE9QRVIgQ09OU09MRSAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgIGJ5IHplcnR5YmVlXzUgICAgICAgICAgICAgICAgICAgICAgIA=="

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
                    DEVELOPER CONSOLE                  
                    by zertybee_5                       
*/

console.log(atob(bloxcoMsgb64) + "\n-------------\nWelcome to bloxco.org! Looking for bugs? Thanks! Please report all found bugs to zertybee on Discord.")


/* UPDATE FOOTER AUTOMATICALLY ON PAGE LOAD */
document.addEventListener('DOMContentLoaded', function() {
  const footer = document.getElementById('ftr');
  
  const year = new Date().getFullYear();
  const ftrContent = `
<p>
  
</p>    <div class="container">
      <div class="row">
        <h4>Contact</h4>
        <p>Discord: <a href="https://discord.gg/bloxcosupermarket" target="_blank">/discord</a><br/>
        Roblox: <a href="https://www.roblox.com/groups/6235775/Bloxco-Supermarket" target="_blank">roblox.com/groups/6235775/</a></p>
      </div>
      <hr>
      <p>&copy; ${year} Bloxco Supermarket. All rights reserved.</p>
      <span class="disclaimer">This site was made by zertybee_5</span>
    </div>
  `;

  footer.innerHTML = ftrContent;
});

/* UPDATE NAVBAR AUTOMATICALLY ON PAGE LOAD */
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('navbar');
    
    const navContent = `
<div class="container-fluid">
    <!-- logo start -->
    <a class="navbar-brand" href="/">
        <img style="height:100px;width:150px;" src="https://media.discordapp.net/attachments/742012486726975518/1128303079914229891/bloxcologo.png" draggable="false" alt="Logo">
    </a>
    <!-- logo end -->
    
    <!-- phone only: navbar toggler burger menu start -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <!-- phone only: navbar toggler burger menu end -->
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/ranks">Rank Purchase</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Partnerships
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/partners">Our Partners</a></li>
                    <li><a class="dropdown-item" href="/partner-req">Partnership Requirements</a></li>
                </ul>
            </li>
            <!-- ADD OTHER LINKS ABOVE -->
        </ul>
        <ul class="navbar-nav">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Important Links
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="https://www.roblox.com/games/9901611189/Bloxco-Supermarket" target="_blank"><strong>Play</strong> the Game</a></li>
                    <li><a class="dropdown-item" href="https://www.roblox.com/groups/6235775/Bloxco-Supermarket#!/about" target="_blank"><strong>Join</strong> our Group</a></li>
                    <li><a class="dropdown-item" href="http://www.google.com/url?q=http%3A%2F%2Fdiscord.gg%2FbPQMeZA4PW&sa=D&sntz=1&usg=AOvVaw37-CqJKaqRmebJ85BslNR5" target="_blank"><strong>Discord Server</strong></a></li>
                    <li><a class="dropdown-item" href="https://www.google.com/url?q=https%3A%2F%2Fwww.tiktok.com%2F%40bloxcosocials&sa=D&sntz=1&usg=AOvVaw3UkVZebmGMHrey-aJnuPT8" target="_blank">TikTok</a></li>
                    <li><a class="dropdown-item" href="https://www.google.com/url?q=https%3A%2F%2Finstagram.com%2Fbloxco_socials%3Figshid%3DYmMyMTA2M2Y%3D&sa=D&sntz=1&usg=AOvVaw24aap0fvGWbeUwKKhDGaJv" target="_blank">Instagram</a></li>
                    <li><a class="dropdown-item" href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2FBloxcoSocials&sa=D&sntz=1&usg=AOvVaw2m7nE1lR4qeN_NRLM472uc" target="_blank">Twitter</a></li>
                    <li><a class="dropdown-item" href="https://www.youtube.com/channel/UCo1tVFeDsp7BUd8kNhbgMnQ" target="_blank">YouTube</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
    `; /* e */
  
    nav.innerHTML = navContent;
  });

/* LINK FUNCTION, OPEN A PLATFORM LINK BY USING THE PROVIDED PARAMETERS */
function link(platform, linktype, extension, extension2, extension3) {
  let url = "https://bloxco.org/error.html?c=F001"

  if (platform == 'rblx') { /* if platform is roblox */
   if (linktype == 'gamepass') {
       url = "https://www.roblox.com/game-pass/" + extension
    }
    if (linktype == 'group') {
     url = "https://www.roblox.com/groups/"+extension+"/name#!/about"
    }
  }

  if (platform == 'discord') {
    if (linktype == 'invite') {
      url = "https://discord.gg/" + extension
    }
    if (linktype == 'message') {
      url = "https://discord.com/channels/" + extension + "/" + extension2 + "/" + extension3
    }
  }

  window.open(url,'_blank');
}

