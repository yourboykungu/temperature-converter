function temp_conv(){
    let unit= document.getElementById("units").value;
    let temp= Number(document.getElementById("temp").value);

    switch (unit) {
        case "fahr":
            temp= ((temp-32)*5)/9;
            document.getElementById("result").innerHTML= "result: " + temp + "C" ;
            break;
        case "cel":
            temp= ((temp*9)/5)+32;
            document.getElementById("result").innerHTML= "result: " + temp + "F";
            break;
        default:
            document.getElementById("result").innerHTML= "enter valid unit!!";
            break;
    }
}