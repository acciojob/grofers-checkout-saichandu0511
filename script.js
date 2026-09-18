const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices = document.querySelectorAll(".prices"); 
	let total=0;
	for(let price of prices){
		total = total + Number(price.innertext);
	}
	let row = doucment.createElement("tr");
	let cell = doucment.createElement("td");
	cell.inner=total;
	row.appendChild("cell");
	doucment.querySelector("table").appendChild("row");
};

getSumBtn.addEventListener("click", getSum);

