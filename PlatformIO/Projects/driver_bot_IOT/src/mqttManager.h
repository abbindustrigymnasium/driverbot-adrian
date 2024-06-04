#include <Arduino.h>
#include <Servo.h>

//defines fucntions
void setup_wifi();
void reconnect(String topic);
void setupMQTT();
void loopMQTT();
//defines servo object
extern Servo servo;