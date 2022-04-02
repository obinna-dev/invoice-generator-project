// let services = ["washcar", "mowlawn", "pullweeds"]

// NOTE TO SELF - CONST ALL LETS lol 

const services = []
const servicesPrice = []
const washCarBtn = document.getElementById("wash-car-btn")
const mowLawnBtn = document.getElementById("mow-lawn-btn")
const pullWeedsBtn = document.getElementById("pull-weeds-btn")
const washService = "Wash Car"
const mowService = "Mow Lawn"
const pullWeedService = "Pull Weeds"
const washServicePrice = 10
const mowServicePrice = 20
const pullWeedServicePrice = 30
const invoicedItem = document.getElementById("invoiced-items")
const priceEl = document.getElementById("price-el")
const totalSum = document.getElementById("total-sum")




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
        priceEl.innerHTML += `<span id="currency">$</span>${servicesPrice[i]}<br/>`
        const sumPrices = servicesPrice.reduce((a, b) => a + b, 0)
        totalSum.innerHTML = `$${sumPrices}`  
    }
}