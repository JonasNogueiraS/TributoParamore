const membersCards = document.querySelectorAll('.member-card');

function isMobileDevice() {
    return window.matchMedia('(max-width: 768px)').matches;
}


window.addEventListener('load', () => {
    if (!isMobileDevice()) {
        membersCards.forEach(card => {
            card.style.filter = 'grayscale(100%)';
            card.style.transition = 'all 0.3s ease-in-out';
        });
    }
});


if (!isMobileDevice()) {
    membersCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            membersCards.forEach(otherCards => {
                otherCards.classList.remove('active');
                otherCards.style.filter = 'grayscale(100%)';
                otherCards.style.transform = 'scale(1)';
                otherCards.style.transition = 'all 0.3s ease-in-out';
            });
            this.classList.add('active');
            this.style.filter = 'grayscale(0)';
            this.style.transform = 'scale(1.10)';
        });

        card.addEventListener('mouseout', function() {
            card.style.filter = 'grayscale(100%)';
            card.style.transform = 'scale(1)';
        });
    });
}


window.addEventListener('resize', () => {
    if (isMobileDevice()) {
        membersCards.forEach(card => {
            card.style.filter = 'none';
            card.style.transform = 'none';
        });
    } else {
        membersCards.forEach(card => {
            card.style.filter = 'grayscale(100%)';
        });
    }
});