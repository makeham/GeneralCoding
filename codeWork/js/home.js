      //change copycont view pane to be scrollable when screen size causes overflow and is resized
      window.addEventListener('resize', function () {
          var myWindowHeight = window.innerHeight;
          var copyCont = document.getElementById("copyCont");
          var copyHeight = document.getElementById("copyCont").scrollHeight;
          if (copyHeight > myWindowHeight) {
              copyCont.style.backgroundColor = "#ccc";
              copyCont.style.overflowY = "scroll";
              copyCont.style.margin = "0";
          } else {
              copyCont.style.backgroundColor = "inherit";
              copyCont.style.overflowY = "hidden";
              copyCont.style.margin = "20px";
          }
      });

      //change copycont view pane to be scrollable (as above) when loaded on a small device
      window.onload = function () {
          var myWindowHeight = window.innerHeight;
          var copyCont = document.getElementById("copyCont");
          var copyHeight = document.getElementById("copyCont").scrollHeight;
          if (copyHeight > myWindowHeight) {
              copyCont.style.backgroundColor = "#ccc";
              copyCont.style.overflowY = "scroll";
              copyCont.style.margin = "0";
          } else {
              copyCont.style.backgroundColor = "inherit";
              copyCont.style.overflowY = "hidden";
              copyCont.style.margin = "20px";
          }
      };

//addEventListner and onload functions can be combined in jQuery and written as follows
//$(window).on('load resize' function(){}):