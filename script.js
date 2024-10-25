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
document.addEventListener('DOMContentLoaded', function() {
    const pricitButton = document.getElementById('pricitButton');

    pricitButton.addEventListener('click', function() {
        const input = document.getElementById('numberInput').value; // Získání hodnoty z inputu
        const cislo = parseFloat(input); // Převod na číslo

        if (!isNaN(cislo)) { // Kontrola, zda je to číslo
            const vysledek = cislo + 3; // Přičtení 3
            document.getElementById('vysledek').textContent = 'Výsledek: ' + vysledek; // Zobrazení výsledku
        } else {
            document.getElementById('vysledek').textContent = 'Prosím, zadej platné číslo.'; // Chybová zpráva
        }
    });
});

const soucetButton = document.getElementById('soucetButton');

soucetButton.addEventListener('click', () => {
    const cislo1 = parseFloat(document.getElementById('numberInput1').value);
    const cislo2 = parseFloat(document.getElementById('numberInput2').value);
    const vysledek = cislo1 + cislo2 
    ? 'Prosím, zadejte platné číslo v obou polích.' 
    : 'Výsledek: ' + (cislo1 + cislo2);
    
    document.getElementById('vysledekSoucet').textContent = vysledek;
});