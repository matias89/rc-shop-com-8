const view = (shop => {
    const testMethod = () => {
        console.log('Testing view!');
        const hw = shop.testMethod(); // M<ethod from 'shop' module
        console.log(hw);
    }
    const createElement = (elementType, id, className, events, placeholder, content ) => {
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
            element.placeholder = placeholder ;
            element.id = id;
        } 
        if (htmlFor) {
            element.htmlFor = htmlFor;
        } else if (elementType === 'label') {
            element.For = id;
        }
        if (elementType === 'img') {
            element.src = content;
        }
        if (elementType === 'p' || elementType === 'h1' || elementType === 'h2' || elementType === 'h3' ||
             elementType === 'h4' || elementType === 'h5' || elementType === 'h6' || elementType === 'a') {
            element.innerHTML = content;
        }
        return element;
    }
    const createCard = () => {
        const cardDeck = createElement('div', '', 'card-deck', false, false, false, false);;
        const card  = createElement('div', '', 'card', false, false, false, false);
        const img   = createElement('img', '', 'card-img-top',false, false, false, 'https://i1.wp.com/www.sopitas.com/wp-content/uploads/2019/01/boo-perrito-lindo-1120x581.jpeg');
        const cardB = createElement('div', '', 'card-body', false, false, false, false);
        const title = createElement('h5', '', 'card-title', false, false, 'Esto es un titulo', false);
        const text  = createElement('p','','card-text', false, false, 'Esto es un texto', false);
        const textS = createElement('p', '', 'text-muted small', false, false, 'Esto es un texto small', false);
        card.appendChild(img);
        card.appendChild(cardB);
        cardB.appendChild(title);
        cardB.appendChild(text);
        cardB.appendChild(textS);
        cardDeck.appendChild(card);
        const cardId =  document.getElementById('cardId');
        cardId.appendChild(cardDeck);
        return cardDeck
    }
    const createItem = () => {
        const divContainer = createElement('div', false, 'carousel-item');
        const img = createElement('img', false, 'd-block w-100', false, false, 'https://fravega.vteximg.com.br/arquivos/ids/6191779-1000-1000/celular-liberado-samsung-galaxy-s10e-azul-781304.jpg');
        divContainer.appendChild(img);
        const divSubContainer = createElement('div',false,'carousel-caption d-none d-md-block');
        divContainer.appendChild(divSubContainer);
        const label1  = createElement('h5',false, 'h5', false, false, 'First slide label');
        divContainer.appendChild(label1);
        const paragraph = createElement('p',false, 'p', false, false, 'Nulla vitae elit libero, a pharetra augue mollis interdum.');
        divContainer.appendChild(paragraph);
        return divContainer;
    }
    const buildCarouselItems = () => {
        const renderArea = document.getElementById('productdetail');
        const item = createItem();
        renderArea.appendChild(item);
    }
    return {
        createElement,
        buildCarouselItems,
        createCard
    }
})(shop);

view.buildCarouselItems();
