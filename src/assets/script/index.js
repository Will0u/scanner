import { Html5QrcodeScanner } from "html5-qrcode";
import { error, success } from "./_scanEvent.js";
import './_operator.js';

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

scanner.render(success, error);