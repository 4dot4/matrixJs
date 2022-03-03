const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let height = 600;
let width = 600;

canvas.width = width;
canvas.height = height;

const chars = [
        'A','B','C','D','E','F','G','H','I',
        'J','K','L','M','N','O','P','Q','R',
        'S','T','U','V','W','X','Y','Z','1',
        '2','3','4','5','6','7','8','9'
    ];

function randomNumber(x,y = 0){    
    let random = Math.floor(Math.random() * x);
    if(y != 0){
        if(random % y != 0)
            randomNumber(x,y);
    }
    return random;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function anime(){

    //ctx.font = "13px Arial";
    requestAnimationFrame(anime);
    
    
    ctx.fillStyle = "rgb(255,0,255,255)"
    //ctx.clearRect(0,0,width,height);
    for(let x = randomNumber(width,10); x < width; x += 10){
        
        
        for(let y = randomNumber(height); y < height; y += 10){
            // let r = randomNumber(256);
            // let g = randomNumber(256);
            // let b = randomNumber(256);
            // ctx.fillStyle = "rgb(" + r + "," + g  + "," + b + ",255)";
            let random = randomNumber(chars.length); 
            ctx.fillText(chars[random],x,y);
            await sleep(100);
            ctx.clearRect(x,y-13,10,13);
            
            
        }   
    }
}
anime();