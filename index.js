class Product {
    category;
    name;
    price;
    availableStock;

    constructor(category, name, price, availableStock) {
        this.category = category;
        this.name = name;
        this.price = price;
        this.availableStock = availableStock;
    }
}

function getProducts() {
    return [
        new Product("Livre", "Titre_1", 25, 0),
        new Product("Livre", "Titre_2", 55, 45),
        new Product("DVD", "Titre_3", 5, 13),
        new Product("Plateau", "Titre_4", 15, 0)
    ];
}

function getPriceOverTwenty() {
    let products = getProducts();
    const result = products.filter((p) => p.price > 20);
    console.log(result);
    return;
}

function getAvailableBooks() {
    const result = getProducts().filter((p) => p.category === "Livre" && p.availableStock > 0);
    console.log("Livres disponibles en stock :");
    console.log(result);
}

window.addEventListener('load', () => {
    getPriceOverTwenty();
    getAvailableBooks();
});