$(function () {
  // この中に書いていく

  // データの作成
  let album = [
    { src: 'img/1.jpg', msg: 'アボガドとマグロのサラダはおいしい'},
    { src: 'img/2.jpg', msg: 'カツオの刺身はお酒に合います'},
    { src: 'img/3.jpg', msg: '鴨とナスのハサミ焼き！'},
    { src: 'img/4.jpg', msg: 'すっきりしたお酒です'},
    { src: 'img/5.jpg', msg: 'かき揚げ'},
    { src: 'img/6.jpg', msg: '〆は蕎麦！！'}

  ];


  let selfilename;
  let mainImage = document.createElement('img');
  let mainMsg = document.createElement('p');
  let mainFlame = document.querySelector('#gallery .main');
  let thumbFlame = document.querySelector('#gallery .thumb');



  // 読み込み　が　押されたとき 読み込み（赤）
   $(".read").on("click", function () {
   $(".read").css("color", "red");
   $(".save").css("color", "black");
   $(".clear").css("color", "black");

  //  表示初期化
  document.getElementById('top').innerHTML="<p>　</p>"
  document.getElementById('sum').innerHTML="<p>　</p>"
  
   //  main画面の表示
    mainImage.setAttribute('src', album[0].src);
    mainImage.setAttribute('alt', album[0].msg);

    // let mainMsg = document.createElement('p');
    mainMsg.innerText = mainImage.alt;

    mainFlame.insertBefore(mainImage, null);
    mainFlame.insertBefore(mainMsg, null);

  // サムネイル画面の表示
    for (let i = 0; i < album.length; i++) {
    let thumbImage = document.createElement('img');
    thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i].src);
    thumbImage.setAttribute('alt', album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);
    
    // ローカルストレージに追加
    localStorage.setItem(album[i].src,album[i].msg ); //一覧表示に追加

    }

   //  console.log("readが押されました");
   });


   // 追加　が　押されたとき　追加（赤）
   $(".append").on("click", function () {
   $(".append").css("color", "red");
   $(".read").css("color", "black");
   $(".clear").css("color", "black");
    // console.log("saveが押されました");

    var obj1 = document.getElementById("selfile");

    obj1.addEventListener("change", function(evt){
    var file = evt.target.files;
    alert(file[0].name + "を取得しました。");
    },false);

    });

    // 
    // 
    $('#filename1').on("change", function() {
      var file = this.files[0];
      if(file != null) {
      document.getElementById("dummy_file").value = file.name;
      }
      //  console.log(file.name);
      selfilename="img/" + file.name;
    });


  $('#ad_click').on('click',function(){
  // function func1() {
    var input_message = document.getElementById("input_message").value;
    input_message = input_message ;

    console.log(selfilename);
    console.log(input_message);

localStorage.setItem(selfilename,input_message);

// { src: 'img/6.jpg', msg: '〆は蕎麦！！'}
// 連想配列に要素を追加
// 
let l=localStorage.length;
album[l].src=selfilename;
album[l].msg=input_message;
console.log("ローカルストレージ長="+l);

for (let i = 0; i < album.length; i++) {
  console.log("src="+album[i].src);
  console.log("msg="+album[i].msg);
}





    // document.getElementById("output_message").innerHTML = input_message;
  });




    // クリア　が　押されたとき　クリア（赤）
   $(".clear").on("click", function () {
   $(".clear").css("color", "red");
   $(".read").css("color", "black");
   $(".save").css("color", "black");
  //  console.log("clearが押されました");

  // ローカルストレージ　クリア
    localStorage.clear();
  // 画面クリア
    document.getElementById('top').innerHTML="<p>　</p>"
    document.getElementById('sum').innerHTML="<p>　</p>"


  });


 

  // 最初のデータを表示しておく
  // let mainImage = document.createElement('img');
  // mainImage.setAttribute('src', album[0].src);
  // mainImage.setAttribute('alt', album[0].msg);

  // let mainMsg = document.createElement('p');
  // mainMsg.innerText = mainImage.alt;

  // let mainFlame = document.querySelector('#gallery .main');
  // mainFlame.insertBefore(mainImage, null);
  // mainFlame.insertBefore(mainMsg, null);

  // サムネイル画像の表示
  // let thumbFlame = document.querySelector('#gallery .thumb');
  // for (let i = 0; i < album.length; i++) {
  //   let thumbImage = document.createElement('img');
  //   thumbImage.setAttribute('src', album[i].src);
  //   thumbImage.setAttribute('alt', album[i].msg);
  //   thumbFlame.insertBefore(thumbImage, null);
  // }


  
  
  // クリックした画像をメインにする
  thumbFlame.addEventListener('click', function(event) {

    if (event.target.src) {
      mainImage.src = event.target.src;
      mainMsg.innerText = event.target.alt;
    }


    mainImage.setAttribute('src',  mainImage.src);
    mainImage.setAttribute('alt', mainMsg.innerText);

    mainMsg.innerText = mainImage.alt;


    mainFlame.insertBefore(mainImage, null);
    mainFlame.insertBefore(mainMsg, null);





  });

// この上に書く
});

