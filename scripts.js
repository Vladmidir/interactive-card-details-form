
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

    const inputField =  document.getElementById("card-number");

}

function changeName() {
    let input = document.forms["card-form"]["name"].value;

    if(input == ""){
        input = "Jane Applesend";
    }

    document.getElementById("img-name").innerText = input;
}

function changeDate(){
    let form = document.forms["card-form"];
    let month = form["month"].value;
    let year = form["year"].value;

    if(month.length == 0){
        month = "00";
    }
    else if(month.length < 2){
        month = "0" + month;
    }

    if(year.length == 0){
        year = "00";
    }    
    else if(year.length < 2){
        year = "0" + year;
    }

    document.getElementById("img-date").innerText = month + "/" + year;
    
}

function changeCVC(){
    input = document.forms["card-form"]["cvc"].value;

    if(input == ""){
        input = "000"
    }

    document.getElementById("img-cvc").innerText = input;
}

window.addEventListener('load', load => {
    const form = document.getElementById("form");

    const elemNames = ['name', 'card-number', 'month', 'year', 'cvc'];
    const inputElems = [];

    for (const elem of elemNames) { //create a dictionarry name to input field
        inputElems[elem] = document.getElementById(elem);
    }
    

    for (const elem in inputElems){ //go through all input elements
        inputElems[elem].addEventListener('blur', event => { //reset colour to neutral after the user select the field again
            inputElems[elem].style.borderColor = "hsl(270, 3%, 87%)"; 
            document.getElementById(elem + "-error").style.display = "none"//hide error messages


            if (elem != 'name'){//make sure all numeric fields have numeric input
                if (isNaN(document.forms["card-form"][elem].value.replace(/ +/g, ""))){
                    if (elem == "card-number" || elem == "cvc"){
                        showError(inputElems, elem, "Wrong format, numbers only")
                    }else
                    {
                        showError(inputElems, elem, "Wrong format")
                    }  
                }
            }
            if (elem == 'month' && parseInt(document.forms["card-form"][elem].value) > 12 ){//make sure month is valid
                showError(inputElems, elem, "Wrong month");

            }
        });

        

    }


    form.addEventListener('submit', (event) => { //here I am going to do form validation for empty fields
        event.preventDefault();
        let valid = true;


        if(inputElems["cvc"].value.replace(/ +/g, "").length < 3){
            showError(inputElems, "cvc", "Too short");
        }

        if(inputElems["card-number"].value.replace(/ +/g, "").length < 16){
            showError(inputElems, "card-number", "Too short");
        }

        for (const elem in inputElems){ //go through all input elements
            if (inputElems[elem].value == "") {//check for empty fields
                showError(inputElems, elem, "Can't be blank");
            }
            if (document.getElementById(elem + "-error").style.display != "none"){ //make the form invalid if errors present
                valid = false;
            }
        }

        if (valid){//if valid display complete
            document.getElementById("form").style.display = "none";
            document.getElementById("complete").style.display = "flex"
        }

    });
});

function showError(fields, elem, text) {
    fields[elem].style.borderColor = "hsl(0, 100%, 66%)";
    document.getElementById(elem+"-error").style.display = "inline";
    document.getElementById(elem+"-error").innerText = text;
}
