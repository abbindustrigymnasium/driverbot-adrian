#include <Arduino.h>
#include <Servo.h>


void setup_wifi();
void reconnect(String topic);
void setupMQTT();
void loopMQTT();
extern Servo servo;