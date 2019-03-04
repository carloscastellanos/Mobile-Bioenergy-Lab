
int analogPin = 0;    // analog sensor
int inByte = 0;       // incoming serial byte

void setup() {
  // set digital pins as outputs and set them to LOW
  for(int i=2; i <= 13; i++) {
    pinMode(i, OUTPUT);
    digitalWrite(i, LOW);
  }
  // set analog ins 0-4 to digital outs and set them to LOW
  pinMode(A1, OUTPUT);
  digitalWrite(A1, LOW);
  pinMode(A2, OUTPUT);
  digitalWrite(A2, LOW);
  pinMode(A3, OUTPUT);
  digitalWrite(A3, LOW);
  pinMode(A4, OUTPUT);
  digitalWrite (A4, LOW);
  pinMode(A5, OUTPUT);
  digitalWrite (A5, LOW);
  
  // Initiate Serial Communication
  Serial.begin(115200);
  establishContact();  // send a byte to establish contact until receiver responds
}

void loop() {
  if(Serial.available() > 0) {
    inByte = Serial.read();
    Serial.print("a "); //
    Serial.print(analogPin, DEC);
    Serial.print(" ");
    Serial.print(analogRead(analogPin), DEC); // read analog in and send it
    Serial.println(); // Terminate message
  }
}

void establishContact() {
  while (Serial.available() <= 0) {
    Serial.println("a 5 1");   // send an initial string
    delay(300);
  }
}

