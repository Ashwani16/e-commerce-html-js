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

 form.addEventListener("submit",validate)
 function validate(event){
   event.preventDefault();
   let obj={
       email:form.email.value,
       password:form.password.value
   }
   if(obj.email=="" || obj.password==""){
    alert("Please Enter all the Feilds")
}else{
    ids.forEach(e => {
        if(e.email==obj.email && e.password==obj.password){
            localStorage.setItem("user",JSON.stringify(e))
        }
    });
    user=JSON.parse(localStorage.getItem("user"))
    if(user){
     alert("You have Succefully sign-In")
        window.location.href="../index.html"
    }else{
     alert("Please Enter correct data")
    }
}
   
   
 }
 document.querySelector("#logout").addEventListener("click",()=>{
    localStorage.removeItem("user")
    alert("you have logged Out")
    document.querySelector("#user").innerText="User_Name"
  })

