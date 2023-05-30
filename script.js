





//  heder main h1 js animation 

  window.addEventListener("load", () => {  
const heroArray = ["This is the best", "place to buy", "and sell your", "crypto \
           or gift", "cards" ]
const heroHeader = document.getElementById("heroHeader")
let txt =""
let heroMainHeader = document.createElement("h1");

for(let allHeroArray in heroArray) {
     txt += `<span class="heroSp"> ${heroArray[allHeroArray]} </span>` + "</br>"  
     heroMainHeader.innerHTML = txt
     heroHeader.appendChild( heroMainHeader)

     //turn the spans into an array
     let newSpanArray = Array.from(heroMainHeader.children)
    
   //   filter out the br/tag 
     let filteredSpanArray = newSpanArray.filter(ele => {
      return ele.classList.contains("heroSp")
      
   })

         filteredSpanArray.forEach((animateSpan,index) => {
            animateSpan.style.animationDelay  = index / 100 * 10 + "s"

         })
  }

})





// security and logoText animation 
let security = document.querySelector("[class=security]");
let  logoText = document.querySelector("[class=logo]")

function popUp() {
      security.classList.toggle("comeUp", true)
    }

   setTimeout(popUp,1000)

   // logo animation 
   security.onanimationend = () => {
      logoText.style.transition = 2 + "s"
logoText.style.opacity = "1"
   }








// cryptoHeader js animation 
   const cryptoHeader = document.querySelector("[class=crypto_exp_header]")
 
const cryptoHeaderObserver = (entries) => {
  if(entries[0].isIntersecting) {

   entries[0].target.classList.toggle("visible-header",true)
     
crypObserver.unobserve(cryptoHeader)

let entriesChildren = entries[0].target.children[1] 
let entriesChildrenSpan = entriesChildren.children
let entriesChildrenArray = Array.from(entriesChildrenSpan)


entries[0].target.onanimationend = () => {
 entriesChildrenArray.forEach((entriesArray,index) => {
     entriesArray.classList.add("span-in-header");
     entriesArray.style.animationDelay = index / 100 * 20 + "s"
 })
}
  }else {
   crypObserver.observe(cryptoHeader)
   entries[0].target.classList.toggle("visible-header",false)
  }
   }
  const Option = {
   threshold : 0.3
  }
   const crypObserver = new IntersectionObserver(cryptoHeaderObserver,Option)
   
   crypObserver.observe(cryptoHeader)






// purchase class shared by sell_class and app img also  
   const purchase = document.querySelectorAll(".purchase_child")
          for(let e = 0; e <purchase.length; e++) {

   const purchaseObserver = (entries) => {
   
if (entries[0].isIntersecting) {
  entries[0].target.classList.add("purchase_js_animation")
         }
       }

  const purchaseOption = {
   threshold : 0.5
  }
   const purchObserver = new IntersectionObserver(purchaseObserver,purchaseOption)
    purchObserver.observe(purchase[e])
}






// table cell js animation 
const tableMain = document.querySelector(".table_main")
const tableData = document.querySelectorAll("[class=table_data]")
let tableDataArray = Array.from(tableData);

const tableOberverFunction = (entries) => {
// console.log(entries);  
if(entries[0].isIntersecting) {
   tableDataArray.forEach((element,index) => {
      element.classList.add("table_anim");
      element.style.animationDelay = index / 100 * 10 + "s";
   }) 
} 
}
const tableOptions = {
   threshold : 0.9
}
const tableObserver = new IntersectionObserver(tableOberverFunction, tableOptions);
 tableObserver.observe(tableMain)


 tableDataArray.forEach(ele => {
   ele.onanimationend = () => {
      // alert(30)
      ele.classList.add("constant")
   }
 })
 





//  traded_most_anim js animation 
const mostTradedAim = document.querySelectorAll(".traded_most_anim")

  for (let most = 0; most < mostTradedAim.length; most++) {
   let mostArray = Array.from(mostTradedAim)
const mostTradedFuction = (entries) => {
   if(entries[0].isIntersecting) {
      entries[0].target.classList.add("mostTradedAnimation")
      
      
      mostArray.forEach((ele,index) => {
      ele.style.animationDelay = index / 100 * 5 + "s";
   });
   }
} 

const mostTradedObserver = new IntersectionObserver(mostTradedFuction, {thresold: 0.5})
  
mostTradedObserver.observe(mostTradedAim[most])

  }






//   coin_anim js animation 
const coinAnim = document.querySelectorAll(".coin_anim");
    for (let coinA = 0; coinA < coinAnim.length; coinA++) {
const coinAnimFunction = (entries) => {
   if (entries[0].isIntersecting) {
      // console.log(entries);
      entries[0].target.classList.toggle("coin_most_traded", true);
   }
}


const coinAnimObserver = new IntersectionObserver(coinAnimFunction,{threshold: 0.9})

coinAnimObserver.observe(coinAnim[coinA]);

}











// payment_anim js animation 
const paymentAnim = document.querySelectorAll(".payment_anim")
for (let paymentA = 0; paymentA <paymentAnim.length; paymentA++) {
   const paymentAnimFunction = (entries) => {
      // console.log(entries);
      if (entries[0].isIntersecting) {
         entries[0].target.classList.toggle("payment_animation",true)
      }
   }

const paymentAnimObserver = new IntersectionObserver(paymentAnimFunction, {threshold: 0.9})
paymentAnimObserver.observe(paymentAnim[paymentA])

}





// diverse crypto exp /user friendly /market accessibilty js animation 
const dumAnimation = document.querySelectorAll(".dum")

  for (let d = 0; d < dumAnimation.length; d++) {
   let dumArray = Array.from(dumAnimation)
const dumFuction = (entries) => {
   if(entries[0].isIntersecting) {
      entries[0].target.classList.add("dumAnim")
      
      
      dumArray.forEach((ele,index) => {
      ele.style.animationDelay = index / 100 * 7 + "s";
   });
   }
} 

const dumObserver = new IntersectionObserver(dumFuction, {thresold: 0.9})
  
dumObserver.observe(dumAnimation[d])

  }
