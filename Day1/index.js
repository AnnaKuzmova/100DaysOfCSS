let images = document.querySelectorAll('img');
console.log(images);
images.forEach(img => { 
    img.addEventListener('click', function(){
        this.classList.toggle('picked');
    });
});