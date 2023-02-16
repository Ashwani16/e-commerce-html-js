let wish=JSON.parse(localStorage.getItem("wish"))||[];
let user=JSON.parse(localStorage.getItem("user"))
if(user){
  document.querySelector("#user").innerText=user.name;
}

display(wish)
 function display(wish){
    
    document.getElementById("wish").innerHTML=""
    wish.forEach(e => {
        let div=document.createElement("div");
        let img=document.createElement("img");
        let name=document.createElement("h3");
        let price=document.createElement("p");
        
        let button=document.createElement("button");
        img.src=e.image_url;
        name.innerText=e.name;
        price.innerText="Price - "+e.price
       
        button.innerText="Delete";
        
        button.addEventListener("click",function(){
          deletePro(e);
        })
        
        div.append(img,name,price,button);
        document.querySelector("#wish").append(div)
        
    });
   
 }
 function deletePro(e){
    wish=wish.filter((obj)=>{
        return e.id!=obj.id;
    })
    localStorage.setItem("wish",JSON.stringify(wish))
    display(wish)
 }
 document.querySelector("#logout").addEventListener("click",()=>{
  localStorage.removeItem("user")
  alert("you have logged Out")
  document.querySelector("#user").innerText="User_Name";
  window.location.href="../account/login.html"
})