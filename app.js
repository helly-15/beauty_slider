let slides = document.querySelectorAll('.slide');
slides.forEach (slide=> slide.addEventListener('click', ()=>{
    removeActiveClasses()
    slide.classList.add('active')
}))

let removeActiveClasses = () =>{
    slides.forEach (slide=> 
        slide.classList.remove('active')
    )
}