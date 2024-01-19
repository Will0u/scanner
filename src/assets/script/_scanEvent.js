import { scanner } from "./index.js";

/**
 * error
 * display error msg if scan failed
 */
export function error() 
{
    document.querySelector('#error').textContent = 'Une erreur est survenue !';
}



/**
 * success
 * @param {*} reference 
 * add in localStorage a value and his quantity
 * change text in DOM
 */
export function success(
        reference,
    ) 
{
    restart();
    if (localStorage.getItem(reference) === null) {
        localStorage.setItem(reference,1);
    } else {
        let stock = parseInt(localStorage.getItem(reference));
        localStorage.setItem(reference, stock+1);
    }
    document.querySelector('#btnSection').setAttribute('reference' , reference);
    document.querySelector('#result').textContent =`Référence : ${reference}`;
    document.querySelector('#count').textContent =`Compté : ${localStorage.getItem(reference)}`;
    document.querySelector('#error').textContent ='';
}



/**
 * restart
 * restart scan
 */
export function restart() {
    console.log('restart');
    scanner.clear();
    scanner.render(success,error);
}



