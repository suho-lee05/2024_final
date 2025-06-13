$(document).ready(function () {
    addName();
    $(".menu").mouseover(function(){
        $(this).addClass('hover');
    });
    $('.menu').mouseout(function(){
        $(this).removeClass('hover');
    });

    $(".menu:first").click(function () {
        $(".content:first").show();
        $(".content:last").hide();
        putBox();
    });

    $(".menu:last").click(function () {
        $(".content:first").hide();
        $(".content:last").show();
        getNews();
    });

    $("#nbutton > .button:first").click(function(){
        prev();
    });

    $("#nbutton > .button:last").click(function(){
        next();
    });

    
});



function addName(){
    $("header").html("ㅇㅅㅎ").addClass('top').css({
        'color':'blue',
        'font-size':'50px',
        'font-weight':'bold',
        'text-align':'center',
        'line-height':'150px'
    });
}

var counting = 0;

function getNews(){
    $("#news").empty();
    var req = $.ajax({
        'url':'news_2020.txt',
        'dataType':'json',
    });

    req.done(function(data){
        var news = $(data);
        var fnews = news.slice(counting,counting + 1);
        for(var i = 0; i < fnews.length; i++){
            var titleDiv = $("<div/>").attr('id','news_title');
            var imgDiv = $("<div/>").attr('id','img_area');
            var descDiv = $("<div/>").attr('id','news_desc');
            var aTag = $("<a/>").attr({
                href : fnews[i].link,
                target: "_blank"
            }).text(fnews[i].title);

            titleDiv.append(aTag);
            
            var imgTag = $("<img/>").attr({
                'id':'news_img',
                'src':'satoru3.jpg'
            });

            imgDiv.append(imgTag);
            descDiv.append(fnews[i].description);
            $("#news").append(titleDiv).append(imgDiv).append(descDiv);

        }
    })
    
}

function next(){
    $("#news").empty();
    var req = $.ajax({
        'url':'news_2020.txt',
        'dataType':'json',
    });

    req.done(function(data){
        var news = $(data);
        counting = counting == 16 ? 16 : counting + 1;
        var fnews = news.slice(counting,counting + 1);
        for(var i = 0; i < fnews.length; i++){
            var titleDiv = $("<div/>").attr('id','news_title');
            var imgDiv = $("<div/>").attr('id','img_area');
            var descDiv = $("<div/>").attr('id','news_desc');
            var aTag = $("<a/>").attr({
                href : fnews[i].link,
                target: "_blank"
            }).text(fnews[i].title);

            titleDiv.append(aTag);
            
            var imgTag = $("<img/>").attr({
                'id':'news_img',
                'src':'satoru3.jpg'
            });

            imgDiv.append(imgTag);
            descDiv.append(fnews[i].description);
            $("#news").append(titleDiv).append(imgDiv).append(descDiv);

        }
    })
}


function prev(){
    $("#news").empty();
    var req = $.ajax({
        'url':'news_2020.txt',
        'dataType':'json',
    });

    req.done(function(data){
        var news = $(data);
        counting = counting == 0 ? 0 : counting - 1;
        var fnews = news.slice(counting,counting + 1);
        for(var i = 0; i < fnews.length; i++){
            var titleDiv = $("<div/>").attr('id','news_title');
            var imgDiv = $("<div/>").attr('id','img_area');
            var descDiv = $("<div/>").attr('id','news_desc');
            var aTag = $("<a/>").attr({
                href : fnews[i].link,
                target: "_blank"
            }).text(fnews[i].title);

            titleDiv.append(aTag);
            
            var imgTag = $("<img/>").attr({
                'id':'news_img',
                'src':'satoru3.jpg'
            });

            imgDiv.append(imgTag);
            descDiv.append(fnews[i].description);
            $("#news").append(titleDiv).append(imgDiv).append(descDiv);

        }
    })
}


// let interval;


// function putBox() {
//     clearInterval(interval); // 중복 실행 방지
//     $("#mbox").empty();

//     const $mbox = $("#mbox");
//     const boxCount = 5;
//     const boxSize = 50;
//     const areaWidth = $mbox.width();
//     const areaHeight = $mbox.height();

//     const boxes = [];

//     for (let i = 0; i < boxCount; i++) {
//         const $box = $("<div />").addClass("box");
//         let left = Math.random() * (areaWidth - boxSize);
//         let top = Math.random() * (areaHeight - boxSize);
//         let dx = Math.random() < 0.5 ? 1 : -1;
//         let dy = Math.random() < 0.5 ? 1 : -1;

//         $box.css({
//             left: left,
//             top: top,
//             backgroundColor: randomColor()
//         });

//         $mbox.append($box);
//         boxes.push({ $el: $box, left, top, dx, dy });
//     }

