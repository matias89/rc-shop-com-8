const shop = (() => {
    const shopKey = 'products';
    const getProducts = () => {
        return fetch('http://localhost:3000/products')
            .then(response => {
                return response.json()
                    .then(products => {
                        return products;
                    })
            });
    }    
    const getProduct = id => {
        return fetch(`http://localhost:3000/products/${id}`)
            .then(response => {
                return response.json()
                    .then(products => {
                        return products;
                    });
            });
    }
    const addProduct = (product) => {
        const productExists = updateProduct(product.id);
        if (!productExists) {
            product.cant = 1;
            const products = getItem(shopKey);
            if (products) {
                products.push(product);
                setItem(shopKey, products);
            } else {
                setItem(shopKey, [product]);
            }
        }
    }
    const removeProduct = (id) => {
        const products = getItem(shopKey);
        let c;
        for(let i = 0; i < products.length ; i++){
            if (products[i].id === id) {
                c = i;
            }
        }
        if (c) {
            products.splice(c, 1);
            setItem(shopKey, products);
        }
    }
    const updateProduct = (id, cant) => {
        const products = getItem(shopKey);
        let flag = false;
        if (products) {
            for( let i = 0; i < products.length; i++){
                if(products[i].id === id ){
                    if (cant) {
                        products[i].cant = cant;
                    } else {
                        products[i].cant = products[i].cant + 1;
                    }
                    flag = true;
                }
            }
            if (flag) {
                setItem(shopKey,products);
            }
        }
        return flag;
   }
   const clearproducts = () => { 
        const products = getItem(shopKey);
        if(products) {
          localStorage.clear(products);
        }
   }
    const confirmProduct = () => {
        return getItem(shopKey);
    }
    const getProductsCart = () => {
        return getItem(shopKey);
    }
    const setItem = (key,valor) => {
        localStorage.setItem(key,JSON.stringify(valor));
    }
    const getItem = (key) => {
        return JSON.parse(localStorage.getItem(key));
    }
    return {
        getProduct,
        getProducts,
        addProduct,
        removeProduct,
        updateProduct,
        clearproducts,
        confirmProduct,
        getProductsCart
    }
})();
// shop.getProducts();
// shop.getProduct(3);


 


   

