setInterval(dateChanger(), 60000);

function dateChanger() {
    let datum = new Date().getFullYear();
    if (String(datum) == "2021") {

    } else {
        document.getElementById("date").innerHTML = `© 2021 - ${datum}  Lukáš Kníže`;
    }
}

window.addEventListener("load", function () {
    document.getElementById("loader").className = "afterLoad";
    window.scrollTo(0, 0);
});
let opened = false;
function OpenMenu() {
    if (opened) {
        document.getElementById("mobileMenu").style.display = "none";
        opened = false;
    } else {
        document.getElementById("mobileMenu").style.display = "grid";
        opened = true;
    }
}

document.getElementById("logo").addEventListener("mouseleave", exitAnim);


function exitAnim() {
    document.getElementById("logo").classList.add("exitAnim");
    setTimeout(removeExitAnim, 1000)
}

function removeExitAnim() {
    document.getElementById("logo").classList.remove("exitAnim");
}

function openPortfolio(text) {
    document.getElementById("portfolioObjectBackground").style.display = "flex";
    if (text == "w1") {
        document.getElementById("portfolioTextH2").innerText = "Osobní webová stránka";
        document.getElementById("portfolioTextP").innerText = "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam facilis sequi earum, qui reprehenderit cum provident quaerat delectus porro accusamus facere maiores libero ipsa quasi eveniet dicta doloremque autem?"
    }

    if (text == "g1") {
        document.getElementById("portfolioTextH2").innerText = "Grafické portfolio";
        document.getElementById("portfolioTextP").innerText = "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam facilis sequi earum, qui reprehenderit cum provident quaerat delectus porro accusamus facere maiores libero ipsa quasi eveniet dicta doloremque autem?"
        document.getElementById("ProjectLink").setAttribute("href", "https://www.behance.net/lukkne");
    }

    if (text == "h1") {
        document.getElementById("portfolioTextH2").innerText = "Počítačové hry";
        document.getElementById("portfolioTextP").innerText = "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam facilis sequi earum, qui reprehenderit cum provident quaerat delectus porro accusamus facere maiores libero ipsa quasi eveniet dicta doloremque autem?"
        document.getElementById("ProjectLink").setAttribute("href", "https://tortoiseshell.itch.io");
    }
}

function ClosePortfolio() {
    document.getElementById("portfolioObjectBackground").style.display = "none";
}
