export default function homeContent() {

    const wrapper = document.createElement('div');

    const title = document.createElement('div');
    title.textContent = 'This is the title of home';

    const body = document.createElement('div');
    body.textContent = 'This is the body of home';

    wrapper.appendChild(title);
    wrapper.appendChild(body);
    
    return wrapper;
}