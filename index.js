document.querySelector("#btn1").addEventListener("click", function () {
    const currentValue = document.querySelector(".display").innerHTML;
    if (currentValue.length !==10) {
        document.querySelector(".display").innerHTML += "1";
    }
});

document.querySelector("#btn2").addEventListener("click", function () {
    const currentValue = document.querySelector(".display").innerHTML;
    if (currentValue.length !==10) {
        document.querySelector(".display").innerHTML += "2";
    }
});

document.querySelector("#btn3").addEventListener("click", function () {
    const currentValue = document.querySelector(".display").innerHTML;
    if (currentValue.length !==10) {
        document.querySelector(".display").innerHTML += "3";
    }
});

document.querySelector("#btn4").addEventListener("click", function () {
  
    const currentValue = document.querySelector(".display").innerHTML;
    if (currentValue.length !==10) {
        document.querySelector(".display").innerHTML += "4";
    }
});

document.querySelector("#btn5").addEventListener("click", function () {
    const currentValue = document.querySelector(".display").innerHTML;
    if (currentValue.length !==10) {
        document.querySelector(".display").innerHTML += "5";
    }
});

document.querySelector("#btn6").addEventListener("click", function () {
    const currentValue = document.querySelector(".display").innerHTML;
    if (currentValue.length !==10) {
        document.querySelector(".display").innerHTML += "6";
    }
});

document.querySelector("#btn7").addEventListener("click", function () {
    const currentValue = document.querySelector(".display").innerHTML;
    if (currentValue.length !==10) {
        document.querySelector(".display").innerHTML += "7";
    }
});

document.querySelector("#btn8").addEventListener("click", function () {
    const currentValue = document.querySelector(".display").innerHTML;
    if (currentValue.length !==10) {
        document.querySelector(".display").innerHTML += "8";
    }
});

document.querySelector("#btn9").addEventListener("click", function () {
    const currentValue = document.querySelector(".display").innerHTML;
    if (currentValue.length !==10) {
        document.querySelector(".display").innerHTML += "9";
    }
});

document.querySelector("#btn0").addEventListener("click", function () {
    const currentValue = document.querySelector(".display").innerHTML;
    if (currentValue.length !==10) {
        document.querySelector(".display").innerHTML += "0";
    }
});

document.querySelector("#btnDot").addEventListener("click", function () {
   const currentValue = document.querySelector(".display").innerHTML;

   if(!currentValue.length) {
document.querySelector(".display").innerHTML = "0.";
   }
if(currentValue.length > 0) {
    if (!currentValue.includes(".")) {
        document.querySelector(".display").innerHTML +="."
    }
}

if (currentValue.length !==10) {
    document.querySelector(".display").innerHTML += "";
}


});

document.querySelector("#btnClear").addEventListener("click", function () {
    document.querySelector(".display").innerHTML = "";
    document.querySelector("#calcoletorType").value = "";

});


//goner kaj

document.querySelector("#btnDevide").addEventListener("click", function() {
    const currentValue = document.querySelector(".display").innerHTML;
    if(currentValue.length > 0){
        document.querySelector("#calcoletorType").value = "/";
    }
})

document.querySelector("#btnMultiply").addEventListener("click", function() {
    const currentValue = document.querySelector(".display").innerHTML;
    if(currentValue.length > 0){
        document.querySelector("#calcoletorType").value = "x";
    }
})

document.querySelector("#btnMinus").addEventListener("click", function() {
    const currentValue = document.querySelector(".display").innerHTML;
    if(currentValue.length > 0){
        document.querySelector("#calcoletorType").value = "-";
    }
})

document.querySelector("#btnPlus").addEventListener("click", function() {
    const currentValue = document.querySelector(".display").innerHTML;
    if(currentValue.length > 0){
        document.querySelector("#calcoletorType").value = "+";
    }
})


