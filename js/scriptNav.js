
document.querySelectorAll('.nav__item a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        document.querySelectorAll('.nav__item').forEach(item => {
            item.classList.remove('active');
        });
        
        this.parentElement.classList.add('active');
        
        window.scrollTo({
            top: targetSection.offsetTop - 80, // Ajuste para o header fixo
            behavior: 'smooth'
        });
    });
});

document.querySelector('#cta-buttons .btn__default').addEventListener('click', function(e){
    e.preventDefault();
    const targetSection = document.getElementById('about');
    window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
    });
});

document.querySelector('#nav-logo-link').addEventListener('click', function(e){
    e.preventDefault();
    const targetSection = document.getElementById('nav-logo-link');
    window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
    })
})

window.addEventListener('scroll', ()=>{
    let scrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach(section =>{
        const sectionTop = section.offsetTop - 90
        const sectionHeight =section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if(scrollPosition >= sectionTop && scrollPosition < sectionTop+sectionHeight){
            document.querySelectorAll('.nav__item').forEach(item => {
                item.classList.remove('active');
                if(item.querySelector('a').getAttribute('href') === `#${sectionId}`){
                    item.classList.add('active');
                }
            });
        }
    });
});