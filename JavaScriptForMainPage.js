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
        document.getElementById("portfolioTextP").innerText = "Moje osobní webová stránka vznikla jako závěrečná práce předmětu webové aplikace na Smíchovské střední průmyslové škole a gymnáziu.";
        document.getElementById("ProjectLink").setAttribute("href", "https://lukasknize.github.io/");
    }

    if (text == "w2") {
        document.getElementById("portfolioTextH2").innerText = "stránka pro školní projekt  ";
        document.getElementById("portfolioTextP").innerText = "Tuto webovou stránku jsem vytvořil pro školní projekt z oblasti marketingu a propagace na internetu. Jedná se o stránku pro fiktivní firmu z oblasti hardwaru a elektroniky.";
        document.getElementById("ProjectLink").setAttribute("href", "https://powershieldelectronics.github.io");
    }

    if (text == "g1") {
        document.getElementById("portfolioTextH2").innerText = "Grafické portfolio";
        document.getElementById("portfolioTextP").innerText = "Na Behance pomalu buduji menší grafické portfolio, zatím zde toho moc nemám, ale dobudoucna snad budu přidávat další práce.";
        document.getElementById("ProjectLink").setAttribute("href", "https://www.behance.net/lukkne");
    }

    if (text == "h1") {
        document.getElementById("portfolioTextH2").innerText = "Počítačové hry";
        document.getElementById("portfolioTextP").innerText = "Na itch.io mám několik menších her (spíše konceptů), které tvořím v enginu Unity. Většina vznikla během několika dnů v rámci Game jamů.";
        document.getElementById("ProjectLink").setAttribute("href", "https://tortoiseshell.itch.io");
    }
}

function ClosePortfolio() {
    document.getElementById("portfolioObjectBackground").style.display = "none";
}
