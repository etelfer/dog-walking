import { getPets, getWalkers } from "./database.js"

const pets = getPets()

document.addEventListener(
    "click",
    (eventAttachedToClick) => {
    const thingClickedOn = eventAttachedToClick.target

    const walkerId = thingClickedOn.dataset.walkerforeignkey
    

    const allWalkers = getWalkers()
    for (const walker of allWalkers) {
        if (walker.id === parseInt(walkerId)) {
            window.alert(`This pet is being walked by ${walker.name}`)
        }
        
    }
    }
)

export const RegisteredPets = () => {
    
    let petHTML = ""

     petHTML += "<ul>"

    for (const pet of pets) {
        petHTML += `<li
                    data-id="${pet.id}"
                    data-walkerid="${pet.walkerId}"
                    data-walkerforeignkey="${pet.walkerId}"
                    >${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

