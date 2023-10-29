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
/* Updated (DD-MM-YYYY @ HH:MM): 09-09-2023 @ 18:13CEST */
/* Use: This is the main file JavaScript, which is loaded onto all pages in the site. It contains all the necessary stuff. */

const siteVersion = "OCT26-2023_1"

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


/* ALERTS MODULE */
document.addEventListener('DOMContentLoaded', function() {
  const alertcontainer = document.getElementById('alert-container');
  
  const alerts = `
 <!-- <div class="alert alert-blurple" style="display: block !important;">
  <strong>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><style>svg{fill:#ffffff}</style><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>
    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><!--
    Join us</strong>:
  Join Bloxco Supermarket's amazing community on 
    <a href="http://www.google.com/url?q=http%3A%2F%2Fdiscord.gg%2FbPQMeZA4PW&sa=D&sntz=1&usg=AOvVaw37-CqJKaqRmebJ85BslNR5">Discord</a>, 
  and make new friends!
</div> -->

<div class="alert alert-blurple" style="display: block !important;">
<strong>
  <img src="https://cdn.discordapp.com/emojis/1152674422952566875.webp?size=96&quality=lossless" style="max-height: 25px;"/>
  HROTM</strong>:
Votes for High Rank of The Month of October 2023 are out! 
  <a href="http://www.google.com/url?q=http%3A%2F%2Fdiscord.gg%2FbPQMeZA4PW&sa=D&sntz=1&usg=AOvVaw37-CqJKaqRmebJ85BslNR5">Join our Discord server</a>, 
and vote using /hrotm! You have <strong><span id="hrotmcountdown">loading time...</span></strong> remaining.
</div>

<div class="alert alert-halloween" style="display: block !important;">
<strong>
<img src="https://img.icons8.com/?size=256&id=17358&format=png" style="max-height: 25px;"/>
  Last chance</strong>:
Find all the pumpkins in the <a href="https://www.roblox.com/games/9901611189/Bloxco-Supermarket">game</a>, and get a limited time badge! You have <strong><span id="halloweencountdown">loading time..</span></strong> remaining.
</div>
<!-- NO ACTIVE ALERTS -->
  
  `;

  alertcontainer.innerHTML = alerts;
});



/* UPDATE FOOTER AUTOMATICALLY ON PAGE LOAD */
document.addEventListener('DOMContentLoaded', function() {
  const footer = document.getElementById('ftr');
  
  const year = new Date().getFullYear();
  const ftrContent = `
    <br/>
    <div class="container dark-mode">
      <div class="row">
        <h4>Contact</h4>
        <p>Discord: <a href="https://discord.gg/bloxcosupermarket" target="_blank">discord.gg/bloxcosupermarket</a><br/>
        Roblox: <a href="https://www.roblox.com/groups/6235775/Bloxco-Supermarket" target="_blank">roblox.com/groups/6235775/</a></p>
      </div>
      <hr>
      <p>&copy; ${year} Bloxco Supermarket. All rights reserved.</p>
      <span class="disclaimer">This site was made by zertybee_5</span>
      <p class="fs-6 text-start fw-lighter">Site version: ${siteVersion}</p>
    </div>
  `;

  footer.innerHTML = ftrContent;
});

