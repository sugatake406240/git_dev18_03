$(function () {
  // この中に書いていく
 

  // ２次元配列の初期化
   let album=[];
   album[0]=[];


 

  let selfilename;
  let mainImage = document.createElement('img');
  let mainMsg = document.createElement('p');
  let mainFlame = document.querySelector('#gallery .main');
  let thumbFlame = document.querySelector('#gallery .thumb');
  let selpicFlame = document.querySelector('#selpic_disp'); 

  var file;

  // 
  // 読み込み　が　押されたとき
  // 
  $(".read").on("click", function () {

  //  表示初期化
  // データの作成
    album = [
      [ 'img/1.jpg', 'アボガドとマグロのサラダはおいしい'],
      [ 'img/2.jpg', 'カツオの刺身はお酒に合います'],
      [ 'img/3.jpg', '鴨とナスのハサミ焼き！'],
      [ 'img/4.jpg', 'すっきりしたお酒です'],
      [ 'img/5.jpg', 'かき揚げ'],
      [ 'img/6.jpg', '〆は蕎麦！！']
    ];
  // 画面初期化
  document.getElementById('top').innerHTML="<p>　</p>" // メイン初期化
  document.getElementById('sum').innerHTML="<p>　サムネイルはダブルクリックで消せます　</p>"// キャプション初期化
  document.getElementById('selpic_disp').innerHTML="<p>　</p>"// 選択画面　初期化
   // ローカルストレージ　クリア
   localStorage.clear();
  
   //  main画面　画像表示
    mainImage.setAttribute('src', album[0][0]);
    mainImage.setAttribute('alt', album[0][1]);
    // styleを設定
    // mainImage.setAttribute('style',"margin:0 0 20px 0 ; color" );

    // main画面　コメント表示
    mainMsg.innerText = mainImage.alt;
    mainFlame.insertBefore(mainImage, null);
    mainFlame.insertBefore(mainMsg, null);

  // サムネイル画面の表示
// console.log("aibum_len="+album.length);
    for (let i = 0; i < album.length; i++) {
    let thumbImage = document.createElement('img');
    thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i][0]);
    thumbImage.setAttribute('alt', album[i][1]);
    thumbFlame.insertBefore(thumbImage, null);
    
    // ローカルストレージに追加
    localStorage.setItem(album[i][0],album[i][1] ); //一覧表示に追加

    }
    console.log("read album長＝"+album.length);
   //  console.log("readが押されました");
   });

  // 
  // 
  // 追加が　押されたとき
  //
  // 

  // ファイル選択が押されたとき
    $('#filename1').on("change", function() {
      var file = this.files[0];
      if(file != null) {
      document.getElementById("dummy_file").value = file.name;
      }
      //  console.log(file.name);
      selfilename="img/" + file.name;

      //選択画像表示 
      document.getElementById('selpic_disp').innerHTML="<p>　サムネイルはダブルクリックで消せます</p>"

        let thumbImage = document.createElement('img');
        thumbImage.setAttribute('src', selfilename);
        thumbImage.setAttribute('alt', "");
        selpicFlame.insertBefore(thumbImage, null);    


    });

    //コメント入力・登録が押されたとき 
    $('#ad_click').on('click',function(){
    // function func1() {
      var input_message = document.getElementById("input_message").value;
      // input_message = input_message ;

      console.log(selfilename);
      console.log(input_message);

      localStorage.setItem(selfilename,input_message);



    // album配列に追加
    // 
       // ダミー配列を作成
      let array=[[selfilename,input_message]];
     
    // console.log(array);
    // console.log("fiarst apped album長＝"+ album.length);

    // 
      // album配列がnullかどうかで初期状態を判断
      if( album[0][0]==null && album[0][1]==null){
        album[0][0]=selfilename;
        album[0][1]=input_message;
        // console.log("初期　"+album);

      //  main画面　画像表示
      mainImage.setAttribute('src', album[0][0]);
      mainImage.setAttribute('alt', album[0][1]);
      // styleを設定
      // mainImage.setAttribute('style',"margin:0 0 20px 0 ; color" );

      // main画面　コメント表示
      mainMsg.innerText = mainImage.alt;
      mainFlame.insertBefore(mainImage, null);
      mainFlame.insertBefore(mainMsg, null);



      } else {
      //２次元配列を結合 
        album=album.concat(array);
        // console.log("結合　"+album);
      }

      console.log("appnd after album="+album);

      // 
      // サムネイル表示
      document.getElementById('sum').innerHTML="<p>　サムネイルはダブルクリックで消せます　</p>"

      console.log("apped album長＝"+album.length);
      for (let i = 0; i < album.length; i++) {
        let thumbImage = document.createElement('img');
        thumbImage = document.createElement('img');
        thumbImage.setAttribute('src', album[i][0]);
        thumbImage.setAttribute('alt', album[i][1]);
        thumbFlame.insertBefore(thumbImage, null);    
      }

      document.getElementById("dummy_file").value ="";
      document.getElementById("input_message").value ="";
      document.getElementById('selpic_disp').innerHTML="<p>　</p>"// 選択画面　初期化

  });


