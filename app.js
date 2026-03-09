
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slideContainer = document.querySelector('.slide');

nextBtn.addEventListener('click', () => {
    const firstItem = slideContainer.querySelector('.item');
    
    if (firstItem) {
        
        slideContainer.appendChild(firstItem);
    }
});

prevBtn.addEventListener('click', () => {
    const items = slideContainer.querySelectorAll('.item');
 
    if (items.length > 0) {
     
        const lastItem = items[items.length - 1];
    
        slideContainer.prepend(lastItem);
    }
});