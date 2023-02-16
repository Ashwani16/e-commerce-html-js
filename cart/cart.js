 let cart=JSON.parse(localStorage.getItem("cart"))||[];
 let user=JSON.parse(localStorage.getItem("user"))
if(user){
  document.querySelector("#user").innerText=user.name;
}
display(cart)
 function display(cart){
    document.querySelector("#tItems").innerText=cart.length;
    let total=0;
    document.getElementById("cart").innerHTML=""
    cart.forEach(e => {
        let div=document.createElement("div");
        let img=document.createElement("img");
        let name=document.createElement("h3");
        let price=document.createElement("p");
        
        let button=document.createElement("button");
        img.src=e.image_url;
        name.innerText=e.name;
        price.innerText="Price - "+e.price
        total+=+e.price
        button.innerText="Delete";
        
        button.addEventListener("click",function(){
          deletePro(e);
        })
        
        div.append(img,name,price,button);
        document.querySelector("#cart").append(div)
        
    });
    document.querySelector("#tPrice").innerText=total;
 }
 function deletePro(e){
    cart=cart.filter((obj)=>{
        return e.id!=obj.id;
    })
    localStorage.setItem("cart",JSON.stringify(cart))
    display(cart)
 }
 document.querySelector("#logout").addEventListener("click",()=>{
  localStorage.removeItem("user")
  alert("you have logged Out")
  document.querySelector("#user").innerText="User_Name"
  window.location.href="../account/login.html"
})
