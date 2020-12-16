let bg = document.getElementById("body");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let mainmv = document.getElementById("mainmv");
let video = document.getElementById("open");
let hits = document.getElementById("openc");
let tipd = document.getElementById("tip");
let sstart = document.getElementById("stagestart");
let stage1 = document.getElementById("stage1");
let gover = document.getElementById("over");
let clear = document.getElementById("clear");

btn.addEventListener("click", start);
btn2.addEventListener("click", gs);
mainmv.addEventListener("click", tip);
mainmv.addEventListener("dblclick", skip);
// stage1.addEventListener("click", tip);
stage1.addEventListener("dblclick", skipq);
video.addEventListener("pause", gs);

function start() {
  gover.style.display = "none";
  clear.style.display = "none";
  mainmv.style.display = "block";
  video.play();
  btn.style.display = "none";
  btn2.style.display = "none";
}

function tip() {
  hits.style.display = "block";
  hits.style.animation = "tips 2s forwards";
  let hid = function () {
    hits.style.display = "none";
  };
  setTimeout(hid, 2000);
}

function skip() {
  video.pause();
  video.currentTime = 0;
  mainmv.style.display = "none";
}

function skipq(){
  stage1.pause();
  Swal.fire({
    title: "確定跳過這段動畫?",
    showLoaderOnConfirm: true,
    confirmButtonText: "好窩!",
    cancelButtonText: "修但幾咧!",
    showCancelButton: true,
    allowOutsideClick: false,
  }).then(function (result) {
    if (result.dismiss === "cancel") {
      stage1.play();
    } else {
      stage1.pause();
      stage1.currentTime = 0;

    }
  });
}

function gs() {
  mainmv.style.display = "none";
  Swal.fire({
    title: "蘿拉姊姊的急流冒險，準備好開始體驗了嗎?",
    showLoaderOnConfirm: true,
    confirmButtonText: "準備好了!!",
    cancelButtonText: "修但幾咧!",
    showCancelButton: true,
    allowOutsideClick: false,
  }).then(function (result) {
    if (result.dismiss === "cancel") {
      Swal.fire({
        title: "別擔心，不會有危險的...應該?",
        allowOutsideClick: false,
      }).then(start);
    } else {
      name = result.value;
      Swal.fire({
        title: "好極了，就知道你準備好了",
        text: "請開始闖關挑戰",
        allowOutsideClick: false,
      }).then(st1);
    }
  });
}
function st1() {
  sstart.style.display = "flex";
  stage1.setAttribute("src", "video/s01.mp4");
  stage1.play();
  setTimeout(q1,35500);
  // setTimeout(q1, 1000);
}

function q1() {
  Swal.fire({
    title: "前方有障礙物!!",
    timer: 3000,
    confirmButtonText: "開槍射擊!!",
    confirmButtonColor:'#333',
    showDenyButton: true,
    denyButtonText: `奮力一踢!!`,
    denyButtonColor:'#333',
    showCancelButton: true,
    cancelButtonText: "向右迴避!!",
    cancelButtonColor:'#333',
    timerProgressBar: true,
    allowOutsideClick: false,
    allowEscapeKey:false,
    allowEnterKey:false,
    background:'#ccc',
}).then(function (result) {
    if (result.dismiss === "cancel" || result.isDenied || result.dismiss === Swal.DismissReason.timer) {
        tipd.style.display = "block";
        stage1.setAttribute("src", "video/e01.mp4");
        stage1.play();
        setTimeout(redo, 4000);
    } else if(result.isConfirmed){
        stage1.setAttribute("src", "video/s02.mp4");
        stage1.play();
        setTimeout(q2, 7000);
        // setTimeout(q2, 1000);
    }
})
}

function q2() {
  Swal.fire({
    title: "前方再度出現障礙物!!",
    timer: 2000,
    confirmButtonText: "向左迴避!!",
    confirmButtonColor:'#333',
    showDenyButton: true,
    denyButtonText: `奮力一踢!!`,
    denyButtonColor:'#333',
    showCancelButton: true,
    cancelButtonText: "向右迴避!!",
    cancelButtonColor:'#333',
    timerProgressBar: true,
    allowOutsideClick: false,
    allowEscapeKey:false,
    allowEnterKey:false,
    background:'#ccc',
}).then(function (result) {
    if (result.dismiss === "cancel" || result.isDenied || result.isConfirmed) {
        tipd.style.display = "block";
        stage1.setAttribute("src", "video/e01.mp4");
        stage1.play();
        setTimeout(redo, 4000);
    } else if(result.dismiss === Swal.DismissReason.timer){
      Swal.fire({
        title: "閃避不及",
        timer: 1500,
        confirmButtonText: "開槍射擊!!",
        timerProgressBar: true,
        allowOutsideClick: false,
        allowEscapeKey:false,
        allowEnterKey:false,
        background:'#ccc',
    }).then(function (result) {
        if(result.isConfirmed){
            stage1.setAttribute("src", "video/s03.mp4");
            stage1.play();
            stage1.play();
            setTimeout(q3, 30000);
            // setTimeout(q3, 1000);
        }else if(result.dismiss === Swal.DismissReason.timer){
          tipd.style.display = "block";
          stage1.setAttribute("src", "video/e01.mp4");
          stage1.play();
          setTimeout(redo, 4000);
        }
    })
    }
})
}

