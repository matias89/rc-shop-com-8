const view = (shop => {
    const testMethod = () => {
        console.log('Testing view!');
        const hw = shop.testMethod(); // M<ethod from 'shop' module
        console.log(hw);
    }
<<<<<<< HEAD
    const createElement = (elementType, id, className, events, placeholder, content, htmlFor ) => {
=======
    const createElement = (elementType, id, className, events, placeholder, content ) => {
>>>>>>> 99ad0394837b39174223ec56e9b49d23709209a5
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

view.testMethod();