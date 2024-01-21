const list = [
    {number:0, pass:0, fail:0,time:0,watch:0},//動画関連のものであり、numberが動画数、passが正答した動画数、failが間違えた動画数、timeが合計視聴時間, watchが今みた時間である。
    {number:0, pass:0, fail:0,time:0,watch:0},//Nプラス関連のものであり、numberが動画数、passが正答した動画数、failが間違えた動画数、timeが合計視聴時間, watchが今みた時間である。
    {number:0, pass:0,fail:0},//課外授業に主に出てくるドキュメント(アイコンが紙のやつ)関連のものであり、numberが数、passが自信のあるもの、failが自信がないものである。
    {number:0, pass:0,fail:0}//問題関連のものであり、numberが数、passが正答、failが間違えたものである。
];

embed_get = {html:"",type:0}//こいつは埋め込む場所がきろくされるやつだぜtypeの0がnull、1が概要、2が授業だ

const observer = new MutationObserver(function () {calculation();});
observer.observe(document.body, { childList: true }); // 監視開始

//概要の部分を抜き取る関数
function calculation(){
  for(let embed_number = 0; embed_number < document.querySelectorAll('*').length; embed_number++){
    switch(document.querySelectorAll('*')[embed_number].textContent){
        case '概要':
        
        break;
        case '授業':
        
        break;
        case '教材':
            calculation_variables = document.querySelectorAll('*')[embed_number].parentNode.parentNode.getElementsByTagName('ul')[0];
        break;
    }};
 
    for (let for_number = 0; for_number < calculation_variables.childElementCount; for_number++){
    
    search_right = calculation_variables.children[for_number].lastElementChild.lastElementChild;//右側の時間とか問題数とかのやつを抜き取る一歩手前
    
    if(search_right.childElementCount > 0) { 
      search_mini = search_right.lastElementChild.textContent;
    }
    var search_type = ((calculation_variables.children[for_number]).getElementsByTagName("i")[0]).getAttribute("type");//そのアイコンの種類
    var search_style = ((calculation_variables.children[for_number]).getElementsByTagName("i")[0]).getAttribute("style");//アイコンの色とかいろいろな情報
    
    switch(search_type){
        case 'movie-rounded'://動画
            new_time = search_mini.split(":");//まず文字を分と秒に分ける。
            list[0].time =list[0].time +  (Number(new_time[0]) * 60 +  Number(new_time[1]));//分を秒に分ける。

            list[0].number++;//動画数を1足す。
            if(search_style.indexOf("color: rgb(0, 197, 65)") >= 0){
                list[0].pass++;//もしアイコンが緑色ならpassを1増やす。
                list[0].watch = list[0].watch +  (Number(new_time[0]) * 60 +  Number(new_time[1]));
            }else if(search_style.indexOf("color: rgb(0, 197, 65)") <= 0){
                list[0].fail++;//もしアイコンが赤色ならfailを1増やす。
            }
        break;

        case 'movie-rounded-plus"'://Nプラスの動画
            new_time = search_mini.split(":");//まず文字を分と秒に分ける。
            list[1].time =list[1].time +  (Number(new_time[0]) * 60 +  Number(new_time[1]));//分を秒に分ける。

            list[1].number++;//動画数を1足す。
            if(search_style.indexOf("color: rgb(0, 197, 65)") >= 0){
                list[1].pass++;//もしアイコンが緑色ならpassを1増やす。
                list[1].watch = list[0].watch +  (Number(new_time[0]) * 60 +  Number(new_time[1]));
            }else if(search_style.indexOf("color: rgb(0, 197, 65)") <= 0){
                list[1].fail++;//もしアイコンが赤色ならfailを1増やす。
            }
        break;

        case 'text-rounded'://資料みたいなやつ
            list[2].number++;//合計数を1足す。
            if(search_style.indexOf("color: rgb(0, 197, 65)") >= 0){
                list[2].pass++;//もしアイコンが緑色ならpassを1増やす。
            }else if(search_style.indexOf("color: rgb(0, 197, 65)") <= 0){
                list[2].fail++;//もしアイコンが赤色ならfailを1増やす。
            }
        break;

        case 'exercise-rounded'://問題
            list[3].number++;//合計数を1足す。
            if(search_style.indexOf("color: rgb(0, 197, 65)") >= 0){
                list[3].pass++;//もしアイコンが緑色ならpassを1増やす。
            }else if(search_style.indexOf("color: rgb(0, 197, 65)") <= 0){
                list[3].fail++;//もしアイコンが赤色ならfailを1増やす。
            }
        break;
    }
    }

    console.log(list);
    }
    