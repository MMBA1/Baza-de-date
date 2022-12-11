let productsGrid = document.getElementById('products');
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/MMBA1/baza-de-date';


xhr.open('GET',url + '/products');
xhr.responseType='json';
xhr.onload = function(){
	let products= xhr.response;
	productsGrid.innerHTML = null;
	products.forEach(p =>{
		productsArray.push(p);
		let pElem = document.createElement('div');
		pElem.classList.add('products');
		pElem.innerHTML=`
		                <h2 class='product-name'>${p.name}</h2>
		                `;

		 productsGrid.append(pElem);               
	});
}
xhr.send();