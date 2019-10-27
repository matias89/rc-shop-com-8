const shop = (() => {
    const shopKey = 'products';
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
        const products = getItem(shopKey);
            if (products) {
                products.push(product);
                setItem(shopKey, products);
            } else {
                setItem(shopKey, [product]);
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
        console.log(products);
        if (c) {
            products.splice(c, 1);
        }
        console.log(products);
        setItem(shopKey, products);
    }
    const updateProduct = (id,j) => {
       /*const products = getItem(shopKey);
        let c;
        for(let i = 0; i<products.length; i++) {
            if (products[i].id === id){
                c = i;
            }
            if(c){
               
            }
        }*/
    }
    const view = (prod) => {
       
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
        testMethod
    }
})();

//shop.getProducts();
//shop.getProduct(3);
const testProd = {
    "id": 1,
    "category": "phones",
    "brand": "Apple",
    "model": "I Phone X",
    "price": 60000,
    "discount": 0,
    "description": "",
    "images": [
      "./iphone_x/iphonex_1.jpg",
      "./iphone_x/iphonex_2.jpg",
      "./iphone_x/iphonex_3.jpg",
      "./iphone_x/iphonex_4.jpg"
    ],
    "details": {
      "camera": "32 Mp",
      "color": "white",
      "RAM": "8GB",
      "ROM": "64GB"
    },
    "payment": {
      "payments": 6,
      "price_payment": 10000,
      "free_interest": true
    }
  };
//shop.addProduct(testProd);
  //shop.removeProduct(3);
  shop.removeProduct(1);
  shop.updateProduct(1,2);
  

 


   

