 //tao quan dich
 let music_ingame = document.getElementById("music_ingame");
 music_ingame.play();
 class Tank_dich {
     constructor() {

     }
     hien_thi_dich(id, top, left, rotate) {
         this.tank_dich = document.createElement('img');//tạo element mới là img
         this.tank_dich.src = 'images/xetank01.png';//lấy ảnh viên đạn với tên VIENDAN.png
         this.tank_dich.id = `tank_${id}`;//lấy id viên đạn là vien_dan
         this.tank_dich.class = 'xe_dich';
         this.tank_dich.style = `position: absolute; width: 30px; height: 30px; top:${top}px; left:${left}px; transform: rotate(${rotate}deg)`; //vị trí viên đạn tùy chỉnh với absolute và kích thước viên đạn
         //đưa vào game
         var vien_game = document.getElementById('vien_game'); //lấy giá trị viền game
         vien_game.appendChild(this.tank_dich);//ảnh tank địch được gắn vào vien_game
     }
     
 }
 let objTank_dich = new Tank_dich();
     for(let i=1;i<=5;i++){
         objTank_dich.hien_thi_dich(i,303 - 40*i,50*i,90*i);
     }

 let tank_01 = document.getElementById("tank_1");
 let tank_02 = document.getElementById("tank_2");
 let tank_03 = document.getElementById("tank_3");
 let tank_04 = document.getElementById("tank_4");
 let tank_05 = document.getElementById("tank_5");

