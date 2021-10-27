

let sobreMi = document.querySelector("#sobreMi");
let selection1 = document.querySelector("#selection1");

sobreMi.addEventListener("click", navegando, false);

function navegando(e) {
    selection1.scrollIntoView({
        behavior: "smooth",
    });
}

let contacto = document.querySelector("#contacto");
let selection2 = document.querySelector("#selection2");

contacto.addEventListener("click", navegando2, false)

function navegando2(e) {
   selection2.scrollIntoView({
    behavior: "smooth",
    })
}



function open1() {
    window.open("mailto:sgoettereinoso@gmail.com")
}
function open2() {
    window.open("https://www.instagram.com/solcigoette")
}
function open3() {
    window.open("https://github.com/sgreinoso");
}


