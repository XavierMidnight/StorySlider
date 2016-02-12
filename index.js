var items = ["A","B","C"];
var focusedItemId;


function setup(){
   items.count=0;
  //  items["A"].count=0;
  //  items["B"].count=0;
  //  items["C"].count=0;
}

function focus(id){
    //focusedItemId=id;
    document.getElementById("info").innerHTML=id+"in focus";
}

function blur(id){
    alert('sth');
    if (focusedItemId==id){
        increment(id);
    }
    document.getElementById("info").innerHTML=id+"in blur";
}


function increment(id){
    items[id].count++;
}

function updateUI(){
    for (var itemId in items) {
        document.getElementById(itemId+"_count").value=items[itemId].count;
    }
}