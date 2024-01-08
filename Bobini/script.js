let products=document.querySelector('.products')
let menu=document.querySelector('.menu')
let menuIcon=document.querySelector('.menuIcon')
let menuClose=document.querySelector('#closeMenu')


let productsArray=[{
    id:6000002362496,
    img:"./images/product1.png",
    name:"Լոգանքի գել-փրփուր «Bobini» մանկական 500մլ",
    description:"Մանկական լոգանքի գել-փրփուր՝ դոնդողանման կոնֆետների էքստրակտներով։",
    type:"Լոգանքի գել",
    weight:330,
    hipoalegic:'այո'
 },
 {
    id:6000002362497,
    img:"./images/product2.png",
    name:"Լոգանքի գել-փրփուր «Bobini» մանկական 500մլ",
    description:"Մանկական լոգանքի գել-փրփուր՝ դոնդողանման կոնֆետների էքստրակտներով։",
    type:"Լոգանքի գել",
    weight:330,
    hipoalegic:'այո'
 },
 {
    id:6000002362498,
    img:"./images/product3.png",
    name:"Լոգանքի գել-փրփուր «Bobini» մանկական 500մլ",
    description:"Մանկական լոգանքի գել-փրփուր՝ դոնդողանման կոնֆետների էքստրակտներով։",
    type:"Լոգանքի գել",
    weight:330,
    hipoalegic:'այո'
 },
 {
    id:6000002362499,
    img:"./images/product4.png",
    name:"Լոգանքի գել-փրփուր «Bobini» մանկական 500մլ",
    description:"Մանկական լոգանքի գել-փրփուր՝ դոնդողանման կոնֆետների էքստրակտներով։",
    type:"Լոգանքի գել",
    weight:330,
    hipoalegic:'այո'
 },
 {
    id:60000023624910,
    img:"./images/product5.png",
    name:"Լոգանքի գել-փրփուր «Bobini» մանկական 500մլ",
    description:"Մանկական լոգանքի գել-փրփուր՝ դոնդողանման կոնֆետների էքստրակտներով։",
    type:"Լոգանքի գել",
    weight:330,
    hipoalegic:'այո'
 },
 {
    id:60000023624911,
    img:"./images/product6.png",
    name:"Լոգանքի գել-փրփուր «Bobini» մանկական 500մլ",
    description:"Մանկական լոգանքի գել-փրփուր՝ դոնդողանման կոնֆետների էքստրակտներով։",
    type:"Լոգանքի գել",
    weight:330,
    hipoalegic:'այո'
 },
 {
    id:60000023624912,
    img:"./images/product7.png",
    name:"Լոգանքի գել-փրփուր «Bobini» մանկական 500մլ",
    description:"Մանկական լոգանքի գել-փրփուր՝ դոնդողանման կոնֆետների էքստրակտներով։",
    type:"Լոգանքի գել",
    weight:330,
    hipoalegic:'այո'
 },
 {
    id:60000023624913,
    img:"./images/product8.png",
    name:"Լոգանքի գել-փրփուր «Bobini» մանկական 500մլ",
    description:"Մանկական լոգանքի գել-փրփուր՝ դոնդողանման կոնֆետների էքստրակտներով։",
    type:"Լոգանքի գել",
    weight:330,
    hipoalegic:'այո'
 },
 {
    id:60000023624913,
    img:"./images/product2.png",
    name:"Լոգանքի գել-փրփուր «Bobini» մանկական 500մլ",
    description:"Մանկական լոգանքի գել-փրփուր՝ դոնդողանման կոնֆետների էքստրակտներով։",
    type:"Լոգանքի գել",
    weight:330,
    hipoalegic:'այո'
 },
 {
    id:60000023624914,
    img:"./images/product10.png",
    name:"Լոգանքի գել-փրփուր «Bobini» մանկական 500մլ",
    description:"Մանկական լոգանքի գել-փրփուր՝ դոնդողանման կոնֆետների էքստրակտներով։",
    type:"Լոգանքի գել",
    weight:330,
    hipoalegic:'այո'
 }]
 let BlogItems=[
    {
      img:"./images/BlogCard1.png",
      title:"Հետաքրքիր երեկոյան լոգանք Bobini Fun-ով",
      description:"ճիշտ պատրաստված լոգանքն անշուշտ,կարող է ուրախության պահ լինել:"
    },
    {
        img:"./images/BlogCard2.png",
        title:"Հետաքրքիր երեկոյան լոգանք Bobini Fun-ով",
        description:"ճիշտ պատրաստված լոգանքն անշուշտ,կարող է ուրախության պահ լինել:"
      },
      {
        img:"./images/BlogCard3.png",
        title:"Հետաքրքիր երեկոյան լոգանք Bobini Fun-ով",
        description:"ճիշտ պատրաստված լոգանքն անշուշտ,կարող է ուրախության պահ լինել:"
      },
      {
        img:"./images/BlogCard4.png",
        title:"Հետաքրքիր երեկոյան լոգանք Bobini Fun-ով",
        description:"ճիշտ պատրաստված լոգանքն անշուշտ,կարող է ուրախության պահ լինել:"
      }
]

