let buffer = new ArrayBuffer(16);
let view = new Uint32Array(buffer);

console.log("view length : " + view.length);
console.log("view byte length : " + view.byteLength);

view[0] = 1234;
view[2] = 9101112;

for(let i=0 ; i<view.length ; i++){
    console.log(`view[${i}] : ` + i);
}