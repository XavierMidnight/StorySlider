var items = [];

function setup(uniqueLetters){
//TIL use weird spacing on for loop for intellisense coloring
    for (var  i=0;i < uniqueLetters.length;i++) {
        //var letterId=String.fromCharCode(96+i);
        //var letterId=Math.floor(Math.random()*100);
        var letterId=String(i);
        var letterCharacter = uniqueLetters[i];
        if(uniqueLetters[i]==" "){
            letterCharacter="space";    
        }
        
        var letterNameObject = document.createElement('span');
        letterNameObject.id = letterId+"_name";
        //letterNameObject.innerHTML="name:"+"<span style='color:blue'/>"+letterCharacter+" "+"</span>";
        letterNameObject.innerHTML="<span style='color:blue;font-size:14'/>"+letterCharacter+" "+"</span>";

        
        
        var letterCountObject = document.createElement('span');
        letterCountObject.id = letterId+"_count";
        letterCountObject.innerHTML = "Count:0 ";
        
        var letterObject = document.createElement('button');
        letterObject.id = letterId;
        letterObject.style.width="60px";
        letterObject.style.height="60px";
        letterObject.style.border="5px solid rgb("+makeColorGradient(0,.3,.3,.3,0,2*Math.PI/3,4*Math.PI/3,127,128,0)+")";
        
        //function makeColorGradient(frequency1, frequency2, frequency3,
        //                         phase1, phase2, phase3,
        //                         center, width, len)
        
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
        id:letterId+"_name",
        count:0
        };
        
        items[String(letterId)]=item;
    } 
    /*
var xmlString = "<div id='foo'><a href='#'>Link</a><span></span></div>"
  , parser = new DOMParser()
  , newLetterOjbect = parser.parseFromString(xmlString, "text/xml");
*/

}

var story = "";
var sentences = [];
var words = [];
var letters = [];
function importStory(){
    story=document.getElementById("story").value;
    sentences = story.split(/([.?!])/); //end marks appear in next section 
    //todo words on a per sentence basis, instead of all words.
    words = story.split(" ");
  
    letters = story.toLowerCase().split("");
    
    uniqueLetters = uniq_fast(letters);
    setup(uniqueLetters);
    
    words.sort(compareSmallWordsToBigWords);
    words.forEach(function(element) {
      addOption(element)  
    }, this);
    
    
}

function clearStory(){
    var select = document.getElementById('dictionary');
    var len = select.length;
    for(var i=0;i <len;i++){
        select.remove(0);      
     }
    
    document.getElementById("letters").innerHTML="";
        
}

function compareSmallWordsToBigWords(a, b){
    if(a.length==b.length){
        if(a.toUpperCase() <b.toUpperCase()){
            return -1;
        }else{
            return 1;
        }
        
        
    }
    return a.length-b.length
}

function uniq_fast(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out.sort();
    //return out;
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
    
    //unlockWord("My");
}

function unlockWord(word){
    var select = document.getElementById('dictionary');          

    
    for(var i=0;i <select.length;i++){
        if(select[i].value==word){
             select.remove(i);      
        }
    }
    
    /*
    select.options.forEach(function(element) {
        if(element.value==word){
            select.remove(element.index);    
        }
    }, this);
    */
   /* f {
    if(options[i].value === someValue) {
        options[i].selected = true;
        break;
    }*/
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
         
        
    
    