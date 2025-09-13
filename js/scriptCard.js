document.addEventListener('DOMContentLoaded', () => {
    const membersCards = document.querySelectorAll('.member-card');

    function isMobileDevice() {
        return window.matchMedia('(max-width: 768px)').matches;
    }

    function applyGrayscaleEffect() {
        if (!isMobileDevice()) {
            membersCards.forEach(card => {
                card.classList.add('grayscale-effect');
            });
        } else {
            membersCards.forEach(card => {
                card.classList.remove('grayscale-effect');
                card.classList.remove('active');
            });
        }
    }

    if (!isMobileDevice()) {
        membersCards.forEach(card => {
            card.addEventListener('mouseover', function() {
                membersCards.forEach(otherCard => {
                    if (otherCard !== this) {
                        otherCard.classList.remove('active');
                    }
                });
                this.classList.add('active');
            });

            card.addEventListener('mouseout', function() {
                this.classList.remove('active');
            });
        });
    }

    window.addEventListener('resize', applyGrayscaleEffect);

    applyGrayscaleEffect();
});