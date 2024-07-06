// Function to append value to display
function appendValue(value){
    const display=document.getElementById('display');
    display.innerText+=value;
}

 // Function to calculate the result

function calculateResult(){
    const display=document.getElementById('display');
    try{
        const result=eval(display.innerText);
        display.innerText=result;
    }
    catch(e){
        display.innerText='error!';
    }
}







// // Function to clear the display
function clearDisplay(){
    const display=document.getElementById('display');
    display.innerText='';
}

// // Function to delete the last character from display

function deleteLastCharacter(){
    const display=document.getElementById('display');
    display.innerText=display.innerText.slice(0,-1);
}





