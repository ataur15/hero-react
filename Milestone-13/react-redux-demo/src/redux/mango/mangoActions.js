const buyMango = (number = 1) => {
    return {
        type: 'BUY_MANGO',
        payload: number
    }
}

export default buyMango;