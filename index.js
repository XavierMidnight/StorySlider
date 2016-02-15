var items = [];
    var focusedItemId;


function setup(){
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
    document.getElementById(id+"_count").value=items[id].count;
    if(id=="A" && items[id].count==10){
        startChicken("A");
    }else if(id=="B" && items[id].count==5){
        startTurtle("B");
    }
    
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
         
        
    
    