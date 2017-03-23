// Grab the items that we will need from electron
const remote = require('electron').remote
const WebSocket = require('ws');
var ws = null;

$(function() {
    $(".login-frame").show();
   
    $("#login-button").click(function()
    {
        var ip = $("#login-address").val();
        var port = $("#login-port").val();
        var username = $("#login-username").val();

        ws = new WebSocket('ws://'+ip+':'+port+'');

        $(".main-loader").hide().velocity("fadeIn", { duration: 150 });

        ws.on("error", function() 
        {
            remote.dialog.showErrorBox("Server Connection Failed", "Could not connect to the server at: " + ip + ":" +  port);
            $(".main-loader").velocity("fadeOut", { duration: 150 });
        });


        ws.on("open", function open() 
        {
            // After we have opened the server we need to perform some validation logic.
            // In the future we might see how to incoperate protobuf into this.

                        $(".main-loader").velocity("fadeOut", { duration: 150 });


            ws.send('proto-version:0.0.1');

            ws.on("message", function incoming(data)
            {
                console.log(data);

                if (data.split(":")[0] == "proto-version")
                {
                    var version = data.split(":")[1];

                    if (version != "0.0.1")
                    {
                        console.log("no");
                        remote.dialog.showErrorBox("Server Connection Failed", "Server is using a differnt version of the protocol: Client-0.0.1 Server-" + version);
                    }
                }
            })

        });
    });

    SetupTitlebarHandles();
  
});



function SetupTitlebarHandles()
{
    document.getElementById("close-btn").addEventListener("click", function (e) 
    {
        var window = remote.getCurrentWindow();
        window.close();
    }); 

    document.getElementById("min-btn").addEventListener("click", function (e) 
    {
        const window = remote.getCurrentWindow();
        window.minimize(); 
    });
        
    document.getElementById("max-btn").addEventListener("click", function (e) 
    {
        const window = remote.getCurrentWindow();

        if (!window.isMaximized()) 
        {
            window.maximize();
        } 
        else 
        {
            window.unmaximize();
        } 
    });
}