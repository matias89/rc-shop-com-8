const shop = (() => {
    const getProducts = () => {
        fetch('http://localhost:3000/products')
            .then(response => {
                response.json()
                    .then(products => {
                        console.log(products);
                    })
            });
    }
    const getProduct = id => {
        fetch(`http://localhost:3000/products/${id}`)
            .then(response => {
                response.json()
                    .then(products => {
                        console.log(products);
                    })
            });
    }
    const testMethod = () => {
        return 'Hello World!';
    }
    return {
        getProduct,
        getProducts,
        testMethod
    }
})();

shop.getProducts();
shop.getProduct(3);