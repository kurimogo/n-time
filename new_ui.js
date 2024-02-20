window.onload = function(){
    dom_embed(document.getElementById('n_movie_time'), 125, 15, 30, 60, 10);
    dom_embed(document.getElementById('movie_time'), 125, 15);
    dom_embed(document.getElementById('n_movie_number'), 75, 5);
    dom_embed( document.getElementById('movie_number'), 75, 5);
    dom_embed(document.getElementById('document_number'), 75, 5);
    dom_embed(document.getElementById('question_number'), 75, 5);
    dom_embed(document.getElementById('progress_dom'), 200, 20);
}

function dom_embed(get_domid, size, line,pass,fail,invalid){
    const get_dom = get_domid.getContext('2d'); // コンテキストの取得
/* 円の描画 */
get_dom.beginPath(); // パスの初期化
get_dom.arc(size, size, size/1.2, (Math.PI/180)*180, ( Math.PI/180)*280); // (100, 50)の位置に半径30pxの円
get_dom.strokeStyle = 'rgb(0, 197, 65)';
get_dom.lineWidth = line ;
get_dom.stroke() ;

get_dom.beginPath(); // パスの初期化
get_dom.arc(size, size, size/1.2, (Math.PI/180)*280, ( Math.PI/180)*300); // (100, 50)の位置に半径30pxの円
get_dom.strokeStyle = 'rgb(245, 81, 81)';
get_dom.lineWidth = line ;
get_dom.stroke() ;

get_dom.beginPath(); // パスの初期化
get_dom.arc(size, size, size/1.2, (Math.PI/180)*300, ( Math.PI/180)*360); // (100, 50)の位置に半径30pxの円
get_dom.strokeStyle = 'rgb(179, 179, 179)';
get_dom.lineWidth = line ;
get_dom.stroke() ;
}