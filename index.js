
function tranferCurrency() {
    let amount = +document.getElementById("amount").value ;
    let formCurrent = +document.getElementById("form_cr").value;
    let toCurrent = +document.getElementById("to_cr").value;
    if (formCurrent == 1){
        if (toCurrent == 2) {
            result = amount / 230000;
            document.getElementById("result").innerHTML = result + " USD" 
        } else {
            result = amount 
            document.getElementById("result").innerHTML = result + " VND" 
        }
    } else {
        if (toCurrent == 1) {
            result = amount * 230000;
            document.getElementById("result").innerHTML = result + " VND" 
        } else {
            result = amount 
            document.getElementById("result").innerHTML = result + " USD" 
        }
    }


    
}