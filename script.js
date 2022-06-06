const day = document.getElementById("day");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function countdown(){
　　const now = new Date(); //現在時刻を取得
　　const deadline = new Date(2022, (7-1), 6, 16, 30, 00); //期限の時刻を取得　//monthは0スタートなので1を引く
　　const diff = deadline.getTime() - now.getTime(); //時間の差を取得（ミリ秒）

　　//ミリ秒から単位を修正
　　const calcDay = Math.floor(diff / 1000 / 60 / 60 / 24) - 30;
　　const calcHour = Math.floor(diff % (24 * 60 * 60 * 1000 )/ 1000 / 60 / 60);
　　const calcMin = Math.floor(diff  % (24 * 60 * 60 * 1000) / 1000 / 60) % 60;
　　const calcSec = Math.floor(diff  % (24 * 60 * 60 * 1000) / 1000) % 60;

　　//取得した時間を表示（2桁表示）
　　day.innerHTML = calcDay < 10? '0' + calcDay : calcDay;
　　hour.innerHTML = calcHour < 10 ? '0' + calcHour : calcHour;
　　min.innerHTML = calcMin < 10 ? '0' + calcMin : calcMin;
　　sec.innerHTML = calcSec < 10 ? '0' + calcSec : calcSec;
}
countdown();
setInterval(countdown,1000);
