// JS Pesan
const scriptURL =
    'https://script.google.com/macros/s/AKfycbyKpoOaIT_7EH1hNZsORRyrQVSVh7PNQsDHnw3Pv0NqzJKp3TCCSJecjzGzF8qwFccn/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})
// End JS Pesan

// JS Alert Indonesia
document.getElementById("tombolpesan").addEventListener("click", function (event) {
    var floatingTextarea2 = document.getElementById("floatingTextarea2").value;
    if (floatingTextarea2 === "") {
        alert("Kamu belum kirim pesan buat Attan!");
        event.preventDefault();
    } else {
        alert("Terimakasih, pesan anda akan dibaca!");
        document.getElementById("pesan").submit();
    }
});
// End JS Alert
// Jam 
// function tampilkanJam() {
//     var sekarang = new Date();
//     var jam = sekarang.getHours();
//     var menit = sekarang.getMinutes();
//     var detik = sekarang.getSeconds();
//     var ampm = jam >= 12 ? 'PM' : 'AM';

//     // konversi jam 24 menjadi jam 12
//     jam = jam % 12;
//     jam = jam ? jam : 12;

//     // tambahkan nol di depan angka tunggal
//     jam = jam < 10 ? '0' + jam : jam;
//     menit = menit < 10 ? '0' + menit : menit;
//     detik = detik < 10 ? '0' + detik : detik;

//     // tampilkan jam di elemen dengan id="jam"
//     document.getElementById('jam').innerHTML = jam + ':' + menit + ':' + detik + ' ' + ampm;

//     // panggil fungsi tampilkanJam setiap detik
//     setTimeout(tampilkanJam, 1000);
// }

// panggil fungsi tampilkanJam untuk pertama kali
// tampilkanJam();



// End jam