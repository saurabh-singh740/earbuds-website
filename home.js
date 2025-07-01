
let cart = [];


function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(productName + " has been added to your cart!");
}


function showCart() {
    let cartSummary = "Your Cart:\n\n";
    let total = 0;
    cart.forEach(item => {
        cartSummary += item.name + " - $" + item.price.toFixed(2) + "\n";
        total += item.price;
    });
    cartSummary += "\nTotal: $" + total.toFixed(2);
    alert(cartSummary);
}