let myFace = [];
let faceIdx = 0;

let myNose = [];
let noseIdx = 0;

let myLips = [];
let lipIdx = 0;

let myHair = [];
let hairIdx = 0;

let myEyes = [];
let eyeIdx = 0;

let myEyeWhites = [];

let myIris = [];
let irisIdx = 0;

let myBrows = [];
let browIdx = 0;

//facial hair
let myFH = [];
let fhIdx = 0;

//glasses
let myGL = [];
let glIdx = 0;

//creating the color picker for skin tones.
//I learned how to do this on this website:
//https://www.geeksforgeeks.org/p5-js-tint-function/
function preload() {
  skinTintColor = color("#b8753b");
  hairTintColor = color("#3e17b3");
}

//lines 40 and 42 are part of what I leared from:
//https://www.geeksforgeeks.org/p5-js-tint-function/
function changeSkinTint() {
  // Update the current tint color
  skinTintColor = skinColPicker.color();
}
function changeHairTint() {
  // Update the current tint color
  hairTintColor = hairColPicker.color();
}
function setup() {
  createCanvas(800, 800);

  //lines 50-52 are part of what I leared from:
  //https://www.geeksforgeeks.org/p5-js-tint-function/
  skinColPicker = createColorPicker("#b8753b");
  skinColPicker.position(19, 9);
  skinColPicker.input(changeSkinTint);

  hairColPicker = createColorPicker("#3e17b3");
  hairColPicker.position(19, 39);
  hairColPicker.input(changeHairTint);
  //neck
  myShirt = loadImage("features/shirt.png");
  myNeck = loadImage("features/neck.png");

  //face
  myFace[0] = loadImage("features/face0.png");
  myFace[1] = loadImage("features/face1.png");
  myFace[2] = loadImage("features/face2.png");
  myFace[3] = loadImage("features/face3.png");
  myFace[4] = loadImage("features/face4.png");

  myNose[0] = loadImage("features/nose1.png");
  myNose[1] = loadImage("features/nose2.png");
  myNose[2] = loadImage("features/nose3.png");
  myNose[3] = loadImage("features/nose4.png");
    myNose[4] = loadImage("features/nose0.png");
      myNose[5] = loadImage("features/nose5.png");


  myLips[0] = loadImage("features/lips0.png");
  myLips[1] = loadImage("features/lips1.png");
  myLips[2] = loadImage("features/lips2.png");
  myLips[3] = loadImage("features/lips3.png");
  myLips[4] = loadImage("features/lips4.png");
  myLips[5] = loadImage("features/lips5.png");
  myLips[6] = loadImage("features/lips6.png");
  myLips[7] = loadImage("features/lips7.png");
  myLips[8] = loadImage("features/lips8.png");
  myLips[9] = loadImage("features/lips9.png");
  myLips[10] = loadImage("features/lips10.png");
  myLips[11] = loadImage("features/lips11.png");
  myLips[12] = loadImage("features/lips12.png");

  myHair[0] = loadImage("features/hair0.png");
  myHair[1] = loadImage("features/hair1.png");
  myHair[2] = loadImage("features/hair2.png");
  myHair[3] = loadImage("features/hair3.png");
  myHair[4] = loadImage("features/hair4.png");
  myHair[5] = loadImage("features/hair6.png");
  myHair[6] = loadImage("features/hair8.png");
  myHair[7] = loadImage("features/nope.png");

  myEyes[0] = loadImage("features/eyes0.png");
  myEyes[1] = loadImage("features/eyes1.png");
  myEyes[2] = loadImage("features/eyes2.png");
  myEyes[3] = loadImage("features/eyes3.png");
  myEyes[4] = loadImage("features/eyes4.png");
  myEyes[5] = loadImage("features/eyes5.png");

  myEyeWhites[0] = loadImage("features/eyes0whites.png");
  myEyeWhites[1] = loadImage("features/eyes1whites.png");
  myEyeWhites[2] = loadImage("features/eyes2whites.png");
  myEyeWhites[3] = loadImage("features/eyes3whites.png");
  myEyeWhites[4] = loadImage("features/eyes4whites.png");
  myEyeWhites[5] = loadImage("features/eyes5whites.png");

  myIris[0] = loadImage("features/iris4.png");
  myIris[1] = loadImage("features/iris1.png");
  myIris[2] = loadImage("features/iris2.png");
  myIris[3] = loadImage("features/iris3.png");

  myBrows[0] = loadImage("features/brows0.png");
  myBrows[1] = loadImage("features/brows1.png");
  myBrows[2] = loadImage("features/brows2.png");

  myFH[0] = loadImage("features/nope.png");
  myFH[1] = loadImage("features/fh1.png");
  myFH[2] = loadImage("features/fh2.png");
  myFH[3] = loadImage("features/fh3.png");
  myFH[4] = loadImage("features/fh0.png");

  myGL[0] = loadImage("features/nope.png");
  myGL[1] = loadImage("features/gl1.png");
  myGL[2] = loadImage("features/gl2.png");
  myGL[3] = loadImage("features/gl3.png");
  myGL[4] = loadImage("features/gl4.png");
  myGL[5] = loadImage("features/gl5.png");

  faceButton = new Clickable();
  faceButton.color = "#fabd41";
  faceButton.stroke = "#f7c663";
  faceButton.locate(9, 70);
  faceButton.textColor = "dark pink";
  faceButton.text = "f a c e";
  faceButton.onPress = function () {
    faceIdx = faceIdx += 1;

    if (faceIdx == myFace.length) {
      faceIdx = 0;
    }
  };

  eyeButton = new Clickable();
  eyeButton.color = "orange";
  eyeButton.stroke = "#fabd41";
  eyeButton.locate(9, 125);
  eyeButton.textColor = "white";
  eyeButton.text = "e y e s";
  eyeButton.onPress = function () {
    eyeIdx = eyeIdx += 1;

    if (eyeIdx == myEyes.length) {
      eyeIdx = 0;
    }
  };

  irisButton = new Clickable();
  irisButton.color = "#e17a6b";
  irisButton.stroke = "#ff9830";
  irisButton.locate(9, 180);
  irisButton.textColor = "white";
  irisButton.text = "i r i s";
  irisButton.onPress = function () {
    irisIdx = irisIdx += 1;

    if (irisIdx == myIris.length) {
      irisIdx = 0;
    }
  };

  browButton = new Clickable();
  browButton.color = "#a94f59";
  browButton.stroke = "#a60a4b";
  browButton.locate(9, 235);
  browButton.textColor = "white";
  browButton.text = "b r o w";
  browButton.onPress = function () {
    browIdx = browIdx += 1;

    if (browIdx == myBrows.length) {
      browIdx = 0;
    }
  };

  noseButton = new Clickable();
  noseButton.color = "#7d344f";
  noseButton.stroke = "#542843";
  noseButton.locate(9, 290);
  noseButton.textColor = "white";
  noseButton.text = "n o s e";
  noseButton.onPress = function () {
    noseIdx = noseIdx += 1;

    if (noseIdx == myNose.length) {
      noseIdx = 0;
    }
  };

  lipButton = new Clickable();
  lipButton.color = "#542843";
  lipButton.stroke = "#403eb5";
  lipButton.locate(9, 345);
  lipButton.textColor = "white";
  lipButton.text = "l i p s";
  lipButton.onPress = function () {
    lipIdx = lipIdx += 1;

    if (lipIdx == myLips.length) {
      lipIdx = 0;
    }
  };

  hairButton = new Clickable();
  hairButton.color = "#403eb5";
  hairButton.stroke = "#6868b1";
  hairButton.locate(9, 400);
  hairButton.textColor = "white";
  hairButton.text = "h a i r";
  hairButton.onPress = function () {
    hairIdx = hairIdx += 1;

    if (hairIdx == myHair.length) {
      hairIdx = 0;
    }
  };

  fhButton = new Clickable();
  fhButton.color = "#5f5d93";
  fhButton.stroke = "#2e23fc";
  fhButton.locate(9, 455);
  fhButton.textColor = "white";
  fhButton.text = "f a c i a l  h a i r";
  fhButton.onPress = function () {
    fhIdx = fhIdx += 1;

    if (fhIdx == myFH.length) {
      fhIdx = 0;
    }
  };

  glButton = new Clickable();
  glButton.color = "#343244";
  glButton.stroke = "#0d0a1d";
  glButton.locate(9, 510);
  glButton.textColor = "white";
  glButton.text = "g l a s s e s";
  glButton.onPress = function () {
    glIdx = glIdx += 1;

    if (glIdx == myGL.length) {
      glIdx = 0;
    }
  };
}

function draw() {
  background(39);
  image(myShirt, 0, 0);
  tint(skinTintColor);
  image(myNeck, 0, 0);
  image(myFace[faceIdx], 0, 0);
  image(myNose[noseIdx], 0, 0);
  image(myLips[lipIdx], 0, 0);
  image(myEyes[eyeIdx], 0, 0);

  noTint();
  image(myEyeWhites[eyeIdx], 0, 0);
  image(myIris[irisIdx], 0, 0);

  //hair tint
  tint(hairTintColor);
  image(myBrows[browIdx], 0, 0);

  image(myFH[fhIdx], 0, 0);
  image(myHair[hairIdx], 0, 0);

  noTint();
  image(myGL[glIdx], 0, 0);
  lipButton.draw();
  noseButton.draw();
  faceButton.draw();
  hairButton.draw();
  eyeButton.draw();
  irisButton.draw();
  browButton.draw();
  fhButton.draw();
  glButton.draw();
  fill(300);
  text("s k i n  t o n e", 75, 25);
  text("h a i r  c o l o r", 75, 57);
}
