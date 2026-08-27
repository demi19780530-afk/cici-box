// ========================
// cici Box script.js
// ========================


let message = document.getElementById("message");
let speech = document.getElementById("cici2Speech");

// 隨機訊息系統
// ========================


function randomMessage(list){

let random = Math.floor(Math.random() * list.length);

message.innerHTML = list[random];

}

// ========================
// 心情按鈕
// ========================


function sad(){

randomMessage([

"🥺 沒關係呀<br>今天辛苦了，我陪你",

"🌧️ 不開心的時候不要一直假裝沒事，別忘了還有我可以依靠",

"🫂 先休息一下吧，我知道護專不容易:(",

"💗 你的心情也很重要!!",

"👀 今天又遇到什麼臭機掰欺負妳了(八卦"

]);

}




function happy(){

randomMessage([

"🌈 老婆開心，我就放心啦~",

"✨ 今天有什麼好事嗎~？記得跟我分享呀!",

"💖 小小的幸福也值得收藏",

"🍀 開心的事情記得也要和我說!!",

"🎉 今天也要保持好心情"

]);

}





function tired(){

randomMessage([

"😴 腦婆辛苦啦，休息一下吧",

"🌙 今天已經努力很多了~(´▽`ʃ♡ƪ)",

"☁️ 累了就先充電( ´･･)ﾉ(._.`)",

"🛌 給自己一點時間休息",

"💤 不用一直撐著(_　_)。゜zｚＺ"

]);

}





function love(){

randomMessage([

"💖 你超棒的啦~!",

"🌸 努力到現在你已經很棒ㄌ~",

"✨ 今天也要相信自己",

"🍬 給你一顆虛擬糖糖吃~",

"🫶 老婆我愛你~"

]);

}





function quote(){

randomMessage([

"🍬 希望在我們不能見面的日子 這小小的網站可以代替我陪著妳",

"🌸 不知道下一次什麼時候會見面 但妳還是要好好生活!!",

"✨ 妳要好好上課哦~!",

"💗 雖然我不在妳身邊...妳還是不可以偷看帥哥___*( ￣皿￣)/#____",

"🌱 每天都會越來越好"

]);

}






// ========================
// 音樂系統
// ========================


let music = new Audio();

music.volume = 0.5;



let songs = [

{
name:"Japan Music 1",
file:"japan_music1.mp3"
},

{
name:"Japan Music 2",
file:"japan_music2.mp3"
},

{
name:"Love Story",
file:"love_story.mp3"
},

{
name:"Summer Music 1",
file:"summer_music1.mp3"
},

{
name:"Summer Music 2",
file:"summer_music2.mp3"
},

{
name:"The Way I Still Love You",
file:"the_way_i_still_love_you.mp3"
}

];





function playMusic(number){


music.pause();


music.src = songs[number].file;


music.load();



music.play()

.then(()=>{


message.innerHTML =

"🎵 正在播放<br><br>" +

songs[number].name;


})

.catch(()=>{


message.innerHTML =

"❌ 找不到音樂<br><br>請確認 music 資料夾";


});


}





function stopMusic(){


music.pause();


message.innerHTML =

"⏸ 音樂已暫停";


}








// ========================
// 底部功能
// ========================




function musicPage(){


message.innerHTML =

`

🎵 cici 的音樂盒

<br><br>


<button onclick="playMusic(0)">
🌸 Japan Music 1
</button>

<br><br>


<button onclick="playMusic(1)">
🌸 Japan Music 2
</button>

<br><br>


<button onclick="playMusic(2)">
💗 Love Story
</button>

<br><br>


<button onclick="playMusic(3)">
☀️ Summer Music 1
</button>

<br><br>


<button onclick="playMusic(4)">
☀️ Summer Music 2
</button>

<br><br>


<button onclick="playMusic(5)">
💞 The Way I Still Love You
</button>

<br><br>


<button onclick="stopMusic()">
⏸ 停止音樂
</button>


`;

}








// ========================
// 💌 信箱功能
// ========================



function messagePage(){


message.innerHTML =

`

💌 cici 的小信箱

<br><br>


<button onclick="letter1()">

🌸 想我的時候打開

</button>


<br><br>


<button onclick="letter2()">

🌙 累累時候打開

</button>


<br><br>


<button onclick="letter3()">

🍬 腦婆今天也辛苦了

</button>


<br><br>


<button onclick="letter4()">

🌈 開心的時候打開

</button>


<br><br>


<button onclick="letter5()">

💖 給最重要的人

</button>


`;

}




