import { getPets } from "./database.js"

const pets = getPets()

export const RegisteredPets = () => {
    
    let petHTML = ""

     petHTML += "<ul>"

    for (const pet of pets) {
        petHTML += `<li
                    data-id="${pet.id}"
                    data-walkerId="${pet.walkerId}"
                    data-walkerForeignKey="${pet.walkerId}"
                    >${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

