//import Chart from "node_modules/chart.js/dist/chart.js";

window.onload = function(){
   // 他の関数を呼び出す場合
    time_draw();
    progress_draw();
    movie_draw();
    n_movie_draw();
    n_document_draw();
}

//動画時間

function time_draw() {
    let context = document.querySelector("#time_doughnut").getContext('2d')
    new Chart(context, {
      type: 'doughnut',
      data: {
        datasets: [{
          backgroundColor:["#44db6c","#f55151"],
          data: [80, 20,]
        }]
      },
      options: {
        responsive: false,
        cutout: "90%",
        circumference: 180,
        rotation: 270,
      }
    });
  }

  //進捗率

  function progress_draw() {
    let progress = document.querySelector("#progress_doughnut").getContext('2d')
    new Chart(progress, {
      type: 'doughnut',
      data: {
        datasets: [{
          backgroundColor:["#44db6c","#f55151"],
          data: [80, 20,]
        }]
      },
      options: {
        responsive: false,
        cutout: "90%",
        circumference: 180,
        rotation: 270,
      }
    });
  }

  //動画数

  function movie_draw() {
    let movie = document.querySelector("#movie_doughnut").getContext('2d')
    new Chart(movie, {
      type: 'doughnut',
      data: {
        datasets: [{
          backgroundColor:["#44db6c","#f55151"],
          data: [80, 20,]
        }]
      },
      options: {
        responsive: false,
        cutout: "90%",
        circumference: 180,
        rotation: 270,
      }
    });
  }


  //Nプラス

  function n_movie_draw() {
    let n_movie = document.querySelector("#n_movie_doughnut").getContext('2d')
    new Chart(n_movie, {
      type: 'doughnut',
      data: {
        datasets: [{
          backgroundColor:["#44db6c","#f55151"],
          data: [80, 20,]
        }]
      },
      options: {
        responsive: false,
        cutout: "90%",
        circumference: 180,
        rotation: 270,
      }
    });
  }

  function n_document_draw() {
    let n_document = document.querySelector("#n_document_doughnut").getContext('2d')
    new Chart(n_document, {
      type: 'doughnut',
      data: {
        datasets: [{
          backgroundColor:["#44db6c","#f55151"],
          data: [80, 20,]
        }]
      },
      options: {
        responsive: false,
        cutout: "90%",
        circumference: 180,
        rotation: 270,
      }
    });
  }

  function mission_draw() {
    let mission = document.querySelector("#mission_doughnut").getContext('2d')
    new Chart(mission, {
      type: 'doughnut',
      data: {
        datasets: [{
          backgroundColor:["#44db6c","#f55151"],
          data: [80, 20,]
        }]
      },
      options: {
        responsive: false,
        cutout: "90%",
        circumference: 180,
        rotation: 270,
      }
    });
  }