function letter1(){

message.innerHTML =

`

💌 第一封信

<br><br>

給腦婆：

<br><br>

今天也辛苦啦 ✨

<br><br>

不管今天遇到什麼，

<br>

還是要好好休息，

<br>

別太累把身體搞壞ㄌ(*。>Д<)o゜。

<br><br>


`;

}



function letter2(){

message.innerHTML =

`

🌙 累的時候打開

<br><br>

如果今天很累，

<br>

就休息一下吧~

<br><br>

妳已經很棒ㄌ!

<br>

至少...我是這麼認為ㄉ!

<br><br>

🌸 明天也加油

`;

}





function letter3(){

message.innerHTML =

`

🍬 給今天的你

<br><br>

老婆~今天，

<br>

有沒有想我呀~。

<br><br>

記得吃飯、喝水，

<br>

也要好照顧自己。

<br><br>

✨ 明天繼續努力

`;

}
function letter4(){

message.innerHTML =

`

🌈 開心的時候打開

<br><br>

今天有開心的事情嗎？

<br><br>

如果有，

記得要跟我分享哇!!。

<br><br>

✨ 腦婆我也想你哦~
`;

}





function letter5(){

message.innerHTML =

`

💖 給最重要的人

<br><br>

我超級愛妳ㄉ!

<br><br>

不可以再把窩丟掉ㄌ...。

<br>

我也不會把妳丟掉!

<br><br>

妳是愛哭鬼~(oﾟvﾟ)ノ

<br><br>

🌸 cici Box

`;

}







// ========================
// 設定
// ========================



// ========================
// 📅 Together 在一起紀念
// ========================


function togetherPage(){


let startDate = new Date("2026-06-08");

let today = new Date();



let togetherDays = Math.floor(

(today - startDate)

/

(1000 * 60 * 60 * 24)

);



// 鄒鄒生日 1/26

let zouBirthday = new Date(

today.getFullYear(),

0,

26

);



if(today > zouBirthday){

zouBirthday.setFullYear(

today.getFullYear()+1

);

}



let zouDays = Math.ceil(

(zouBirthday - today)

/

(1000*60*60*24)

);





// Demi生日 5/30

let demiBirthday = new Date(

today.getFullYear(),

4,

30

);



if(today > demiBirthday){

demiBirthday.setFullYear(

today.getFullYear()+1

);

}



let demiDays = Math.ceil(

(demiBirthday - today)

/

(1000*60*60*24)

);





message.innerHTML =

`

📅 Together

<br><br>


💖 已經跟腦婆在一起

<br>

<b>${togetherDays}</b> 天


<br><br>


🎂 距離鄒鄒生日

<br>

還有 ${zouDays} 天


<br><br>


🎂 距離小朋友生日

<br>

還有 ${demiDays} 天


<br><br>


🌸 每天都一起累積新的回憶

`;

}
// ========================
// ⚙️ 設定
// ========================
function settings(){

    message.innerHTML =

    `

    ⚙️ Settings

    <br><br>

    cici Box v2.0

    <br><br>

    正在慢慢成長中 🌱

    <br><br>

    👤 目前身分：
    <b>${currentUser}</b>

    <br><br>

    <button onclick="showLogs()">
    👀 查看使用紀錄
    </button>

    `;

}
function showLogs(){
    
    let password = prompt("🔐 請輸入使用紀錄密碼");

    if(password !== "656"){

        alert("密碼錯誤 ❌");

        return;

    }

    message.innerHTML =
    "📊 正在讀取使用紀錄...";

    fetch(
        visitLogURL +
        "?action=stats&password=" +
        password
    )
    .then(response => response.json())
    .then(data => {

        if(!data.success){

            message.innerHTML =
            "❌ 無法讀取使用紀錄";

            return;

        }

        message.innerHTML = `

        🔐 使用紀錄

        <br><br>

        <div style="
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:10px;
        ">

            <div style="
                background:rgba(255,255,255,0.55);
                padding:18px 8px;
                border-radius:22px;
            ">
                🧸
                <br>
                今天使用
                <br>
                <b>${data.today} 次</b>
            </div>


            <div style="
                background:rgba(255,255,255,0.55);
                padding:18px 8px;
                border-radius:22px;
            ">
                ⚡
                <br>
                這週使用
                <br>
                <b>${data.week} 次</b>
            </div>


            <div style="
                background:rgba(255,255,255,0.55);
                padding:18px 8px;
                border-radius:22px;
            ">
                📅
                <br>
                這個月使用
                <br>
                <b>${data.month} 次</b>
            </div>


            <div style="
                background:rgba(255,255,255,0.55);
                padding:18px 8px;
                border-radius:22px;
            ">
                💓
                <br>
                累積使用
                <br>
                <b>${data.total} 次</b>
            </div>

        </div>

        <br>

        <button onclick="settings()">
        ← 回到設定
        </button>

        `;

    })
    .catch(error => {

        message.innerHTML =
        "❌ 讀取紀錄失敗";

        console.log(error);

    });

}
// ========================
// 🖼 Memory 回憶相簿
// ========================


