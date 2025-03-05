// AND(&)              OR(|)               XOR(^)            NOT(~)
// 1  1 : 1           1  1 : 1           1  1 : 0            0 : 1
// 1  0 : 0           1  0 : 1           1  1 : 1            1 : 0
// 0  1 : 0           0  1 : 1           1  1 : 1
// 0  0 : 0           0  0 : 0           1  1 : 0

/* 
0	0000
1	0001
2	0010
3	0011
4	0100
5	0101
6	0110
7	0111
8	1000
9	1001
*/
let x = 5; 
let y = 3; 
console.log(x & y);
console.log(x | y);
console.log(x ^ y);
console.log(x << y);
console.log(x >> y);
console.log(~x);



