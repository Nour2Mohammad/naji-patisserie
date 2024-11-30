let availableKeywords = [
    'حليب',
    'شوكولا',
    'فريز',
    'شوكولا دارك',
];
const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
inputBox.onkeyup = function(){
    let result =[];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
        return  keyword.includes(input);
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultBox.innerHTML = '';
    }
}

function display(result){
    const content =result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list +"</li>";
    })
    resultBox.innerHTML ="<ul>" + content.join('') + "</ul>";
}
function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}
const products = [
    {
        name: " شوكولا ",
        description: "وصف المنتج 1",
        category :"فرنوار" ,
        imageUrl: "./photo_2024-11-28_06-15-26.jpg"
    },
    {
        name: "حليب",
        description: "وصف المنتج 2",
        category :"أووشوكولا" ,
        imageUrl: "./photo_2024-11-28_06-09-08.jpg "
    },
    {
        name: "  فريز",
        description: "وصف المنتج 3",
        category : "براوني",
        imageUrl: "C:\Users\Win10\Desktop\noor\web\مشاريع يوتيوب\PROJECT3\medium-shot-colleagues-celebrating.jpg"
    },
    {
        name: "منتج 4",
        description: "وصف المنتج 4",
        category:"موكا",
        imageUrl: "C:\Users\Win10\Desktop\noor\web\مشاريع يوتيوب\PROJECT3\istockphoto-1264837972-2048x2048.jpg"
    },
];
const productElements = [];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.setAttribute('data-name', product.category)

    
    productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2 class="product-name">${product.name}</h2>
            <p>${product.description}</p>
    `

    ;
    
    productList.appendChild(productDiv);
    productElements.push(productDiv);
    console.log(productElements);

});

const  filterButtons = document.querySelectorAll(".filter-buttons button");
const  filterableCart = document.querySelectorAll(".product-list .product");

//define the filter card function
const filterCart = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")
    console.log(e.target);

    //iterate over each filter card
    filterableCart.forEach(product =>{
        product.classList.add("hide");
        //check if the card matches the selected filter or "all" is selected
        if( product.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            product.classList.remove("hide");
        }
    })

};

console.log(filterButtons,filterableCart)
//add click listener to each filter button
filterButtons.forEach(button => button.addEventListener("click",filterCart));

//search button click
const searchInput = document.querySelector(".search-box");
searchInput.addEventListener("click", () => {
    //initializations
    let searchValue = inputBox.value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".product")
    console.log(searchValue)
    elements.forEach((element,index) => {
        //check if text includes the search value
        if(element.innerText.includes(searchValue)){
        //display matching card
        cards[index].classList.remove("hide");
        }
        else{
            //hide other
            cards[index].classList.add("hide");
        }
    })
})
