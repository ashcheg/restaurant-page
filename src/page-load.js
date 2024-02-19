function pageLoad () {
    // Selecting the element
    const content = document.getElementById('content');
    content.classList.add('loaded');

    // Creating 
    const h1home = document.createElement('h1');
    h1home.textContent = 'Welcome to the Restaurant Page';

    const mainText = document.createElement('p');
    mainText.textContent = 'Here you can find our menu and contact information.';

    // Appending the new element to the existing element
    content.appendChild(h1home);
    // content.appendChild(backgroundImage);
    content.appendChild(mainText);
}

export default pageLoad;