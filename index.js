let operation = "";
let existingContent = "";

function calculateNumber(entry){
    let display = document.getElementById("display");

    if(isNaN(entry)){
        if (entry == "=") {
            display.innerHTML = eval(existingContent);
            operation = entry;
            return; 
        }
        operation = entry;
        calculateResult(entry);
    }else{
        if (operation !== ""){
            if (operation == "=") {
                calculateClear(display, entry);
            }
            display.innerHTML=entry;
            operation = "";
            calculateResult(entry);
            return;
        }
        display.innerHTML = display.innerHTML + entry;
        calculateResult(parseInt(entry));
    }
    
}

function calculateResult(result){
    existingContent = existingContent + result;
}

function calculateClear(display, entry){
    display.innerHTML="";
    existingContent = "";
    operation = "";
    display.innerHTML=entry;
}
