function setup()
{
    video = createCapture(VIDEO);
     video.size(550, 450);

     canvas = createCanvas(550, 500);
     canvas.position(750,90);

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose' , gotPoses);
}

function draw()
{
    background('#969A97');
}

function modelLoaded()
    {
        console.log('Posenet Is Initialized!');
    }

    function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results);
        }
}