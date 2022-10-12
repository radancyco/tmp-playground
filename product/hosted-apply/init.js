/*!

  Radancy: Hosted Apply Model

  Contributor(s):
  Michael "Spell" Spellacy, Email: michael.spellacy@radancy.com, Twitter: @spellacy, GitHub: michaelspellacy
  Dependencies: None

*/

(function() {

  // Basic Functionality for form

  let hostedApplyProgress = document.querySelectorAll(".hosted-apply__page");
  let hostedApplySections = document.querySelectorAll(".hosted-apply__section");

  hostedApplyProgress.forEach(function(button) {

    button.addEventListener("click", function (e) {

      // Get matching data attributes

      let thisButtonId = document.querySelectorAll("[data-button-id=" + button.dataset.buttonId + "]");

      hostedApplyProgress.forEach(function(button) {

        // Set all aria-expanded to false, where found.

        if(button.hasAttribute("aria-expanded")) {

          button.setAttribute("aria-expanded", "false");

        } else {

          // Remove aria-current, where found.

          button.removeAttribute("aria-current");

        }

      });

      thisButtonId.forEach(function(button) {

        if(button.hasAttribute("aria-expanded")) {

          button.setAttribute("aria-expanded", "true");

        } else {

          button.setAttribute("aria-current", "page");

        }

      });

      hostedApplySections.forEach(function(section) {

        // Remove active state from all sections.

        section.classList.remove("active");

      });

    //  if(button.hasAttribute("aria-expanded")) {

        //button.setAttribute("aria-expanded", "false");

    //  } else {

        // Get section based on href of link

        let buttonID = document.getElementById(button.dataset.buttonId);

        let sectionTarget = buttonID;

        // Apply

        sectionTarget.classList.add("active");
        sectionTarget.setAttribute("tabindex", "-1");
        sectionTarget.focus({

          preventScroll: true

        });

  //    }

      e.preventDefault();

    });

  });

  // Dialog

  // Using native here for demo. Research needed to see how accessible it is now.

  let dialog = document.getElementById("confirmation-remove");

  // Show the dialog when clicking "Delete everything"

  document.getElementById("delete-work-experience").addEventListener("click", function() {

    dialog.showModal();

  });

  document.getElementById("cancel-remove").addEventListener("click", function() {

    dialog.close();

  });

  document.getElementById("confirm-remove").addEventListener("click", function() {

    dialog.close();

  });

  // Announce that application is completed after ajx change.

  let appMsg = document.getElementById("application-msg");

  appMsg.setAttribute("tabindex", "-1");
  appMsg.focus();

})();
