/**
 * getStockFromLocal
 * @param {*} reference 
 * @returns int
 * return the reference's stock
 */
export function getStockFromLocal(reference) {
    return parseInt(localStorage.getItem(reference));
}