document.addEventListener('DOMContentLoaded', () =>{
    const slides = document.querySelectorAll('.slide-img');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let slideAtual= 0;

    function mostrarSlides(index){
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));


        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    function nextSlide(){
        slideAtual = (slideAtual + 1)% slides.length;
        mostrarSlides(slideAtual);
    }

    function prevSlide(){
        slideAtual = (slideAtual - 1 + slides.length) % slides.length;
        mostrarSlides(slideAtual);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    dots.forEach((dot, index)=>{
        dot.addEventListener('click', ()=>{
            slideAtual = index;
            mostrarSlides(slideAtual);
        });
    });

    mostrarSlides(0);
    setInterval(nextSlide, 10000);
    
})