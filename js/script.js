let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + id + height){
            navLinks.forEach(links =>{
               links.classList.remove('active');
               document.querySelector('header nav a[href*='  + id +'] ').classList.add('active');
            });
        }
    });
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}; 


const fareImleci = document.createElement("div");
fareImleci.style.width = "20px";
fareImleci.style.height = "20px";
fareImleci.style.border = "2px solid #00abf0";
fareImleci.style.borderRadius = "50%";
fareImleci.style.position = "fixed";
fareImleci.style.pointerEvents = "none";
fareImleci.style.zIndex = "9999";
fareImleci.style.transform = "translate(-50%, -50%)";
fareImleci.style.transition = "width 0.2s, height 0.2s";
document.body.appendChild(fareImleci);

document.addEventListener("mousemove", (fareHareketi) => {
    fareImleci.style.left = fareHareketi.clientX + "px";
    fareImleci.style.top = fareHareketi.clientY + "px";
});


const daktiloHedef = document.getElementById("daktiloMetni");
const yazilacakMetinler = ["Architect", "Designer", "Creator"];
let metinSirasi = 0;
let harfSirasi = 0;
let silmeIslemiMi = false;

function daktiloEfektiCagir() {
    if (!daktiloHedef) return;
    const guncelMetin = yazilacakMetinler[metinSirasi];
    if (silmeIslemiMi) {
        daktiloHedef.textContent = guncelMetin.substring(0, harfSirasi - 1);
        harfSirasi--;
    } else {
        daktiloHedef.textContent = guncelMetin.substring(0, harfSirasi + 1);
        harfSirasi++;
    }
    let yazmaHizi = 150;
    if (silmeIslemiMi) { yazmaHizi /= 2; }
    if (!silmeIslemiMi && harfSirasi === guncelMetin.length) {
        yazmaHizi = 2000;
        silmeIslemiMi = true;
    } else if (silmeIslemiMi && harfSirasi === 0) {
        silmeIslemiMi = false;
        metinSirasi++;
        if (metinSirasi === yazilacakMetinler.length) { metinSirasi = 0; }
        yazmaHizi = 500;
    }
    setTimeout(daktiloEfektiCagir, yazmaHizi);
}
document.addEventListener("DOMContentLoaded", daktiloEfektiCagir);


const projeListesi = [
    { isim: "Mac One Suadiye Renovation", tur: "Spor Salonu", gorsel: "images/maconesuadiye.png", detay: "A modern and dynamic gym renovation project." },
    { isim: "Mac Fit Konutkent Renovation", tur: "Spor Salonu", gorsel: "images/konutkent.png", detay: "User-focused, functional fitness center design." },
    { isim: "Mac Fit Maltepe Ofispark", tur: "Spor Salonu", gorsel: "images/maltepe.png", detay: "Innovative sports area within the corporate officepark." },
    { isim: "Trendyol Tech. Office Ankara", tur: "Ofis", gorsel: "images/trendyol.png", detay: "An inspiring workspace for the technology team." },
    { isim: "Unilever Office Renovation", tur: "Ofis", gorsel: "images/unilever.png", detay: "Sustainable and ergonomic central office renovation." }
];

const projeKapsayici = document.getElementById("projeKapsayici");
const projeButonlari = document.querySelectorAll(".proje-buton");

