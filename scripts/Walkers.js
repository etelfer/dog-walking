import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (eventAttachedToClick) => {
        const thingClickedOn = eventAttachedToClick.target

        window.alert(`This walker works in ${thingClickedOn.dataset.city}`)
    }
)


export const Walkers = () => {
    let walkerHTML = ""

    walkerHTML += "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
                            data-city="${walker.city}"
                            data-email="${walker.email}"
                            >${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

