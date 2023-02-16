 let ids=JSON.parse(localStorage.getItem("ids"))||[]

 let form=document.querySelector("form");
 let user=JSON.parse(localStorage.getItem("user"))

 if(user){
     document.querySelector("#user").innerText=user.name;
   }
   document.querySelector("#cart").addEventListener("click",()=>{
     if(user){
       window.location.href="../cart/cart.html"
     }else{
       alert("Please Sign-In First")
       window.location.href="../account/login.html"
     }
   })
   document.querySelector("#wish").addEventListener("click",()=>{
     if(user){
       window.location.href="../wish/wish.html"
     }else{
       alert("Please Sign-In First")
       window.location.href="../account/login.html"
     }
   })
  form.addEventListener("submit",addToIds)
  function addToIds(event){
    event.preventDefault();
    let obj={
        name:form.name.value,
        email:form.email.value,
        password:form.password.value
    }
    if(obj.name=="" || obj.email=="" || obj.password==""){
        alert("Please Enter all the Feilds")
    }else{
        ids.push(obj)
    localStorage.setItem("ids",JSON.stringify(ids))
    alert("successfully created!! Let's sign-In")
    window.location.href="./login.html"
    }
    
  }
  document.querySelector("#logout").addEventListener("click",()=>{
    localStorage.removeItem("user")
    alert("you have logged Out")
    document.querySelector("#user").innerText="User_Name"
  })