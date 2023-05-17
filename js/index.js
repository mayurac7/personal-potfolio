var typed = new Typed(".auto-typed", {
    strings: ["Full Stack Developer","Data Analyst", "Software Developer", "Data Engineer","Machine Learning Engineer","Tech Enthusiast "],
    typedSpeed: 150,
    backSpeed: 50,
    loop: true
})

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function(){
    headerEl.classList.toggle('nav-open');
});

const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(function(entries){
    const ent = entries[0];
    if(!ent.isIntersecting){
        document.body.classList.add('sticky');
    }
    if(ent.isIntersecting){
        document.body.classList.remove('sticky');
    }
}, {
    root: null,
    threshold: 0,
    rootMargin: '-30px'
});
obs.observe(sectionHeroEl);