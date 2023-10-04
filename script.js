let totalFoodsArr=[
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]


//food card design

/*
 <div class="food-card">

<img src="">

<p class="food-card-type">Veg</p>

<div class="food-card-name">
<p>Russian Salad</p>
<p><i class="fa-regular fa-star fa-sm"></i>Rating</p>
</div>

<div class="food-card-time">
<p>40 min</p>
<button><i class="fa-regular fa-heart fa-sm"></i></button>
</div>

</div>
 */

//the container is .food-card-holder
//this function takes an array and converts it into card and append to container
let foodCardHolder=document.querySelector(".food-card-holder");//global variable
function createCard(imageSrc,foodType,foodName,rating,prepTime){
    let foodCardDiv=document.createElement("div")
    foodCardDiv.className="food-card";

    let imgSrc=document.createElement("img");
    imgSrc.src=imageSrc;
    let para1=document.createElement("p")
    para1.className="food-card-type";
    para1.innerText=foodType;
    foodCardDiv.appendChild(imgSrc);
    foodCardDiv.appendChild(para1);

    let foodCardNameDiv=document.createElement("div");
    foodCardNameDiv.className="food-card-name"
    let para2=document.createElement("p");
    para2.innerText=foodName;
    let para3=document.createElement("p");
    para3.innerHTML=`<i class="fa-regular fa-star fa-sm"></i>${rating}`
    foodCardNameDiv.appendChild(para2);
    foodCardNameDiv.appendChild(para3);

    let foodCardTimeDiv=document.createElement("div");
    foodCardTimeDiv.className="food-card-time"
    let para4=document.createElement("p");
    para4.innerText=prepTime;
    let btn=document.createElement("button");
    btn.innerHTML=`<i class="fa-regular fa-heart fa-sm"></i>`
    foodCardTimeDiv.appendChild(para4);
    foodCardTimeDiv.appendChild(btn);

    foodCardDiv.appendChild(foodCardNameDiv);
    foodCardDiv.appendChild(foodCardTimeDiv);

    console.log("card created")

    return foodCardDiv;


}

 function createCardAndAppendToContainer(arr){
   
    arr.forEach((foodObj)=>{
        let imgSource=foodObj.imageSrc;
        let type=foodObj.type;
        let name=foodObj.name;
        let rating=foodObj.rating;
        let prepTime=foodObj.time;
         let card=  createCard(imgSource,type,name,rating,prepTime);
         foodCardHolder.appendChild(card);
    })

 }

 createCardAndAppendToContainer(totalFoodsArr);

 let searchInput=document.getElementById("search-input")
 let searchButton=document.getElementById("search-button")


searchInput.addEventListener('keyup',(event)=>{
    let inputTextValue=event.target.value;
    inputTextValue=inputTextValue.toLowerCase();
    for(let i=0;i<foodCardHolder.children.length;i++){
        let childCard=foodCardHolder.children[i];
        let foodNameEle=childCard.children[2].children[0];
        let name=foodNameEle.innerText;
        name=name.toLowerCase();
        // console.log(name);
        // console.log(inputTextValue);
        // console.log(name.includes(inputTextValue))
        if(inputTextValue.length==0){
            childCard.classList.remove("hide")
        }
        else if(name.includes(inputTextValue)){
            // childCard.classList.toggle("hide");
        }else{
            childCard.classList.add("hide")
        }

    }
})

searchButton.addEventListener('click',(event)=>{
    let inputTextValue=searchInput.value;
    inputTextValue=inputTextValue.toLowerCase();
    for(let i=0;i<foodCardHolder.children.length;i++){
        let childCard=foodCardHolder.children[i];
        let foodNameEle=childCard.children[2].children[0];
        let name=foodNameEle.innerText;
        name=name.toLowerCase();
        // console.log(name);
        // console.log(inputTextValue);
        // console.log(name.includes(inputTextValue))
        if(inputTextValue.length==0){
            childCard.classList.remove("hide")
        }
        else if(name.startsWith(inputTextValue)){
            // childCard.classList.toggle("hide");
        }else{
            childCard.classList.add("hide")
        }

    }
})

let vegRecipeBtn=document.getElementById("veg-recipe-btn")
let nonVegRecipeBtn=document.getElementById("non-veg-recipe-btn")
let allRecipeBtn=document.getElementById("all-recipe-btn");

let btnTypeSelected="all"; 

allRecipeBtn.addEventListener('click',(event)=>{
    searchInput.value="";
    btnTypeSelected="all";
    let btn=event.target.tagName=="I"?event.target.parentNode:event.target;
    for(let i=0;i<foodCardHolder.children.length;i++){
        let childCard=foodCardHolder.children[i];     
            childCard.classList.remove("hide")
     
    }
    
})

vegRecipeBtn.addEventListener('click',(event)=>{
    searchInput.value="";
    btnTypeSelected="veg";
    let btn=event.target.tagName=="I"?event.target.parentNode:event.target;
    for(let i=0;i<foodCardHolder.children.length;i++){
        let childCard=foodCardHolder.children[i];     
           let type=childCard.children[1].innerText.toLowerCase();
           if(type=="non-veg"){
            childCard.classList.add("hide");
           }else if(type=="veg"){
            childCard.classList.remove("hide");
           }
     
    }
})

nonVegRecipeBtn.addEventListener('click',(event)=>{
    searchInput.value="";
    btnTypeSelected="non-veg";
    let btn=event.target.tagName=="I"?event.target.parentNode:event.target;
    for(let i=0;i<foodCardHolder.children.length;i++){
        let childCard=foodCardHolder.children[i];     
           let type=childCard.children[1].innerText.toLowerCase();
           if(type=="veg"){
            childCard.classList.add("hide");
           }else if(type=='non-veg'){
            childCard.classList.remove("hide");
           }
     
    }
})


//sort by ratings
let radioBtns=document.querySelectorAll("input[name='ratings']");
// console.log(radioBtns)
// console.log(radioBtns[0]);
// console.log(radioBtns[1])
let choosenRadioOption=null;

for(let i=0;i<radioBtns.length;i++){
   radioBtns[i].addEventListener('click',(event)=>{
    if(event.target.checked){
        choosenRadioOption=event.target.value;
        if(choosenRadioOption=="4-and-above"){
            sortByRatingAbove(4);
        }else if(choosenRadioOption=="4-below"){
            sortByRatingBelow(4);
        }
         
    }
   })
}

function sortByRatingAbove(rating){
    for(let i=0;i<foodCardHolder.children.length;i++){
        let childCard=foodCardHolder.children[i]; 
            let rateOnFood=childCard.children[2].children[1].innerText;
            let type=childCard.children[1].innerText.toLowerCase();
            if(rateOnFood>=rating){
                childCard.classList.remove("hide")
            }else{
                childCard.classList.add("hide")
            }
            
           
    }
}
function sortByRatingBelow(rating){
    for(let i=0;i<foodCardHolder.children.length;i++){
        let childCard=foodCardHolder.children[i];     
            let rateOnFood=childCard.children[2].children[1].innerText;
            if(rateOnFood<rating){
                childCard.classList.remove("hide")
            }else{
                childCard.classList.add("hide")
            }
     
    }
}