function projeleriEkranaCizdir(gosterilecekProjeler) {
    if (!projeKapsayici) return;
    projeKapsayici.innerHTML = ""; 
    gosterilecekProjeler.forEach(proje => {
        projeKapsayici.innerHTML += `
            <div class="proje-karti">
                <img src="${proje.gorsel}" alt="${proje.isim}">
                <h3>${proje.isim}</h3>
                <p>${proje.detay}</p>
            </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    projeleriEkranaCizdir(projeListesi);
});

if(projeButonlari) {
    projeButonlari.forEach(buton => {
        buton.addEventListener("click", () => {
            projeButonlari.forEach(b => {
                b.style.background = "transparent";
                b.style.color = "#fff";
            });
            buton.style.background = "var(--main-color)";
            buton.style.color = "#081b29";
            const secilenTur = buton.getAttribute("data-kategori");
            if (secilenTur === "Tümü") {
                projeleriEkranaCizdir(projeListesi);
            } else {
                const suzulenListe = projeListesi.filter(p => p.tur === secilenTur);
                projeleriEkranaCizdir(suzulenListe);
            }
        });
    });
}


const gecmisVerileri = [
    { kategori: "Eğitim", tarih: "2021", metin: "Anadolu University - Associate Degree Real Estate Management" },
    { kategori: "Eğitim", tarih: "2018-2019", metin: "Berlin International University - Bachelor Degree Architecture" },
    { kategori: "Eğitim", tarih: "2015-2020", metin: "Bahcesehir University-Bachelor Degree" },
    { kategori: "Eğitim", tarih: "2010-2014", metin: "Turk Telekom Science High School" },
    { kategori: "Deneyim", tarih: "2021", metin: "Sistema Teknolojik Yapi <br> Architect / Current" },
    { kategori: "Deneyim", tarih: "2019-2020", metin: "Zorlu Holding <br>Architect-Part Time" },
    { kategori: "Deneyim", tarih: "2019", metin: "ITU Building Coordinations<br>Intern Architect" },
    { kategori: "Deneyim", tarih: "2018-2019", metin: "BAU COOP Departmant<br>Design Asisstant" },
    { kategori: "Deneyim", tarih: "2018", metin: "Sur Yapi Construction<br>Intern" }
];

const yolculukKutusu = document.getElementById("yolculukKapsayici");
const egitimButonlari = document.querySelectorAll(".egitim-butonu");

function gecmisiOlustur(veriler) {
    if (!yolculukKutusu) return;
    yolculukKutusu.innerHTML = ""; 
    const egitimKismi = veriler.filter(oge => oge.kategori === "Eğitim");
    const deneyimKismi = veriler.filter(oge => oge.kategori === "Deneyim");
    let htmlCiktisi = "";

    if (egitimKismi.length > 0) {
        htmlCiktisi += `<div class="education-column"><h3 class="title" style="color: #fff;">Education</h3><div class="education-box">`;
        egitimKismi.forEach(kayit => {
            htmlCiktisi += `
                <div class="education-content">
                    <div class="content">
                        <div class="year"><i class='bx bxs-calendar'></i>${kayit.tarih}</div>
                        <h3 style="color: #ededed;">${kayit.metin}</h3>
                    </div>
                </div>`;
        });
        htmlCiktisi += `</div></div>`;
    }
    if (deneyimKismi.length > 0) {
        htmlCiktisi += `<div class="education-column"><h3 class="title" style="color: #fff;">Experience</h3><div class="education-box">`;
        deneyimKismi.forEach(kayit => {
            htmlCiktisi += `
                <div class="education-content">
                    <div class="content">
                        <div class="year"><i class='bx bxs-calendar'></i>${kayit.tarih}</div>
                        <h3 style="color: #ededed;">${kayit.metin}</h3>
                    </div>
                </div>`;
        });
        htmlCiktisi += `</div></div>`;
    }
    yolculukKutusu.innerHTML = htmlCiktisi;
}

document.addEventListener("DOMContentLoaded", () => {
    gecmisiOlustur(gecmisVerileri);
});

if(egitimButonlari) {
    egitimButonlari.forEach(buton => {
        buton.addEventListener("click", () => {
            egitimButonlari.forEach(b => {
                b.style.background = "transparent";
                b.style.color = "#fff";
            });
            buton.style.background = "var(--main-color)";
            buton.style.color = "#081b29";
            const secilen = buton.getAttribute("data-kategori");
            if (secilen === "Tümü") {
                gecmisiOlustur(gecmisVerileri);
            } else {
                const filtrelenmis = gecmisVerileri.filter(oge => oge.kategori === secilen);
                gecmisiOlustur(filtrelenmis);
            }
        });
    });
}


const yetenekListesi = [
    { kategori: "Program", isim: "Autocad", seviye: "%90", genislik: "90%" },
    { kategori: "Program", isim: "MS Office Programs", seviye: "%90", genislik: "90%" },
    { kategori: "Program", isim: "Photoshop", seviye: "%90", genislik: "90%" },
    { kategori: "Program", isim: "Sketchup", seviye: "%80", genislik: "80%" },
    { kategori: "Program", isim: "Lumion", seviye: "%80", genislik: "80%" },
    { kategori: "Dil", isim: "English", seviye: "Intermediate", genislik: "75%" },
    { kategori: "Dil", isim: "German", seviye: "Elementary", genislik: "35%" }
];

const yetenekKutusu = document.getElementById("yetenekKapsayici");
const yetenekButonlari = document.querySelectorAll(".yetenek-butonu");

function yetenekleriOlustur(veriler) {
    if (!yetenekKutusu) return;
    yetenekKutusu.innerHTML = ""; 
    const programKismi = veriler.filter(oge => oge.kategori === "Program");
    const dilKismi = veriler.filter(oge => oge.kategori === "Dil");
    let htmlCiktisi = "";

    if (programKismi.length > 0) {
        htmlCiktisi += `<div class="skills-column"><h3 class="title">Program Skills</h3><div class="skills-box"><div class="skills-content">`;
        programKismi.forEach(kayit => {
            htmlCiktisi += `
                <div class="progress">
                    <h3>${kayit.isim} <span>${kayit.seviye}</span></h3>
                    <div class="bar"><span style="width: ${kayit.genislik};"></span></div>
                </div>`;
        });
        htmlCiktisi += `</div></div></div>`;
    }
    if (dilKismi.length > 0) {
        htmlCiktisi += `<div class="skills-column"><h3 class="title">Language</h3><div class="skills-box"><div class="skills-content">`;
        dilKismi.forEach(kayit => {
            htmlCiktisi += `
                <div class="progress">
                    <h3>${kayit.isim} <span>${kayit.seviye}</span></h3>
                    <div class="bar"><span style="width: ${kayit.genislik};"></span></div>
                </div>`;
        });
        htmlCiktisi += `</div></div></div>`;
    }
    yetenekKutusu.innerHTML = htmlCiktisi;
}

document.addEventListener("DOMContentLoaded", () => {
    yetenekleriOlustur(yetenekListesi);
});

if(yetenekButonlari) {
    yetenekButonlari.forEach(buton => {
        buton.addEventListener("click", () => {
            yetenekButonlari.forEach(b => {
                b.style.background = "transparent";
                b.style.color = "#fff";
            });
            buton.style.background = "var(--main-color)";
            buton.style.color = "#081b29";
            const secilen = buton.getAttribute("data-kategori");
            if (secilen === "Tümü") {
                yetenekleriOlustur(yetenekListesi);
            } else {
                const filtrelenmis = yetenekListesi.filter(oge => oge.kategori === secilen);
                yetenekleriOlustur(filtrelenmis);
            }
        });
    });
}

const iletisimFormu = document.querySelector('.contact form');

if(iletisimFormu) {
    iletisimFormu.addEventListener('submit', function(olay) {
        olay.preventDefault(); 

        const gonderButonu = this.querySelector('button[type="submit"]');
        const eskiYazi = gonderButonu.textContent;

        gonderButonu.textContent = "Sending...";
        gonderButonu.style.background = "#fff";
        gonderButonu.style.color = "var(--bg-color)";
        gonderButonu.style.transform = "scale(0.95)";

        setTimeout(() => {
            alert("Harika! Mesajın başarıyla iletildi.");
            
            gonderButonu.textContent = eskiYazi;
            gonderButonu.style.background = "var(--main-color)";
            gonderButonu.style.color = "var(--bg-color)";
            gonderButonu.style.transform = "scale(1)";
                        iletisimFormu.reset(); 
        }, 1500);
    });
}
