document.querySelector('.menu-toggle').addEventListener('click', function(){
    const navList = document.querySelector('#nav-list');
    navList.classList.toggle('active');

    const icon = this.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

document.querySelectorAll('.nav-item a').forEach(link =>{
    link.addEventListener('click', function(){
        if (window.innerWidth <= 768){
            document.querySelector('#nav-list').classList.remove('active');
            const icon = document.querySelector('.menu-toggle i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    })
})