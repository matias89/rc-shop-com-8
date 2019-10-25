const view = (shop => {
    //Select modal container in detail HTML
    const _modalContainer = document.getElementById('modalContainer');
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
        return element;
    }
    // This function create a modal window with Bootstrap Classes
    const createModal = () => {
        const _modalRow = createElement('div', '', 'row', false, '', '', '');
        const _modalCol = createElement('div', '', 'col-md-12', false, '', '', '');
        const _openBtn = createElement('button', 'openBtn', 'btn btn-primary', false, '', 'Open Modal', '')
        const _modalBox = createElement('div', 'modalBox', 'modal fade', false, '', '', '');
        const _modalDialog = createElement('div', '', 'modal-dialog modal-dialog-centered modal-lg', false, '', '', '');
        const _modalContent = createElement('div', '', 'modal-content', false, '', '', '');
        const _modalHeader = createElement('div', 'modalHeader', 'modal-header', false, '', '', '');
        const _modalBody = createElement('div', 'modalBody', 'modal-body', false, '', '', '');
        const _modalFooter = createElement('div', 'modalBody', 'modal-footer', false, '', '', '');
        const _modalIcon = createElement('i', 'modalIcon', '', false, '', '', '');
        const _modalMessage = createElement('h3', 'modalMessage', 'text-justify, font-weight-bold', false, '', '', '');
        const closeModal = createElement('button', 'modalBtn', 'btn btn-danger', false, '', 'Continue', '');
        closeModal.type = 'button';
        closeModal.setAttribute('data-dismiss', 'modal');
        _modalContainer.appendChild(_modalRow);
        _modalRow.appendChild(_modalCol);
        _modalCol.appendChild(_modalBox);
        _modalRow.appendChild(_openBtn);
        _modalBox.appendChild(_modalDialog);
        _modalDialog.appendChild(_modalContent);
        _modalContent.appendChild(_modalHeader);
        _modalContent.appendChild(_modalBody);
        _modalContent.appendChild(_modalFooter);
        _modalHeader.appendChild(_modalIcon);
        _modalBody.appendChild(_modalMessage);
        _modalFooter.appendChild(closeModal);
        return _modalRow;
    }
    //This function modified content inside the modal
    const showModal = (success, error) => {
        const modal = createModal();
        const _icon = document.getElementById('modalIcon');
        const _modalMessage = document.getElementById('modalMessage');
        const _modalBtn = document.getElementById('modalBtn');
        if (success) {
            _icon.classList.add('fas', 'fa-check-circle');
            _modalMessage.classList.add('text-success');
            _modalMessage.textContent = 'Su compra ha sido un éxito';
            _modalBtn.textContent = 'Continue';
        } 
        if (error) {
            _modalMessage.classList.add('fas', 'fa-exclamation-triangle');
            _modalMessage.classList.add('text-warning');
            _modalMessage.textContent = 'Ocurrió un error, intente de nuevo.';
            _modalBtn.textContent = 'Intente de Nuevo';
        }
        return modal;
    }
    // Promise to simulate buying process
    const openModal = new Promise((resolve, reject) => {
        let num = Math.random;
        if (num > 0.5) {
            resolve();
        } else {
            reject(error);
        }
    })
    openModal
        .then(()=> {
            showModal(success);
        })
        .catch((error)=> {
            showModal(error);
        })
    return {
        testMethod,
        createModal,
        createElement,
        showModal
    }
})(shop);

view.testMethod();
view.showModal();