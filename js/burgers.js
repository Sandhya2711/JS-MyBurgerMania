console.log("inside  burger.js")
var cart_list = [];

var cartClass = function() {
    this.type = "";
    this.category = "";
    this.quantity = 0;
    this.price = 0;
}

// console.log(addCartBtn)
//console.log(addCartBtn.value)
//console.log(addCartBtn.getAttribute("data-type"))


//addCartBtn.addEventListener("click", addToCartArray);

function addToCartArray(btnn) {

    addCartBtn = btnn.getAttribute("id")
    var type = btnn.getAttribute("data-type");
    var qnt = document.getElementById("quant" + addCartBtn);
    var quant = qnt.value;
    if (quant > 5) {
        console.log("inside valide")
        window.alert("Max quantity 5 ")
        qnt.focus();
        return false;
    }
    var cate = document.getElementById("cate" + addCartBtn).value;
    var price;
    switch (cate) {
        case "Veg":
            price = 100
            break;
        case "Egg":
            price = 150
            break;
        case "Chicken":
            price = 200
            break;

    }
    var flag = 0;
    for (var i in cart_list) {
        if (cart_list[i].type == type && cart_list[i].category == cate) {
            flag = 1;
            console.log(parseInt(cart_list[i].quantity), parseInt(quant))
            if ((parseInt(cart_list[i].quantity) + parseInt(quant)) <= 5) {
                console.log("insideeeeee")
                cart_list[i].quantity = (parseInt(cart_list[i].quantity) + parseInt(quant));
            } else {
                window.alert("Item already exist,if added quantity will exceed max limit i.e. 5 ")
                qnt.focus();
            }
        }
    }

    if (flag == 0) {
        addobj();
    }

    function addobj() {

        var cart_item = new cartClass();
        cart_item.type = type;
        cart_item.category = cate;
        cart_item.quantity = quant;
        cart_item.price = price;
        cart_list.push(cart_item);
        console.log("arrray size", cart_list.length)
        document.getElementById("quant" + addCartBtn).value = "";

    }
    var data = JSON.stringify(cart_list)
    window.sessionStorage.setItem("cartt", data);
}






/*
<style>
        body {
            background-image: url("./images/burgers.jpg");
            background-repeat: no-repeat, no-repeat;
            background-size: 100%, 100%;
        }

        div {
            margin-bottom: 100px;
            background-color: rgb(49, 47, 47, 0.5);
        }

        img {
            margin-top: 3px;
            border: 2px solid white;
            width: 120px;
            height: 120px;
        }

        #imageGallery li {
            margin-top: 7%;
            margin-left: 2%;
            display: inline-block;
            color: white;
            text-align: center;
        }

        select,
        option {
            padding: 3px 5px;
            text-transform: uppercase;
            font-weight: 600;
        }

        input {
            text-align: center;
            padding: 3px 3px;
            text-transform: uppercase;
            font-weight: 600;
            background-color: transparent;
            color: white;
            width: 100px;
        }

        input::placeholder {
            color: white;
        }

        select {
            margin: 5px;
        }

        button {
            font-weight: 800;
            width: 200px;
            padding: 10px 20px;
            text-align: center;
            margin-left: 0%;
            text-transform: uppercase;
            font-family: 'Montserrat', sans-serif;
        }

        #cart {
            margin: 0;
            margin-bottom: 20px;
            font-weight: 400;
            padding: 5px 10px;
            width: 150px;
            text-align: center;
            text-transform: uppercase;
            font-family: 'Montserrat', sans-serif;
        }

        button:hover {
            color: white;
            background-color: rgb(68, 67, 67);
        }
    </style>
    <script>
        console.log("inside  burger.js")
        var cart_list = [];

        var cartClass = function() {
            this.type = "";
            this.category = "";
            this.quantity = 0;
            this.price = 0;
        }

        // console.log(addCartBtn)
        //console.log(addCartBtn.value)
        //console.log(addCartBtn.getAttribute("data-type"))


        //addCartBtn.addEventListener("click", addToCartArray);

        function addToCartArray(btnn) {


            addCartBtn = btnn.getAttribute("id")
            console.log("tn id", addCartBtn)
            var type = btnn.getAttribute("data-type");
            console.log("type  -", type);
            var quant = document.getElementById("quant" + addCartBtn).value;
            console.log("quant -", quant)
            var cate = document.getElementById("cate" + addCartBtn).value;
            console.log("cate -", cate);
            var price;
            switch (cate) {
                case "Veg":
                    price = 100
                    break;
                case "Egg":
                    price = 150
                    break;
                case "Chicken":
                    price = 200
                    break;

            }

            var cart_item = new cartClass();
            cart_item.type = type;
            cart_item.category = cate;
            cart_item.quantity = quant;
            cart_item.price = price;

            cart_list.push(cart_item);
            console.log("arrray size", cart_list.length)
            document.getElementById("quant" + addCartBtn).value = "";
            //document.getElementById("a").setAttribute("href", "./cartPage.html?cart=" + JSON.stringify(cart_list))
            var data = JSON.stringify(cart_list)
            window.sessionStorage.setItem("cartt", data);
        }


        //  if (cart_list.length > 0) {
        // console.log('inside 777')

        /*  document.getElementById("cartbtn").addEventListener("click", sendData())

         function sendData() {
             alert('inside')
             ajaxFun("/cartPage.html")
         }

         function ajaxFun(url) {
             console.log('inside ajax')

             var xmlreq = new XMLHttpRequest()

             xmlreq.open("POST", url, true)

             xmlreq.setRequestHeader("Content-type", "application/json")

             xmlreq.onreadystatechange = function() {

                 console.log(xmlreq.readyState);
                 if (xmlreq.readyState === 4 && xmlreq.status === 200) {

                     var text = JSON.parse(xmlreq.responseText);
                     var cart = [];
                     cart.push(xmlreq.responseText)
                     window.localStorage.setItem("cartt", JSON.stringify(cart));

                 }
             }
             var data = JSON.stringify(cart_list)
             window.localStorage.setItem("cartt", data);
             xmlreq.send(data)

         } */