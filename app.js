const hamburger = document.querySelector('.header .navbar .navlist .hamburger');
const mobile_menu = document.querySelector('.header .navbar .navlist ul');
const mobile_list = document.querySelectorAll('.header .navbar .navlist ul li a');
const header = document.querySelector('.header.banner');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor= '#29323c';
    } else {
        header.style.backgroundColor='transparent';
    }
});

mobile_list.forEach((item)=>{ 
    item.addEventListener('click', () =>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
    
})
function newsletter(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var name=document.getElementById('name');
    var email=document.getElementById('email');
    if(name.value=="" && email.value=="")
    alert ("name or email can not be null");
    else {
        if(inputText.value.match(mailformat))
           return true;
           else
           alert("You have entered an invalid email address!");
    }
    
}

   function sendmail(){

          var name = document.getElementById('name').value;
          var email = document.getElementById('email').value;
          var message = document.getElementById('message').value;

          var templateParams = {
            from_name: name,
            from_email: email,
            message: message
          };

          emailjs.send('service_op10cbn', 'template_zpzfqmi', templateParams)
            .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
              alert('Message sent successfully!');
            }, function(error) {
              console.log('FAILED...', error);
              alert('Failed to send message. Please try again.');
            });

          // Clear form fields
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('message').value = '';
    };
