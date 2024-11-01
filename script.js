let text = document.getElementById('text')

prvni.addEventListener('click', function(){
    alert("Alert!")

})

const text2 = document.getElementById('text2')

druhy.addEventListener('click', function(){
    druhy.textContent = "Text se změnil";
    

})

function zmenText() {
    document.getElementById("text").innerText = "Text byl změněn";
}



function zapisText() {
    document.getElementById("novytext").innerText = "Toto je nový text";
}
    
function hellouser() {
    const user = document.getElementById('user').value;
    if (user) {
        alert('Ahoj, ' + user + '!');
    } else {
        alert('Prosím, zadej své jméno.');
    }
}

function changeHeadingText() {
    document.getElementById('heading').textContent = 'Text se změnil';
}

function resetHeadingText() {
    document.getElementById('heading').textContent = 'Úkol 7';
}
document.addEventListener('DOMContentLoaded', function() {
    let cas = document.getElementById('cas');
    let datum = document.getElementById('datum');

    const cass = document.getElementById('cass');
    const datumm = document.getElementById('datumm');

    cas.addEventListener('click', function(){
        const acas = new Date();
        const scas = acas.toLocaleTimeString();
        cass.textContent = 'Momentalni cas: ' + scas;
    })

    datum.addEventListener('click', function(){
        const adatum = new Date();
        const sdatum = adatum.toLocaleDateString();
        datumm.textContent = 'Momentalni datum: ' + sdatum;
    })
});
function pricist3() {
    const cislo = parseFloat(document.getElementById("cislo").value);
    const vysledek = cislo + 3; 
    document.getElementById("vysledek2").innerText = "výsledek: " + vysledek;
}


function hodnoty() {
    const cislo1 = parseFloat(document.getElementById("č.1").value);
    const cislo2 = parseFloat(document.getElementById("č.2").value);
    const vysledek4 = cislo1 + cislo2;
    document.getElementById("vysledek3").innerText = "výsledek: " + vysledek4;
}

const img = document.getElementById("obrázek");

<script>
const img = document.getElementById("myImage");

img.addEventListener("mouseenter", function() {
    img.width = 240; // Zvětšení obrázku
});

img.addEventListener("mouseleave", function() {
    img.width = 200; // Obnovení původní velikosti
});
</script>