const list = [];


const observer = new MutationObserver(function () {calculation();});
observer.observe(document.body, { childList: true }); // 監視開始
let calculation_variables;

function calculation(){
    get_dom = [];
    list.length = 0;
    list.push({number:0, pass:0, fail:0,time:0,watch:0});//動画関連のものであり、numberが動画数、passが正答した動画数、failが間違えた動画数、timeが合計視聴時間, watchが今みた時間である。
    list.push({number:0, pass:0, fail:0,time:0,watch:0});//Nプラス関連のものであり、numberが動画数、passが正答した動画数、failが間違えた動画数、timeが合計視聴時間, watchが今みた時間である。
    list.push({number:0, pass:0,fail:0});//課外授業に主に出てくるドキュメント(アイコンが紙のやつ)関連のものであり、numberが数、passが自信のあるもの、failが自信がないものである。
    list.push({number:0, pass:0,fail:0});//問題関連のものであり、numberが数、passが正答、failが間違えたものである。
    already_get_dom = false;
    get_html = document.querySelectorAll('*');
    for(var embed_number = 0; embed_number < get_html.length; embed_number++){
        if((get_html[embed_number].textContent == '概要' || get_html[embed_number].textContent == '教材' || get_html[embed_number].textContent == '授業') && get_html[embed_number].childElementCount == 0 && get_html[embed_number].closest('main') !== null){
            switch(get_html[embed_number].textContent){
            case '教材':
                embed(get_html[embed_number].parentNode.parentNode.lastElementChild);
                break;
            case '概要':
                dom(get_html[embed_number].parentNode.parentNode.lastElementChild);
                break;
                case '授業':
                  dom(get_html[embed_number].parentNode.parentNode.lastElementChild);
                  break;
                }
            }
        }
};
    //計算部分

 function embed(calculation_variables){
    for (let for_number = 0; for_number < calculation_variables.childElementCount; for_number++){
    
    search_right = calculation_variables.children[for_number].lastElementChild.lastElementChild;//右側の時間とか問題数とかのやつを抜き取る一歩手前
    
    if(search_right.childElementCount > 0) { 
      search_mini = search_right.lastElementChild.textContent;
    }
    var search_type = ((calculation_variables.children[for_number]).getElementsByTagName("i")[0]).getAttribute("type");//そのアイコンの種類
    console.log(search_type);
    var search_style = ((calculation_variables.children[for_number]).getElementsByTagName("i")[0]).getAttribute("style");//アイコンの色とかいろいろな情報
    console.log(search_style);
    
    switch(search_type){
        case 'movie-rounded'://動画
            new_time = search_mini.split(":");//まず文字を分と秒に分ける。
            list[0].time =list[0].time +  (Number(new_time[0]) * 60 +  Number(new_time[1]));//分を秒に分ける。

            list[0].number++;//動画数を1足す。
            if(search_style.indexOf("color: rgb(0, 197, 65)") >= 0){
                list[0].pass++;//もしアイコンが緑色ならpassを1増やす。
                list[0].watch += (Number(new_time[0]) * 60 +  Number(new_time[1]));
            }else if(search_style.indexOf("rgb(245, 81, 81)") >= 0){
                list[0].fail++;//もしアイコンが赤色ならfailを1増やす。
            }
        break;

        case 'movie-rounded-plus'://Nプラスの動画
        console.log(search_mini);
            new_time = search_mini.split(":");//まず文字を分と秒に分ける。
            list[1].time += (Number(new_time[0]) * 60 +  Number(new_time[1]));//分を秒に分ける。

            list[1].number++;//動画数を1足す。
            if(search_style.indexOf("color: rgb(0, 197, 65)") >= 0){
                list[1].pass++;//もしアイコンが緑色ならpassを1増やす。
                list[1].watch += (Number(new_time[0]) * 60 +  Number(new_time[1]));
            }else if(search_style.indexOf("rgb(245, 81, 81)") >= 0){
                list[1].fail++;//もしアイコンが赤色ならfailを1増やす。
            }
        break;

        case 'text-rounded'://資料みたいなやつ
            list[2].number++;//合計数を1足す。
            if(search_style.indexOf("color: rgb(0, 197, 65)") >= 0){
                list[2].pass++;//もしアイコンが緑色ならpassを1増やす。
            }else if(search_style.indexOf("rgb(245, 81, 81)") >= 0){
                list[2].fail++;//もしアイコンが赤色ならfailを1増やす。
            }
        break;

        case 'exercise-rounded'://問題
            list[3].number++;//合計数を1足す。
            if(search_style.indexOf("color: rgb(0, 197, 65)") >= 0){
                list[3].pass++;//もしアイコンが緑色ならpassを1増やす。
            }else if(search_style.indexOf("rgb(245, 81, 81)") >= 0){
                list[3].fail++;//もしアイコンが赤色ならfailを1増やす。
            }
        break;
    }}
    
    console.log(list);
    }

