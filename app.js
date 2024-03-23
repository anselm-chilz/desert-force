const cursor = document.querySelector(".cursor");

window.addEventListener('mousemove',(e)=>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY))
    // console.log(e.pageX, e.pageY)
});

window.addEventListener('scroll', ()=>{
    const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
    cursor.style.top = scrollY + fromTop + 'px';
    console.log(fromTop);
});

window.addEventListener('click', ()=>{
    if (cursor.classList.contains('click')) {
        cursor.classList.remove('click');

        //Triggering a DOM reflow
        void cursor.offsetWidth;
        cursor.classList.add('click');
    } 
    else {
        cursor.classList.add('click')
    }
});

 document.addEventListener("DOMContentLoaded", function() {
     const waitlistBtn = document.getElementById('waitlistBtn');
     const confirmationMsg = document.getElementById('confirmationMsg');
  
     waitlistBtn.addEventListener('click', function() {
       const name = prompt("Please enter your name:");
       const email = prompt("Please enter your email:");
  
       // You can perform validation here before proceeding
       if (name && email) {
         confirmationMsg.innerText = `Dear ${name}, you have been invited to the Desert Force as Field Commander. Check your email (${email}) for further instructions to prepare for battle`;
         confirmationMsg.classList.remove('hidden');
       } else {
         alert("Please fill in both name and email fields.");
       }
     });
   });
  
  