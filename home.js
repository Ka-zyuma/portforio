$( document ).ready(function() {
  var h = Number(document.documentElement.scrollHeight);
  var w = Number(document.documentElement.scrollWidth);

  $(".height").text(h);

  $('#to-top').click(function(){
    $('html,body').animate({
      'scrollTop':0
    },500)
  });

  $('#to-bottom').click(function(){
    $('html,body').animate({
      'scrollTop':h
    },500)
  });

  //ピンポンゲーム(未完成)

  $('#shot').click(function(){
    //初期設定
    var ballPositonY=200
    var ballVelocityY=0
    var ballAccelerationY=50
    var ballPositonX=w*0.1
    var ballVelocityX=200

    function gravity(){

      //位置計算
      ballVelocityY = ballVelocityY + ballAccelerationY * 0.01
      ballPositonY = ballPositonY + ballVelocityY * 0.01
      ballPositonX = ballPositonX + ballVelocityX * 0.01

      //位置表示
      $('#ball').css('top',ballPositonY+'px');
      $('#ball').css('left',ballPositonX+'px');

      //壁の設定
      if (ballPositonX >= w - 400){
        ballVelocityX*=-1
      };
      if (ballPositonX <= 0){
        ballVelocityX*=-1
      };
      if (ballPositonY >= h - 400){
        ballVelocityY*=-1
      };

    };
    var g = function(){
      setInterval(gravity, 10);
    };
    setTimeout(g,300);
  })
  //$('#tears').click(function(){
    //初期設定
    //var tearsPositonY=140
    //var tearsVelocityY=0
    //var tearsAccelerationY=50


    //function gravity2(){

      //位置計算
      //tearsVelocityY = tearsVelocityY + tearsAccelerationY * 0.01
      //tearsPositonY = tearsPositonY + tearsVelocityY * 0.01


      //位置表示
      //$('#tears').css('top',tearsPositonY+'px');



      //};

    //};
    //var g2 = function(){
      //setInterval(gravity2, 10);
    //};
    //setTimeout(g2,300);
  //})
  $(function () {
    const loop = document.getElementById('loop_js');

    //タイムラインを作成
    const loopAnim = new TimelineMax({
      repeat: -1 //繰り返し無制限
    });

    //画像を複製してdiv内に挿入
    let loopItem = (window.innerWidth, loop.children[0]);
    loop.appendChild(loopItem.cloneNode(true));
    loop.appendChild(loopItem.cloneNode(true));

    //アニメーションの設定
    loopAnim
      .to(loop, 50, { ease: Power0.easeNone, xPercent: -66.66666 })
      .to(loop, 0, { ease: Power0.easeNone, x: 0 });
  });

});
