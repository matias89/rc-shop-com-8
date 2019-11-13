const view = (shop => {
    const _modalContainer = document.getElementById('modalContainer');
    const _spinnerContainer = document.getElementById('spinnerContainer');
    const createElement = (elementType, id, className, events, placeholder, content = '', htmlFor, src, type ) => {
        const element = document.createElement(elementType);
        // element.innerText = content;
        if (events && events.length) {
            for (let i = 0; i < events.length; i++) {
                const event = events[i];
                element[event.type] = event.method;
            }
        }
        if (placeholder) {
            element.placeholder = placeholder;
        }
        if (id) {
            element.id = id;
        }
        if (className) {
            element.className = className;
        }
        if (elementType === 'input') {
            if (type) {
                element.type = type;
            } else {
                element.type = 'text';
            }
            if (type === 'number') {
                element.min = 1;
            }
            if (content) {
                element.value = content;
            }
            element.placeholder = placeholder;
            element.id = id;
        } 
        if (htmlFor) {
            element.htmlFor = htmlFor;
        } else if (elementType === 'label') {
            element.For = id;
        }
        if (elementType === 'img') {
            element.src = src;
        }
        if ((elementType === 'p' || elementType === 'h1' || elementType === 'h2' || elementType === 'h3' ||
            elementType === 'h4' || elementType === 'h5' || elementType === 'h6' || elementType === 'a' || elementType === 'button' || elementType === 'td' || elementType === 'div') && content ) {
            element.innerHTML = content;
        }
        return element;
    }
    // This function create a modal window with Bootstrap Classes
    const createModal = () => {
        const _modalRow = createElement('div', '', 'row', false);
        const _modalCol = createElement('div', '', 'col-md-12', false);
        const _modalBox = createElement('div', 'modalBox', 'modal fade');
        const _modalDialog = createElement('div', '', 'modal-dialog modal-dialog-centered modal-lg');
        const _modalContent = createElement('div', '', 'modal-content');
        const _modalHeader = createElement('div', 'modalHeader', 'modal-header');
        const _modalBody = createElement('div', 'modalBody', 'modal-body');
        const _modalFooter = createElement('div', 'modalFooter', 'modal-footer');
        const _modalImage = createElement('img', 'modalImage', 'w-50 m-auto');
        const _modalMessage = createElement('h3', 'modalMessage', 'text-justify, font-weight-bold', );
        const closeModal = createElement('button', 'modalBtn', 'btn btn-danger close', false, false, 'Continue');
        closeModal.type = 'button';
        closeModal.setAttribute('data-dismiss', 'modal');
        if (_modalContainer) {
        _modalContainer.appendChild(_modalRow);
        _modalRow.appendChild(_modalCol);
        _modalCol.appendChild(_modalBox);
        _modalBox.appendChild(_modalDialog)
        _modalContent.appendChild(_modalHeader);
        _modalContent.appendChild(_modalBody);
        _modalContent.appendChild(_modalFooter);
        _modalHeader.appendChild(_modalImage);
        _modalBody.appendChild(_modalMessage);
        _modalFooter.appendChild(closeModal);
        }
        return _modalRow;
    }
    //This function modified content inside the modal
    const showModal = status => {
        const modal = createModal();
        const _modalImage = document.getElementById('modalImage');
        const _modalMessage = document.getElementById('modalMessage');
        const _modalBtn = document.getElementById('modalBtn');
        if (status) {
            if (_modalMessage) {
                _modalImage.src = './img/success.png';
                _modalMessage.classList.add('text-success');
                _modalMessage.innerHTML = 'Su compra ha sido un éxito';
            }
            _modalBtn.textContent = 'Continue';
        } else {
            if (_modalMessage) {
                _modalImage.src = './img/error.png';
                _modalMessage.classList.add('text-danger');
                _modalMessage.innerHTML = 'Ocurrió un error, intente de nuevo.';
            }
            _modalBtn.textContent = 'Intente de Nuevo';
        }
        return modal;
    }
    const createSpinner = () => {
        const _spinner = createElement('div', 'spinner', 'spinner-border text-primary d-none');
        if (_spinnerContainer) {
            _spinnerContainer.appendChild(_spinner);
        }
        return _spinner
    }
    const showSpinner = () => {
        createSpinner();
        const _spinner = document.getElementById('spinner');
        _spinner.classList.remove('d-none');
    }
    const hideSpinner = () => {
        const _spinner = document.getElementById('spinner');
        _spinner.classList.add('d-none');
    }
// Promise to simulate buying process
const toggleModal = () => {
    showSpinner();
    return new Promise((resolve, reject) => {
        const num = (new Date()).toLocaleTimeString().substr(-1);
        setTimeout(() => {
            hideSpinner();
        }, 1500)
        if (num > 5) {
            resolve();
        } else {
            reject(error);
        }
    })
<<<<<<< HEAD
}
    const createItem = () => {
        const divContainer = createElement('div', false, 'carousel-item');
        const img = createElement('img', false, 'd-block w-100', false, false, 'https://fravega.vteximg.com.br/arquivos/ids/6191779-1000-1000/celular-liberado-samsung-galaxy-s10e-azul-781304.jpg');
=======

}
    const createItem = (isActive = '', imgPath) => {
        const divContainer = createElement('div', false, 'carousel-item ' + isActive);
        const img = createElement('img', false, 'd-block w-100', false, false, false, false, `products/${imgPath}`);
>>>>>>> 8528ea3bf382cf829baf46a6a979b349641869c3
        divContainer.appendChild(img);
        const divSubContainer = createElement('div',false,'carousel-caption d-none d-md-block');
        divContainer.appendChild(divSubContainer);
        return divContainer;
    }

    const createDetailProduct = () => {
        const detailContainer = document.getElementById('detail');
        for (let i = 0; i < 10; i++) {
            const divRow1 = createElement('div', false, 'row');
            const TitleH = createElement('h3', false, 'h3')
            const hrLine = createElement('hr',false, 'hr');
            divRow1.appendChild(TitleH);
            divRow1.appendChild(h3);
            divRow1.appendChild(hrLine);
            const divRow2 = createElement('div', false, 'container')
        }
    }
    
    const createProductsRow = products => {
        const el = document.getElementById('cards-list');
        const rowCard = document.getElementById('rowCard');
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const detail = 'This is a description';
            const card = createCard(product.model, detail, product.price, product.images, product.id);
            rowCard.appendChild(card);
            
        }
        el.appendChild(row);
    }
    const createCard = (cardTitle, body, price, images, id) => {
        let cardImg = './images/default-img.jpg';
        if (images.length) {
            cardImg = `products/${images[0]}`;
        }
        const cardContainer = createElement('div', '', 'col-4', false, false, false, false);
        const cardDeck = createElement('div', '', 'card-deck', false, false, false, false);
        cardDeck.style.marginRight = '10px';
        const card  = createElement('div', '', 'card mb-2', false, false, false, false);
        // card.style.height = '700px';
        const cropImg = createElement('div');
        cropImg.style.height = '200px';
        cropImg.style.overflow = 'hidden';
        const img = createElement('img', '', 'card-img-top img-fluid',false, false, false, false, cardImg);
        cropImg.appendChild(img);
        const cardB = createElement('div', '', 'card-body', false, false, false, false);
        const a = createElement('a', '', '', false, false, cardTitle, false);
        const title = createElement('h5', '', 'card-title', false, false, '');
        a.href = `./detail.html#${id}`;
        title.appendChild(a);
        const text  = createElement('p','','card-text', false, false, body, false);
        const textS = createElement('h3', '', 'badge badge-secondary', false, false, ` $${price.toFixed(2)} `, false);
        card.appendChild(cropImg);
        card.appendChild(cardB);
        cardB.appendChild(title);
        cardB.appendChild(text);
        cardB.appendChild(textS);
        cardContainer.appendChild(cardDeck)
        cardDeck.appendChild(card);
        //const cardId =  document.getElementById('cardId');
        //cardId.appendChild(cardDeck);
        return cardContainer
    }
<<<<<<< HEAD
=======

    const buildCarouselItems = (images) => {
        const renderArea = document.getElementById('productDetail');
        for (let i = 0 ; i < images.length; i++) {
            const img = images[i];
            if (i === 0) {
                const item = createItem('active', img);
                renderArea.appendChild(item);
            } else {
                const item = createItem('', img);
                renderArea.appendChild(item);
            }
        }
    }

    const createDetailView = id => {
        const requestProduct = shop.getProduct(id);
            requestProduct
                .then(product => {
                    let cant = checkedShoppingCart(id);
                    if (cant) {
                        cant += 1;
                        shop.updateProduct(product.id, cant);
                    } else {
                        shop.addProduct(product);
                    }
                })
    }
     const checkedShoppingCart = id => {
         const productsCart = shop.getProductsCart();
         let cant;
        if (productsCart) {
            for (let i = 0; i < productsCart.length; i ++) {
                console.log(productsCart[i], id)
                if (productsCart[i].id === parseInt(id)) {
                    cant = productsCart[i].cant;
                }
            }
        }
        return cant;
    }
                
    const buildItemsFromCart = () => {
        const tBody = document.getElementById('product-list-from-cart');
        const productsFromCart = shop.getProductsCart();
        for (let i = 0; i < productsFromCart.length; i++) {
            const product = productsFromCart[i];
            let img = './images/default-img.jpg';
            if (product.images.length) {
                img = `products/${product.images[0]}`;
            }
            const item = buildItemFromCart(`${product.brand} ${product.model}`, product.price, product.id, product.cant, img);
            tBody.appendChild(item);
        }
    }

    const buildItemFromCart = (productName, price, id, cant, prodImage) => {
        const inputEvents = [{
            type: 'onchange',
            method: event => {
                const v = event.target.value;
                shop.updateProduct(id, v);
            }
        }];
        const buttonEvents = [{
            type: 'onclick',
            method: ev => {
                if(confirm('Realmente deseas quitar el producto?')) {
                    const myRow = document.getElementById('row_item_' + id);
                    myRow.style.display = 'none';
                    shop.removeProduct(id);
                }
            }
        }];
        const tr = createElement('tr', 'row_item_' + id);
        const td1 = createElement('td');
        const img = createElement('img', false, 'img-fluid', false, false, false, false, prodImage);
        td1.appendChild(img);
        const td2 = createElement('td', false, false, false, false, productName);
        const td3 = createElement('td');
        const input = createElement('input', false, 'form-control', inputEvents, 'cantidad', cant, false, false, 'number');
        input.style.width = '60px';
        td3.appendChild(input);
        const td4 = createElement('td', false, false, false, false, `$${price}`);
        const td5 = createElement('td');
        const btn = createElement('button', false, 'btn btn-danger', buttonEvents, false, 'Eliminar');
        td5.appendChild(btn);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        return tr;
    }
    const buildSecondFromCart = () => {
        const buttonevent1 = [{
            type: 'onclick',
            method: b => {
                shop.confirmProduct();
            }
        }
        ];
        const buttonevent2 = [{
            type: 'onclick',
            method: v => {
                
            }
        }];
        const buttonevent3 = [{
            type: 'onclick',
            method: () => {
                //shop.clearproducts();
                console.log('>>> ToggleModal');
                toggleModal();
            }
        }]
        const viewbutton = document.getElementById('view_button');
        const btn1 = createElement('button', false, 'btn btn-primary px-3 mt-3', buttonevent3, false, 'Finalizar Compra', false, false , 'button');
        const btn2 = createElement('button', false, 'btn btn-outline-primary px-3 mt-3', buttonevent2, false, 'Seguir comprando');
        const btn3 = createElement('button', false, 'btn btn-light px-3 mt-3', false, false, 'Cancelar Compra', false, false, false);
        viewbutton.appendChild(btn1);
        viewbutton.appendChild(btn2);
        viewbutton.appendChild(btn3);
    }

    const addProductToCart = () => {
        console.log('TEST');
    }

    const buildDetailView = id => {
        const requestProduct = shop.getProduct(id);
        requestProduct.then(product => {
            buildCarouselItems(product.images);
            const r = document.getElementById('product-detail');
            let detail = '';
            for (let i = 0; i < product.details.length; i++) {
                const d = product.details[i];
                if (d.value) {
                    detail = `${detail} - ${d.type}: ${d.value}`;
                }
            }
            const content = `
                <h3>${product.brand} ${product.model}</h3>
                <p>${detail.substr(2)}</p>
                <hr>
                <div>
                    <p>Precio en un pago</p>
                    <h3>$${product.price}</h3>                   
                    <div class="row mt-2">
                        <div class="col-sm-4">
                            <img src="http://fravega.com/arquivos/full-card-visa.png" alt="">
                        </div>
                        <div class="col-sm-8">
                            <h6 class="pt-2">${product.payment.payments} cuotas sin interés de $${product.payment.price_payment}</h6>
                        </div>
                    </div>                
                </div>
            `;
            const myEvent = [{
                type: 'onclick',
                method: () => {
                    shop.addProduct(product);
                    location.replace('./cart.html');
                }
            }];
            const el = createElement('div', false, false, false, false, content);
            const btn = createElement('button', false, 'btn btn-primary btn-block', myEvent, false, 'Comprar');
            r.appendChild(el);
            r.appendChild(btn);
        });
    }
>>>>>>> 8528ea3bf382cf829baf46a6a979b349641869c3
    return {
        createModal,
        createElement,
        toggleModal,
        showModal,
        buildCarouselItems,
        createSpinner,
        createProductsRow,
        createDetailView,
        buildItemsFromCart,
        buildSecondFromCart,
        buildDetailView,
        addProductToCart
    }
<<<<<<< HEAD
})(shop);
=======
})(shop);
>>>>>>> 8528ea3bf382cf829baf46a6a979b349641869c3
