import { getPets } from "./database.js"

const pets = getPets()

export const RegisteredPets = () => {
    
    let petHTML = ""

     petHTML += "<ul>"

    for (const pet of pets) {
        petHTML += `<li
                    data_id="${pet.id}"
                    data_walkerId="${pet.walkerId}"
                    >${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

