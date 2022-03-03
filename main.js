burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle("v-class");
    navList.classList.toggle("v-class");
    navbar.classList.toggle("h-nav");
})



function submit(){
    var name1 = document.getElementById('name1').value;
    var email1 = document.getElementById('email1').value;
    var phone1 = document.getElementById('number1').value;
    var concern1 = document.getElementById('concern1').value;
    var stringer = "Hello " + name1 + "   with email id as " + email1 + "   with phone number as " + phone1 + "   " +"and having a concern that is " + concern1;
    document.getElementsByClassName('submit')[0].innerHTML = stringer;
    alert("Hi! "+ name1);
}