productsArray.forEach((product)=>{
    products.innerHTML+=` 
    <div class='productCard current'> 
    <div class='productImg'>
    <img src=${product.img}> 

    </div>
    <div class="Pinfo">
    <h2>${product.name}<br></h2> 
    <p> 
    ${product.description}
    </p> 
    </div>
    <div class='productWindow'>
        <div class='windowInfo'>
            <i class="bi bi-x-lg"></i>
            <div class="maininfo">
                <img src=${product.img} alt="">
                <div class="productDatas">
                     <div class="productTitle">
                    <h2>${product.name}</h2>
                    <p>Կոդը ${product.id}</p>
                     </div>
                        <div class="productInformation">
                            Տեսակը  <span> ${product.type} </span> <br>
                            Ծավալը <span> ${product.weight} մլ </span><br>
                            Հիպոալերգենիկ <span> ${product.hipoalegic}</span> <br>
                        </div>
              </div>
            </div>
            <div class="description">
            <h3>Նկարագրություն</h3>
            <p>
                    Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է։ Այս տեքստը ոչ միայն կարողացել է գոյատևել հինգ դարաշրջան, այլև ներառվել է էլեկտրոնային տպագրության մեջ՝ մնալով էապես անփոփոխ։ Այն հայտնի է դարձել 1960-ականներին Lorem Ipsum բովանդակող Letraset էջերի թողարկման արդյունքում[1], իսկ ավելի ուշ համակարգչային տպագրության այնպիսի ծրագրերի թողարկման հետևանքով, ինչպիսին է Aldus PageMaker-ը, որը ներառում է Լորեմ Իպսումի տարատեսակներ։</p>
            </div>
        </div>
    </div
    </div> 
    ` 
})






for(let i=0;i<6;i++){
    products.innerHTML+=`
     
        <div class='productCard hiddenProductCard loaded'> 
        <div class='productImg'>
        <img src=${productsArray[i].img}> 
    
        </div>
        <div class="Pinfo">
        <h2>${productsArray[i].name}<br></h2> 
        <p> 
        ${productsArray[i].description}
        </p> 
        </div>
        <div class='productWindow'>
            <div class='windowInfo'>
                <i class="bi bi-x-lg"></i>
                <div class="maininfo">
                    <img src=${productsArray[i].img} alt="">
                    <div class="productDatas">
                         <div class="productTitle">
                        <h2>${productsArray[i].name}</h2>
                        <p>Կոդը ${productsArray[i].id}</p>
                         </div>
                            <div class="productInformation">
                                Տեսակը  <span> ${productsArray[i].type} </span> <br>
                                Ծավալը <span> ${productsArray[i].weight} մլ </span><br>
                                Հիպոալերգենիկ <span> ${productsArray[i].hipoalegic}</span> <br>
                            </div>
                  </div>
                </div>
                <div class="description">
                <h3>Նկարագրություն</h3>
                <p>
                        Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է։ Այս տեքստը ոչ միայն կարողացել է գոյատևել հինգ դարաշրջան, այլև ներառվել է էլեկտրոնային տպագրության մեջ՝ մնալով էապես անփոփոխ։ Այն հայտնի է դարձել 1960-ականներին Lorem Ipsum բովանդակող Letraset էջերի թողարկման արդյունքում[1], իսկ ավելի ուշ համակարգչային տպագրության այնպիսի ծրագրերի թողարկման հետևանքով, ինչպիսին է Aldus PageMaker-ը, որը ներառում է Լորեմ Իպսումի տարատեսակներ։</p>
                </div>
            </div>
        </div
        </div> 
    `
}



