window.onload = () => {

    let date = new Date()
    let dayOfWeekOutput = document.getElementById('day-of-week')
    let dateOutput = document.getElementById('date')
    let dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    dayOfWeekOutput.innerHTML = `${dayOfWeek[date.getDay()]}`
    dateOutput.innerHTML = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} `

    let allChoresElements = Array.from(document.querySelectorAll('#list li'))
    

    allChoresElements.forEach( chore => {
        chore.addEventListener('click', function(){
            if(chore.classList.contains('checked')) {
                chore.classList.remove('checked')
            } else {
                chore.classList.add('checked')
            }
        });
    })
}