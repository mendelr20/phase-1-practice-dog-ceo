console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () =>{
    const container = document.querySelector("#dog-image-container")
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const ulContainer = document.querySelector("#dog-breeds")
    const dropDown = document.querySelector("#breed-dropdown")
    let breedsArray;

    ulContainer.addEventListener('click', handleClick)
    dropDown.addEventListener('change', handleChange)

    //CHALLANGE 1
    function getImages(){
        fetch(imgUrl)
        .then(resp => resp.json())
        .then(images => {
            const imgs = images.message
            let imgsArray = createImgElement(imgs)
            renderImg(imgsArray)
        })
    }
    function createImgElement(imgs){
        return imgs.map((img) => {
            let i = `<img src=${img}>`
            return i
        })
    }
        
    function renderImg(imgsArray){
        imgsArray.forEach(element => {
            container.innerHTML += element 
    })
    }

    // CHALLANGE 2
 
    function getBreeds(){
        fetch(breedUrl)
        .then(resp => resp.json())
        .then(breeds => {
            breedsArray = Object.keys(breeds.message)
            const breedsLis = createLiElement(breedsArray)
            renderLis(breedsLis)
        })
    }

    function createLiElement(breedsArray){
        return breedsArray.map((breed) => {
            let li = `<li>${breed}</li>`
            return li
        })
    }
    
    function renderLis(breedsLis){
        breedsLis.forEach(element => {
            ulContainer.innerHTML += element 
    })
    }

    // CHALLANGE 3
    function handleClick(event){
        if (event.target.style.color === 'red'){
            event.target.style.color = 'black'
        } else {
            event.target.style.color = 'red'
        }
    }

    //CHALLANGE 4
    function handleChange(event){
        const letter = event.target.value
        const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
        const filteredBreedsLis = createLiElement(filteredBreeds)
        ulContainer.innerHTML = ''
        renderLis(filteredBreedsLis)
    }
    getImages()
    getBreeds()
})