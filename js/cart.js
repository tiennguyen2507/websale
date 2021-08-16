var localdata = localStorage.getItem('data')
        data = JSON.parse(localdata)  
var    localdataCart = localStorage.getItem('dataCart')
         dataCart = JSON.parse(localdataCart)  
         console.log(data.id)





function showcart() {
    var cart = []
    cart = dataCart.map((value,index)=>{
            return `<tr>
                    <td>${index+1}</td>
                    <td><img id="cardimage" src="${value.image}" ></td>
                    <td>${value.name}</td>
                    <td>${value.SL}</td>
                    <td>${value.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</td>
                    <td>${value.TT.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VND</td>
                </tr> `
    }).join('')
    document.getElementById("showcart").innerHTML= cart
    if (login[0].status ==true ) {
        var login01 = ` <li> 
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
    var local =localStorage.setItem('login',JSON.stringify(data))
    window.location.href = "index.html"

     
 }
showcart(data)
function pay(){
    var dataCart =[]
    localStorage.setItem('dataCart',JSON.stringify(dataCart))
    alert('thanh toán thành công')
    window.location.href = "cart.html";
    
}