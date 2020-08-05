const lint = 'LINT';
const x = 'x';
const obj = {
	x,
	y() {
		console.log('y');
	}
};
console.log('===');

console.log(lint, obj);