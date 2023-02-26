    const newImage = (source, position, left, bottom) => {
        let imgObject = document.createElement('img')
        imgObject.src = source
        imgObject.style.position = position
        imgObject.style.left = left
        imgObject.style.bottom = bottom
        document.body.append(imgObject)
        &&
        object.addEventListener('dblclick', () => {
                object.remove()
            })
        }
    
newImage('assets/green-character.gif','fixed','100px','100px')    
newImage('assets/tree.png','fixed','200px','300px')
newImage('assets/pillar.png','fixed','350px','100px')
newImage('assets/crate.png','fixed','150px','200px')
newImage('assets/well.png','fixed','500px','425px')
newImage('assets/shield.png','fixed','165px','185px')
newImage('assets/staff.png','fixed','600px','100px')


