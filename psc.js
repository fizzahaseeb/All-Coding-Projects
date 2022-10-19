//let saveEl = document.getElementById("save-el")
//let countEl = document.getElementById("count-el")
let count = 0;
let entry_id = "";
let id_array = [];

function idcheck(existing_entry){
    return entry_id === existing_entry;
}

function increment(){
    entry_id = document.getElementById("entry-id").value;
    id_found = id_array.find(idcheck);
    console.log('id found', id_found);
    if (id_found){
        alert("\'ID Exists\'");
        document.getElementById("entry-id").value = "";
        return;
    }
    if (entry_id != ""){
        count += 1;
        id_array.push(entry_id);
    }
    document.getElementById("count-el").innerHTML = count;
    document.getElementById("entry-id").value = "";

   console.log('id array', id_array);
}

function save(){
    countStr = count + " - ";
    document.getElementById("save-el").innerHTML +=  countStr;
    document.getElementById("entry-el").innerHTML += id_array + "-";
    id_array = [];
    document.getElementById("count-el").innerHTML = 0;
    count = 0;
}

function reset(){
    document.getElementById("save-el").innerHTML = 0;
    document.getElementById("entry-el").innerHTML = "";
    document.getElementById("entry-id").value = ""
}


