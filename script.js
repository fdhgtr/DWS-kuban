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