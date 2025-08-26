import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const cityTarget = clickEvent.target

        if (cityTarget.dataset.type === "city"){

        const idOfCity = parseInt(cityTarget.dataset.id)

        const servicingWalkers = []

        for (const walker of walkers) {
            
        if (walker.cityId === idOfCity) {
            servicingWalkers.push(walker.name)
        }

    }
        window.alert(`This city is serviced by ${servicingWalkers} `)

    }
}
)

export const CityList = () => {
    let citiesHTML = ""

    citiesHTML += "<ol>"

    for (const city of cities) {
        citiesHTML += `<li data-type="city" data-id="${city.id}"
                        >${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

