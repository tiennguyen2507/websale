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
   console.log(data)
// -----------------------------------

function selectSP(obj){
    var value =obj.value
    console.log(value)
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
        return ` <div class="card col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
                    <div>
                        <img src=${value.image} alt="">
                        <a href="">${value.nameSP}</a>
                        <p>${value.price}VND</p>
                        <button>Mua ngay</button>
                    </div> 
                </div>`
    }).join('')
    document.getElementById("showSPHTML").innerHTML = showSP
    console.log(showSP)
   
}
