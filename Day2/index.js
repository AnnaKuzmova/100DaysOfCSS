let buttonDismiss = document.querySelector('#btn-dismiss');
let boxContainer = document.querySelector('.box-container');


buttonDismiss.addEventListener('click', function(e){
    e.preventDefault();
    boxContainer.style.animation = 'pop-out .4s linear forwards';
});