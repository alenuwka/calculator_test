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
                display.innerHTML="";
                existingContent = "";
                operation = "";
                display.innerHTML=entry;
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
