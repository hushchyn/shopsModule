
import * as shop from './shop.js'

const BANK = document.getElementById('bank')
const STORAGE = document.getElementById('storage')
const STORAGEVINE = document.getElementById('storageVine')
const STORAGEPEPSI = document.getElementById('storagePepsi')
const COUNT = document.getElementById('count')
const BTNADD = document.getElementById('btnAdd')
const BTNBUY = document.getElementById('btnBUY')
const DRINKS = document.querySelector('.drinks')
const LIST = document.getElementById('txtArea')
const CHECK = document.querySelector('.right-aside')
const OrderLIST = document.querySelector('.order')

function render(){
    BANK.value = shop.bank();
    STORAGE.value = shop.storageBeer();
    STORAGEVINE.value = shop.storageVine();
    STORAGEPEPSI.value = shop.storagePepsi();
    COUNT.value = ''
}
render()

BTNADD.addEventListener('click', () => {
    let count = COUNT.value;
    if (DRINKS.drinks.value == 'beer'){
        let p = document.createElement('p')
        p.textContent = shop.sellB(count)
        OrderLIST.appendChild(p)
        COUNT.value = ''
    }
    else if (DRINKS.drinks.value == 'vine'){
        let p = document.createElement('p')
        p.textContent = shop.sellV(count)
        OrderLIST.appendChild(p)
        COUNT.value = ''
    }
    else if ( DRINKS.drinks.value == 'pepsi'){
        let p = document.createElement('p')
        p.textContent = shop.sellP(count)
        OrderLIST.appendChild(p)
        COUNT.value = ''
    }
})

BTNBUY.addEventListener('click', function(){
    CHECK.innerHTML = OrderLIST.innerHTML
    CHECK.innerHTML += shop.sum()
    OrderLIST.innerHTML = ''
    shop.emptySum()
    render()
})



