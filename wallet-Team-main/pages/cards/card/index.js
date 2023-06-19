import { getData } from "../../../modules/http"
import { reload } from "../../../modules/ui"


const card_id = location.search.split('=').at(-1)
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let p = document.querySelector('p')

getData('/cards/' + card_id)
    .then(res => {
        h1.innerHTML = res.data.name + " about card"
        h2.innerHTML = res.data.name 
        p.innerHTML = res.data.item__lang

    })


