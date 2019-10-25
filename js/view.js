const view = (shop => {
    //Select modal container in detail HTML
    const _modalContainer = document.getElementById('modalContainer');
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
        return element;
    }
    const createModal = () => {
        const _modalRow = createElement('div', '', 'row', false, '', '');
        const _modalCol = createElement('div', '', 'col-md-12', false, '', '');
        const _modalBox = createElement('div', 'modalBox', 'modal fade', false, '', '');
        const _modalDialog = createElement('div', '', 'modal-dialog', false, '', '');
        const _modalContent = createElement('div', '', 'modal-content', false, '', '');
        const _modalHeader= createElement('div', '', 'modal-header', false, '', '');
        _modalContainer.appendChild(_modalRow);
        _modalRow.appendChild(_modalCol);
        _modalCol.appendChild(_modalBox);
        _modalBox.appendChild(_modalDialog);
        _modalDialog.appendChild(_modalContent);
        _modalContent.appendChild(_modalHeader);
    }

    return {
        testMethod,
        createModal,
        createElement
    }
})(shop);

view.testMethod();
view.createModal();