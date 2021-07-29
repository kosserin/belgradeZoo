const navSlide = () =>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');


    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');


        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation='';
            }else {
                link.style.animation= `navLinkFade .5s ease forwards ${index /7 + 0.1}s`
            }});
    });


}

navSlide();


const liClick = () =>{
    const about=document.querySelector('.about-li');
    const dropdown=document.querySelector('.dropdown-ul');

    about.addEventListener('click',e=>{
        dropdown.classList.toggle('dropdown-active');
    })
}
liClick();