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

    // 只有下面的开始游戏函数执行才开始游戏
    function game() {
        let left_btn = document.querySelector(".left_btn");
        let right_btn = document.querySelector(".right_btn");
        let zhuazi = document.querySelector(".zhuazi");
        let start_btn = document.querySelector(".start_btn");
        let val = 12;
        var ismove = false;

        // 左右控制爪子
            left_btn.addEventListener("click" , function() {
                if(val <= 12 || ismove) {
                    return ;
                }else{
                    val -= 3;
                    zhuazi.style.left = val + "%";
                }
            });
            right_btn.addEventListener("click" , function() {
                if(val >= 72 || ismove) {
                    return ;
                }else{
                    val += 3;
                    zhuazi.style.left = val + "%";
                }
            });
            

        // 下爪子按钮
        start_btn.addEventListener("click" , function() {
            this.style.display = "none";
            ismove = true;
            xiazhuazi()
        })
        
        // 下爪子
        function xiazhuazi() {
            let zhuazi = document.querySelector(".zhuazi");
            let allbg = document.querySelector(".allbg");
            let val = 6;

            timer = setInterval(function() {
                val++;
                zhuazi.children[1].style.height = val + 24 + "%";
                zhuazi.children[2].style.top = val + "%";
                if(val >= 50) {
                    clearInterval(timer)
                    shangzhuazi()
                }
            } , 50);
            // 上爪子
            function shangzhuazi() {
                timer2 = setInterval(function() {
                    val--;
                    zhuazi.children[1].style.height = val + 24 + "%";
                    zhuazi.children[2].style.top = val + "%";
                    if(val <= 6) {
                        clearInterval(timer2)
                    }
                } , 50)
            }

            //碰撞测试
            setInterval(function() {
                let yizhuabg = document.querySelector(".yizhuabg");
                let b1 = zhuazi.children[2].offsetTop + zhuazi.children[2].offsetHeight;
                let l1 = zhuazi.offsetLeft;

                    if(b1 >= 148 && l1 >= 120 && l1 <= 145) {
                        sessionStorage.setItem("key" , "1");
                        allbg.children[0].style.animation = "zhuabg 4s forwards"
                        yizhuabg.children[0].style.animation = "yizhuabg 4s forwards"
                        next;
                    }else if(b1 >= 148 && l1 >= 154 && l1 <= 220){
                        sessionStorage.setItem("key" , "2");
                        allbg.children[1].style.animation = "zhuabg 4s forwards"
                        yizhuabg.children[1].style.animation = "yizhuabg 4s forwards"
                        next;
                    }else if(b1 >= 148 && l1 >= 220){
                        sessionStorage.setItem("key" , "3");
                        allbg.children[2].style.animation = "zhuabg 4s forwards"
                        yizhuabg.children[2].style.animation = "yizhuabg 4s forwards"
                        next;
                    }else if(b1 >= 148){
                        sessionStorage.setItem("key" , "");
                        next;
                    }
                    else {
                        next;
                    }
            
            } , 1000)

            // 下一关
            let next = setTimeout(function() {
                location.replace("six.html");
            } , 4000)

            
        }

        


    }

    function start_game() {
        // 游戏投币跟开始按钮
        let tobi = this.document.querySelector(".tobi_btn");
        let jingbi = document.querySelector(".jingbi");
        let djs = document.querySelector(".djs");
        let num = 15;
        let fanhui = document.querySelector(".return");
        let guizhe_btn = document.querySelector(".guizhe_btn");
        

        fanhui.onclick = function() {
            location.replace("four.html")
        }
        guizhe_btn.onclick = function() {
            this.parentElement.style.display = "none";
        }


        tobi.onclick = function() {
            jingbi.style.animation = "jingbi_toru 2s forwards";
            
            // 开始游戏调用游戏函数
            game();
            timer = setInterval(function() {
                num--;
                djs.innerHTML = num;
                if(num <= 0) {
                    
                    clearInterval(timer);
                }
                
            } , 1000);
            this.style.display = "none";
        }
        // 游戏投币跟开始按钮
    }
    

    function run() {
        start_game();
    }
    run()

});