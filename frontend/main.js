import { getAllTests, addTest, deleteTest } from "../requests/request.js";
import { createItem } from "./components/item.js";

let list = document.getElementById('test-list');

async function elementsGenerator() {
    const tests = await getAllTests();
    for (let test of tests){
        let listItem = createItem(test.name, test.description, test.price, test.img);
        listItem.btnDetail.addEventListener('click', ()=>{
            window.location.href = '/test/' + test.id;
        });
        listItem.btnDelete.addEventListener('click', ()=>{
            if(confirm('Вы действительно хотите удалить?')){
                deleteTest(test.id);
                listItem.item.remove();
            }
        })
        list.appendChild(listItem.item);
    }
}

document.addEventListener('DOMContentLoaded', async ()=>{
    await elementsGenerator();

    let form = document.getElementById('add-form');
    form.addEventListener('submit', async (e)=>{
        e.preventDefault();

        let testName = document.getElementById('test-name');
        let testDescription = document.getElementById('test-description');
        let testPrice = document.getElementById('test-price');
        let testImg = document.getElementById('test-img');

        let listItem = createItem(testName.value, testDescription.value, testPrice.value, testImg.value);
        await addTest(testName.value, testDescription.value, testPrice.value, testImg.value);
        list.appendChild(listItem.item);
    })
});