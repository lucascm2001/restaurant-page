export default function aboutContent() {

    const wrapper = document.createElement('div');

    const title = document.createElement('div');
    title.textContent = 'This is the title of about';

    const body = document.createElement('div');
    body.textContent = 'This is the body of about';

    wrapper.appendChild(title);
    wrapper.appendChild(body);
    
    return wrapper;
}