
const rett = document.getElementById("ret")
const input = document.getElementById("in")
const btnn = document.getElementById("btn")


btnn.addEventListener('click', () => {
const getData = async () => {
  const ded = await  fetch ("https://jsonplaceholder.typicode.com/posts");
    const ff = await ded.json();
   
    const fitr = ff.filter((el) => el.userId == input.value )
   
    const fer = fitr.map((el) => {  
   
      return `<div class=container><p>User id: ${el.userId}</p> <p>id: ${el.id}</p> <p> ${el.title}</p> <p> ${el.body}</p></div>`
    
})

    rett.innerHTML = fer.join(" ")

}
      
getData()
})
    


