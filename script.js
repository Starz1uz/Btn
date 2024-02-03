const total_view = document.querySelector('#total')
const memories_btn = document.querySelectorAll('.col button')
let total_price = 1999
const first = document.querySelectorAll('#fr')

memories_btn.forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.col .active').classList.remove('active')
        btn.classList.add('active')

        const add_price = +btn.getAttribute('data-add')
        let total = Number(total_price + add_price)

        total_view.innerHTML = total.toLocaleString('en-EN')
    }
})

first.forEach(act => {
    act.onclick = () => {
        document.querySelector('.first').classList.remove('active')
        document.querySelector('.second').classList.remove('active')
        act.classList.add('active')
        console.log("hi");
    }
})