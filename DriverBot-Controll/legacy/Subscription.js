document.addEventListener("DOMContentLoaded", function() {
    console.log(document.getElementById("heh").value);
    rt= document.getElementById("port").value
    port = document.getElementById("port").value;
    host = document.getElementById("host").value;
    topic = document.getElementById("topic").value;



    function startConnect()
    {
        clientID = "Client-" + parseInt(Math.random() * 100);

        host = document.getElementById("host").value;
        port = document.getElementById("port").value;

        document.getElementById("message-log").innerHTML += '<span>Connecting to: ' + host + ' on port: ' + port + '</span><br/>';
        document.getElementById("message-log").innerHTML += '<span>Using the following client value: ' + clientID + '</span><br/>';
        client = new Paho.MQTT.Client(host, Number(port), clientID);

        client.onConnectionLost = onConnectionLost;
        client.onMessageArrived = onMessageArrived;

        client.connect({
        onSuccess: onConnect//,
            //onFailure: document.getElementById("message-log").innerHTML += '<span>ERROR: Connection to: ' + host + ' on port:' + port + ' failed.</span><br/>' 
        })
    }

    function onConnect()
    {
        topic = document.getElementById("topic").value;
    }


    function onConnectionLost(responseObject) {
        document.getElementById("messages").innerHTML += '<span>ERROR: Connection lost</span><br/>';
        if (responseObject.errorCode !== 0) {
            document.getElementById("messages").innerHTML += '<span>ERROR: ' + + responseObject.errorMessage + '</span><br/>';
        }
    }
    function onMessageArrived(message) 
    {
        document.getElementById("messages").innerHTML += '<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>';
    }
    function startDisconnect()
    {
        client.Disconnect();
        document.getElementById("messages").innerHTML += '<span>Disconnected</span><br/>';
        updateScroll();

    }
});