import { creatSTockData } from "/apiData.js"

const stockName = document.getElementById('name');
const stockSym = document.getElementById('sym');
const stockPrice = document.getElementById('price');
const stockIcon = document.getElementById('icon'); 
const stockTime = document.getElementById('time');
const stockLocation = document.getElementById('location');
let startPrice = ""

setInterval( () => {
    const stockData = creatSTockData()
    renderSock(stockData)
}, 4000) 

function renderSock(stockData) {

   const { name, sym, price, time, location } = stockData

   const priceChange = price > startPrice 
    ? `green.png` 
    : price < startPrice 
    ? `red.png`
    : `gray.png`

    const priceAppend = document.createElement('img')
    priceAppend.src = `/images/${priceChange}`
    stockIcon.innerHTML = ""
    stockIcon.appendChild(priceAppend)
    startPrice = price


    stockName.innerText = `Name: ${name}`
    stockSym.innerText = `Symbol: ${sym}`
    stockPrice.innerText = `Stock price: $${price}`
    stockTime.innerText = `Time: ${time}`
    stockLocation.innerText = `Location: ${location}`
}
renderSock(creatSTockData())