// ========================
// 🖼 Memory 回憶相簿
// ========================


function memoryPage(){

message.innerHTML =

`

🖼 Memory 回憶空間

<br><br>


<button onclick="demiAlbum()">

💖 想念小朋友

</button>


<br><br>


<button onclick="usAlbum()">

🌸 我們的回憶

</button>


`;

}




// ========================
// 💖 Demi 相簿
// ========================

let lastDemiNumber = 0;
let lastUsNumber = 0;

function demiAlbum(){

let number = Math.floor(Math.random()*25)+1;


message.innerHTML =

`

💖 想念小朋友

<br><br>


<div class="photoCard">

<img src="demi${number}.jpg">


<div class="photoText">

小朋友的照片 ${number}

</div>


</div>


<br>


<button onclick="demiAlbum()">

🍀 下一張

</button>


`;

}





// ========================
// 🌸 合照相簿
// ========================


function usAlbum(){

let number;

do{

number = Math.floor(Math.random()*23)+1;

}while(number === lastUsNumber);

lastUsNumber = number;


message.innerHTML =

`

🌸 我們的回憶

<br><br>


<div class="photoCard">

<img src="us${number}.jpg">


<div class="photoText">

我們的回憶 ${number}

</div>


</div>


<br>


<button onclick="usAlbum()">

💖 下一張

</button>


`;

}
// ========================
// 🐱 右上角 cici 自動台詞
// ========================

let ciciTalks = {

    morning: [
        "老婆~在幹嘛呀!",
        "小懶豬 起床了嗎~",
        "屁孩 我不在還是要好好上課 加油呀!",
        "有沒有好好吃早餐(盯👀",
        "欸你是傻逼(?嘻嘻 打不到我~"
    ],

    classMorning: [
        "老婆在上課吧~~",
        "辛苦妳囉~",
        "雖然很愛妳 但上課要專心鼻要偷偷想我呀~"
    ],

    lunch: [
        "中午啦~好好吃午餐!才有體力!",
        "不知道腦婆有沒有午休耶(思考",
        "今天午餐好ㄘ嘛~",
        "欸~吃午餐不可以偷看帥哥哥!(抓(╬▔皿▔)╯"
    ],

    afternoon: [
        "加油~~再撐一下!要放學囉~~",
        "我也豪想妳呀...( ´･･)ﾉ(._.`)",
        "老婆...我愛妳~"
    ],

    afterSchool: [
        "終於熬到放學嚕~",
        "等等妳要去幹嘛呀~",
        "欸腦婆 既然放學了 多拍點自拍給我啦!(抗議"
    ],

    eveningStart: [
        "老婆!我因該也放學了!",
        "有沒有很多妳的照片呀!我很想看耶~",
        "等等晚餐打算吃甚麼呀?"
    ],

    dinner: [
        "老婆 有乖乖吃晚餐麻(監督ヾ(•ω•`)o",
        "晚餐吃什麼!拍照!q(≧▽≦q)"
    ],

    night: [
        "老婆洗澡澡了嘛~",
        "今天打算幾點睡覺覺呀?",
        "即是再累也要好好休息 不要讓我擔心哇...(˘･_･˘)",
        "老婆晚安~今天的我...也很愛妳哦!"
    ],

    midnight: [
        "嗯?老婆 很晚囉~~快去睡覺覺!乖~~",
        "心情不好嘛 老婆~ 不然怎麼那麼晚還沒睡呀?(歪頭"
    ],

    earlyMorning: [
        "好早起呀~?怎麼那麼早起來?",
        "會不會累累...（；´д｀）ゞ"
    ]

};


// 根據時間選擇台詞
function getCiciTalks(){

    let now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();

    let time = hour * 60 + minute;


    if(time >= 390 && time <= 600){

        return ciciTalks.morning;

    }else if(time >= 601 && time <= 710){

        return ciciTalks.classMorning;

    }else if(time >= 711 && time <= 839){

        return ciciTalks.lunch;

    }else if(time >= 840 && time <= 900){

        return ciciTalks.afternoon;

    }else if(time >= 901 && time <= 960){

        return ciciTalks.afterSchool;

    }else if(time >= 961 && time <= 1080){

        return ciciTalks.eveningStart;

    }else if(time >= 1081 && time <= 1230){

        return ciciTalks.dinner;

    }else if(time >= 1231 && time <= 1440){

        return ciciTalks.night;

    }else if(time >= 1 && time <= 300){

        return ciciTalks.midnight;

    }else{

        return ciciTalks.earlyMorning;

    }

}


