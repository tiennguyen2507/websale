var localdetailsSP =localStorage.getItem('detailsSP')
var detaisSp = JSON.parse(localdetailsSP)
var localdata =localStorage.getItem('data')
var data = JSON.parse(localdata)
// console.log(detaisSp)
var SP = []
function detaisSpLoad() {
    for (let i = 0; i < data.length; i++) {
        if (detaisSp == data[i].id) {
          var SP01 = ` <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                               <img src=${data[i].image} alt="">
                           </div>
                           
                           <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                               <h1>${data[i].nameSP}</h1>
                               <span>
                                   <i class="fas fa-star"></i>
                                   <i class="fas fa-star"></i>
                                   <i class="fas fa-star"></i>
                                   <i class="fas fa-star"></i>
                                   <i class="fas fa-star"></i>
                               </span>
                               <h2>${data[i].price}vnd</h2>
                               <div>
                                   <p>${data[i].title}</p>
                               </div>
                               <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Mua ngay</button>
                           </div>
                        `
            
        }
        
    }
     document.getElementById('adddetailsSP').innerHTML = SP01

    //  SP = data.map((value,index)=>{
    //      if (detaisSp == data[index].id) {
    //          return    ` <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
    //                             <img src=${value.image} alt="">
    //                         </div>
                            
    //                         <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
    //                             <h1>${value.nameSP}</h1>
    //                             <span>
    //                                 <i class="fas fa-star"></i>
    //                                 <i class="fas fa-star"></i>
    //                                 <i class="fas fa-star"></i>
    //                                 <i class="fas fa-star"></i>
    //                                 <i class="fas fa-star"></i>
    //                             </span>
    //                             <h2>${value.price}vnd</h2>
    //                             <div>
    //                                 <p>${value.title}</p>
    //                             </div>
    //                             <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Mua ngay</button>
    //                         </div>
    //                     `
             
    //      }
    //  })
     console.log(SP01)
    
     
}
detaisSpLoad()