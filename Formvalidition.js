const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');
 let success=true

form.addEventListener('submit',(e)=>{
      
       if(!validateInputs()){
       e.preventDefault();
      // setalertMessage();
       }
})

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
  
    if(usernameVal === ''){
        success = false;
        setError(username,'Username is requird')
        //setalertMessage(username)
    }
    else{
        setSuccess(username)
       
    }

    if(emailVal === ''){
        success = false;
        setError(email,'Email is requird')
        //setalertMessage(email)
    }
    else if(!validateEmail(emailVal)){
        setError(email,'please Enter valid email id')
        //setalertMessage(email)
    }
    else{
        setSuccess(email)
    }

    if(passwordVal === ''){
        success = false;
        setError(password,'password is reqiurd')
        //setalertMessage(password)
    }
    else if(passwordVal.length<8){
        setError(password,'password must be in 8 letters')
        //setalertMessage(password)
    }
    else{
        setSuccess(password)
    }


    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'cpassword is reqiurd')
        //setalertMessage(cpassword)
    }
    else if(cpasswordVal!==passwordVal){
        setError(cpassword,'password does not match')
        //setalertMessage(cpassword)
    }
    else{
        setSuccess(cpassword)
    }

    return success;

}

function setError(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    

    errorElement.innerText= message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText= '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

// function setalertMessage()
// {
//    if(username === "" && email === "" && password === "" && cpassword === "")
//    {
//     swal("Register successFull","ThankYou ,"+username,"success")
//    }
//    else{
//     swal("Give Me Valid Input","Click Me","Error")
//    }
// }

const validateEmail=(ev)=> {
    return String(ev).toLowerCase().match(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      );
  };