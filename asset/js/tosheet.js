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