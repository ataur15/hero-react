let shoppingCart = {};

/**
 * add data to the lcoalstorage
 * @param {*} id
 */
const addToDb = id => {
    const exists = localStorage.getItem('shopping_cart');

    if (!exists) {
        shoppingCart[id] = 1;
    }
    else {
        shoppingCart = JSON.parse(exists)
        if (shoppingCart[id]) {
            const newCount = shoppingCart[id] + 1;
            shoppingCart[id] = newCount;
        }
        else {
            shoppingCart[id] = 1;
        }
    }
    localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart));
    // console.log(shopping_cart);
}

/**
 * delete data from the localstorage
 * @param {*} id
 * @returns
 */
const deleteDb = id => {
    const exists = localStorage.getItem('shopping_cart');
    if (!exists) {
        return;
    }
    else {
        shoppingCart = JSON.parse(exists);
        delete shoppingCart[id];
        localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart));
    }
}

export { addToDb, deleteDb }