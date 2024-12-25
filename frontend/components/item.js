export function createItem(name, description, price, img){
    let item = document.createElement('div');
    let image = document.createElement('img');
    let body = document.createElement('div');
    let h5 = document.createElement('h5');
    let pDescription = document.createElement('p');
    let pPrice = document.createElement('p');
    let btnGroup = document.createElement('div');
    let btnDetail = document.createElement('button');
    let btnDelete = document.createElement('button');

    item.className = 'card m-3';
    item.style.width = '18rem';
    item.style.float = 'left';

    image.className = 'card-img-top';
    image.src = img;

    body.className = 'card-body';

    h5.className = 'card-title';
    h5.innerText = name;

    pDescription.className = 'card-text';
    pDescription.innerText = description;

    pPrice.innerText = price;

    btnGroup.className = 'btn-group float-end';
    btnDetail.className = 'btn btn-primary';
    btnDetail.textContent = 'Подробнее';
    btnDelete.className = 'btn btn-danger';
    btnDelete.textContent = 'Удалить';

    btnGroup.append(btnDetail, btnDelete);
    body.append(h5, pDescription, pPrice, btnGroup);
    item.append(image, body);

    return {item, btnDetail, btnDelete};
}