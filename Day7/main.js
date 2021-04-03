window.onload = ()=> {
  let fileUploadInput = document.getElementById('file')
  let uploadButton = document.getElementById('upload-btn')
  let uploadIcon = document.querySelector('#upload-icon')
  let loadLine = document.querySelector('.loading-line')
  
  fileUploadInput.addEventListener('change', function(){
      uploadIcon.classList.remove('fa-cloud-upload-alt')
      uploadIcon.style.border = '#676767 1px solid'
      uploadIcon.innerHTML = this.value
      uploadIcon.style.fontSize = '1rem'
      uploadButton.innerText = 'Upload file'
      loadLine.style.width = '0%'
  })

  uploadButton.addEventListener('click', function(e){
      e.preventDefault()

    if(fileUploadInput.value !== '') {
        uploadIcon.innerHTML = ''
        uploadIcon.classList.add('fa-sync-alt')
        uploadIcon.style.fontSize = '4rem'
        uploadIcon.style.border = 'none'
        let tl = new TimelineLite({
            onComplete: ()=> {
                uploadIcon.classList.remove('fa-sync-alt')
                uploadIcon.classList.add('fa-check')
                uploadButton.innerText  = 'Done'
            }
        })
        tl.to(uploadIcon, 1, {
            rotation: '360deg'
        }).to(loadLine, 1 , {
            width : '100%'
        }, '-=1')
    } 
  })
}