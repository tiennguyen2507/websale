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


 var localdata=localStorage.getItem('data')
   data = JSON.parse(localdata)
   console.log(data[1].category)

//  var selectSP = document.getElementById('selectSP').options[e.selectedIndex].value
//  console.log(selectSP)
function selectSP(obj){
    var value =obj.value
    console.log(value)
    var show01=[]
    var show=[]
    for (let i = 0; i < data.length; i++) {
        if (value == data[i].category) {
            show.push(data[i].nameSP)
        }
    }
    var show01 =show.map(value=>{
      return  `<li>
               <a href=""> ${value}</a>
              </li>`
    })
    document.getElementById("showSP").innerHTML = show01
}
 