//  console.log(tank_01.style.top);

 let boom = document.getElementById("boom");
 //khởi tạo lớp viên đạn
 class Vien_Dan {
     //khởi tạo viên đạn
     constructor() {
         this.top = 0;//khởi tạo vị trí đạn
         this.left = 0;//khởi tạo vị trí đạn
         this.vien_dan = '';  // khởi tạo đạn ko xuất hiện
         this.huong_bay = 'len'; // mặc định hướng đạn bay lên
         this.tank_left = 0;   //tọa độ xe tăng bên trái = 0
         this.tank_right = 0; //tọa độ xe tăng bên phải = 0
     }
     //hiển thị đạn
     hien_thi_dan() {
         //tạo viên đạn
         this.vien_dan = document.createElement('img');//tạo element mới là img
         this.vien_dan.src = 'images/VIENDAN.png';//lấy ảnh viên đạn với tên VIENDAN.png
         this.vien_dan.id = 'vien_dan';//lấy id viên đạn là vien_dan
         this.vien_dan.style = 'position: absolute; width: 5px; height: 5px;'; //vị trí viên đạn tùy chỉnh với absolute và kích thước viên đạn
         //đưa vào game
         var vien_game = document.getElementById('vien_game'); //lấy giá trị viền game
         vien_game.appendChild(this.vien_dan);//nút vien_dan được gắn vào vien_game
     }
     dan_bay() {
         //chỉnh hướng đạn bay bên phải theo xe tăng khi xe tăng chuyển về bên phải
         if (this.huong_bay == "phai") {//nếu hướng bay là phải
             this.left = this.left + 26 + px;//this ở đây là vị trí đạn so với xe tăng theo chiều ngang
             this.top = this.top + 12 + 'px';//this ở đây là vị trí đạn so với xe tăng xe chiều dọc
         }
         //chỉnh hướng đạn bay bên trái theo xe tăng khi xe tăng chuyển về bên trái
         if (this.huong_bay == "trai") {//----trái
             this.left = this.left - 1 + 'px';//this ở đây là vị trí đạn so với xe tăng xe tăng chiều ngang
             this.top = this.top + 12 + 'px';//this ở đây là vị trí đạn so với xe tăng chiều dọc
         }
         //chỉnh hướng đạn bay lên theo xe tăng khi xe tăng chuyển lên
         if (this.huong_bay == "len") {//-----lên
             this.left = this.left + 13 + 'px';//-----------------ngang
             this.top = this.top + 0 + 'px';//-------------------dọc
         }
         //chỉnh hướng đạn bay xuống theo xe tăng khi xe tăng chuyển xuống
         if (this.huong_bay == "xuong") {//---xuống
             this.left = this.left + 13 + 'px';//-------ngang
             this.top = this.top + 26 + 'px';//------------dọc
         }
         this.vien_dan.style.left = this.left;//gán khối viên đạn chiều ngang cho chiều ngang
         this.vien_dan.style.top = this.top;//gán khối viên đạn chiều dọc cho chiều dọc
         this.left = parseInt(this.left);//lấy giá trị kiểu số vị trí viên đạn chiều ngang
         this.top = parseInt(this.top);//lấy giá trị kiểu số vị trí viên đạn theo chiều dọc
         var self = this;//hàm ở trong hàm thì dùng biến self(hoặc self1,2) thay cho this* vì trong hàm khác không nhận this* 
         //hàm để chỉnh cho đạn bay và tốc độ bay của đạn
         var bay = setInterval(//hàm lặp lại theo thời gian
             function () {

                 if (self.huong_bay == "phai") { //khi đạn bay bên phải theo xe tăng
                     if (self.left < 296) {//nếu đạn nằm trong khung <296 thì  sẽ tăng vị trí lên
                         self.left += 5;//tăng giá trị self.left vị trí viên đạn
                         self.vien_dan.style.left = self.left + 'px';//gán vị trí đạn cho viên đạn
                     } else {
                         clearInterval(bay); // nếu nó ra ngoài viền thì
                         self.vien_dan.remove();//sẽ xóa viên đạn
                     }
                 }
                 if (self.huong_bay == "trai") {//khi đạn bay bên trái theo xe tăng
                     if (self.left > 0) {//nếu đạn nằm trong khung >0 thì  sẽ giảm vị trí lại
                         self.left -= 5;//giảm giá trị self.left vị trí viên đạn
                         self.vien_dan.style.left = self.left + 'px';//gán vị trí đạn cho viên đạn
                     } else {
                         clearInterval(bay); //------
                         self.vien_dan.remove();//-------
                     }
                 }
                 if (self.huong_bay == "len") {//khi đạn bay lên trên theo xe tăng
                     if (self.top > -2) {//nếu đạn nằm trong khung >-2
                         self.top -= 5;//thì giảm giá trị self.left là vị trí viên đạn
                         self.vien_dan.style.top = self.top + 'px';//gán vị trí viên đạn cho viên đạn
                     } else {
                         clearInterval(bay);//------
                         self.vien_dan.remove();//-----
                     }
                 }
                 if (self.huong_bay == "xuong") {//khi đạn bay xuống theo hướng xe tăng
                     if (self.top < 297) {//vị trí nằm trong khung hình
                         self.top += 5;//tăng giá trị nó lên để nó bay
                         self.vien_dan.style.top = self.top + 'px';//gán lại vị trí viên đạn cho viên đạn
                     } else {
                         clearInterval(bay);//nếu nằm ngoài khung
                         self.vien_dan.remove();//thì xóa nó đi
                     }
                 }
                 let vien_dan_top = parseInt(self.vien_dan.style.top);
                 let vien_dan_left = parseInt(self.vien_dan.style.left);
                 //kiem tra no xe tang 1
                 if (vien_dan_top > 263 && vien_dan_top <= 293 && vien_dan_left > 50 && vien_dan_left <= 80) {

                     self.vien_dan.remove();//thì xóa nó đi
                     tank_01.remove();
                     boom.play();
                 }//kiem tra no xe tang 2
                 if (vien_dan_top > 223 && vien_dan_top <= 253 && vien_dan_left > 100 && vien_dan_left <= 130) {
                     self.vien_dan.remove();//thì xóa nó đi
                     tank_02.remove();
                     boom.play();
                 }//kiem tra no xe tang 3
                  if (vien_dan_top > 183 && vien_dan_top <= 213 && vien_dan_left > 150 && vien_dan_left <= 180) {
                     self.vien_dan.remove();//thì xóa nó đi
                     tank_03.remove();
                     boom.play();
                 }//kiem tra no xe tang 4
                 if (vien_dan_top > 143 && vien_dan_top <= 173 && vien_dan_left > 200 && vien_dan_left <= 230) {
                     self.vien_dan.remove();//thì xóa nó đi
                     tank_04.remove();
                     boom.play();
                 }//kiem tra no xe tang 5
                 if (vien_dan_top > 103 && vien_dan_top <= 133 && vien_dan_left > 250 && vien_dan_left <= 280) {
                     self.vien_dan.remove();//thì xóa nó đi
                     tank_05.remove();
                     boom.play();
                 };
                 
             }, 50);//cho thời gian trễ mỗi lần thay đổi vị trí đạn là 50ms
     }
 }
 //khởi tạo lớp game xe tăng
 class Game_Xe_Tang {
     constructor() {
         this.tank = document.getElementById('tank');//gán giá trị xe tăng
         this.speed = 3;//cho tốc độ bằng 3
         this.huong_dc = 'len';//hướng mặc định khi vào game
         this.vien_dan = '';//viên đạn chưa xuất hiện khi vào game
     }
     //lệnh rẻ phải
     re_phai() {
         var value_left = this.tank.style.left;//gán value_left(giá trị chiều ngang) cho khối xe tăng
         value_left = parseInt(value_left);//chuyển đổi du lieu sang so
         value_left += this.speed;//tang gia tri chiều ngang bên phải bằng tốc độ
         if (value_left < 273) {
             this.tank.style.left = value_left + 'px';//đat lai gia tri style left của tank
         }
         this.tank.style.transform = 'rotate(90deg)';//xoay sang phải 90 do
         this.huong_dc = 'phai';//gán this.huong_dc cho 'phai'
     }
     //lệnh rẻ trái
     re_trai() {
         var value_left = this.tank.style.left;//gán value_left(gtri chieu ngang) cho khối xe tăng
         value_left = parseInt(value_left);//chuyển đổi du lieu sang so
         value_left -= this.speed;//giảm giá trị chiều ngang bên trái bằng tốc độ
         if (value_left >= -2.5) {
             this.tank.style.left = value_left + 'px';//đat lai gia tri style left của tank
         }
         this.tank.style.transform = 'rotate(270deg)';//xoay sang trái 270 do
         this.huong_dc = 'trai';//gán this.huong_dc cho 'trai'
     }
     //lệnh tiến tới
     tien_toi() {
         var value_top = this.tank.style.top;//gán value_left(gtri chiều dọc) cho khối xe tăng
         value_top = parseInt(value_top);//chuyển đổi dữ liệu sang số
         value_top -= this.speed;//giảm giá trị chiều dọc xuống dưới bằng tốc độ
         if (value_top >= -2.5) {
             this.tank.style.top = value_top + 'px';//đặt lại giá trị style top của tank
         }
         this.tank.style.transform = 'rotate(0deg)';//xoay xe 0 độ
         this.huong_dc = 'len';//gán this.huong_dc cho 'len'
     }
     //lệnh lùi lại
     lui_lai() {
         var value_top = this.tank.style.top;//gán value_left(gtri chieu doc) cho khối xe tăng
         value_top = parseInt(value_top);//chuyển đổi du lieu sang so
         value_top += this.speed;//tang gia tri chieu doc lên trên bằng tốc độ
         if (value_top < 273) {
             this.tank.style.top = value_top + 'px';//đặt lại giá trị style top của tank
         }
         this.tank.style.transform = 'rotate(180deg)';//xoay xe 180 độ
         this.huong_dc = 'xuong';//gán this.huong_dc cho 'xuong'
     }
     //lệnh bắn đạn
     ban_dan() {
         let objVien_Dan = new Vien_Dan();//mở gói của class Vien_Dan()
         //lấy giá trị top
         var value_top = this.tank.style.top;
         value_top = parseInt(value_top);
         //lấy giá trị left
         var value_left = this.tank.style.left;
         value_left = parseInt(value_left);
         //tạo viên đạo
         objVien_Dan.hien_thi_dan();//gọi lệnh hiển thị đạn
         objVien_Dan.huong_bay = this.huong_dc;//đặt giá trị this.huong_dc cho lệnh gọi hướng bay
         objVien_Dan.left = value_left;//đặt lại giá trị tọa độ viên đạn chiều ngang
         objVien_Dan.top = value_top;//đặt lại giá trị tọa độ viên đạn theo chiều dọc
         objVien_Dan.dan_bay();//gọi lệnh đạn bay
     }
 }
 //Khơi tạo đối tượng
 objGame_Xe_Tang = new Game_Xe_Tang();
 //bắt hướng di chuyển
 var x = document.getElementById("myAudio");//gán giá trị âm thanh đạn nổ
 var y = document.getElementById("myTankrun");//gán âm thanh xe chạy
 
 document.addEventListener('keydown', function (e) {//sự kiện khi nhấn phím xuống
     let phim_bam = e.code;
     //  console.log(e.code);
     switch (phim_bam) {
         case 'ArrowRight'://khi bấm phím phải
             objGame_Xe_Tang.re_phai();//gọi lệnh rẻ phải
             y.play();//âm thanh xe chạy được gọi
             music_ingame.play();
             break;
         case 'ArrowLeft'://khi bấm phím trái
             objGame_Xe_Tang.re_trai();//gọi lệnh rẻ trái
             y.play();//âm thanh xe chạy được gọi
             music_ingame.play();
             break;
         case 'ArrowDown'://khi bấm phím xuống
             objGame_Xe_Tang.lui_lai();//gọi lệnh hướng xuống
             y.play();//âm thanh xe chạy được gọi
             music_ingame.play();
             break;
         case 'ArrowUp'://khi bấm phím lên
             objGame_Xe_Tang.tien_toi();//gọi lệnh tiến lên
             y.play();//âm thanh xe chạy được gọi
             music_ingame.play();
             break;
         case 'Space'://khi bấm phím cách
             objGame_Xe_Tang.ban_dan();//gọi lệnh nổ đạn
             x.play();//âm thanh đạn nổ được gọi
             music_ingame.play();
             break;
     }
 });