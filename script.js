document.addEventListener("DOMContentLoaded", function() {

    let kontaktForma = document.getElementById("kontaktForma");
    if(kontaktForma){
        kontaktForma.addEventListener("submit", function(e) {
            e.preventDefault();
            let ime = document.getElementById("ime").value;
            let prezime = document.getElementById("prezime").value;
            let email = document.getElementById("email").value;
            let poruka = document.getElementById("ostavitePoruku").value;

            alert(`Hvala ${ime} ${prezime}! Javićemo se na ${email}. Poruka: ${poruka}`);
        });
    }

});


document.addEventListener("DOMContentLoaded", function () {
    let korpa = [];
    const korpaLista = document.getElementById("korpaLista");
    const obrisiSveBtn = document.getElementById("obrisiSveKorpuBtn"); 

    function azurirajKorpu() {
        korpaLista.innerHTML = "";

        if (korpa.length === 0) {
            korpaLista.innerHTML = "<p>Korpa je prazna.</p>";
            if(obrisiSveBtn) obrisiSveBtn.style.display = "none"; 
            return;
        }

        if(obrisiSveBtn) obrisiSveBtn.style.display = "inline-block";

        let ukupno = 0;

        for (let i = 0; i < korpa.length; i++) {
            const item = korpa[i];
            const p = document.createElement("p");
            const stavkaTekst = `${item.naslov.toUpperCase()} x${item.kolicina} - ${item.cena * item.kolicina} RSD`;
            p.textContent = stavkaTekst;
            p.style.color = item.kolicina > 1 ? "green" : "black";
            p.style.fontWeight = "bold";
            korpaLista.appendChild(p);
            ukupno += item.cena * item.kolicina;
        }

        const hr = document.createElement("hr");
        korpaLista.appendChild(hr);

        const ukupnoElem = document.createElement("p");
        ukupnoElem.innerHTML = `<strong>Ukupno za plaćanje: ${ukupno} RSD</strong>`;
        ukupnoElem.style.fontSize = "16px";
        korpaLista.appendChild(ukupnoElem);
    }

    function dodajUKorpu(naslov, cena) {
        const postojeca = korpa.find(item => item.naslov === naslov);
        if (postojeca) {
            postojeca.kolicina++;
        } else {
            korpa.push({ naslov, cena: parseInt(cena, 10), kolicina: 1 });
        }
        azurirajKorpu();
        return korpa;
    }

    function ukloniIzKorpe(naslov) {
        const index = korpa.findIndex(item => item.naslov === naslov);
        if (index > -1) {
            if (korpa[index].kolicina > 1) {
                korpa[index].kolicina--;
            } else {
                korpa.splice(index, 1);
            }
            azurirajKorpu();
        }
        return korpa;
    }

    function obrisiSveKorpu() {
        korpa = [];
        azurirajKorpu();
    }

    document.querySelectorAll(".dodajUKorpuBtn").forEach(btn => {
        btn.addEventListener("click", function () {
            dodajUKorpu(this.dataset.naslov, this.dataset.cena);
        });
    });

    document.querySelectorAll(".ukloniIzKorpeBtn").forEach(btn => {
        btn.addEventListener("click", function () {
            ukloniIzKorpe(this.dataset.naslov);
        });
    });

    if(obrisiSveBtn){
        obrisiSveBtn.addEventListener("click", function() {
            obrisiSveKorpu();
        });
    }

    if(korpaLista){
        azurirajKorpu();
    }

});
