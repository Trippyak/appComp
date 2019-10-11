import express from "express";
import path from "path";

const port1 = 3000;
const port2 = 3001;
const productDetails = express();
const relatedProducts = express();

productDetails
.use(express.json())
.use(express.urlencoded({
    extended: false
}))
.use("/productDetails", express.static(path.join(__dirname, "../../productDetails/public/")))
.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
})
.post("/api/getProductDetails", (req, res) => {
    const { product } = req.body;
    res.json({
        name: product
    });
})
.listen(port1, () => {
    console.log(`Server listening on port: ${port1}`);
});

relatedProducts
.use(express.json())
.use(express.urlencoded({
    extended: false
}))
.use("/relatedProducts", express.static(path.join(__dirname, "../../relatedProducts/public/")))
.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../relatedProds.html"));
})
.post("/api/getRelatedProducts", async (req, res) => {
    const { product } = req.body;

    const relatedProductsStore = await import("./stores/relatedProducts").then(mod => mod.default);
    const relatedProducts = relatedProductsStore[product];
    res.json({
        relatedProducts
    });
})
.listen(port2, () => {
    console.log(`Server listening on port: ${port2}`);
});