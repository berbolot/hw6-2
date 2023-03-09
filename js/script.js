const lolo = document.getElementById("get")
const getData = async () => {
  const ded = await  fetch ("https://jsonplaceholder.typicode.com/posts");
    const fer = await ded.json();
    const result = fer.filter((el) => {
  
    if (el.userId === 1) {
    lolo.innerHTML += `<div class=nav> User id: ${el.userId} <br> Id: ${el.id} <br> ${el.title} <br> ${el.body} </div>`
}})
    console.log(result);
}

getData()
