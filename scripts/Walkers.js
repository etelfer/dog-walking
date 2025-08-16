import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = ""

    walkerHTML += "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}
                            data-city="${walker.city}"
                            data-email="${walker.email}"
                            >${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

