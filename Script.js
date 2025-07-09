// تأثيرات تفاعلية عند التمرير
document.addEventListener('DOMContentLoaded', function() {
    // تأثير عند التمرير لعنصر المحتوى
    window.addEventListener('scroll', function() {
        const content = document.querySelector('.content');
        const contentPosition = content.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(contentPosition < screenPosition) {
            content.style.animation = 'slideIn 1s ease forwards';
        }
    });

    // تأثير على عناصر الميزات عند الظهور
    const aiFeatures = document.querySelectorAll('.ai-feature');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }, 150 * index);
            }
        });
    }, { threshold: 0.1 });

    aiFeatures.forEach(feature => {
        feature.style.opacity = 0;
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(feature);
    });
});
