



function km() {
    var inputValue = parseFloat(document.querySelector("#inputBox1").value);
    if (!isNaN(inputValue)) {
        var miles = (inputValue * 0.621371);
        document.querySelector("#inputBox2").value = miles;
    } else {
        // Handle the case when the input is not a valid number
        document.querySelector("#inputBox2").value = "";
    }
}

function miles(){
    var inputValue = parseFloat(document.querySelector("#inputBox1").value);
    if (!isNaN(inputValue)) {
        var miles = (inputValue * 1.60934);
        document.querySelector("#inputBox2").value = miles;
    } else {
        // Handle the case when the input is not a valid number
        document.querySelector("#inputBox2").value = "";
    }
}

