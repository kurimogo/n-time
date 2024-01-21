
import { calculation_decision } from "main.js";
//演算部分
export function hyper() {

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
    console.log(text);
    console.log(q);
    
    }
    