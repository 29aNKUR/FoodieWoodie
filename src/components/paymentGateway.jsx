const express = require("express");
const app = express();
const port = 3005;
const Razorpay = require("razorpay");

app.get("/", (req , res) => {
    res.send("hello!");
})

app.post("/razorpay" , async (res , res)=>{

    let {amount} = req.body;

    var instance = new Razorpay({ key_id: 'rzp_test_IdKXZt4iaS0fps', key_secret: 'eR5Y3fRku3K6SErstlGaPCzX' })

var order = await instance.orders.create({
    amount: amount * 100,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11"
})
    res.status(201).json({
        success : true,
        order, 
        amount,
    })
})




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})