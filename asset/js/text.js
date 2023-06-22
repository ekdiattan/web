const instagram = document.getElementById("instagram");
const github = document.getElementById("github");
const linkedin = document.getElementById("linkedin");
const gmail = document.getElementById("gmail");

const namaHadyan = document.getElementById("namaHadyan");
const footer = document.getElementById("footer");
const mediasosial = document.getElementById("mediasosial");
const motto = document.getElementById("motto");
const pesan = document.getElementById("pesan");
const title = document.getElementById("title");
const tentangsaya = document.getElementById("tentangsaya");
const education = document.getElementById("education");
const saya = document.getElementById("saya");
const pendidikan = document.getElementById("pendidikan");
const keahlian = document.getElementById("keahlian");

// Buat html
namaHadyan.innerHTML = "Hadyan Yuma Ekdiattan";
motto.innerHTML = "Developer | Designer | Documenter";
mediasosial.innerHTML = "Media Sosial";
footer.innerHTML = "Dibuat oleh Hadyan Yuma Ekdiattan. ©2023";
pesan.innerHTML = "Pesan";
title.innerHTML = "Hadyan Yuma Ekdiattan | Profile";
tentangsaya.innerHTML = "MY DESCRIPTION";
education.innerHTML = "Education";
saya.innerHTML = "Information Technology Program, University Of Brawijaya (Now)";
pendidikan.innerHTML = "Pendidikan";
keahlian.innerHTML = "Keahlian";

// Buat medsos
instagram.style.transform = "scale(1)";
instagram.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)";
});
instagram.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
});

github.style.transform = "scale(1)";
github.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)";
});
github.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
});

linkedin.style.transform = "scale(1)";
linkedin.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)";
});
linkedin.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
});

google.style.transform = "scale(1)";
google.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)";
});
google.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
});