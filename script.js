document.addEventListener('DOMContentLoaded', () => {
    // Scroll Navbar Effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');

    function reveal() {
        var windowHeight = window.innerHeight;
        var elementVisible = 150;

        reveals.forEach((reveal) => {
            var elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', reveal);
    // Trigger once on load
    reveal();

    // Form Submission (Mock)
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            
            setTimeout(() => {
                btn.innerText = 'Message Sent!';
                btn.classList.remove('btn-primary');
                btn.style.backgroundColor = '#2ea043'; // Green success color
                btn.style.color = 'white';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.add('btn-primary');
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                }, 3000);
            }, 1500);
        });
    }
});