for(let i=6;i<10;i++){
    products.innerHTML+=`
        <div class='productCard hiddenProductCard LoadingProductCard'> 
        <div class='productImg'>
        <img src=${productsArray[i].img}> 
        </div>
        <div class="Pinfo">
        <h2>${productsArray[i].name}<br></h2> 
        <p> 
        ${productsArray[i].description}
        </p> 
        </div>
        <div class='productWindow'>
            <div class='windowInfo'>
                <i class="bi bi-x-lg"></i>
                <div class="maininfo">
                    <img src=${productsArray[i].img} alt="">
                    <div class="productDatas">
                         <div class="productTitle">
                        <h2>${productsArray[i].name}</h2>
                        <p>Կոդը ${productsArray[i].id}</p>
                         </div>
                            <div class="productInformation">
                                Տեսակը  <span> ${productsArray[i].type} </span> <br>
                                Ծավալը <span> ${productsArray[i].weight} մլ </span><br>
                                Հիպոալերգենիկ <span> ${productsArray[i].hipoalegic}</span> <br>
                            </div>
                  </div>
                </div>
                <div class="description">
                <h3>Նկարագրություն</h3>
                <p>
                        Լորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է։ Այս տեքստը ոչ միայն կարողացել է գոյատևել հինգ դարաշրջան, այլև ներառվել է էլեկտրոնային տպագրության մեջ՝ մնալով էապես անփոփոխ։ Այն հայտնի է դարձել 1960-ականներին Lorem Ipsum բովանդակող Letraset էջերի թողարկման արդյունքում[1], իսկ ավելի ուշ համակարգչային տպագրության այնպիսի ծրագրերի թողարկման հետևանքով, ինչպիսին է Aldus PageMaker-ը, որը ներառում է Լորեմ Իպսումի տարատեսակներ։</p>
                </div>
            </div>
        </div
        </div> 
    `
    
}
products.innerHTML+=`
<div class='loadButton'>
<button class="loadingButton">Բեռնել</button>
</div>
`
let loadingButton=document.querySelector('.loadingButton')

let loading= document.querySelectorAll('.LoadingProductCard')

loadingButton.addEventListener('click',function(){
   loading.forEach((el)=>{
    el.classList.toggle('loaded')
   })
   console.log(1);
})


 function closeWindow(item){
    item.classList.toggle('active')
 }



// _____________________________________
let BlogCards=document.querySelector('.blogCards')



BlogItems.forEach((card)=>{
    BlogCards.innerHTML+=`
        <div class='blogCard'>
            <img src=${card.img} alt="">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
                 <div class="blogWindow">
                        <div class="blogMain ">
                            <i class="bi bi-x-lg"></i>
                            <div class="blogInfo floatClear">
                                <img src="${card.img}" alt="">
                                <div class='blogText'>
                                    <h2>${card.title}</h2>
                                    <p>Մորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի Մորեմ Իպսումը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային տեքստ է։ Սկսած 1500-ականներից՝ Լորեմ Իպսումը հանդիսացել է տպագրական արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից տարբեր տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է։ Այս տեքստը ոչ միայն կարողացել է գոյատևել հինգ դարաշրջան, այլև ներառվել է էլեկտրոնային տպագրության մեջ՝ մնալով էապես անփոփոխ։ Այն հայտնի է դարձել 1960-ականներին Lorem Ipsum բովանդակող Letraset էջերի թողարկման արդյունքում[1], իսկ ավելի ուշ համակարգչային տպագրության այնպիսի ծրագրերի թողարկման հետևանքով, ինչպիսին է Aldus PageMaker-ը, որը ներառում է Լորեմ Իպսումի տարատեսակներ։ Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման վրա։ Լորեմ Իպսում օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը քիչ թե շատ իրականի նման, ի տարբերություն «բովանդակություն - բովանդակություն» սովորական կրկնության, ինչը ընթերցողի համար հասկանալի է։</p>
                                    </div>
                            </div>
                        </div>
                </div>
        </div>
    `
})
let blogCard=document.querySelectorAll('.blogCard')

blogCard.forEach((el)=>{
    el.addEventListener('click',function(){
        el.classList.toggle('active')
    })
})

menuIcon.addEventListener('click',function(){
    menu.classList.toggle('activeMenu')
})
menuClose.addEventListener('click',function(){
    menu.classList.remove('activeMenu')
})
let ProductCards=document.querySelectorAll('.productCard')

ProductCards.forEach((el)=>{
    el.addEventListener('click',function(){
        el.classList.toggle('active')
    })
})
let closeIcons=document.querySelectorAll('.windowInfo i,.blogCard i')
// closeIcons.forEach((icon)=>{
//     icon.addEventListener('click',function(){
//         let item=icon.parentNode.parentNode.parentNode
//         item.classList.toggle(`active`)
//         console.log(item);
//     })
// })