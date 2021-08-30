
// ===============slide====================//
var slide = ["image/banner01.jpg", "image/banner02.jpg", "image/banner03.jpg", "image/banner04.jpg"]
var index = 0
function slideimage() {
    index++
    if (index == 4) {
        index = 0
    }
    document.getElementById('slideimage').src = slide[index]
}
setInterval(slideimage, 5000)
const ButtonBackSlide = document.querySelector('.produts-slide__button__left')
ButtonBackSlide.addEventListener('click', slideimage)
const ButtonNextSlide = document.querySelector('.produts-slide__button__right')
ButtonNextSlide.addEventListener('click', slideimage)



//============click toggle=====================//

const toggle = document.querySelector('.narbar__row__toggle')
toggle.addEventListener('click', () => {
    document.querySelector('.selectSP').classList.toggle('selectSP__active')

})


//============get local=======================//
var localdata = localStorage.getItem('data')
data = JSON.parse(localdata)
var locallogin = localStorage.getItem('login')
login = JSON.parse(locallogin)
var localcart = localStorage.getItem('dataCart')
dataCart01 = JSON.parse(localcart)





var showSP = []
function ShowSPFS(data) {
    showSP = data.map(value => {
        return ` <div class=" showSP__row__item " id='card__row' data-aos="zoom-in" data-aos-duration="500">
                    <div class='card'>
                        <img src=${value.image} alt="">
                        <a href="detailsSP.html" onclick="adddetailsSP(${value.id})">${value.nameSP}</a>
                        <div class='card__rate'>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>
                        <div class='card__price'> 
                             <h1>${value.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</h1>
                             <p>1.500.000VND</p>
                        </div>
                        <button class='card__button' class="buyBT" onclick="addcard01('${value.nameSP}',${value.price},'${value.image}')" >Mua ngay</button>
                    </div> 
                </div>`
    }).join('')
    document.getElementById("showSPHTML").innerHTML = showSP
    document.getElementById("produts-slide").innerHTML = showSP



    if (login[0].status === true) {
        document.getElementById("SLcard").innerHTML = dataCart01.length
    }


    if (login[0].status == true) {
        var login01 = `<li> 
                             <p  class='userLogin' >
                                   ${login[0].name}
                             </p>
                        </li>
                         <li class ='userLogout'> 
                            <i class='bx bx-log-out narbar__icon'></i>
                            <a  href="index.html"  onclick = 'logout()' >
                                     Đăng xuất
                            </a>
                         </li>`
        document.getElementById('loginindex').innerHTML = login01
    }

}
ShowSPFS(data)
function logout() {
    var data = [{
        name: login[0].name,
        pass: login[0].pass,
        phone: login[0].phone,
        address: login[0].address,
        status: false
    }
    ]

    localStorage.setItem('login', JSON.stringify(data))
    window.location.href = "index.html"
}
function addcard01(name, price, image) {
    var dataCart = dataCart01
    if (login[0].status == true) {
        alert(' Đã thêm vào giỏ hàng :' + name)
        var Sluong = 1
        var Tongtien = Sluong * price
        dataCart.push(
            {
                name: name,
                price: price,
                SL: Sluong,
                TT: Tongtien,
                image: image

            }
        )


        localStorage.setItem('dataCart', JSON.stringify(dataCart))
        document.getElementById("SLcard").innerHTML = dataCart01.length


    }
    else (
        alert('vui lòng đăng nhập')
    )


}
function adddetailsSP(id) {
    var detailsSP = [id]
    localStorage.setItem('detailsSP', detailsSP)

}





function seachSP() {
    let valueseach = document.getElementById("seach").value

    let seach = data.filter(value => value.nameSP.toUpperCase().includes(valueseach.toUpperCase()))

    ShowSPFS(seach)
}





function saleClose() {
    document.querySelector('.sale').classList.add('sale__close')
}




// ---------------------------


