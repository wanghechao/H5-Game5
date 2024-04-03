window.addEventListener("load" , function() {

    function music() {

    let alldl = this.document.querySelector(".alldl");
    let music = this.document.querySelector(".music");
    let bgm = this.document.querySelector(".bgm")
    
    this.setInterval(function() {
        let rand = Math.floor(Math.random() * 2) 

        alldl.children[rand].style.animation = "dl_rotate 3s linear";

        setTimeout(function() {
            alldl.children[rand].style.animation = "";
        } , 3000)

    } , 1000)

    music.addEventListener("click" , function() {
        if(bgm.paused)
        {
            bgm.play();
            this.style.animation = "music_rotate 5s linear infinite";
        }
        else
        {
            bgm.pause();
            this.style.animation = "none";
        }
        
    })

    }
    music();

    function mubu() {

        let up_tiao = document.querySelector(".up_tiao");
        let down_tiao = document.querySelector(".down_tiao");
        setTimeout(function() {
            up_tiao.style.animation = "loop_tiao 2s linear infinite";
            down_tiao.style.animation = "loop_tiao 2s linear infinite reverse";
        } , 3000)


        let llk = document.querySelector(".llk");
        let wwj = document.querySelector(".wwj");

        llk.addEventListener("click" , function(e) {
            e.target.style.animation = "btn_animate 2s";
            setTimeout(function() {
                e.target.style.animation = "";
                location.replace("three.html")
            } , 1000)
        })
        wwj.addEventListener("click" , function(e) {
            e.target.style.animation = "btn_animate 2s";
            setTimeout(function() {
                e.target.style.animation = "";
                location.replace("four.html")
            } , 1000)
        })

    }
    mubu()


})