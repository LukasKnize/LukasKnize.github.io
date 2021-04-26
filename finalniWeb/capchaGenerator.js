var capchas = ["Pokud je dnes pondělí co bylo včera?", "jedna plus dva jsou (napište číslicí)", "Jaký je dnes rok (napište číslicí, například 1980)"];

window.addEventListener("load", Generate());
var number
function Generate() {
    number = Math.floor(Math.random() * 3);
    document.getElementById("styled").innerHTML = ` ${capchas[number]}`;
}

function check() {
    var answer = document.getElementById("Capcha").value;
    switch (number) {
        case 0:
            if (answer == "neděle" || answer == "Neděle" || answer == "nedele" || answer == "Nedele" || answer == "neďele" || answer == "Neďele") {
                document.getElementById("forms").submit();
            }else{
                document.getElementById("alert").innerHTML = "vaše odpověď na kontrolní otázku je špatně";
                Generate()
            }

            
                break;
        case 1:
            if (answer == "3" || answer == "tři" || answer == "tri" || answer == "Tři" || answer == "Tri"){
                document.getElementById("forms").submit();
            }else{
                document.getElementById("alert").innerHTML = "vaše odpověď na kontrolní otázku je špatně";
                Generate()
            }
            break;
        case 2:
            if (answer == (String)(new Date().getFullYear())){
                document.getElementById("forms").submit();
            }else{
                document.getElementById("alert").innerHTML = "vaše odpověď na kontrolní otázku je špatně";
                Generate()
            }
            break;
        default:
            alert("špatně")
            break;
    }
}




