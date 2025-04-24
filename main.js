const inputimagen = document.getElementById('imagenInput')
const inputnombre = document.getElementById('nombreInput')
const button = document.getElementById('mostrarImagen')
const container = document.getElementById('imagenContainer')

button.addEventListener('click', () => {
    const link = inputimagen.value.trim()
    if (link === '') return
    const bloque = document.createElement('div')
    bloque.classList.add('image-box')
    
    const img = document.createElement('img')
    img.src = link
    
    const name = document.createElement('h2')
    name.textContent = inputnombre.value.trim()

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'X'
    deleteButton.classList.add('delete-btn')
    
    deleteButton.addEventListener('click', () => {
        bloque.remove()
    })
    
    bloque.addEventListener('click', () => {
        const newLink = prompt('Ingresa la nueva URL de la imagen:')
        if (newLink) {
            img.src = newLink.trim()
        }
    })

    bloque.appendChild(deleteButton)
    bloque.appendChild(img)
    bloque.appendChild(name)
    container.appendChild(bloque)

    inputimagen.value = ''
    inputnombre.value = ''
})
