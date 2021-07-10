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
                    <td>${value.price}</td>
                    <td>${value.TT}</td>
                </tr> `
    }).join('')
    document.getElementById("showcart").innerHTML= cart
    
}
showcart(data)
function pay(){
    localStorage.removeItem('dataCart')
    alert('thanh toán thành công')
    window.location.href = "http://127.0.0.1:5500/cart.html";
    
}