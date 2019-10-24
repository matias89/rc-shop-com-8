const _body = document.getElementsByTagName('body');
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

    function createModal(container, row, col, modal, ) {
       const _modalContainer = createElement('div', 'modalContainer', 'container', false);
       const _rowContainer = createElement('div', '', 'row', false);
       const _colContainer = createElement('div', '', 'col-6', false);
       console.log(_modalContainer)
    }

    return {
        testMethod,
        createElement,
        createModal
    }
})(shop);

view.testMethod();
view.createModal();