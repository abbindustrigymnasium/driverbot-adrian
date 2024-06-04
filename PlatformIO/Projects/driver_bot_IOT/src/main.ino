#include <Arduino.h>
#include <PubSubClient.h>
#include <credentials.h>
#include <mqttManager.h>
#include <Servo.h>


void setup()
{
    //set up script
    servo.attach(2);
    pinMode(motorDirPin, OUTPUT);
    pinMode(motorSpeedPin, OUTPUT);
    Serial.begin(115200);
    servo.write(90);
    delay(1000);
    //Serial.setDebugOutput(true);
    setup_wifi();
    setupMQTT();
    
}
void loop()
{
    //run everything that needs looping
    loopMQTT();
}