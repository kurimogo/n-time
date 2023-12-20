//今日の最高にロックな仲間を紹介するぜ
movie = {number:0, pass:0, time:0,watch:0}//動画再生時間、動画数が記録されるぜ
n_movie = {number:0, pass:0, time:0,watch:0}//Nプラスの動画再生時間、動画数が記録されるぜ
var text = {number:0, pass:0,fail:0}//課外授業の資料とかの数や自身があるかないかが記録されるぜ
q  = {number:0, pass:0,fail:0}//急に雑になったけど問題数、やった問題が主に記録されるぜ


//概要の部分を抜き取る関数
function embed(){
  for(var embed_number = 0; embed_number < get_html.length; embed_number++){
    if(get_html[embed_number].textContent == '概要' || '授業'){
       embed_get = get_html[embed_number];
    }
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
embed_decision = embed_get.parentNode.parentNode.lastElementChild;
embed_decision.id = "domdom";
}

 //教材の部分を抜き取る関数
 function calculation(){
  for(var calculation_number = 0; calculation_number < get_html.length; calculation_number++){
    if(get_html[calculation_number].textContent == '教材'){
       calculation_get = get_html[calculation_number];
    }}
  
    let calculation_tentative = calculation_get.parentNode.parentNode.getElementsByTagName('ul')[0];
    calculation_decision = calculation_tentative;
 }

//すごい演算組
function li() {

li_number = calculation_decision.childElementCount;//liの個数を調べる
for_number = 0; 

for (let for_number = 0; for_number < li_number; for_number++ ){

search_li = calculation_decision.children[for_number];
search_right = calculation_decision.children[for_number].lastElementChild.lastElementChild;//右側の時間とか問題数とかのやつを抜き取る一歩手前

if(search_right.childElementCount > 1) { 
  search_mini = search_right.lastElementChild.textContent;
}

var search_i = search_li.getElementsByTagName("i")[0];//アイコンの場所捜索
var search_type = search_i.getAttribute("type");//そのアイコンの種類
var search_style = search_i.getAttribute("style");//アイコンの色とかいろいろな情報


//下のやつは動画の数、視聴した動画数、合計動画時間、試聴動画時間を数えています。
if(search_type == "movie-rounded"){
  movie.number = movie.number + 1;
  new_time = search_mini.split(":")
  new_time[0] = Number(new_time[0])
  new_time[1] = Number(new_time[1])

fin_time = new_time[0] * 60 + new_time[1];

  movie.time = movie.time + fin_time;
  if (search_style.indexOf("color: rgb(0, 197, 65)") > -1){
    movie.pass = movie.pass + 1;
    movie.watch = movie.watch + fin_time;

  }
}

//下のやつはNプラスの数、視聴した動画数、合計動画時間、試聴動画時間を数えています。
if(search_type == "movie-rounded-plus"){
  n_movie.number = n_movie.number + 1;
  n_time = search_mini.split(":")
  n_time[0] = Number(n_time[0])
  n_time[1] = Number(n_time[1])
  
  fin_time = n_time[0] * 60 + n_time[1];
  n_movie.time = n_movie.time + fin_time;

  if (search_style.indexOf("color: rgb(0, 197, 65)") > -1){
    n_movie.pass = n_movie.pass + 1;
    n_movie.watch = n_movie.watch + fin_time;
  }
}
//下のやつは資料の数、自身がある資料数、ない資料数を数えています。
if(search_type == "text-rounded"){
  text.number = text.number + 1;
  if (search_style.indexOf("color: rgb(0, 197, 65)") > -1){
    text.pass = text.pass + 1;
  } else if (search_style.indexOf("color: rgb(245, 81, 81)") > -1){
    text.fail = text.fail + 1;
  }
}

//下のやつは問題の数、正解した問題、不正解の問題を記録しています
if(search_type == "exercise-rounded"){
  new_mini = search_mini.replace(/問$/g, '');
  fin_mini = Number(new_mini);
  q.number = q.number + fin_mini;
  if (search_style.indexOf("color: rgb(0, 197, 65)") > -1){
    q.pass = q.pass + fin_mini;
  } else if (search_style.indexOf("color: rgb(245, 81, 81)") > -1){
    q.fail = q.fail + fin_mini;
  }
}

}
console.log(movie);
console.log(n_movie);
console.log(new_time);
console.log(text);
console.log(q);

}



//すべて抜き取る組
async function get_element() {
  embed();
  calculation();
}

window.onload = function(){
//開始の合図(ロマンでプログラムは動く)
  console.log("[kurimogo式N予備校時間表示]それっぽい場所を検知しました。。\n[kurimogo式N予備校時間表示]時間表示を埋め込む場所があるか見つけてきます...");

  //全HTMLを取得する
  get_html = document.querySelectorAll('*');
  get_element();
  li();

 console.log(embed_decision);
 console.log(calculation_decision);
 pass();
//}else{
  //notClass();
//}

//埋め込む場所がなかったときのコンソール
function notClass(){
  console.log("[kurimogo式N予備校時間表示]読み込めそうなところがありませんでした。\n[kurimogo式N予備校時間表示]犬がclassを食べてる可能性があります。\n");
}
//埋め込めた可能性があるときのコンソール
function pass(){
  console.log("[kurimogo式N予備校時間表示]なんかいけた");
}
}