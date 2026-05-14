// Lấy nút
let backToTop = document.getElementById("backToTop");

// Khi cuộn trang
window.onscroll = function () {

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        backToTop.style.display = "block";
    }else{
        backToTop.style.display = "none";
    }
};

// Khi nhấn nút
backToTop.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};