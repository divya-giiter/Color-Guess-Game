var numofsq=6;
var colors = [];
var pickedcolor;
var clickedcolor; 

var square = document.querySelectorAll(".square");
var rgb = document.querySelector("#rgb");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var mode = document.getElementsByClassName("mode");


function setupMode(){
    for(var i=0; i<mode.length; i++) {
        mode[i].addEventListener("click",function() {   
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY" ? numofsq = 3 : numofsq = 6;
            reset();
        });        
    }

}

function setupSq(){
    for(var i=0; i<square.length; i++){  
        square[i].addEventListener("click", function(){
        clickedcolor = this.style.backgroundColor;
        console.log(clickedcolor+"+"+pickedcolor);
            if(clickedcolor===pickedcolor)
            {
                message.textContent="Correct!";
                resetButton.textContent="PLAY AGAIN?";
                colorchange(pickedcolor);
                h1.style.backgroundColor=pickedcolor;          
            }   
            else{
            this.style.backgroundColor= "#232323";
            message.textContent="Try Again!";
            }    
        });  
    }
}

function reset(){
    colors = generateRandColors(numofsq);
    pickedcolor = pickcolor();
    rgb.textContent = pickedcolor;
    message.textContent="";
    resetButton.textContent="NEW COLORS";
    for(var i=0; i<square.length;i++){
        if(colors[i]){
            square[i].style.display = "block";
            square[i].style.backgroundColor=colors[i];
        }
        else
            square[i].style.display = "none";
    }
    h1.style.backgroundColor="#f1d2d2";
}

function init(){
    setupMode();
    setupSq(); 
    reset();   
}

init();

function pickcolor(){
    var rand = Math.floor(Math.random() *colors.length);
    return colors[rand];
}

function generateRandColors(num){
    var arr=[];
    for (var i =0; i < num; i++) {
        arr.push(randomcolor());
    }
    return arr;
}

function randomcolor(){
    var r = Math.floor(Math.random() *256);
    var g = Math.floor(Math.random() *256);
    var b = Math.floor(Math.random() *256);

    return "rgb("+r+", "+g+", "+b+")";
}

resetButton.addEventListener("click", function(){
    reset();
});

function colorchange(color){
    for(var i=0; i<square.length;i++)
            {
                square[i].style.backgroundColor=color;
            }
}