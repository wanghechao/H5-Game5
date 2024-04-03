window.addEventListener("load" , function() {

    function yemian1() {
        
    let shuzi = this.document.querySelector(".shuzi");
    let num = 0;

    let timer = setInterval(() => {
        num++
        shuzi.innerHTML = num + "%";
        if(num == 100) {
            this.clearInterval(timer)
            location.replace("two.html")
        }
    }, 80);

    }

    yemian1();


})