 window.onload =function() {
    var wrap = document.getElementById('carousel');
    var pic = document.getElementById('picture').getElementsByTagName('li');
    var list = document.getElementById('list').getElementsByTagName('li');
    var index = 0;
    var timer = setInterval(autoPlay, 4000);//自动播放
     for (var i = 0; i < list.length; i++) {
         list[i].onmouseover = function () {
             clearInterval(timer);
             index = this.innerText - 1;
             changeImg(index);
         }
     }
     //自动播放函数
    function autoPlay() {
        index++;
        if (index >= list.length) {
            index = 0;
        }
        changeImg(index);
    }

    // 定义图片切换函数
    function changeImg(curIndex) {
        for (var j = 0; j < list.length; j++) {
            list[j].className = "";//全部清空
            pic[j].style.display="none";
        }
        // 改变当前显示索引
        list[curIndex].className = "on";
        pic[curIndex].style.display = "block";
    }

    // 鼠标划过整个容器时停止自动播放
    wrap.onmouseover = function() {
        clearInterval(timer);
    }

    // 鼠标离开整个容器时继续播放至下一张
    wrap.onmouseout = function() {
        timer = setInterval(autoPlay, 2000);
    }


}
