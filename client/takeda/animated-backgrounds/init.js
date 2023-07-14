/*!

  Radancy: Animation Control (AC)

  Contributor(s):
  Michael "Spell" Spellacy, Email: michael.spellacy@radancy.com, Twitter: @spellacy, GitHub: michaelspellacy
  Dependencies: None

  Note(s): 
  1. Script utilizes prefers-reduced-motion in addition to the pause button. When user disables animation in their operating system, 
  these videos will not autoplay.
  2. Cookie set or removed when pause button toggled to remember the desired setting on return visits across entire site where AC used.
  3. Video may not play if mobile device is in low-power mode. This is for a good reason—so video does not drain the battery life.

*/

(function() {

  "use strict";

  var $acClass = ".ac";
  var $acMediaClass = ".ac__video";
  var $acButtonClassName = "ac__button"
  var $acButtonLabel = "Pause Animation";

  // Check Cookie. If set to true, pause video.

  function getCookie(name) {

    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)')); 
    return match ? match[1] : null;
  
  }

  var animationPaused = getCookie("AnimationPaused");

  // Animation Controls

  var animationControls = document.querySelectorAll($acClass);

  // Background Videos

  var backgroundVideos = document.querySelectorAll($acMediaClass);

  animationControls.forEach(function(control){

    // Create Pause Button

    var btnPlayPause = document.createElement("button");
    btnPlayPause.setAttribute("aria-label", $acButtonLabel);
    btnPlayPause.classList.add($acButtonClassName);

    // Set attribute depending on OS user settings in OS...

    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {

       // ... and has not paused video(s).

      if(animationPaused !== null) {

        btnPlayPause.setAttribute("aria-pressed", "true");

      } else {

        btnPlayPause.setAttribute("aria-pressed", "false");

      }

    } else {

      btnPlayPause.setAttribute("aria-pressed", "true");

    }
    
    // Append Pause Button
    
    control.prepend(btnPlayPause);

    // Pause Button Toggle Event

    btnPlayPause.addEventListener("click", function() {

      var animationToggles = document.querySelectorAll("." + $acButtonClassName);

      if (this.getAttribute("aria-pressed") === "false") {

        // Get all pause buttons on page and set them to true. 

        animationToggles.forEach(function(button){

          button.setAttribute("aria-pressed", "true");

        });

        // Set cookie and pause video(s).

        backgroundVideos.forEach(function(video) {

          video.pause();
          document.cookie = "AnimationPaused=true; path=/";

        });

      } else {

        // Get all pause buttons on page and set them to true. 

        animationToggles.forEach(function(button){

          button.setAttribute("aria-pressed", "false");
        
        });

        // Remove cookie and play video(s).

        backgroundVideos.forEach(function(video){

          document.cookie = "AnimationPaused=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          video.play();
  
        });

      }

    });

  });

  // Loop through all videos on page load.

  backgroundVideos.forEach(function(video){

    // Only play video(s) if user has not disabled animation in OS...

    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {

      // ...or has not paused video.

      if(animationPaused === null) {

        video.autoplay = true;

      }

    }

  });

})();