/* UPDATE NAVBAR AUTOMATICALLY ON PAGE LOAD */
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('navbar');
    const hostname = window.location.hostname;
    
    const navContent = `
    <!-- logo start -->
    <img class="navbar-brand" style="height:100px;width:150px;"
      src="https://media.discordapp.net/attachments/742012486726975518/1128303079914229891/bloxcologo.png" draggable="false">
    <!-- logo end -->
    <!-- phone only: navbar toggler burger menu start -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="filter: invert(0.5);">
      <span class="navbar-toggler-icon" style="filter: invert(0.5);"></span>
      <!-- phone only: navbar toggler burger menu end -->
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/ranks">Rank Purchase</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/partners">Partners</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/partner-req">Partnership Requirements</a>
        </li>
        <li class="nav-item dropdown important-links">
          <a class="nav-link dropdown-toggle" style="color:#e4e4e4;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Important Links
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item " href="https://www.roblox.com/games/9901611189/Bloxco-Supermarket" target="_blank"><strong>Play</strong> the Game</a></li>
            <li><a class="dropdown-item" href="https://www.roblox.com/groups/6235775/Bloxco-Supermarket#!/about" target="_blank"><strong>Join</strong> our Group</a></li>
            <li><a class="dropdown-item" href="http://www.google.com/url?q=http%3A%2F%2Fdiscord.gg%2FbPQMeZA4PW&sa=D&sntz=1&usg=AOvVaw37-CqJKaqRmebJ85BslNR5" target="_blank"><strong>Discord Server</strong></a></li>
            <li><a class="dropdown-item" href="https://www.google.com/url?q=https%3A%2F%2Fwww.tiktok.com%2F%40bloxcosocials&sa=D&sntz=1&usg=AOvVaw3UkVZebmGMHrey-aJnuPT8" target="_blank">TikTok</a></li>
            <li><a class="dropdown-item" href="https://www.google.com/url?q=https%3A%2F%2Finstagram.com%2Fbloxco_socials%3Figshid%3DYmMyMTA2M2Y%3D&sa=D&sntz=1&usg=AOvVaw24aap0fvGWbeUwKKhDGaJv" target="_blank">Instagram</a></li>
            <li><a class="dropdown-item" href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2FBloxcoSocials&sa=D&sntz=1&usg=AOvVaw2m7nE1lR4qeN_NRLM472uc" target="_blank">Twitter</a></li>
            <li><a class="dropdown-item" href="https://www.youtube.com/channel/UCo1tVFeDsp7BUd8kNhbgMnQ" target="_blank">YouTube</a></li>
            <li><a class="dropdown-item" href="/events" target="_blank">Event Calendar</a></li>
          </ul>
        </li>
      </ul>
    </div>
    
    
    ${hostname === 'dev.bloxco.org' ? `
    <div class="alert alert-danger" role="alert">
      This site is for development purposes. Bugs on this site shall not be reported, as they are known. Please use bloxco.org for a stable site version. Thanks!
    </div>` : ''}
    `;
  
    nav.innerHTML = navContent;
});

/* LINK FUNCTION, OPEN A PLATFORM LINK BY USING THE PROVIDED PARAMETERS */

function link(platform, linktype, extension, extension2, extension3) {
  let url = "https://bloxco.org/error.html?c=F001"

  if (platform == 'rblx') {
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

const maintenance = false

if (maintenance) {
  document.getElementById('s1').innerHTML = `
      <br/>
      <div style="margin-left:100px;">
              <h2>🔨Whoops! We're having <span class="text-danger">issues</span>😓</h2>
                <p>We're currently experiencing technical difficulties, and have put our website in Maintenance mode. We're sorry.<br/>
               For now, you're more than welcome to
               <div>
                <a href="https://www.roblox.com/games/9901611189/Bloxco-Supermarket" class="btn btn-primary text-light" style="color: white !important;">Play our Game</a>
                or
                <a href="https://discord.gg/bloxcosupermarket" class="btn btn-secondary text-white" style="color: white !important;">Join our Discord Server</a>
              </p>
  `

  if (document.getElementById('s2')) {
    document.getElementById('s2').innerHTML = ""
  }
  if (document.getElementById('s3')) {
    document.getElementById('s3').innerHTML = ""
  }
  if (document.getElementById('s4')) {
    document.getElementById('s4').innerHTML = ""
  }

}

const urlParams = new URLSearchParams(window.location.search);
const spiderprm = urlParams.get('version');

if (spiderprm) {
  if (spiderprm == 'new') {
  console.warn('spidey')
  }


  document.getElementById('s1').innerHTML = `
  <br/>
  <img src="https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-03/HGIC_spiders_wolfspider_16x9.jpg?itok=FpCjS4Qz"/>
`

if (document.getElementById('s2')) {
document.getElementById('s2').innerHTML = `
<br/>
<img src="https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-03/HGIC_spiders_wolfspider_16x9.jpg?itok=FpCjS4Qz"/>
`
}
if (document.getElementById('s3')) {
document.getElementById('s3').innerHTML = `
<br/>
<img src="https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-03/HGIC_spiders_wolfspider_16x9.jpg?itok=FpCjS4Qz"/>
`
}
if (document.getElementById('s4')) {
document.getElementById('s4').innerHTML = `
<br/>
<img src="https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-03/HGIC_spiders_wolfspider_16x9.jpg?itok=FpCjS4Qz"/>
`
}

}


setTimeout(function(){
   window.location.reload();
}, 500);