//     // 주기적으로 좌표 갱신하여 떨림처럼 보이게
//     interval = setInterval(function () {
//         boxes.forEach(box => {
//             box.left += box.dx;
//             box.top += box.dy;

//             // 벽 충돌: 방향 반전 + 색상 변경
//             if (box.left <= 0 || box.left >= areaWidth - boxSize) {
//                 box.dx *= -1;
//                 box.$el.css("backgroundColor", randomColor());
//             }
//             if (box.top <= 0 || box.top >= areaHeight - boxSize) {
//                 box.dy *= -1;
//                 box.$el.css("backgroundColor", randomColor());
//             }

//             // 위치 갱신 (애니메이션 없이 부드럽게 흔들리는 느낌)
//             box.$el.css({ left: box.left + "px", top: box.top + "px" });
//         });
//     }, 20); // 이 간격이면 자연스러운 떨림처럼 보임

// }
let interval;
function putBox() {
    clearInterval(interval);
    $("#mbox").empty();

    const boxSize = 50;
    const areaWidth = $("#mbox").width();
    const areaHeight = $("#mbox").height();

    // 박스 좌표 및 방향 개별 변수로 선언
    let x1 = 100, y1 = 100, dx1 = 1, dy1 = 1;
    let x2 = 200, y2 = 150, dx2 = -1, dy2 = 1;
    let x3 = 50, y3 = 200, dx3 = 1, dy3 = -1;
    let x4 = 300, y4 = 50, dx4 = -1, dy4 = -1;
    let x5 = 250, y5 = 200, dx5 = 1, dy5 = 1;

    // 박스 5개 추가
    $("#mbox").append("<div id='box1' class='box'></div>");
    $("#mbox").append("<div id='box2' class='box'></div>");
    $("#mbox").append("<div id='box3' class='box'></div>");
    $("#mbox").append("<div id='box4' class='box'></div>");
    $("#mbox").append("<div id='box5' class='box'></div>");

    // 초기 위치 및 색 지정
    $("#box1").css({ left: x1, top: y1, backgroundColor: randomColor() });
    $("#box2").css({ left: x2, top: y2, backgroundColor: randomColor() });
    $("#box3").css({ left: x3, top: y3, backgroundColor: randomColor() });
    $("#box4").css({ left: x4, top: y4, backgroundColor: randomColor() });
    $("#box5").css({ left: x5, top: y5, backgroundColor: randomColor() });

    // 박스 움직이기
    interval = setInterval(function () {
        // box1
        x1 += dx1;
        y1 += dy1;
        if (x1 <= 0 || x1 >= areaWidth - boxSize) {
            dx1 *= -1;
            $("#box1").css("backgroundColor", randomColor());
        }
        if (y1 <= 0 || y1 >= areaHeight - boxSize) {
            dy1 *= -1;
            $("#box1").css("backgroundColor", randomColor());
        }
        $("#box1").css({ left: x1, top: y1 });

        // box2
        x2 += dx2;
        y2 += dy2;
        if (x2 <= 0 || x2 >= areaWidth - boxSize) {
            dx2 *= -1;
            $("#box2").css("backgroundColor", randomColor());
        }
        if (y2 <= 0 || y2 >= areaHeight - boxSize) {
            dy2 *= -1;
            $("#box2").css("backgroundColor", randomColor());
        }
        $("#box2").css({ left: x2, top: y2 });

        // box3
        x3 += dx3;
        y3 += dy3;
        if (x3 <= 0 || x3 >= areaWidth - boxSize) {
            dx3 *= -1;
            $("#box3").css("backgroundColor", randomColor());
        }
        if (y3 <= 0 || y3 >= areaHeight - boxSize) {
            dy3 *= -1;
            $("#box3").css("backgroundColor", randomColor());
        }
        $("#box3").css({ left: x3, top: y3 });

        // box4
        x4 += dx4;
        y4 += dy4;
        if (x4 <= 0 || x4 >= areaWidth - boxSize) {
            dx4 *= -1;
            $("#box4").css("backgroundColor", randomColor());
        }
        if (y4 <= 0 || y4 >= areaHeight - boxSize) {
            dy4 *= -1;
            $("#box4").css("backgroundColor", randomColor());
        }
        $("#box4").css({ left: x4, top: y4 });

        // box5
        x5 += dx5;
        y5 += dy5;
        if (x5 <= 0 || x5 >= areaWidth - boxSize) {
            dx5 *= -1;
            $("#box5").css("backgroundColor", randomColor());
        }
        if (y5 <= 0 || y5 >= areaHeight - boxSize) {
            dy5 *= -1;
            $("#box5").css("backgroundColor", randomColor());
        }
        $("#box5").css({ left: x5, top: y5 });
    }, 20);
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

