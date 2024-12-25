import { getOneTest } from "../requests/request.js";

document.addEventListener('DOMContentLoaded', async ()=>{
    let testId =  window.location.pathname.split('/').pop();
    let test = await getOneTest(testId);

    document.getElementById('test-img').src = test.img;
    document.getElementById('test-name').innerText = test.name;
    document.getElementById('test-description').innerText = test.description;
    document.getElementById('test-price').innerText = test.price;
})