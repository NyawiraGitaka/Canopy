import Product from "../models/product";

export const setCart = (product: Product) => {
    let cartItems = getCart() as Product[];
    const findProduct = cartItems.find(item => item.product_id === product.product_id);
    if (findProduct) {
        findProduct.product_quantity += 1;
    } else {
        cartItems.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

export const getCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

export const removeCartItem = (id: string) => {
    let cartItems = getCart() as Product[];
    const newCartItems = cartItems.filter((product) => product.product_id !== id);
    localStorage.setItem('cart', JSON.stringify(newCartItems));
}