const inputFiles = document.getElementById('inputFiles')
const container = document.querySelector('.container')
const wrapper = document.querySelector('.wrapper')


inputFiles.addEventListener('change',e=>{

  const files = Array.from(inputFiles.files)
  console.log(files)

  files.forEach((file)=>{
    const imageTag = document.createElement('img')
    imageTag.classList.add('fileImage')
    imageTag.src = URL.createObjectURL(file)

    wrapper.remove()
    container.style.display = 'flex'
    container.append(imageTag)
  })
})



