window.addEventListener("load" , function() {
    function music() {

        let music = this.document.querySelector(".music");
        let bgm = this.document.querySelector(".bgm")
        
    
        music.addEventListener("click" , function() {
            if(bgm.paused)
            {
                bgm.play()
     
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
        
        // 图片数据俩俩进数组
        function arrpush() {
            let arr = [];

            for(let i = 0 ;i < 6 ; i++) {
                let url = "bg"+ i +".png";
                arr.push(url , url)
            }

            return arr;
            
        }

        // 打乱数组顺序
        function rand(arr) {

            for(let j = 0 ; j < arr.length ; j++) {

                let ran = Math.floor(Math.random() * (j + 1));
                let temp = arr[ran];
                arr[ran] = arr[j];
                arr[j] = temp;

            }

            return arr;
        }

        

        let shuju = arrpush()
        let randshuju = rand(shuju)


        function game(randshuju) {
            
            for(let i = 0 ; i <= randshuju.length - 1; i++) {
                let mubu = document.querySelector(".mubu");
                // 创造元素
                let kapian = document.createElement("div");
                let bg = document.createElement("div");
                // 元素设置值
            kapian.setAttribute("class" , "kapian");
            bg.setAttribute("class" , "bg");
            bg.style.background = "url(img/neiron3/"+ randshuju[i] +") 100%/100%";
            // 将元素放入布幕
            kapian.appendChild(bg);
            mubu.appendChild(kapian);

            }
        
        }

        function kapian_click() {

            let allkapian = document.querySelectorAll(".kapian");
            let allbg = document.querySelectorAll(".bg");
            isOpen = false;
            let isok = document.querySelector(".isok");
            let ok_num = 0;


            for(let i = 0 ; i <= allkapian.length - 1 ; i++) {
                
                allkapian[i].addEventListener("click" , function() {
                    
                    // 判断有没有打开
                    if(allkapian[i].classList.contains("open") || allkapian[i].classList.contains("match")) {
                        return false;
                    }

                    //第一次肯定是false给第一次加open后就true，不执行这里代码
                    if(isOpen == false){
                        this.classList.add("open");
                        allbg[i].style.animation = "bg_rotate 2s forwards";
                        isOpen = true;
                        return;
                    }
                    //第一次肯定是false给第一次加open后就true，不执行这里代码

                    // 这里是第二次打开
                    this.classList.add("open2");
                    allbg[i].style.animation = "bg_rotate 2s forwards";
                    
                    // 判断
                    let open1 = document.querySelector(".open");
                    let open2 = document.querySelector(".open2");
                    
                    if(open1.children[0].style.background == open2.children[0].style.background) {
                        console.log("ok")
                        ok_num++;
                        isok.innerHTML = ok_num;
                        open1.classList.add("match")
                        open2.classList.add("match")
                        open1.classList.remove("open");
                        open2.classList.remove("open2");

                        // 游戏通关
                        if(ok_num >= 6) {
                            let tg = document.querySelector(".tg");
                            tg.style.display = "block";
                            let tg_return = document.querySelector(".tg_return");
                            let tg_next = document.querySelector(".tg_next");
                            tg_return.onclick = function() {
                                location.replace("two.html")
                            }
                            tg_next.onclick = function() {
                                location.replace("four.html")
                            }
                        }

                        
                    }
                    else {
                        setTimeout(function() {
                            open1.children[0].style.animation = "none"
                            open2.children[0].style.animation = "none"
                        } , 990)
                        
                        setTimeout(function() {
                            console.log("nook")
                                open1.children[0].style.animation = "bg_rotate 1s forwards reverse"
                                open2.children[0].style.animation = "bg_rotate 1s forwards reverse"
                                open1.classList.remove("open");
                                open2.classList.remove("open2");
                        } , 1000)
                    }
                    
                    isOpen = false;

                });

            }

        };

        function set_btn() {
            let regame = document.querySelector(".reset");
            let next_game = document.querySelector(".out");

            regame.onclick = function() {
                location.reload();
            }
            next_game.onclick = function() {
                location.replace("four.html")
            }


        }


        function run() {
            game(randshuju);
            kapian_click()
            set_btn()
        }
    
        run();
});