function q3() {
  Swal.fire({
    title: "想辦法保命!",
    timer: 2000,
    confirmButtonText: "使用攀岩鈎",
    confirmButtonColor:'#333',
    showDenyButton: true,
    denyButtonText: `啟動降落傘`,
    denyButtonColor:'#333',
    showCancelButton: true,
    cancelButtonText: "找尋攀附物",
    cancelButtonColor:'#333',
    timerProgressBar: true,
    allowOutsideClick: false,
    allowEscapeKey:false,
    allowEnterKey:false,
    background:'#ccc',
}).then(function (result) {
    if (result.dismiss === "cancel" || result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
        tipd.style.display = "block";
        stage1.setAttribute("src", "video/e03.mp4");
        stage1.play();
        setTimeout(redo, 6000);
    } else if(result.isDenied){
        stage1.setAttribute("src", "video/s04.mp4");
        stage1.play();
        setTimeout(q4, 5000);
    }
})
}

function q4() {
  Swal.fire({
    title: "主降落傘已損毀",
    timer: 1500,
    confirmButtonText: "轉身華麗跳水",
    confirmButtonColor:'#333',
    showDenyButton: true,
    denyButtonText: `使用攀岩鈎`,
    denyButtonColor:'#333333',
    showCancelButton: true,
    cancelButtonText: "試圖抓住什麼",
    cancelButtonColor:'#333333',
    timerProgressBar: true,
    allowOutsideClick: false,
    allowEscapeKey:false,
    allowEnterKey:false,
    background:'#ccc',
}).then(function (result) {
  if (result.dismiss === Swal.DismissReason.timer || result.isDenied || result.isConfirmed) {
      tipd.style.display = "block";
      stage1.setAttribute("src", "video/e04.mp4");
      stage1.play();
      setTimeout(redo, 5000);
  } else if(result.dismiss === "cancel"){
    Swal.fire({
      title: "靈機一動!!",
      timer: 1000,
      confirmButtonText: "啟動副傘!!",
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey:false,
      allowEnterKey:false,
      background:'#ccc',
  }).then(function (result) {
      if(result.isConfirmed){
          stage1.setAttribute("src", "video/s05.mp4");
          stage1.play();
          setTimeout(q5, 3000);
      }else if(result.dismiss === Swal.DismissReason.timer){
        tipd.style.display = "block";
        stage1.setAttribute("src", "video/e04.mp4");
        stage1.play();
        setTimeout(redo, 5000);
      }
  })
  }
})
}

function q5() {
  Swal.fire({
    title: "一陣強風襲來!",
    timer: 3000,
    confirmButtonText: "放開降落傘",
    confirmButtonColor:'#333',
    showDenyButton: true,
    denyButtonText: `順風滑翔`,
    denyButtonColor:'#333',
    showCancelButton: true,
    cancelButtonText: "穩住身體",
    cancelButtonColor:'#333',
    timerProgressBar: true,
    allowOutsideClick: false,
    allowEscapeKey:false,
    allowEnterKey:false,
    background:'#ccc',
}).then(function (result) {
    if (result.isDenied || result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
        tipd.style.display = "block";
        stage1.setAttribute("src", "video/e05.mp4");
        stage1.play();
        setTimeout(redo, 8000);
    } else if(result.dismiss === "cancel"){
        stage1.setAttribute("src", "video/s06.mp4");
        stage1.play();
        setTimeout(q6, 10000);
    }
})
}

function q6() {
  Swal.fire({
    title: "即將撞擊樹木",
    timer: 1500,
    confirmButtonText: "向右迴避",
    confirmButtonColor:'#333',
    showDenyButton: true,
    denyButtonText: `不管它`,
    denyButtonColor:'#333333',
    showCancelButton: true,
    cancelButtonText: "向左迴避",
    cancelButtonColor:'#333333',
    timerProgressBar: true,
    allowOutsideClick: false,
    allowEscapeKey:false,
    allowEnterKey:false,
    background:'#ccc',
}).then(function (result) {
  if ( result.dismiss === "cancel" || result.isConfirmed) {
      tipd.style.display = "block";
      stage1.setAttribute("src", "video/e06.mp4");
      stage1.play();
      setTimeout(redo, 5000);
  } else if(result.isDenied || result.dismiss === Swal.DismissReason.timer){
    Swal.fire({
      title: "",
      timer: 1000,
      confirmButtonText: "受身!!",
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey:false,
      allowEnterKey:false,
      background:'#ccc',
  }).then(function (result) {
      if(result.isConfirmed){
          stage1.setAttribute("src", "video/s07.mp4");
          stage1.play();
          setTimeout(finish(1), 27000);
          // setTimeout(finish(1), 1000);
      }else if(result.dismiss === Swal.DismissReason.timer){
        tipd.style.display = "block";
        stage1.setAttribute("src", "video/e06.mp4");
        stage1.play();
        setTimeout(redo, 5000);
      }
  })
  }
})
}


function redo() {
  sstart.style.display = "none";
  tipd.style.display = "none";
  Swal.fire({
    title: "蘿拉已死亡",
    showLoaderOnConfirm: true,
    confirmButtonText: "再次挑戰",
    cancelButtonText: "放棄",
    showCancelButton: true,
    allowOutsideClick: false,
  }).then(function (result) {
    if (result.dismiss === "cancel") {
      sstart.style.display = "none";
      over(1);
    } else {
      gs();
    }
  });
}

function finish(end) {
  if (end) {
    sstart.style.display = "none";
    clear.style.display = "flex";
  }
}
function over(end) {
  if (end) {
    gover.style.display = "flex";
    btn2.style.display = "block";
  }
}
