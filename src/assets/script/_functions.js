/**
 * getStockFromLocal
 * @param {*} reference 
 * @returns int
 * return the reference's stock
 */
export function getStockFromLocal(reference) 
{
    return parseInt(localStorage.getItem(reference));
}


/**
 * editCountHtml
 * @param {*} number 
 * edit count id in DOM
 */
export function editCountHtml(number) 
{
    document.querySelector('#count').textContent = `Compté : ${number}`;
}