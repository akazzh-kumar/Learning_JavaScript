let text = document.getElementById('text').value
let result = document.getElementById('result')

function cal(){
	
	let string = document.getElementById('text').value;
	let brr=string.split(" ");
	let crr=string.split("");
	
result.innerHTML = brr.length+" words " +crr.length+ " letters";


}