import { editCountHtml, getStockFromLocal } from "./_functions";


/**
 * operator
 * add or remove 1 from reference's stock
 */
export function operator() 
{
    let operatorData = this.getAttribute('operator');
    let reference = document.querySelector('#btnSection').getAttribute('reference');
    let stock = getStockFromLocal(reference);
    if (operatorData === 'add') {
        localStorage.setItem(reference,stock+1);
    } else if (operatorData === 'minus') {
        localStorage.setItem(reference,stock-1);
    }
    editCountHtml(localStorage.getItem(reference));
}



/**
 * operatorBtn
 * allow operatorBtn
 */
export function operatorBtn() 
{
    document.querySelectorAll('#operatorBtn').forEach(btn => {
        btn.addEventListener('click',operator);
    });
}