function getProductsByCategory(array, category) {
    const result = [];

    for (let index = 0; index < array.length; index += 1) {
        if (array[index].category === category) {
            result.push(array[index]);
        }
    }

    return result;
}

const vegetablesAndFruits = getProductsByCategory(
    products,
    "Овочі та фрукти"
);

const milkProducts = getProductsByCategory(
    products,
    "Молочні продукти"
);

const totalQuantity = vegetablesAndFruits.reduce(
    (sum, product) => sum + product.quantity,
    0
);

const totalPrice = milkProducts.reduce(
    (sum,product) => sum + (product.quantity * product.price),0 
);

console.table(vegetablesAndFruits);
console.log("Загальна кількість:", totalQuantity);
console.table(milkProducts);
console.log ("Загальна вартість:", totalPrice);



function sortProductsByQuantity(array) {
    return [...array].sort(
        (first, second) => second.quantity - first.quantity
    );
}

const sortedArray = sortProductsByQuantity(products);
console.table(sortedArray);
