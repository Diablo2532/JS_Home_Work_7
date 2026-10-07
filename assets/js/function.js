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

const meatProducts = getProductsByCategory(
    products,
    "М'ясо та м'ясні вироби"
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

function findCheapestAndMostExpensiveProducts(array) {
    const cheapestProduct = array.reduce((cheapest, product) => {
        return product.price < cheapest.price ? product : cheapest;
    });

    const mostExpensiveProduct = array.reduce((mostExpensive, product) => {
        return product.price > mostExpensive.price ? product : mostExpensive;
    });

    return {
        cheapestProduct,
        mostExpensiveProduct
    };
}
const cheapestAndExpensive = findCheapestAndMostExpensiveProducts(products);
console.table(cheapestAndExpensive);

const averagePrice = meatProducts.reduce(
    (sum, product) => sum + product.price,
    0
) / meatProducts.length;

console.log("Середня ціна:", averagePrice);
function ageUper(item, age) {
    const hasName = Object.prototype.hasOwnProperty.call(item, "name");
    const hasAge = Object.prototype.hasOwnProperty.call(item, "age");

    if (!hasName || !hasAge) {
        return false;
    }

    return item.age > age;
}

const ageUperThen = users.filter(item => ageUper(item, 25));
console.table( ageUperThen);
