// function ktThang(){
//   thang = parseInt(prompt("Nhap thang: "));
//     switch(thang){
//       case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         alert("Tháng " + thang + "có 31 ngày");
//         break;
//       case 4: case 6: case 9: case 11:
//         alert("Tháng " + thang + "có 30 ngày");
//         break;
//       case 2:
//         alert("Thắng 2 có 28 ngày");
//         break;
//       default:
//         alert("Làm gì có tháng này cha");
//         break;
//     }
//   }
// function cuuChuong(){
//   n = parseInt(prompt("Nhap so:"));
//   for(let i = 1; i < 10; i++){
//      console.log(n + "x" + i + "=" + n *i);
//   }
// }
//  function change(trangThai) {
//             var img = document.getElementById("bd");
        //     if (trangThai === 'bat') {
        //         img.src = "./image/bdmo.png";
        //     } else {
        //         img.src = "./image/bdtat.png";
        //     }
        // }
// function check(diemTB){
//     var diemTB = parseFloat(document.getElementById("diemTB").value)
//     if(diemTB <0||diemTB >10|| isNaN(diemTB)){
//         alert("Khong hop le")
//     }else if(diemTB >=8){
//         alert("Gioi")
//     }else if(diemTB >= 6.5){
//         alert("Kha")
//     }else if(diemTB >=5){
//         alert("Trung binh")
//     }else{
//         alert("Yeu")
//     }
// }
const mangHinh = [
    "../img/hoa1.jpg",
    "../img/hoa2.jpg",
    "../img/hoa3.jpg", 
    "../img/hoa4.jpg",
    "../img/hoa5.jpg",
    "../img/hoa6.jpg",
    "../img/hoa7.jpg"
];
var img = document.getElementById("hinh")
var isPlaying = true;
var timeout;
function changeImg(){
    if(isPlaying){
        var random = Math.floor(Math.random() * mangHinh.length);
        img.src = mangHinh[random];
        timeout = setTimeout(changeImg, 1000);
    }
}
function stopImg(){
        if(isPlaying = true)
        clearTimeout(timeout)
    
}