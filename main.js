upperlipX = 0;
upperlipY = 0;

function preload() {
    mustache = loadImage('mustache.png');
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('The Model Is Loaded');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        upperlipX = results[0].pose.upperlip.x - 25;
        upperlipX = results[0].pose.upperlip.y - 25;
    }
}

function draw() {
    image(video, 0, 0, 500, 400);
    image(mustache, upperlipX, upperlipX, 50, 50);
}

function snapshot() {
    save('mustache.png')
}