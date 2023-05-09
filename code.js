let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Phở bò',
        image: 'phobo.jpg',
        price: 100000
    },
    {
        id: 2,
        name: 'Cơm tấm',
        image: 'comtam.jpg',
        price: 100000
    },
    {
        id: 3,
        name: 'Bún chả',
        image: 'buncha.jpg',
        price: 150000
    },
    {
        id: 4,
        name: 'Bánh flan',
        image: 'lan.jpg',
        price: 500000
    },
    {
        id: 5,
        name: 'Bánh mì',
        image: 'banhmi.jpg',
        price: 75000
    },
    {
        id: 6,
        name: 'Bánh xèo',
        image: 'banhxeo.jpg',
        price: 100000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Thêm vào giỏ hàng</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="../image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

function validateEmail() {
    const emailInput = document.getElementById("email");
    const message = document.getElementById("message");
    const email = emailInput.value;

    const regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email)) {
      message.textContent = "Cảm ơn đã để lại email, chúng tôi sẽ liên hệ với bạn sau!";
    } else {
      message.textContent = "Vui lòng nhập đúng cú pháp!";
    }
  }

function checkPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
  
    if (password != confirmPassword) {
      alert("Mật khẩu bạn nhập chưa chính xác!");
    }
  }

$(document).ready(function(){
    $("#search-button").click(function(){
        var rawValue = $("#search-box").val().toLowerCase();
        var value = rawValue.replace(/[^\w\s]/gi, ''); // loại bỏ các dấu câu trong từ khóa tìm kiếm
        $(".tensp h5").filter(function() {
            var productName = $(this).text().toLowerCase().replace(/[^\w\s]/gi, ''); // loại bỏ các dấu câu trong tên sản phẩm
            $(this).parent().parent().parent().toggle(productName.indexOf(value) > -1)
        });
    });
});
  
