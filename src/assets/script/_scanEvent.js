import { editCountHtml } from "./_functions.js";
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
export function success(reference) 
{
    if (localStorage.getItem(reference) === null) {
        localStorage.setItem(reference,1);
    } else {
        let stock = parseInt(localStorage.getItem(reference));
        localStorage.setItem(reference, stock+1);
    }
    document.querySelector('#btnSection').setAttribute('reference' , reference);
    document.querySelector('#result').textContent =`Référence : ${reference}`;
    editCountHtml(localStorage.getItem(reference));
    document.querySelector('#error').textContent ='';
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



function displayImage(reference) {
    let refStart = reference.substr(0,5);
    // https://images.barcodelookup.com/81709/817092613-1.jpg
    document.querySelector('#link').src = `https://images.barcodelookup.com/${refStart}/${reference}-1.jpg`;
}