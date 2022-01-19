const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		res.render('products', { products: products });
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic;
		res.render('detail', { product: products[products.findIndex(product => product.id == req.params.id)] });
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
		let newProductObj = {
			id: products.length + 1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description
		}

		products.push(newProductObj);

		fs.writeFileSync(productsFilePath, JSON.stringify(products));
		
		res.redirect('/products/' + products.length);
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		let idProduct = req.params.id;
		res.render('product-edit-form', { productToEdit: products[idProduct - 1] })
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		let updateProductObj = {
			id: req.params.id,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description
		}

		let productToUpdateIndex = products.findIndex(product => product.id == updateProductObj.id)


		for (const key in products[productToUpdateIndex]) {
			if (updateProductObj[key] != '') {
				products[productToUpdateIndex][key] = updateProductObj[key];
			}
		}

		fs.writeFileSync(productsFilePath, JSON.stringify(products));
		
		res.redirect('/products/' + updateProductObj.id);
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
		let productToDeleteIndex = products.findIndex(product => product.id == req.params.id)

		products.splice(productToDeleteIndex, 1);

		fs.writeFileSync(productsFilePath, JSON.stringify(products));
	
		res.redirect('/products')
	}
};

module.exports = controller;