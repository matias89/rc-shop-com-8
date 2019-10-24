const view = (shop => {
    const testMethod = () => {
        console.log('Testing view!');
        const hw = shop.testMethod(); // M<ethod from 'shop' module
        console.log(hw);
    }
    const createElement = (elementType, id, className, events, placeholder, content ) => {
        const element = document.createElement(elementType);
        element.innerText= content;
        if (events.length) {
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
        } else if (elementType === 'label') {
            element.for = id;
        }
        if (elementType === 'p' || elementType === 'h1' || elementType === 'h2' || elementType === 'h3' ||
             elementType === 'h4' || elementType === 'h5' || elementType === 'h6' || elementType === 'a') {
            element.innerHTML = content;
        }
    }
    return {
        testMethod;
        createElement;
    }
})(shop);

const addCard = () => {
    const cardContainer = document.getElementById('card');
    const cardDeck = createCards();
    cardContainer.appendChild(createCards);
}

const createCards = () => {
    const card  = createElement('div', '', 'card', '', '');
    const img   = createElement('img', '', 'card-img-top','', '');
    const cardB = createElement('div', '', 'card-body', '', '');
    const title = createElement('h5', '', 'card-title', '', 'Titulo de la card');
    const text  = createElement('p','','card-text', '', 'Contenido de la card');
    const textS = createElement('small', '', 'text-muted', '', 'Texto small');
    card.appendChild(img);
    card.appendChild(cardB);
    card.appendChild(title);
    card.appendChild(text);
    card.appendChild(textS);
}

view.testMethod();