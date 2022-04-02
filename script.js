// let services = ["washcar", "mowlawn", "pullweeds"]

let services = []
let servicesPrice = []
const washCarBtn = document.getElementById("wash-car-btn")
let mowLawnBtn = document.getElementById("mow-lawn-btn")
let pullWeedsBtn = document.getElementById("pull-weeds-btn")
let washService = "Wash Car"
let mowService = "Mow Lawn"
let pullWeedService = "Pull Weeds"
let washServicePrice = 10
let mowServicePrice = 20
let pullWeedServicePrice = 30
let invoicedItem = document.getElementById("invoiced-items")
let priceEl = document.getElementById("price-el")



washCarBtn.addEventListener("click", function() {
    services.push(washService)
    servicesPrice.push(washServicePrice)
    console.log(services)
    renderArr()
})

mowLawnBtn.addEventListener("click", function()   {
    services.push(mowService)
    servicesPrice.push(mowServicePrice)
    console.log(services)
    renderArr()
})

pullWeedsBtn.addEventListener("click", function()   {
    services.push(pullWeedService)
    servicesPrice.push(pullWeedServicePrice)
    console.log(services) 
    renderArr()
})

// // function to display data from array 
function renderArr()    {
    invoicedItem.innerHTML = ""
    for (let i = 0; i < services.length; i++)   {
        console.log(services[i])
        invoicedItem.innerHTML += `${services[i]}<br/>`
    }
    priceEl.innerHTML = ""
    for (let i = 0; i < servicesPrice.length; i++) {
        console.log(servicesPrice[i])
        priceEl.innerHTML += `${servicesPrice[i]}<br/>`
    }
}