    function moveSlide(btn, dir) {
        const slider = btn.closest('.slider');
        const track = slider.querySelector('.slider-track');
        const slides = slider.querySelectorAll('.slide');
        const dots = slider.querySelectorAll('.dot');

        let current = parseInt(track.dataset.current || '0');
        current = (current + dir + slides.length) % slides.length;

        track.style.transform = `translateX(-${current * 100}%)`;
        track.dataset.current = current;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === current);
        });
    }

    document.querySelectorAll('.slider').forEach(slider => {
        const track = slider.querySelector('.slider-track');
        const dots = slider.querySelectorAll('.dot');

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                track.style.transform = `translateX(-${index * 100}%)`;
                track.dataset.current = index;

                dots.forEach((d, i) => {
                    d.classList.toggle('active', i === index);
                });
            });
        });
    });
