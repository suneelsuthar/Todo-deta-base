var database = firebase.database().ref(`/`);
function addme(){
    let input =document.getElementById(`inpt`).value;
    if(input === ""){
alert("please enter data")
    }
    else{
    
    let myObj = {
        data : input,
    }
    
    database.child(`Todo App`).push(myObj)
}
}

database.child("Todo App").on('child_added', callback=>{
    var val = callback.val();
    var identity = callback.key;
    console.log(val.data)
    var getDiv = document.getElementById("para");
    var list = document.createElement("li");
    var list_text = document.createTextNode("✔️ " +val.data)
    list.appendChild(list_text);
    getDiv.appendChild(list);

    var edit = document.createElement("button");
    var edit_text=document.createTextNode("edit");
    edit.appendChild(edit_text);
    list.appendChild(edit);

    var delt = document.createElement("button");
    var delt_text=document.createTextNode("delte");
    delt.appendChild(delt_text);
    list.appendChild(delt);

    edit.addEventListener("click" ,  ()=>{
        var prompt1 = prompt("create new text");
        database.child("Todo App/" + identity).update({data:prompt1})
    })

    delt.addEventListener("click" ,  ()=>{
        database.child("Todo App/" + identity).remove();
        delt.parentNode.remove();
    })


})

