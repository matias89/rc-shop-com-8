const view = (shop => {
    const testMethod = () => {
        console.log('Testing view!');
        const hw = shop.testMethod(); // M<ethod from 'shop' module
        console.log(hw);
    }
    const createElement = (elementType, id, className, events, placeholder, content, htmlFor ) => {
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
        } 
        if (htmlfor) {
            element.htmlFor = htmlFor;
        }
        if (elementType === 'p' || elementType === 'h1' || elementType === 'h2' || elementType === 'h3' ||
             elementType === 'h4' || elementType === 'h5' || elementType === 'h6' || elementType === 'a') {
            element.innerHTML = content;
        }
    }
    return {
        testMethod,
        createElement
    }
})(shop);

const addCard = () => {
    const cardContainer = document.getElementById('card');
    const cardDeck = createCards();
    cardContainer.appendChild(createCards);
}

// elementType, id, className, events, placeholder, content
const createCard = (content) => {
    const card  = createElement('div', '', 'card', false, false, '');
    const img   = createElement('img', '', 'card-img-top',false, false, '');
    const cardB = createElement('div', '', 'card-body', false, false, '');
    const title = createElement('h5', '', 'card-title', false, false, content.title);
    const text  = createElement('p','','card-text', false, false, content.text);
    const textS = createElement('small', '', 'text-muted', false, false, content.textS);
    card.appendChild(img);
    card.appendChild(cardB);
    card.appendChild(title);
    card.appendChild(text);
    card.appendChild(textS);
}
// elementType, id, className, events, placeholder, content

const contentCards = (prod) => {
    const row  = createElement('div', '', 'row mb-2', false, false, '');
    const col1 = createElement('div', '', 'col', false, false, '');
    const col2 = createElement('div', '', 'col', false, false, '');
    const col3 = createElement('div', '', 'col', false, false, '');
    const card = createCard(prod);
    col1 = appendChild(card);
    col2 = appendChild(card);
    col3 = appendChild(card);
    row  = appendChild(col1);
    row  = appendChild(col2);
    row  = appendChild(col3);
}

const renderElements = () => {
    const cardsContainer = document.getElementById(render);
    const container = contentCards();
    cardsContainer.appendChild(container);
}

renderElements();
view.testMethod();