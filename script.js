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
const removeBtnEl = document.getElementById("remove-btn-el")
const removeBtnElLawn = document.getElementById("remove-btn-el-lawn")
const removeBtnElWeed = document.getElementById("remove-btn-el-weed")
const priceEl = document.getElementById("price-el")
const totalSum = document.getElementById("total-sum")
const sendInvoiceBtn = document.getElementById("send-invoice-btn")
washCarBtn.disabled = false
mowLawnBtn.disabled = false
pullWeedsBtn.disabled = false

// this function displays data from arrays
function renderArr()    {
    invoicedItem.innerHTML = ""
    for (let i = 0; i < services.length; i++)   {
        invoicedItem.innerHTML += `${services[i]}<br/>`
    }
    priceEl.innerHTML = ""
    for (let i = 0; i < servicesPrice.length; i++) {
        priceEl.innerHTML += `<span id="currency">$</span>${servicesPrice[i]}<br/>`
        // this one sums up the items in the prices array 
        const sumPrices = servicesPrice.reduce((a, b) => a + b, 0)
        totalSum.innerHTML = `$${sumPrices}`  
    }
}

// this one adds wash service/item in invoice 
washCarBtn.addEventListener("click", function() {
    services.push(washService)
    servicesPrice.push(washServicePrice)
    renderArr()
    washCarBtn.disabled = true
    removeBtnEl.innerHTML = `Remove`
    
        // this one removes wash service/item from invoice 
        removeBtnEl.addEventListener("click", function() {
            // this one finds the index of "wash service" in the services array and assigns it to the washIndex var 
            let washIndex = services.indexOf(washService)
            // this one then uses the index assigned to the washIndex var to run the splice method for removing array items 
            services.splice(washIndex,1)
            let washPriceIndex = servicesPrice.indexOf(washServicePrice)
            servicesPrice.splice(washPriceIndex,1)
            
            washCarBtn.disabled = false
            // this one removes the remove button when the remove button is clicked. lol 
            removeBtnEl.innerHTML = ""
            renderArr()
        })
})

// this one adds mow lawn service/item to invoice 
mowLawnBtn.addEventListener("click", function()   {
    services.push(mowService)
    servicesPrice.push(mowServicePrice)
    renderArr()
    mowLawnBtn.disabled = true
    removeBtnElLawn.innerHTML = `Remove`
    // this one removes mow lawn service/item from invoice 
    removeBtnElLawn.addEventListener("click", function() {
        let mowLawnIndex = services.indexOf(mowService)
        services.splice(mowLawnIndex,1)
        let mowLawnPriceIndex = servicesPrice.indexOf(mowServicePrice)
        servicesPrice.splice(mowLawnPriceIndex,1)
        
        mowLawnBtn.disabled = false
        removeBtnElLawn.innerHTML = ""
        renderArr()
    })
})

// this one adds pull weeds service/item to invoice 
pullWeedsBtn.addEventListener("click", function()   {
    services.push(pullWeedService)
    servicesPrice.push(pullWeedServicePrice) 
    renderArr()
    pullWeedsBtn.disabled = true
    removeBtnElWeed.innerHTML = `Remove`

        // this one removes pull weeds service/item from invoice 
    removeBtnElWeed.addEventListener("click", function() {
        let pullWeedsIndex = services.indexOf(pullWeedService)
        services.splice(pullWeedsIndex,1)
        let pullWeedsPriceIndex = servicesPrice.indexOf(pullWeedServicePrice)
        servicesPrice.splice(pullWeedsPriceIndex,1)
        
        pullWeedsBtn.disabled = false
        removeBtnElWeed.innerHTML = ""
        renderArr()
    })
})

// this one resets the app 
sendInvoiceBtn.addEventListener("click", function() {
    washCarBtn.disabled = false
    mowLawnBtn.disabled = false
    pullWeedsBtn.disabled = false
    services.length = 0
    servicesPrice.length = 0
    removeBtnElWeed.innerHTML = ""
    removeBtnElLawn.innerHTML = ""
    removeBtnEl.innerHTML = ""
    !renderArr()
})