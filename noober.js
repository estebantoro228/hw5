function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // YOUR CODE
let AllRidesButton = document.querySelector('#all-filter')
AllRidesButton.addEventListener('click', async function (event){
event.preventDefault()

let url = `https://kiei451.com/api/rides.json`
let response = await fetch(url)
let json = await response.json()
let ridesDiv = document.querySelector('.rides')
ridesDiv.innerHTML = ''

let ridesInner = json
return renderRides(ridesInner)
console.log('AllRides')
RidesDiv.insertAdjacentHTML('beforeend', `${ridesInner}`)
})

//Noober pool 

let NooberPoolButton = document.querySelector('#noober-pool-filter')
NooberPoolButton.addEventListener('click', async function (event){
event.preventDefault()

let url = `https://kiei451.com/api/rides.json`
let response = await fetch(url)
let json = await response.json()
let ridesDiv = document.querySelector('.rides')
ridesDiv.innerHTML = ''

let ridesInner = json
var newVar = []
for ( let i=0; i<ridesInner.length; i++) {
let varB = ridesInner[i]
if (levelOfService(varB) == 'Noober Pool') 
newVar.push (varB)
}
return renderRides(newVar)
console.log('Noober Pool')
RidesDiv.insertAdjacentHTML('beforeend', `${ridesInner}`)
})

// Noober Purple

let NooberPurpleButton = document.querySelector('#noober-purple-filter')
NooberPurpleButton.addEventListener('click', async function (event){
event.preventDefault()

let url = `https://kiei451.com/api/rides.json`
let response = await fetch(url)
let json = await response.json()
let ridesDiv = document.querySelector('.rides')
ridesDiv.innerHTML = ''

let ridesInner = json
var newVarP = []
for ( let i=0; i<ridesInner.length; i++) {
let varP = ridesInner[i]
if (levelOfService(varP) == 'Noober Purple') 
newVarP.push (varP)
}
return renderRides(newVarP)
console.log('Noober Purple')
RidesDiv.insertAdjacentHTML('beforeend', `${ridesInner}`)
})

//Noober XL

let NooberXlButton = document.querySelector('#noober-xl-filter')
NooberXlButton.addEventListener('click', async function (event){
event.preventDefault()

let url = `https://kiei451.com/api/rides.json`
let response = await fetch(url)
let json = await response.json()
let ridesDiv = document.querySelector('.rides')
ridesDiv.innerHTML = ''

let ridesInner = json
var newVarXl = []
for ( let i=0; i<ridesInner.length; i++) {
let varXl = ridesInner[i]
if (levelOfService(varXl) == 'Noober XL') 
newVarXl.push (varXl)
}
return renderRides(newVarXl)
console.log('Noober XL')
RidesDiv.insertAdjacentHTML('beforeend', `${ridesInner}`)
})

// Noober X

let NooberXButton = document.querySelector('#noober-x-filter')
NooberXButton.addEventListener('click', async function (event){
event.preventDefault()

let url = `https://kiei451.com/api/rides.json`
let response = await fetch(url)
let json = await response.json()
let ridesDiv = document.querySelector('.rides')
ridesDiv.innerHTML = ''

let ridesInner = json
var newVarX = []
for ( let i=0; i<ridesInner.length; i++) {
let varX = ridesInner[i]
if (levelOfService(varX) == 'Noober Purple') 
newVarX.push (varX)
}
return renderRides(newVarX)
console.log('Noober X')
RidesDiv.insertAdjacentHTML('beforeend', `${ridesInner}`)
})



})