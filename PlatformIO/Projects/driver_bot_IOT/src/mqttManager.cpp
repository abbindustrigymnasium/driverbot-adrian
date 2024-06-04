// libraries and scripts
#include <credentials.h>
#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <Servo.h>

Servo servo;

const char* mqtt_url = "maqiatto.com";
//includes all topics that needs to be subscribed to
String topics[] = {"key_up", "key_down", "joy_stick"};
//Size of topics array
const int topicSize = sizeof(topics) / sizeof(topics[0]);

WiFiClient espClient;
PubSubClient client(espClient);
unsigned long lastMsg = 0;
#define MSG_BUFFER_SIZE	(50)
char msg[MSG_BUFFER_SIZE];

void setup_wifi() {

  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(WIFI_SSID);

  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASS);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  //set seet for random
  randomSeed(micros());

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}
//funciton that runs on callback
void callback(char* topic, byte* payload, unsigned int length) {
  String msg = "";
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
    msg += (char)payload[i];
  }
  Serial.println();
  Serial.println(msg);
  //Takes the topic and only uses the topic name istead of whole path
  String cutTopic;
  cutTopic = strtok(topic, "/");
  cutTopic = strtok(NULL, "/");
  Serial.println(cutTopic);

  if (cutTopic == "key_down")
  {
    if (msg == "w")
    {
      Serial.println("Forward!");
      analogWrite(motorSpeedPin, 255);
      digitalWrite(motorDirPin, HIGH);
    }
    else if (msg == "s")
    {
      Serial.println("Backwards!");
      analogWrite(motorSpeedPin, 255);
      digitalWrite(motorDirPin, LOW);
    }
    else if (msg == "a")
    {
      servo.write(90);
      Serial.println("Left");
      servo.write(45);
    }
    else if (msg == "d")
    {
      servo.write(90);
      Serial.println("Right");
      servo.write(135);
    }

  }
  if (cutTopic == "key_up")
  {
   if (msg == "w" || msg == "s")
   {
    analogWrite(motorSpeedPin, 0);
   }
   else if (msg == "a" || msg == "d")
   {
    servo.write(90);
    Serial.println("Angle: " + servo.read());
   }
  }
  if (cutTopic == "joy_stick")
  {
    if (msg == "C")
    {
      servo.write(90);
      analogWrite(motorSpeedPin, 0);
    }
    else if (msg == "N")
    {
      servo.write(90);
      digitalWrite(motorDirPin, HIGH);
      analogWrite(motorSpeedPin, 255);
    }
    else if (msg == "S")
    {
      servo.write(90);
      digitalWrite(motorDirPin, LOW);
      analogWrite(motorSpeedPin, 255);
    }
    else if (msg == "E" || msg == "NE")
    {
      servo.write(135);
      digitalWrite(motorDirPin, HIGH);
      analogWrite(motorSpeedPin, 255);
    }
    else if (msg == "W" || msg == "NW")
    {
      servo.write(45);
      digitalWrite(motorDirPin, HIGH);
      analogWrite(motorSpeedPin, 255);
    }
    else if (msg == "SE")
    {
      servo.write(135);
      digitalWrite(motorDirPin, LOW);
      analogWrite(motorSpeedPin, 255);
    }
    else if (msg == "SW")
    {
      servo.write(45);
      digitalWrite(motorDirPin, LOW);
      analogWrite(motorSpeedPin, 255);
    }
    
  }
}
//conects to all designated topics
void reconnect( String arr[], int size) {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Create a random client ID
    String clientId = "ESPClient_";
    clientId += String(random(0xffff), HEX);
    // Attempt to connect
    if (client.connect(clientId.c_str(), MQTT_USER, MQTT_PASS)) {
      Serial.println("connected");
      for (int i=0; i< size; i++)
      {
        // ... and resubscribe
        String fullTopic = MQTT_USER + String("/") + topics[i];
      Serial.println("topic: " + fullTopic);
      client.subscribe(fullTopic.c_str());
      }
      
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

void setupMQTT()
{
    client.setServer(mqtt_url, 1883);
    client.setCallback(callback);
}
void loopMQTT()
{
    if (!client.connected()) {
    reconnect(topics, topicSize);
  }
  client.loop();

}