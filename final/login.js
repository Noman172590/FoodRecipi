document.getElementById('login').addEventListener('click',function(){
    let email=document.getElementById('email')
    let emailValue=email.value
    let password=document.getElementById('password')
    let passwordValue=password.value
    if(emailValue==="admin@gmail.com" && passwordValue==="adminadmin")
   {
    
 
    window.location.replace("index.html");
    }
    else{
        alert('Forget You Email or password! Please Try again')
    }
    
   

})