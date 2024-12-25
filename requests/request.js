async function getAllTests(){
    const responce = await fetch('/api/test', {
        method: 'GET'
    });
    const result = await responce.json();
    return result;
}
async function getOneTest(id){
    const responce = await fetch('/api/test/' + id, {
        method: 'GET'
    });
    const result = await responce.json();
    return result;
}
async function addTest(name, description, price, img){
    await fetch('/api/test', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ name, description, price, img })
    });
}
async function deleteTest(id){
    await fetch('/api/test/' + id, {
        method: 'DELETE'
    });
}
async function updateTest(name, description, price, img){
    await fetch('/api/test', {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ name, description, price, img })
    });
}
export {getAllTests, getOneTest, deleteTest, updateTest, addTest}