const wrapperSlider = document.querySelector('.slider-wrapper');
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
          {
            code: "black",
            img: "./images/air.png",
          },
          {
            code: "darkblue",
            img: "./images/air2.png",
          },
        ],
      },
      {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
          {
            code: "lightgray",
            img: "./images/jordan.png",
          },
          {
            code: "green",
            img: "./images/jordan2.png",
          },
        ],
      },
      {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
          {
            code: "lightgray",
            img: "./images/blazer.png",
          },
          {
            code: "green",
            img: "./images/blazer2.png",
          },
        ],
      },
      {
        id: 4,
        title: "Hippie",
        price: 99,
        colors: [
          {
            code: "gray",
            img: "./images/hippie.png",
          },
          {
            code: "black",
            img: "./images/hippie2.png",
          },
        ],
      },
      {
        id: 5,
        title: "Crater",
        price: 129,
        colors: [
          {
            code: "black",
            img: "./images/crater.png",
          },
          {
            code: "lightgray",
            img: "./images/crater2.png",
          },
        ],
      },
];

let choosenProduct = products[0];
const currentProductImg = document.querySelector('.product .product-img');
const currentProductTitle = document.querySelector('.product .title');
const currentProductPrice= document.querySelector('.product .price');
const currentProductColors = document.querySelectorAll('.product .colors .item');
const currentProductSizes = document.querySelectorAll('.product .sizes .item');

function setProductColors(){
    currentProductColors.forEach((colorElement,index) => {
        colorElement.style.backgroundColor = choosenProduct.colors[index].code;
    });
}

function setTransparentBackgroundToSizes(indexOfExceptElement){
    currentProductSizes.forEach((sizeElement,index)=>{
        if(index==indexOfExceptElement) return;
        sizeElement.style.backgroundColor = 'transparent';
        sizeElement.style.color = '#000';
    })
}
function setDefaultSizeBackground(){
    currentProductSizes.forEach((sizeElement,index)=>{
        sizeElement.style.backgroundColor = (index!=0 ? 'transparent' : '#000');
        sizeElement.style.color = (index!=0 ? '#000' : '#FFF');
        sizeElement.addEventListener('click',()=>{
            sizeElement.style.backgroundColor = '#000';
            sizeElement.style.color = '#FFF';
            setTransparentBackgroundToSizes(index);
        });
    })
}
setProductColors();
setDefaultSizeBackground();

document.querySelectorAll('.nav-bottom .menu-item').forEach((item,index) => {
   item.addEventListener('click',()=>{
    // Change product in slider
    wrapperSlider.style.transform = ` translateX(${-100 * index}%)`;

    // Change choosen product details
    choosenProduct = products[index];
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = `$${choosenProduct.price}`;
    currentProductImg.src = choosenProduct.colors[0].img;
    setProductColors();

   })
});

function changeProductColor(){
    currentProductColors.forEach((colorElement,index) => {
        colorElement.addEventListener('click',()=>{
            currentProductImg.src = choosenProduct.colors[index].img;
        })
        
    });
}

changeProductColor();