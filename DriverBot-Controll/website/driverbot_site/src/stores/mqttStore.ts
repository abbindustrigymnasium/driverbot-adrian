import { PUBLIC_MQTT_NAME, PUBLIC_MQTT_PASSWORD } from "$env/static/public";

import mqtt from "mqtt";
import { isConnected, timesConnected } from './store';
let connected = false;
let User = { adress: "maqiatto.com", port: "8883", clientId: "Client_Admin", name: PUBLIC_MQTT_NAME, password: PUBLIC_MQTT_PASSWORD, topic: "key_down" };
let clientId = "notyetAssigned";
let client: any = null; 
let options = {};

/**
 * Connects the MQTT client.
 * @returns {string} Returns an empty string if already connected.
 */
export function startConnect() {
  if (connected) {
    return "";
  }
  clientId = "Client_" + Math.floor(Math.random() * 100);
  const mqtt_url = User.adress;
  const url = "mqtt://" + mqtt_url;
  options = {
    port: User.port,
    clientId: clientId,
    username: User.name,
    password: User.password
  };
  client = mqtt.connect(url, options);
  client.on('message', onMessage);
  client
    .on("connect", function () {
      //updates times connected stat when connection succeds
      timesConnected?.update(value => value+=1);
      connected = client.connected;
      console.log(connected);
      console.log(clientId + " success");
      Connecting(true);
    })
    .on("error", function () {
      console.log("error");
      Connecting(false);
      console.log("Name: " + User.name + " Pass: " + User.password)
    })
    .on("close", function () {
      Connecting(false);
      console.log("closing");
    });
}

/**
 * Handles the incoming MQTT message.
 * @param {string} topic - The topic of the message.
 * @param {Buffer} message - The message payload.
 */
const onMessage = (topic: any, message: string) => {
  console.log(message.toString());
  const msg = message.toString();
  const time = new Date().getTime();
};

/**
 * Sets the connection status and sends a log message.
 * @param {boolean} c - The connection status.
 */
function Connecting(c: boolean) {
  isConnected.set(c);
  onSend("logger", clientId + " har anslutits.");
}

/**
 * Publishes a message to the MQTT broker.
 * @param {string} topic - The topic to publish to.
 * @param {string} message - The message to publish.
 */
export function onSend(topic: string, message: string) {
  console.log(User.name + "/" + topic + "/" + message);
  client.publish(
    User.name + "/" + topic,
    message
  );
  onMessage(topic, message);
}

/**
 * Handles the arrived MQTT message.
 * @param {Object} message - The arrived message object.
 * @returns {string} Returns the payload string of the message.
 */
export function onMessageArrived(message: any) {
  console.log("onMessageArrived: " + message.payloadString);
  return message.payloadString;
}