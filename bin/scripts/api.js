// Grab the items that we will need from electron
const remote = require('electron').remote

$(function() {
    $(".login-frame").show();
   


        document.getElementById("close-btn").addEventListener("click", function (e) 
        {
            var window = remote.getCurrentWindow();
            window.close();
        }); 

        document.getElementById("min-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.minimize(); 
        });
        
        document.getElementById("max-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          if (!window.isMaximized()) {
            window.maximize();
          } else {
            window.unmaximize();
          }	 
        });
});

