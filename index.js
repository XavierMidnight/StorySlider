var items = [];
    var focusedItemId;


function setup(){

var letterTemplateObject = document.getElementById("letterTemplate");
var lettersInputButtonsDiv = document.getElementById("letters");

var buttonColorR=0;
var buttonColorG=0;
var buttonColorB=0;

for(var i=1;i<=1000;i++){
    //var letterCharacter=String.fromCharCode(96+i);
    //var letterCharacter=Math.floor(Math.random()*100);
    var letterCharacter=String(i);
  
    var letterNameObject = document.createElement('span');
    letterNameObject.id = letterCharacter+"_name";
    letterNameObject.innerHTML="name:"+letterCharacter+" ";
    
    
    var letterCountObject = document.createElement('span');
    letterCountObject.id = letterCharacter+"_count";
    letterCountObject.innerHTML = "Count:0 ";
    
    var letterObject = document.createElement('button');
    letterObject.id = letterCharacter;
    letterObject.style.width="60px";
    letterObject.style.height="60px";
    letterObject.style.border="5px solid rgb("+makeColorGradient(0,.3,.3,.3,0,2*Math.PI/3,4*Math.PI/3,127,128,0)+")";

    
    //function makeColorGradient(frequency1, frequency2, frequency3,
    //                         phase1, phase2, phase3,
    //                         center, width, len)
    //letterObject.style.backgroundColor="rgb("+makeColorGradient(i,.3,.3,.3,0,2*Math.PI/3,4*Math.PI/3,127,128,0)+")";
    
    letterObject.appendChild(letterNameObject);
    letterObject.appendChild(document.createElement('br'));
    letterObject.appendChild(letterCountObject);
    
    //letterObject.innerHTML = letterNameObject.innerHTML+letterCountObject.innerHTML;
   
    letterObject.onmouseleave = 
    function(){
        onBlur(this.id);
        };   
   
    document.getElementById("letters").appendChild(letterObject);

    var item = {
    id:letterCharacter+"_name",
    count:0
    };
    
    items[String(letterCharacter)]=item;
} 
/*
var xmlString = "<div id='foo'><a href='#'>Link</a><span></span></div>"
  , parser = new DOMParser()
  , newLetterOjbect = parser.parseFromString(xmlString, "text/xml");
*/
/*    
  var item = {
    id:"A",
    count:0
    
};



items["A"]=item;

var item = {
    id:"B",
    count:0
    
};

items["B"]=item;
var item = {
    id:"C",
    count:0
    
};

items["C"]=item;
 
for(var i=0;i<26;i++){
var letter=String.fromCharCode(96+i);
  
  var item = {
    id:letter,
    count:0
    
    };

items[letter]=item;
} 
 
 /*
for(var i=0;i<20;i++){
var randomLetter=String.fromCharCode(97+Math.floor(Math.random()*26));
  
  var item = {
    id:randomLetter,
    count:0
    
    };

items[randomLetter]=item;
}
*/    
}

var words = [];
function importStory(){
    words = document.getElementById("story").value.split(" ");
    words.forEach(function(element) {
      addOption(element)  
    }, this);
}

function onBlur(id){
    increment(id);
    
}


function increment(id){
    items[id].count++;
    
    letterObject = document.getElementById(id);
    
    document.getElementById(id+"_count").innerHTML="Count:"+items[id].count;
    /*if(id=="A" && items[id].count==10){
        startChicken("A");
    }else if(id=="B" && items[id].count==5){
        startTurtle("B");
    }*/
    letterObject.style.backgroundColor="rgb("+makeColorGradient(items[id].count,.3,.3,.3,0,2*Math.PI/3,4*Math.PI/3,127,128,0)+")";
   
   //solid double dotted dashed groove 
    if(items[id].count/22>(22*1)){
         letterObject.style.border="5px double rgb("+makeColorGradient(items[id].count/22,.3,.3,.3,0,2*Math.PI/3,4*Math.PI/3,127,128,0)+")";
    }else if(items[id].count/22>(22*2)){
         letterObject.style.border="5px double rgb("+makeColorGradient(items[id].count/22,.3,.3,.3,0,2*Math.PI/3,4*Math.PI/3,127,128,0)+")";
    }else if(items[id].count/22>(22*1)){
        letterObject.style.border="5px double rgb("+makeColorGradient(items[id].count/22,.3,.3,.3,0,2*Math.PI/3,4*Math.PI/3,127,128,0)+")";    
    }else{
        letterObject.style.border="5px solid rgb("+makeColorGradient(items[id].count/22,.3,.3,.3,0,2*Math.PI/3,4*Math.PI/3,127,128,0)+")";
    }
    //border: 2px solid rgb("+makeColorGradient(items[id].count,.3,.3,.3,0,2*Math.PI/3,4*Math.PI/3,127,128,0)+");
    
}

function updateUI(){
    for (var itemId in items) {
        document.getElementById(itemId+"_count").value=items[itemId].count;
    }
}
 
    function  addOption(word){
        var select = document.getElementById('dictionary');       
        var option = document.createElement("option");
        
        option.text = word;
        select.add(option);
    }
    function removeOption(index)
    {
        var select = document.getElementById('dictionary');       
        select.remove(index);
    }
    

    function startChicken(id){
        document.getElementById("chicken").style.display="block";
        setInterval(animateChicken,100);
    }
    
    function startTurtle(id){
        document.getElementById("turtle").style.display="block";
        setInterval(animateTurtle,100);
    }
    
    var chickenDirection;
    function animateChicken(){
        var item = document.getElementById("chicken");
        
        var topVal = parseInt(item.style.top, 10);

        if(topVal>100){
            item.style.top=(topVal-15)+"px";
            chickenDirection = "minus";
            increment("A");
        }else if(topVal<25){
            
            item.style.top=(topVal+15)+"px";
            chickenDirection = "plus";
        }else{
            if(chickenDirection=="minus"){
                item.style.top=(topVal-15)+"px";    
            }else{
                item.style.top=(topVal+15)+"px";
            }
        }
    }
        
        var turtleDirection;
    function animateTurtle(){
        var item = document.getElementById("turtle");
        
        var topVal = parseInt(item.style.top, 10);

        if(topVal>100){
            item.style.top=(topVal-5)+"px";
            turtleDirection = "minus";
            increment("B");
        }else if(topVal<25){
            
            item.style.top=(topVal+5)+"px";
            turtleDirection = "plus";
        }else{
            if(turtleDirection=="minus"){
                item.style.top=(topVal-5)+"px";    
            }else{
                item.style.top=(topVal+5)+"px";
            }
        }
        
        
        
    } 
    
    function makeColorGradient(i,frequency1, frequency2, frequency3,
                             phase1, phase2, phase3,
                             center, width)
  {
    if (center == undefined)   center = 128;
    if (width == undefined)    width = 127;
    
       var red = Math.floor(Math.sin(frequency1*i + phase1) * width + center);
       var grn = Math.floor(Math.sin(frequency2*i + phase2) * width + center);
       var blu = Math.floor(Math.sin(frequency3*i + phase3) * width + center);
       //alert(red+","+grn+","+blu);
       return(red+","+grn+","+blu)
    
  }
         
        
    
    