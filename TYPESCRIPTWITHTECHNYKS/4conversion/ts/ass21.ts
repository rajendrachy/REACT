type Product = {
    id: number;
    name: string;
    price: number;
};

const products: Product[] = [
    { id: 1, name: "Laptop", price: 1200 },
];

function logProducts(products: Product[]): void {
    products.forEach(product => {
        console.log(`Name: ${product.name}, Price: $${product.price}`);
    });
}

logProducts(products);
