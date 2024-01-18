import { Html5QrcodeScanner } from "html5-qrcode";

console.log('index.js');

const scanner = new Html5QrcodeScanner('scanner' , {
    qrbox: {
        width: 300,
        height: 300
    },
    fps: 20,
});

scanner.render(success, error);

function success(result) {
    document.getElementById('result').innerHTML=`<h2> <a href='${result}'>ok ${result}</a></h2>`;
    scanner.clear();
    document.getElementById('reader').remove();
}

function error(err) {
    console.log(err);

}

