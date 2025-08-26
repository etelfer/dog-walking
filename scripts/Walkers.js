import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (eventAttachedToClick) => {
        const thingClickedOn = eventAttachedToClick.target

        if (thingClickedOn.dataset.type === "walker") {

        const cityId = thingClickedOn.dataset.cityforeignkey

        const allCities = getCities()

        for (const city of allCities) {
            
        if (city.id === parseInt(cityId)) {

            window.alert(`This walker works in ${city.name}`)
        }
        }
    }
}
)


export const Walkers = () => {
    let walkerHTML = ""

    walkerHTML += "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
                            data-cityforeignkey="${walker.cityId}"
                            data-type="walker"
                            data-email="${walker.email}"
                            >${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

