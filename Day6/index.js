
//Getting the boxes then destructuring them into different variables
let boxes = document.querySelectorAll(".box");
let [basic,pro,premium] = boxes;
 
//Doing the same thing for .after like the boxes
let lines = document.querySelectorAll('.after');
let [user,gb,project] = lines;

//Creating the function with which we weill change the css of the lines



//Setting the hover event listener 
basic.addEventListener("mouseover", function(){
    user.style.left = '-90%';
    gb.style.left = `-90%`;
    project.style.left = `-90%`;
});
basic.addEventListener('mouseleave', function(){
    user.style.left = '-100%';
    gb.style.left = '-100%';
    project.style.left = '-100%';
});
pro.addEventListener("mouseover",  function(){
    user.style.left = '-60%';
    gb.style.left = `-30%`;
    project.style.left = `-50%`;
});
pro.addEventListener('mouseleave', function(){
    user.style.left = '-100%';
    gb.style.left = '-100%';
    project.style.left = '-100%';
});
premium.addEventListener("mouseover",  function(){
    user.style.left = '0%';
    gb.style.left = '0%';
    project.style.left = '0%';
});
premium.addEventListener('mouseleave', function(){
    user.style.left = '-100%';
    gb.style.left = '-100%';
    project.style.left = '-100%';
});