const priceBtn=document.querySelector(".list-btn");
const priceList=document.querySelector(".list");
const closeList=document.querySelector(".fa-times-circle");
const emailInput=document.querySelector(".email-input");
const phoneInput=document.querySelector(".phone-input");
let sendEmail = document.querySelector(".form-btn");
let icons=document.querySelectorAll(".service-icon-container");
let texts=document.querySelectorAll(".service-text");
let emailText = document.querySelector(".email-text");
sendEmail.disabled = true;




function validEmail() {
    const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
    const numberReg= /^([0-9]{9})$/;
    
    if (mailReg.test(emailInput.value)) {
      sendEmail.disabled = false;
      emailInput.style.border='none';
    } else {
      sendEmail.disabled = true;
      emailInput.style.border='3px solid red';
      alert("Wpisz poprawny adres email");
    }
    if(numberReg.test(phoneInput.value)){
        sendEmail.disabled = false;
        phoneInput.style.border='none';
    }else {
        sendEmail.disabled = true;
        phoneInput.style.border='3px solid red';
        alert("Wpisz poprawny numer telefonu");
    }
  }


emailText.addEventListener("change", function () {
    validEmail();
  })

sendEmail.addEventListener("click", function(){
    alert('Wiadomość została wysłana, Dziękujemy');
})

icons.forEach((icon,text) => {
    icon.addEventListener("click", function(){
        texts[text].classList.toggle("active-text");
        icon.classList.toggle("active-icon");
    });
});

priceBtn.addEventListener("click", function() {
    priceList.classList.toggle("on");
});

closeList.addEventListener("click", function(){
    priceList.classList.remove("on");
});




 