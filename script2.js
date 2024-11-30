let availableKeywords = [
    'سبايدر مان',
    'بنات',
    'ساندريلا',
    'حب',
    'باربي',
    'تصوير',
    'رياضي',
    'رونالدو',
    'نادي النصر',
    'صداقة',
    'طابقين',
    'دولارات',
    'عمادة',
    'صليب',
    'مسيح',
    'سنافر',
    'نقار الخشب',
    'خطبة',
    'توم وجيري',
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
        name: "  سبايدر مان",
        description: "وصف المنتج 1",
        category :"صبيان" ,
        imageUrl: "./photo_3_2024-11-29_17-59-21.jpg"
    },
    {
        name: " ساندريلا",
        description: "وصف المنتج 2",
        category :"بنات" ,
        imageUrl: "./photo_2024-11-28_06-09-08.jpg "
    },
    {
        name: " عيد الحب",
        description: "وصف المنتج 3",
        category : "حب",
        imageUrl: "./photo_2_2024-11-29_17-59-12.jpg"
    },
    {
        name: "مصور - تصوير",
        description: "وصف المنتج 4",
        category: "مهن",
        imageUrl: "./photo_1_2024-11-29_17-59-21.jpg"
    },
    {
        name: "رياضي - جيم",
        description: "وصف المنتج 4",
        category: "رياضة",
        imageUrl: "./photo_2_2024-11-29_17-59-08.jpg"
    },
    {
        name: "رونالدو - نادي النصر",
        description: "وصف المنتج 4",
        category: "رياضة",
        imageUrl: "./photo_1_2024-11-29_17-59-26.jpg"
    },
    {
        name: "صداقة - بنات",
        description: "وصف المنتج 4",
        category: "صداقة",
        imageUrl: "./photo_5_2024-11-29_17-58-35.jpg"
    },
    {
        name: "بنات - أطفال -طابقين",
        description: "وصف المنتج 4",
        category: "أطفال",
        imageUrl: "./photo_4_2024-11-29_17-59-26.jpg"
    },
    {
        name: " حب - تاريخ",
        description: "وصف المنتج 2",
        category :"حب" ,
        imageUrl: "./photo_4_2024-11-29_17-59-21.jpg "
    },
    {
        name: " دولارات - شباب",
        description: "وصف المنتج 2",
        category :"صبيان" ,
        imageUrl: "./photo_4_2024-11-29_17-59-12.jpg "
    },
    {
        name: " عمادة - صليب - مسيح",
        description: "وصف المنتج 2",
        category :"دينية" ,
        imageUrl: "./photo_4_2024-11-29_17-59-08.jpg "
    },
    {
        name: " سنافر - طابقين",
        description: "وصف المنتج 2",
        category :"أطفال" ,
        imageUrl: "./photo_5_2024-11-29_17-59-12.jpg "
    },
    {
        name: " نقار الخشب",
        description: "وصف المنتج 2",
        category :"أطفال" ,
        imageUrl: "./photo_9_2024-11-29_17-59-26.jpg "
    },
    {
        name: " خطبة - طابقين",
        description: "وصف المنتج 2",
        category :"حب" ,
        imageUrl: "./photo_9_2024-11-29_17-59-12.jpg "
    },
    {
        name: " خطبة",
        description: "وصف المنتج 1",
        category :"حب" ,
        imageUrl: "./photo_9_2024-11-29_17-59-08.jpg"
    },
    {
        name: " توم وجيري",
        description: "وصف المنتج 1",
        category :"حب" ,
        imageUrl: "./photo_2024-11-29_18-51-35.jpg"
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