// 顯示右上角 cici 台詞
function autoCiciTalk(){

    let talks = getCiciTalks();

    let random =
    Math.floor(Math.random() * talks.length);

    let speech =
    document.getElementById("ciciSpeech");


    // 先淡出
    speech.classList.add("fade");


    // 等淡出完成後換台詞
    setTimeout(()=>{

        speech.innerHTML = talks[random];

        // 再淡入
        speech.classList.remove("fade");

    },500);

}

// 網頁開啟時先講一次
autoCiciTalk();


// 每 10 秒鐘換一句
setInterval(autoCiciTalk, 10000);
// ========================
// 開機打字動畫
// ========================

let text = "正在準備給你的回憶 ✨";

let i = 0;

let typing = document.getElementById("typing");


function typeWriter(){

if(i < text.length){

typing.innerHTML += text[i];

i++;

setTimeout(typeWriter,120);

}

}


typeWriter();


setTimeout(()=>{

document.getElementById("loading").style.display="none";

},3000);
function home(){

message.innerHTML =

`
💖 cici Box 💖

<br><br>

歡迎回來，我一直都在 🌸

<br><br>

今天也辛苦啦 ✨

`;

}
// ========================
// 🌙 自動深夜模式
// 🇹🇼 使用台灣時間
// ========================

function checkNightMode(){

    let taiwanTime = new Date().toLocaleString(
        "en-US",
        {
            timeZone: "Asia/Taipei"
        }
    );

    let now = new Date(taiwanTime);

   let hour = now.getHours();

    if(hour >= 18 || hour < 6){

        document.body.classList.add("night-mode");

    }else{

        document.body.classList.remove("night-mode");

    }

}


// 網頁開啟時檢查一次
checkNightMode();


// 每分鐘檢查一次
setInterval(checkNightMode, 60000);
// ========================
// 🐱 點擊左下角 cici
// ========================

function ciciTalk(){

    let talks = [

        "老婆~今天也辛苦啦 💖",

        "欸嘿嘿，被妳點到了！",

        "有什麼心事可以跟我說呀 🌸",

        "小朋友今天有乖乖休息嗎？",

        "不管怎麼樣，我都會陪著妳 ✨",

        "偷偷告訴妳，我很想妳喔 🫶"

    ];

    let random =
        Math.floor(Math.random() * talks.length);

    document.getElementById("cici2Speech").innerHTML =
        talks[random];

}
// ========================
// 👀 cici Box 使用者紀錄
// ========================

const visitLogURL =
"https://script.google.com/macros/s/AKfycbz_BgZU8xHp82ciCVuQff8Y9JnHRHmlApmQkxlypXBEGXwpi6Gz3gdDFG__e_IRGZCc3g/exec";


// ========================
// 👤 身分
// ========================

let currentUser = localStorage.getItem("ciciUser");


// 第一次使用網站
if (!currentUser) {

    let choice = confirm(
        "💖 歡迎來到 cici Box！\n\n按「確定」代表你是鄒鄒\n按「取消」代表你是 Demi"
    );

    if (choice) {

        currentUser = "鄒鄒";

    } else {

        currentUser = "Demi";

    }

    localStorage.setItem(
        "ciciUser",
        currentUser
    );

}


// ========================
// 🧸 記錄鄒鄒使用
// ========================

let lastLogTime = 0;

function logZouUse(){

    // Demi 不記錄
    if(currentUser !== "鄒鄒"){
        return;
    }


    // 防止短時間重複記錄
    let now = Date.now();

    if(now - lastLogTime < 30000){
        return;
    }

    lastLogTime = now;


    fetch(
        visitLogURL +
        "?user=" +
        encodeURIComponent(currentUser)
    )
    .then(() => {

        console.log("🧸 已記錄鄒鄒使用一次");

    })
    .catch(() => {

        console.log("❌ 紀錄失敗");

    });

}


// ========================
// 🚀 第一次進入網站
// ========================

logZouUse();


// ========================
// 📱 從背景回到網站
// ========================

document.addEventListener(
    "visibilitychange",
    function(){

        if(document.visibilityState === "visible"){

            logZouUse();

        }

    }
);

