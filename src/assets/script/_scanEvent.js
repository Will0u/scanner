import { editCountHtml } from "./_functions.js";
import { scanner } from "./index.js";

/**
 * error
 * display error msg if scan failed
 */
export function error() 
{
    document.querySelector('#error').style.display = 'block';
    document.querySelector('iframe').style.display = 'none';
    document.querySelector('.intelContainer').style.display = 'none';
}



/**
 * success
 * @param {*} reference 
 * add in localStorage a value and his quantity
 * change text in DOM
 */
export function success(reference) 
{
    if (localStorage.getItem(reference) === null) {
        localStorage.setItem(reference,1);
    } else {
        let stock = parseInt(localStorage.getItem(reference));
        localStorage.setItem(reference, stock+1);
    }
    document.querySelectorAll('#operatorBtn').forEach(button => {
        button.disabled = false;
    });

    document.querySelector('#error').style.display = 'none';

    document.querySelector('iframe').style.display = 'block';
    document.querySelector('.intelContainer').style.display = 'block';

    document.querySelector('#btnSection').setAttribute('reference' , reference);
    document.querySelector('#result').textContent =`Référence : ${reference}`;
    editCountHtml(localStorage.getItem(reference));
    displayImage(reference)
    scanner.clear();
}



/**
 * scanBtn
 * allow scanBtn
 */
export function scanBtn() 
{
    document.querySelector('#scanBtn').addEventListener('click' , () => {
        scanner.render(success , error);
    });
}


/**
 * 
 * @param {*} reference 
 * displayImg in link DOM
 */
function displayImage(reference) 
{
    document.querySelector('#link').src = `https://go-upc.com/search?q=${reference}`;
}
