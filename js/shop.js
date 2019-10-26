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
    const addProduct = (product) => {
        const products = product;
            if(products){
                setItem("products",products);
            } else {
                console.log("No hay productos")
            }  
    }
    const removeProduct = () => {
        localStorage.removeItem(key);
    }
    const view = (prod) => {
       
    }

    const setItem = (key,valor) => {
        localStorage.setItem(key,JSON.stringify(valor));
        console.log("key",valor);
    }

    const getItem = (key) =>{
        localStorage.getItem(JSON.parse(key));
    }
    return {
        getProduct,
        getProducts,
        addProduct,
        testMethod
    }
})();

shop.getProducts();
shop.getProduct(3);
shop.addProduct();
  

 


   

