#include <Arduino.h>
#include <PubSubClient.h>
#include <credentials.h>
#include <mqttManager.h>
#include <Servo.h>


void setup()
{
    servo.attach(0);
    pinMode(motorDirPin, OUTPUT);
    pinMode(motorSpeedPin, OUTPUT);
    Serial.begin(115200);
    servo.write(90);
    delay(1000);
    servo.write(30);
    //Serial.setDebugOutput(true);
    setup_wifi();
    setupMQTT();
    
}
void loop()
{
    loopMQTT();
}