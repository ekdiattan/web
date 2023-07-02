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

// Text typing
var attan = 0;
var selamat = "Selamat Datang di Website Hadyan Yuma Ekdiattan";
var jabatan = "Full Stack Web Developer";
var speed = 50;

function typeWriter() {
    if (attan < selamat.length) {
        document.getElementById("namaHadyan").innerHTML += selamat.charAt(attan);
        document.getElementById("motto").innerHTML += jabatan.charAt(attan);
        attan++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();