noseX=0;
noseY=0;
noseS=50;
function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function savesnap() {
    save('filtr.png');
}
function draw() {
    image(video, 0, 0, 400, 300);
    fill(250, 0, 0);
    stroke(250, 0, 0);
    circle(noseX, noseY, noseS);
}
function modelLoaded() {
    console.log("PoseNet loaded");
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log('nose X = '+noseX);
        console.log('nose y = '+noseY);
    }
}