
function formVal(){
    alert("This works!");
}

function changeNumber(){
    let input = document.forms["card-form"]["card-number"].value;
    input = input.replace(/ +/g, "");

    let output = "";

    for(let i = 0; i<16; i+=4){
        output += input.slice(i, i+4) + " ";
    }

    if(input == "") {
        document.getElementById("img-number").innerText = "0000 0000 0000 0000";
    } else {
        document.getElementById("img-number").innerText = output;
    }
}

function changeName() {
    let input = document.forms["card-form"]["name"].value;

    document.getElementById("img-name").innerText = input;
}

function changeDate(){
    let form = document.forms["card-form"];
    let month = form["month"].value;
    let year = form["year"].value;

    if(month.length < 2){
        month = "0" + month;
    }
    if(year.length < 2){
        year = "0" + year;
    }

    document.getElementById("img-date").innerText = month + "/" + year;
    
}

function changeCVC(){
    input = document.forms["card-form"]["cvc"].value;
    document.getElementById("img-cvc").innerText = input;
}