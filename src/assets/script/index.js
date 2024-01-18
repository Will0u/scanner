import { Html5QrcodeScanner } from "html5-qrcode";

const scanner = new Html5QrcodeScanner('scanner' , {
    qrbox: {
        width: 300,
        height: 300
    },
    fps: 40,
    videoConstraints: {
         facingMode: {
            exact: "environment"
        }
    }
});

scanner.render(success, error);

function success(reference) {
    if (localStorage.getItem(reference) == null) {
        localStorage.setItem(reference,1);
    } else {
        let stock = parseInt(localStorage.getItem(reference));
        localStorage.setItem(reference, stock+1);
    }
    document.getElementById('btnSection').setAttribute('reference',reference);
    document.getElementById('result').textContent=`Référence : ${reference}`;
    document.getElementById('count').textContent=`Compté : ${localStorage.getItem(reference)}`;
    document.getElementById('link').src = `https://media.e.leclerc/${reference}_1`;
    document.getElementById('error').textContent=``;
    restart();
}

function error() {
    document.getElementById('error').textContent=`Une erreur est survenue !`;
}

function restart() {
    scanner.clear();
    scanner.render(success, error);
}

document.querySelector('#add').addEventListener('click' , add);
document.querySelector('#minus').addEventListener('click' , minus);

function add() {
    let reference = document.getElementById('btnSection').getAttribute('reference');
    console.log(reference);
    let stock = parseInt(localStorage.getItem(reference));
    localStorage.setItem(reference,stock+1);
    document.getElementById('count').textContent=`Compté : ${localStorage.getItem(reference)}`;
}

function minus() {
    let reference = document.getElementById('btnSection').getAttribute('reference');
    let stock = parseInt(localStorage.getItem(reference));
    localStorage.setItem(reference,stock-1);
    document.getElementById('count').textContent=`Compté : ${localStorage.getItem(reference)}`;
}