const frutas = []

confirmation = confirm("Deseas comprar una fruta?")

while(confirmation) {	
	frutas[frutas.length] = prompt("Ingresa el nombre de la fruta: " )
	confirmation = confirm("Deseas comprar otra fruta?")
}

console.log("---- CARRITO DE FRUTAS ----")

for (let fruta of frutas) {
	console.log(fruta)
}