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

        let right_tiao = document.querySelector(".right_tiao");
        let left_tiao = document.querySelector(".left_tiao");
        setTimeout(function() {
            right_tiao.style.animation = "loop_tiao 2s linear infinite";
            left_tiao.style.animation = "loop_tiao 2s linear infinite reverse";
        } , 3000)

    }
    mubu()

    let startgame = this.document.querySelector(".startgame");
    startgame.onclick = function() {
        location.replace("five.html");
    }

})