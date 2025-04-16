document.addEventListener("DOMContentLoaded", function () {
    const btnTuchoi = document.querySelector(".btn_tuchoi");
    const btnText = btnTuchoi.querySelector(".btn_tuchoi button");

    let scale = 1; // bắt đầu từ scale 1( tỉ lệ phóng to, bắt đầu từ 1 (bình thường).)
    let fontSize = 20; // bắt đầu font-size 20px

    btnTuchoi.addEventListener("click", () => {
        scale += 0.1; // mỗi lần nhấn tăng 10%
        fontSize += 1; // tăng font thêm 1px mỗi lần

        btnTuchoi.style.transform = `scale(${scale})`;//Gán lại hiệu ứng phóng to cho nút bằng transform: scale(...), Kích thước nút to dần theo scale.
        btnText.style.fontSize = `${fontSize}px`;//Cập nhật kích thước font chữ theo giá trị mới.
        btnText.textContent = "Kẹc Nội Long Cước H ";//Đổi nội dung nút
    });
});
const btndongy = document.querySelector(".btn_dongy");
btndongy.addEventListener('click' ,() =>{
    confirm('Có mắt nhìn đấy');
  window.location.href ='loading.html';
})