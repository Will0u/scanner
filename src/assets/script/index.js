import { Html5QrcodeScanner } from "html5-qrcode";
import { error, success } from "./_scanEvent.js";
import './_operator.js';
import { operator } from "./_operator.js";

export const scanner = new Html5QrcodeScanner('scanner' , {
    qrbox: {
        width: 300,
        height: 300
    },
    fps: 60,
    videoConstraints: {
         facingMode: {
            exact: "environment"
        }
    }
});

scanner.render(success , error);

document.querySelectorAll('#operatorBtn').forEach(btn => {
    btn.addEventListener('click',operator);
});

document.querySelector('#scanBtn').addEventListener('click' , () => {
    scanner.render(success , error);
});