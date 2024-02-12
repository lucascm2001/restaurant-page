export default function menuContent() {

    const wrapper = document.createElement('div');

    const title = document.createElement('div');
    title.textContent = 'This is the title of menu';

    const body = document.createElement('div');
    body.textContent = 'This is the body of menu';

    wrapper.appendChild(title);
    wrapper.appendChild(body);
    
    return wrapper;
}