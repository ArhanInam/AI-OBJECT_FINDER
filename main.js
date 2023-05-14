
Status = "";
input_text = "";

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(440,340);
    video.hide();
}

function start()
{
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_text = document.getElementById("input_id").value;
}

function modelLoaded()
{
    console.log("Model_Loaded");
    Status = true;
}

function draw()
{
    image(video, 20, 20, 440, 340);
}

