var slide =["image/banner01.jpg","image/banner02.jpg","image/banner03.jpg","image/banner04.jpg" ]
var index =0

function slideimage(){
    index++
    if (index==4) {
        index=0
        
    }
    document.getElementById('slideimage').src = slide[index]
}
setInterval(slideimage,2000)
////get local///--------------------------------
 var localdata=localStorage.getItem('data')
   data = JSON.parse(localdata)
   var locallogin=localStorage.getItem('login')
   login = JSON.parse(locallogin)
   console.log(login[0].status)
   var localcart=localStorage.getItem('dataCart')
   dataCart01 = JSON.parse(localcart)
   
// -----------------------------------





function selectSP(obj){
    var value =obj.value
    var show=[]
    for (let i = 0; i < data.length; i++) {
        if (value == data[i].category) {
            show.push(data[i])
        }
    }
    var show01 =show.map(value=>{
      return  `<li>
               <a href=""> ${value.nameSP}</a>
              </li>`
    }).join('')
    document.getElementById("showSP").innerHTML = show01
    if (value =="default") {
        ShowSPFS(data)
    }else{
        ShowSPFS(show)
    }
}   
var showSP = []

function ShowSPFS(data){
    showSP = data.map(value=>{
        return ` <div class="card col-xs-6 col-sm-6 col-md-3 col-lg-2 ">
                    <div>
                        <img src=${value.image} alt="">
                        <a href="detailsSP.html" onclick="adddetailsSP(${value.id})">${value.nameSP}</a>
                        <p>${value.price}VND</p>
                        <button class="buyBT" onclick="addcard01('${value.nameSP}',${value.price},'${value.image}')" >Mua ngay</button>
                    </div> 
                </div>`
    }).join('')
    document.getElementById("showSPHTML").innerHTML = showSP
    
    
    console.log(login[0].status)

    if (login[0].status === true) {
        document.getElementById("SLcard").innerHTML= dataCart01.length
    }
    
    console.log(login[0].status)
    if (login[0].status == true ) {
       var  login01 = `<li> 
                             <a  >
                                   ${login[0].name}
                             </a>
                        </li>
                        <li> 
                            <a  href="index.html"  onclick = 'logout()' >
                                     Đăng xuất
                            </a>
                         </li>`
        document.getElementById('loginindex').innerHTML = login01
    }
    
    
   
}
ShowSPFS(data)
 function logout(){
    var data = [{
        name:login[0].name,
              pass:login[0].pass,
              phone:login[0].phone,
              address:login[0].address,
              status:false
    }
    ]
    console.log(data)
    localStorage.setItem('login',JSON.stringify(data))
    window.location.href = "index.html"

     
 }




function addcard01(name,price,image) {
    var dataCart = dataCart01
    if (login[0].status == true) {
        alert(' Đã thêm vào giỏ hàng :' +name)
        var Sluong = 1
        var Tongtien =Sluong * price
        dataCart.push(
        { name: name,
          price: price,
          SL: Sluong,
          TT: Tongtien,
          image: image  

        }
        )
   
    
        localStorage.setItem('dataCart',JSON.stringify(dataCart))
        document.getElementById("SLcard").innerHTML= dataCart01.length
        
        
    }
    else(
        alert('vui lòng đăng nhập')
    )
    
   
}
function adddetailsSP(id) {
    var detailsSP = [id]
    localStorage.setItem('detailsSP',detailsSP)
    
}





function seachSP(){
    let valueseach = document.getElementById("seach").value
    
    let seach = data.filter(value=>value.nameSP.toUpperCase().includes(valueseach.toUpperCase()))
    console.log(seach)
    ShowSPFS(seach)
}




// ---------------------------


