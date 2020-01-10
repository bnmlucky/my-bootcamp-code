// Dependencies
const express = require("express")
const router = express.Router();

// Model

const Product = require("../models/products.js")

// Create
router.post("/", (req, res) => {
    Product.create(req.body, (error, createdProduct) => {
        if (error) {
            res.send(error);
        } else {
            res.redirect("/products")
        }
    });
});

// Index
router.get("/", (req, res) => {
    Product.find({}, (error, allProducts) => {
        if (error) {
            res.send(error);
        } else {
            res.render("index.ejs", {
                products: allProducts
            });
        }
    });
});

// New
router.get("/new", (req, res) => {
    res.render("new.ejs");
});

// Edit
router.get("/:id/edit", (req, res) => {
    Product.findById(req.params.id, (error, foundProduct) => {
        if (error) {
            console.log(error)
        } else {
            res.render("edit.ejs", {
                product: foundProduct
            })
        }
    })
})

// Update 

router.put("/:id", (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedProduct) => {
        if (error) {
            console.log(error)
        } else {
            res.render("show.ejs", {
                product: updatedProduct
            })
        }
    })
})

// Show
router.get("/:id", (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        res.render("show.ejs", { product: product });
    })
});

// Delete
router.delete("/:id", (req, res) => {
    Product.findByIdAndDelete(req.params.id, (error, deletedProduct) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect("/products");
        }
    })
});

// Buy
router.put("/:id/buy", (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) {
            console.log(err)
        } else {
            product.qty = Math.max(product.qty - 1, 0);
            product.save((err, product) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render("show.ejs", { product: product });
                }
            });
        }
    })
});

module.exports = router;

