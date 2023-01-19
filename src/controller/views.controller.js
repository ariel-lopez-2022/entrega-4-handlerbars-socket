const ProductManager = require("../ProductManager");
const Product = new ProductManager('./assets/product.json');

const views = async (req, res) => {
    let products = await Product.getProducts();
   
   res.render("home",{products} );       
}

module.exports ={
    views
}
