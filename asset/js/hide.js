    var tombolpesan = document.getElementById('tombolpesan');
    var loading = document.getElementById('loading');

    tombolpesan.style.display = "block";
    loading.style.display = 'none';

    tombolpesan.addEventListener("click", function () {
        tombolpesan.style.display = "none";
        loading.style.display = "block";
    })