function dom(get_dom){
    new_dom = document.getElementById('Ntime_div')
    if(new_dom != null){
        new_dom.remove();
    }
    get_dom.innerHTML += ` <div id="Ntime_div">
    <div id="Ntime_top_div">
      <div class="new_box">
        <canvas id='progress_dom' width="400" height="200"></canvas>
      <p>進捗率は上を見て</p>
      </div>
    </div>
  <div id="Ntime_bottom_div">
    <div id="Ntime_div_left">
      <div class="new_box">
        <canvas id="movie_time" width="250" height="125"></canvas>
        <p>動画視聴時間<br><span id='movie_dom'></span></p>
      </div>
      <div class="new_box">
        <canvas id="n_movie_time" width="250" height="125"></canvas>
        <p>Nプラス視聴時間<br><span id='N_movie_dom'></span></p>
      </div>
    </div>
    <div id="Ntime_div_right">
      <div class="new_box">
        <canvas id="movie_number" width="150" height="75"></canvas>
        <p>動画数<br><span id="movie_number_dom"></span></p>
      </div>
      <div class="new_box">
        <canvas id="n_movie_number" width="150" height="75"></canvas>
        <p>Nプラスの動画数<br><span id="N_movie_number_dom"></span></p>
      </div>
      <div class="new_box">
        <canvas id="document_number" width="150" height="75"></canvas>
        <p>資料の数<br><span id="doument_number_dom"></span></p>
      </div>
      <div class="new_box">
        <canvas id="question_number" width="150" height="75"></canvas>
        <p>問題の数<br><span id="question_number_dom"></span></p>
      </div>
    </div>
  </div>
  </div>`
  /* 
  movie_dom:動画視聴時間を埋め込むところ
  N_movie_dom:Nプラス視聴時間を埋め込むところ
  movie_number_dom:動画数を埋め込むところ
  N_movie_number_dom:Nプラスの動画数を埋め込むところ
  document_number_dom:資料の数を埋め込むところ
  question_number_dom:問題の数を埋め込むところ
  */
  document.getElementById('movie_dom').innerHTML = Math.floor(list[0].watch/3600)+ '時間' + Math.floor((list[0].watch%3600)/60) + '分/' + Math.floor(list[0].time/3600)+ '時間' + Math.floor((list[0].time%3600)/60) + '分';
  document.getElementById('N_movie_dom').innerHTML = Math.floor(list[1].watch/3600)+ '時間' + Math.floor((list[1].watch%3600)/60) + '分/' + Math.floor(list[1].time/3600)+ '時間' + Math.floor((list[1].time%3600)/60) + '分';
  
  if(list[0].number !== 0){
    document.getElementById('movie_number_dom').innerHTML = list[0].pass + '個(' + list[0].fail + '個)/' + list[0].number + '個';
  }else{
  document.getElementById('movie_number_dom').innerHTML = '0個(0個)/0個';
  }

  if(list[1].number !== 0){
    document.getElementById('N_movie_number_dom').innerHTML = list[1].pass + '個(' + list[1].fail + '個)/' + list[1].number + '個';
  }else{
    document.getElementById('N_movie_number_dom').innerHTML = '0個(0個)/0個';
  }

  if(list[2].number !== 0){
    console.log(list[2])
     document.getElementById('doument_number_dom').innerHTML = list[2].pass + '個(' + list[2].fail + '個)/' + list[2].number + '個';
  }else{
    document.getElementById('doument_number_dom').innerHTML = '0個(0個)/0個';
    }

  if(list[3].number !== 0){
    document.getElementById('question_number_dom').innerHTML = list[3].pass + '個(' + list[3].fail + '個)/' + list[3].number + '個';
 }else{
  document.getElementById('question_number_dom').innerHTML = '0個(0個)/0個';
 }
  dom_embed(document.getElementById('movie_time'), 125, 15, 0, 'time');
  dom_embed(document.getElementById('n_movie_time'), 125, 15, 1, 'time');
  dom_embed(document.getElementById('movie_number'), 75, 5, 0);
  dom_embed(document.getElementById('n_movie_number'), 75, 5, 1);
  dom_embed(document.getElementById('document_number'), 75, 5, 2);
  dom_embed(document.getElementById('question_number'), 75, 5, 3);
  //dom_embed(document.getElementById('progress_dom'), 200, 20);
}

function dom_embed(get_domid, size, line, list_number, type){
    const get_dom = get_domid.getContext('2d'); // コンテキストの取得
    let passRatio;
    let total;
    let failRatio;
    let pass;
    let fail;
    if(list[list_number].number > 0){
    if(type == 'time'){
      total = list[list_number].time;
      passRatio = list[list_number].watch / total;
      failRatio = 0; 
    }else{
      total = list[list_number].number;
      passRatio = list[list_number].pass / total;
      failRatio = list[list_number].fail / total;
    }
    pass = Math.floor(passRatio * 180) + 180;
    fail = Math.floor(failRatio * 180) + pass;
  }else{
    pass = 180;
    fail = 180;
  }
/* 円の描画 */
get_dom.beginPath(); // パスの初期化
get_dom.arc(size, size, size/1.2, (Math.PI/180)*180, (Math.PI/180)*pass); // (100, 50)の位置に半径30pxの円
get_dom.strokeStyle = 'rgb(0, 197, 65)';
get_dom.lineWidth = line ;
get_dom.stroke() ;


get_dom.beginPath(); // パスの初期化
get_dom.arc(size, size, size/1.2, (Math.PI/180)*pass, (Math.PI/180)*fail); // (100, 50)の位置に半径30pxの円
get_dom.strokeStyle = 'rgb(245, 81, 81)';
get_dom.lineWidth = line ;
get_dom.stroke() ;


get_dom.beginPath(); // パスの初期化
get_dom.arc(size, size, size/1.2, (Math.PI/180)* fail, (Math.PI/180)*360); // (100, 50)の位置に半径30pxの円
get_dom.strokeStyle = 'rgb(179, 179, 179)';
get_dom.lineWidth = line ;
get_dom.stroke() ;
}