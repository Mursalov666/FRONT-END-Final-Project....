function GetItemsfromBasket() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    console.log(basket);    
    let item = '';

    basket.forEach(x => {
        item += `
        <div class="basket-box  col-lg-11 d-flex align-items-center justify-content-between">
            <img src=${x.Image} alt="">
            <h6>${x.Name}</h6>
            <input type="number" value=${x.Count}>
            <p>${x.Price}</p>
            <button class='btn btn-danger'>Delete</button>
        </div>
        `
    })
    document.getElementById('basket-list').innerHTML = item

}

GetItemsfromBasket();

 function CountBasket() {
     let basket = JSON.parse(localStorage.getItem('basket'));
     if(basket.length === 0 ) {
         document.getElementById('count').style.display = 'none'
     }
     else{
         document.getElementById('count').style.display = 'block'
     }
     document.getElementById('count').innerHTML = basket.length
 }

 CountBasket();











function Calculator() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    let AllPrice=0;
    let AllCount=0;
      basket.forEach(x => {
           let Price=parseFloat(x.Price);
           let FullPrice=x.Count*Price;
           AllPrice+=FullPrice;
           AllCount+=x.Count;
      });
         
         let items="";

         items=`
         <div class="basket-box w-100 col-lg-1 d-flex align-items-center justify-content-between">
         <h4 class="me-5">AllCount:${AllCount}</h4>
         <h4>AllPrice:${AllPrice}</h4>
     </div>
    
         `
         document.getElementById('calc').innerHTML = items;
            

}
Calculator();