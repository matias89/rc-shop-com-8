const view = (shop => {
    //Select modal container in detail HTML
    const _modalContainer = document.getElementById('modalContainer');
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
        } else if (elementType === 'label') {
            element.for = id;
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
    // This function create a modal window with Bootstrap Classes
    const createModal = () => {
        const _modalRow = createElement('div', '', 'row', false);
        const _modalCol = createElement('div', '', 'col-md-12', false);
        const _openBtn = createElement('button', 'openBtn', 'btn btn-primary', false, false, 'Open Modal')
        const _modalBox = createElement('div', 'modalBox', 'modal fade');
        const _modalDialog = createElement('div', '', 'modal-dialog modal-dialog-centered modal-lg');
        const _modalContent = createElement('div', '', 'modal-content');
        const _modalHeader = createElement('div', 'modalHeader', 'modal-header');
        const _modalBody = createElement('div', 'modalBody', 'modal-body');
        const _modalFooter = createElement('div', 'modalBody', 'modal-footer');
        const _modalIcon = createElement('i', 'modalIcon', '');
        const _modalMessage = createElement('h3', 'modalMessage', 'text-justify, font-weight-bold', );
        const closeModal = createElement('button', 'modalBtn', 'btn btn-danger', false, false, 'Continue');
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
        let num = Math.random();
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
        createModal,
        createElement,
        showModal,
        openModal,
        buildCarouselItems
    }
})(shop);

view.showModal();
view.buildCarouselItems();


