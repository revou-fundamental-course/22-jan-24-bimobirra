var slideIndex = 1;
showDivs(slideIndex)

function plusDivs(n){
    showDivs(slideIndex += n)
}


function showDivs(n){
    var i;
    var x = document.getElementsByClassName(`gambar1`);
    if (n > x.length) {slideIndex = 1};
    if (n < 1) {slideIndex = x.length};
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block"

}

const inputName = document.getElementById('namee');
const inputEmail = document.getElementById('emaill');
const inputBarang = document.getElementById('barang')
const button = document.getElementById('tombol-kirim');

button.addEventListener('click', function(){
    let name = inputName.value;
    let email = inputEmail.value;
    let barang = inputBarang.value;

    if (!name){
        const NameError = document.getElementById('name-error');
        NameError.classList.add('error-message');

        NameError.innerText = `Nama harus diisi!`
    }

    if (!email){
        const NameError = document.getElementById('email-error');
        NameError.classList.add('error-message');

        NameError.innerText = `Email harus diisi!`
    }

    if (!barang){
        const NameError = document.getElementById('barang-error');
        NameError.classList.add('error-message');

        NameError.innerText = `Barang harus diisi!`
    }

})