# website-
This website is inroduceing me and what I am doing in this vecation is traiing in smartmethod company.
here is all the codes:
Frist code is Scc: 
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    min-height: 100vh;
    background: linear-gradient(135deg, #0c2d48, #145da0, #0c2d48);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
    color: #fff;
    overflow-x: hidden;
    position: relative;
    padding: 20px;
}

/* الخلفية المتحركة */
.ai-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.8;
    background: 
        radial-gradient(circle at 20% 30%, rgba(100, 200, 255, 0.2) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(255, 150, 100, 0.3) 0%, transparent 40%),
        linear-gradient(45deg, rgba(30, 30, 100, 0.2), rgba(100, 30, 100, 0.1));
    animation: pulse 20s infinite alternate;
}

.ai-grid {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: 
        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.3;
}

.main-title {
    font-size: 4rem;
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
    animation: fadeInDown 1.5s ease;
    background: rgba(0, 0, 30, 0.5);
    padding: 15px 40px;
    border-radius: 50px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    display: inline-block;
}

.subtitle {
    font-size: 1.8rem;
    color: #ffcc00;
    animation: fadeInUp 1.5s ease 0.5s both;
    background: rgba(0, 0, 30, 0.5);
    padding: 10px 30px;
    border-radius: 50px;
    font-weight: bold;
    display: inline-block;
}

.content {
    background: rgba(0, 0, 30, 0.6);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 40px;
    margin: 40px 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    animation: slideIn 1s ease;
}

.content p {
    font-size: 1.3rem;
    line-height: 1.8;
    margin-bottom: 25px;
    text-align: justify;
}

.ai-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin-top: 40px;
}

.ai-feature {
    text-align: center;
    padding: 30px 20px;
    border-radius: 15px;
    background: rgba(30, 30, 70, 0.7);
    transition: transform 0.3s ease;
    border: 1px solid rgba(100, 100, 255, 0.2);
}

.ai-feature:hover {
    transform: translateY(-10px);
    background: rgba(40, 40, 100, 0.8);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.ai-feature i {
    font-size: 3.5rem;
    color: #4fc3f7;
    margin-bottom: 15px;
}

.ai-feature h3 {
    font-size: 1.6rem;
    margin-bottom: 15px;
    color: #ffcc00;
}

.ai-feature p {
    font-size: 1.1rem;
}

/* الرسوم المتحركة */
@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes pulse {
    0% { opacity: 0.5; transform: scale(1); }
    100% { opacity: 0.8; transform: scale(1.05); }
}

@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-50px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
    from { opacity: 0; transform: translateY(100px); }
    to { opacity: 1; transform: translateY(0); }
}


Second code is Java script:
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
brief explaition:
Part 1: CSS (Styling & Animations)
CSS controls how everything looks — colors, layout, fonts, spacing, and animations.
Main Things You Did with CSS:
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: gradient, white text, padding, smooth animation }
Removes default spacing.
Sets a cool animated gradient background.
Makes sure everything looks clean and full-width.

Animated Background Effects:
.ai-background { glowing, moving circles }
.ai-grid { light grid lines like a digital network }

Header Design:
.main-title {
  Large glowing text with rounded border
}
.subtitle {
  Gold-colored text with fade-in animation
}
Content Box Styling:
.content {
  Glassy background (blur), rounded corners, subtle shadow
}
AI Feature Cards:
.ai-feature {
  Each one shows an icon, title, and description
  Moves up slightly when hovered
}
Animations:
@keyframes fadeInDown, fadeInUp, slideIn, gradientBG, pulse

Part 2: JavaScript (Interactivity)
window.addEventListener('scroll', function() {
    const content = document.querySelector('.content');
    if (content is near screen) {
        apply slide-in animation
    }
});
Reveal Each AI Feature Box One by One:
const aiFeatures = document.querySelectorAll('.ai-feature');
observer.observe(feature);






