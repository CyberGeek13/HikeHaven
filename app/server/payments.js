const Razorpay = require('razorpay');
const router = require('express').Router();
const crypto = require("crypto");


router.post("/payfortickets", async (req, res) => {
    try {
        console.log(req.body)
        const instance = new Razorpay({
            key_id: "rzp_test_3bv5dujiSIkqCG",
            key_secret: "w0BUOATk4PQLQoI2bzueqHuO",
        });

        const options = {
            amount: 2450 * 100,
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        };

        instance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ message: "Something Went Wrong!" });
            }
            res.status(200).json({ data: order });
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!" });
        console.log(error);
    }
});

router.post("/verify", async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            req.body;
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256", "w0BUOATk4PQLQoI2bzueqHuO")
            .update(sign.toString())
            .digest("hex");

        if (razorpay_signature === expectedSign) {
            return res.status(200).json({ message: "Payment verified successfully" });
            
        } else {
            return res.status(400).json({ message: "Invalid signature sent!" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!" });
        console.log(error);
    }
});

module.exports = router;