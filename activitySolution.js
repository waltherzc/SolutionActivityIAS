const products = [{
        productId: 1,
        name: "headphones",
        category: 1,
        price: 100,
    },
    {
        productId: 2,
        name: "Shoes Nike",
        category: 2,
        price: 300,
    },
    {
        productId: 3,
        name: "hamburger",
        category: 3,
        price: 10,
    },
    {
        productId: 4,
        name: "Fries",
        category: 3,
        price: 5,
    },
    {
        productId: 5,
        name: "Sandwich",
        category: 3,
        price: 10,
    },
    {
        productId: 6,
        name: "laptop",
        category: 1,
        price: 100,
    },
    {
        productId: 7,
        name: "keyboard",
        category: 1,
        price: 50,
    },
    {
        productId: 8,
        name: "t-shirt",
        category: 2,
        price: 16,
    },
];

const categories = [
    { id: 1, name: "Electronic" },
    { id: 2, name: "Clothes" },
    { id: 3, name: "Food" }
];

const discountsHolyDays = [
    { category: 1, discountApply: true, value: 10 },
    { category: 2, discountApply: false, value: 0 },
    { category: 3, discountApply: true, value: 30 },
];

//// Activity

// cada solución debe de crearse con metodo que retorne el resultado esperado de cada punto
// y su llamda del metodo con un console.log donde muestre la información

/// 1 - ¿Cuál es el promedio de valor de cada tipo de producto?

const averageAllCategories = () => {

    let averageByCategoryResult = [];

    function AverageByCategory(idCategory) {
        reduceCategory = function(prev, actual) {
            return prev + actual;
        };
        return products.filter((product) => {
            return product.category === idCategory;
        }).map((product) => {
            return product.price;
        }).reduce(reduceCategory);
    }

    averageByCategoryResult.push(AverageByCategory(1));
    averageByCategoryResult.push(AverageByCategory(2));
    averageByCategoryResult.push(AverageByCategory(3));

    return averageByCategoryResult;
}

console.log(averageAllCategories());

/// 2 - ¿Cuál es el producto más costoso de cada categoria?

const productMoreExpensiveByCategory = () => {

    let productMoreExpensive = [];
    let productsMoreExpensive = [];

    function lookCategoryById(idCategory) {

        return products.filter((product) => {
            return product.category === idCategory;
        }).sort((a, b) => {
            return b.price - a.price;
        });
    }

    function findProductMoreExpensiveOfProducts(id) {
        productMoreExpensive = lookCategoryById(id);

        return products.filter((product) => {
            return product.category === id;
        }).find(product =>
            product.price === productMoreExpensive[0].price).name;
    }

    productsMoreExpensive.push(findProductMoreExpensiveOfProducts(1));
    productsMoreExpensive.push(findProductMoreExpensiveOfProducts(2));
    productsMoreExpensive.push(findProductMoreExpensiveOfProducts(3));

    return productsMoreExpensive;

}

console.log(productMoreExpensiveByCategory());


/// 3 - ¿Exite algún producto de tipo Electronico que cueste $100?

function ExistElectronicProductByCost100() {

    const product = products.filter((product) => {
        return product.category === 1;
    }).map(product => {
        if (product.price === 100) {
            return product
        }
    });


    return product.toString().length > 10;
}

console.log(ExistElectronicProductByCost100());
/// 4 - Obtener todos los productos que en nombre tengan las letra S.

const productsContainsLetterSByName = () => {

    const products = [];

    products.map(product => {
        if (product.name.toLowerCase().indexOf("s") >= 0) {
            products.push(product.name);
        }
    });

    return products;

}

console.log(productsContainsLetterSByName());

/// 5 - Crear un arreglo de objetos con la siguiente información: { productId: 7 ,nameProduct: 'keyboard', category: 'Electronic', discount: '10', applyDiscount: true}
const discountData = discountsHolyDays[0];

const createArrayObject = () => {
    return arrayObject = [{
        productId: 7,
        nameProduct: 'keyboard',
        discountData

    }];

}

console.log(createArrayObject());

/// 6. Crear un arreglo de objetos con la siguiente información: { productId: 7, priceWithDiscount: 45}

arrayObject = [{
    productId: 7,
    priceWithDiscount: 45
}];



console.log(arrayObject);

// 7. Agregar los siguientes productos, y crear un arreglo con el resultado, ejemplo: [{id: 9, status: 'succes', id:10: status: 'error': message: 'error message'}];
// errors: duplicated key

const newProducts = [{
    id: 9,
    name: 'Tucson',
    typeOfProcuct: 'Car',
    discount: 10,
}, {
    id: 10,
    name: 'Jeep',
    typeOfProcuct: 'Car',
    discount: 10,
}, {
    id: 10,
    name: 'Screen',
    typeOfProcuct: 'Electronic'
}, {
    id: 1,
    name: 'Mouse',
    typeOfProcuct: 'Electronic'
}]

const ids = [];

newProducts.forEach((product) => {
        ids.push(product.id);

        if (!ids.includes(product.id)) {
            arrayObject.push(product);
        } else {
            arrayObject.push({
                id: product.id,
                status: 'error',
                message: 'duplicated key'
            });
        }
    }

);

console.log(arrayObject);