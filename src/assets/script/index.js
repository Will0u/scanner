import { Html5QrcodeScanner } from "html5-qrcode";
import { error, scanBtn, success } from "./_scanEvent.js";
import { operatorBtn } from "./_operator.js";
import './../style/scss/main.scss';

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

operatorBtn();
scanBtn();

const test = new XMLHttpRequest();
test.open("GET" , "https://www.barcodelookup.com/9782081404328")
test.onreadystatechange = function() {
    if (test.readyState === 4) {
        alert(test.responseText);
      }
}
test.send();