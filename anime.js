const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
function anime(){
    let rotate= 0 ;
    btn1.addEventListener("click", () => {
        rotate = rotate + 32.7272727273;
        document.querySelector(".slider").style.transform = `perspective(1000px) rotateX(0deg) rotateY(${rotate}deg)`;
    })
    btn2.addEventListener("click", () => {
        rotate = rotate - 32.7272727273;
        document.querySelector(".slider").style.transform = `perspective(1000px) rotateX(0deg) rotateY(${rotate}deg)`;
    })
}
anime();