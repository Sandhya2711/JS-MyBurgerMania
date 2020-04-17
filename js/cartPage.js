console.log('inside cartpage.js')

tt = document.getElementById("tbody");
var totalshow = document.getElementById("total");
var ajaxdata = {
    Total_Quantity: 0,
    Total_Price: 0
};

cartItems = JSON.parse(window.sessionStorage.getItem("cartt"))

//console.log(typeof(cartItems));
//console.log(cartItems);
window.onload = show();

function removeItem(index) {
    console.log("inside remove", index)
    tt.innerHTML = "";

    cartItems.splice(index, 1);
    var data = JSON.stringify(cartItems)
    window.sessionStorage.setItem("cartt", data);
    show();

}


function show() {

    var totalQuant = 0;
    //console.log("type", typeof(totalQuant));
    var totalPrice = 0;
    for (var i in cartItems) {
        var item = cartItems[i];
        //console.log("quant", totalQuant, "price", totalPrice)
        var totalamount = item.quantity * item.price
        totalQuant += parseInt(item.quantity);
        totalPrice += totalamount;
        html = "<tr><td>" + item.type + "</td><td>" + item.category + "</td><td>" + item.price + "</td><td>" +
            item.quantity + "</td><td>" + totalamount + "</td><td>" + "<img  class='close' src='./images/close.jpg' 'data-index'=" + i + " onclick='removeItem(" + i + ")'></td></tr>"
        console.log(html)
        tt.innerHTML += html
    }
    totalshow.innerHTML = "Total Quantity= " + totalQuant + "  &  Total Amount= " + totalPrice;
    ajaxdata.Total_Quantity = totalQuant;
    ajaxdata.Total_Price = totalPrice;
}

//var clsimg=document.getElementById("close")
//clsimg.addEventListener("click",removeItem(clsimg.getAttribute("data-index")))


//ajax post request

//var order = document.getElementById("order")

//order.addEventListener("click", placeOrder())


function placeOrder() {

    console.log("ajax call");
    placeOrderRequest()
}

function placeOrderRequest() {
    console.log("button clicked")
    console.log("ajaxdata", ajaxdata);
    var xmlreq = new XMLHttpRequest()
    var url = "http://localhost:9876/orders"
    xmlreq.open("POST", url, true)

    xmlreq.setRequestHeader("Content-type", "application/json")

    xmlreq.onreadystatechange = function() {

        console.log(xmlreq.readyState);
        if (xmlreq.readyState === 4 && xmlreq.status === 200) {

            var responseData = JSON.parse(xmlreq.responseText);
            console.log("response", responseData)
            console.log("response", responseData.quantity, responseData.discount, responseData.price)

            document.getElementById("label1").innerHTML = "ThankYou for choosing BurgerMania"
            document.getElementById("carttable").innerHTML =
                "<b id='b1'>Order Placed </b><br><p id='orderDisplay'>Your Total Quantity is <strong>" + responseData.quantity + " </strong><br> you will get <strong> " + responseData.discount + "% </strong>discount <br> Total Price after Discount is <strong>" + responseData.price + "</strong></p>";
        }
    }
    var data = JSON.stringify(ajaxdata)

    xmlreq.send(data)
}