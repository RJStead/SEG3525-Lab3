	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		organique: true,
		category: "Veg",
		imageURL: "https://3dblkgx9k1v2mbijx40t52x6-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/EBF_BroccoliFloretsBag-020-2-960x960.png",
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organique: false,
		category: "All",
		imageURL: "https://thestayathomechef.com/wp-content/uploads/2019/10/Homemade-Bread-4.jpg",
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organique: false,
		category: "Meat",
		imageURL: "https://www.gimmesomeoven.com/wp-content/uploads/2018/09/How-To-Baked-Salmon-Recipe-10.jpg",
		price: 10.00
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organique: false,
		category: "Meat",
		imageURL: "https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/2048x1024/landscape-1519155106-flank-steak-horizontal.jpg?resize=1200:*",
		price: 15.00
	},
	{
		name: "cheese pizza",
		vegetarian: true,
		glutenFree: false,
		organique: false,
		category: "Meal",
		imageURL: "https://eatcaulipower.ca/sites/default/files/product-images/Pizza-ThreeCheese.png",
		price: 12.00
	},
	{
		name: "tomato",
		vegetarian: false,
		glutenFree: true,
		organique: true,
		category: "All",
		imageURL: "https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38=",
		price: 6.00
	},
	{
		name: "carrots",
		vegetarian: true,
		glutenFree: true,
		organique: true,
		category: "Veg",
		imageURL: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/22/0/tm1a28_baby_carrots.jpg.rend.hgtvcom.616.462.suffix/1547589978038.jpeghttps://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/22/0/tm1a28_baby_carrots.jpg.rend.hgtvcom.616.462.suffix/1547589978038.jpeg",
		price: 4.00
	},
	{
		name: "pistachios",
		vegetarian: true,
		glutenFree: true,
		organique: false,
		category: "All",
		imageURL: "https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/4010_Roasted+Pistach-RZXmovPf-large.jpg",
		price: 10.00
	},
	{
		name: "eggs",
		vegetarian: false,
		glutenFree: true,
		organique: false,
		category: "All",
		imageURL: "https://bigcartkerala.com/wp-content/uploads/2020/04/fea333.jpg",
		price: 8.00
	},
	{
		name: "nachos",
		vegetarian: false,
		glutenFree: false,
		organique: false,
		category: "Meal",
		imageURL: "https://s23209.pcdn.co/wp-content/uploads/2016/09/Sheet-Pan-Nachos.jpg",
		price: 13.00
	}
];	

//[vegan, GlutenFree, Organic, None]
var restrictions = [false, false, false]
// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
function restrictListProducts(prods, restriction, toggle) {
	let product_names = [];
	if (restriction.includes("Vegetarian"))
		restrictions[0] = toggle;
	else if (restriction.includes("GlutenFree"))
		restrictions[1] = toggle;
	else if (restriction.includes("Organic"))
		restrictions[2] = toggle;
	
	for (let i=0; i<prods.length; i+=1) {	
		let prod = [];	
		if ((!restrictions[0] || prods[i].vegetarian == restrictions[0])
			&& (!restrictions[1] || prods[i].glutenFree == restrictions[1])
			&& (!restrictions[2] || prods[i].organique == restrictions[2])) {
			prod.push(prods[i].name + ": $" + prods[i].price);
			prod.push(prods[i].category);
			prod.push(prods[i].imageURL);
			product_names.push(prod);
		}
	}
	return product_names;
}

/* 	Pour le bubble sort algorithm j'ai
*	consulté le site https://www.geeksforgeeks.org/bubble-sort/
*/
function sortItems(array) {
	var size = array.length;
	for (let i = 0; i<size-1; i++) {
		for(let j = 0; j<size-i-1; j++) {
			if (parseInt(array[j][0].split("$")[1]) > parseInt(array[j+1][0].split("$")[1])) {
				//SWAP
				var temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	}
	
	return array;
}

function getPrice(name) {
	for (let i=0; i<products.length; i++) {
		if(products[i].name == name) {
			return products[i].price;
		}
	}
}	

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		for (let j=0; j<chosenProducts.length; j+=1) {
			if (chosenProducts[j].indexOf(products[i].name) > -1){
				totalPrice += getPrice(products[i].name);
			}
		}
	}
	return totalPrice;
}
