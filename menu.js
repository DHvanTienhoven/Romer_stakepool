const toggle = event =>{
    console.log(event.target)
    event.target.classList.toggle("visible")
}

document.getElementById("first-item").addEventListener("click", toggle)
document.getElementById("second-item").addEventListener("click", toggle)
document.getElementById("third-item").addEventListener("click", toggle)
document.getElementById("fourth-item").addEventListener("click", toggle)
document.getElementById("fifth-item").addEventListener("click", toggle)
document.getElementById("sixth-item").addEventListener("click", toggle)



// const toggle = () =>{
//     console.log(this)
//     this.classList.toggle("visible")
// }




// const toggle = () =>{
//     console.log(this)
//     this.classList.toggle("visible")
// }

 //   for (var i = 0; i < list_items.length; i++) {
   //     list_items[i].addEventListener("click", toggle);
   //   }
   //   
   //   function toggle() {
   //     this.classList.toggle("myClass");
   //   }