// 
// ダブルクリックしたとき
// 
// 
  thumbFlame.addEventListener('dblclick', function(event) {

    // console.log( getAttribute( event.target.src);

    let str=event.target.src;
    console.log("str="+str);

    for(let i=0; i<album.length; i++){
      if( str.indexOf(album[i][0]) != -1 ){//str内にalbum[i][0]があるかで判断
        console.log("mach="+ album[i][0]);
 
        localStorage.removeItem(album[i][0]);
        album.splice(i,1);

       
      }
      console.log(album);
    }

    // main画面　サブ画面　再表示
    // 画面初期化
    document.getElementById('top').innerHTML="<p>　</p>" // メイン初期化
    document.getElementById('sum').innerHTML="<p>　サムネイルはダブルクリックで消せます　</p>"// キャプション初期化
    document.getElementById('selpic_disp').innerHTML="<p>　</p>"// 選択画面　初期化

    //  main画面　画像表示
    mainImage.setAttribute('src', album[0][0]);
    mainImage.setAttribute('alt', album[0][1]);
    // styleを設定
    // mainImage.setAttribute('style',"margin:0 0 20px 0 ; color" );

    // main画面　コメント表示
    mainMsg.innerText = mainImage.alt;
    mainFlame.insertBefore(mainImage, null);
    mainFlame.insertBefore(mainMsg, null);

  // サムネイル画面の表示
  // console.log("aibum_len="+album.length);
    for (let i = 0; i < album.length; i++) {
    let thumbImage = document.createElement('img');
    thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i][0]);
    thumbImage.setAttribute('alt', album[i][1]);
    thumbFlame.insertBefore(thumbImage, null);

    }



  });

    // クリア　が　押されたとき　クリア（赤）
   $(".clear").on("click", function () {

  //  console.log("clearが押されました");

  // ローカルストレージ　クリア
    localStorage.clear();
  // 配列の初期化 
    album=[];
    album[0]=[];

  // 画面クリア
    document.getElementById('top').innerHTML="<p>　</p>"// メイン初期化
    document.getElementById('sum').innerHTML="<p>　</p>"// キャプション初期化
    document.getElementById('selpic_disp').innerHTML="<p>　</p>"// 選択画面　初期化
 
  });


  
  
  // クリックした画像をメインにする
  thumbFlame.addEventListener('click', function(event) {

    if (event.target.src) {
      mainImage.src = event.target.src;
      mainMsg.innerText = event.target.alt;
    }
    mainImage.setAttribute('src',  mainImage.src);
    mainImage.setAttribute('alt', mainMsg.innerText);

    // console.log(event);

    mainMsg.innerText = mainImage.alt;

    mainFlame.insertBefore(mainImage, null);
    mainFlame.insertBefore(mainMsg, null);

 

  });

// この上に書く
});

