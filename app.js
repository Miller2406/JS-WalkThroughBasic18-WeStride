// พิมพ์ดาวให้ได้แถวตามจำนวน input ตามในตัวอย่าง
// ตัวอย่าง input:5 output:
//     *
//    **
//   ***
//  ****
// *****

function lastStar(input) {
    let str = '';
    let space = 5 - input;
    for (let i = 1; i <= space; i++) {
        str += '&';
    }
    for (let i = 0; i < input; i++) {
        str += '*';
    }
    return str;
}

console.log(lastStar(1));
console.log(lastStar(2));
console.log(lastStar(3));
console.log(lastStar(4));
console.log(lastStar(5));

console.log(`lastStar(5) <= โปรดแก้ไขตัวเลขภายใน เป็นเลขระหว่าง 0 - 5 เพื่อแสดง`);