function setup() {
  canvas = createCanvas(900, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet',modelloaded);
}

function modelloaded() {
 console.log('model Loaded');
}

function draw() {
  image(video, 0, 0, 900, 400);
  classifier.classify(video, Gotresult);
}

function Gotresult(error,results) {
  if(error) {
    console.error(error);  
  } else {
    console.log(results);
    document.getElementById("Object_name").innerHTML = results[0].label;
    document.getElementById("Accuracy_Result").innerHTML = results[0].confidence.toFixed(3);
  }
}















