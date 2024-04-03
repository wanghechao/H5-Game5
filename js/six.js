window.addEventListener("load" , function() {

    function music() {

    let alldl = this.document.querySelector(".alldl");
    let music = this.document.querySelector(".music");
    let bgm = this.document.querySelector(".bgm")
    
    this.setInterval(function() {
        let rand = Math.floor(Math.random() * 4) 

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

    function game_set() {
        let startgame = this.document.querySelector(".regame");
        let fanhui = document.querySelector(".fanhui");
        startgame.onclick = function() {
            location.replace("five.html");
        }
        fanhui.onclick = function() {
            location.replace("two.html");
        }

        let yuanbj = document.querySelector(".yuanbj");
        let key = sessionStorage.getItem("key");
        if(key == 1){
            yuanbj.style.background = " url(img/neiron6/成功圆背景.png) 90%/90% no-repeat";
            yuanbj.children[0].style.background = "url(img/neiron5/小饼干.png) center 90%/90% no-repeat";
        }
        if(key == 2){
            yuanbj.style.background = " url(img/neiron6/成功圆背景.png) 90%/90% no-repeat";
            yuanbj.children[0].style.background = "url(img/neiron5/中饼干.png) center 90%/90% no-repeat";
        }
        if(key == 3){
            yuanbj.style.background = " url(img/neiron6/成功圆背景.png) 90%/90% no-repeat";
            yuanbj.children[0].style.background = "url(img/neiron5/大饼干.png) center 90%/90% no-repeat";
        }
    }
    game_set()

});