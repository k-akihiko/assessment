// var age = 16;
// var result = null;

// if (age >= 20) {
//     result = '成年';
// } else {
//     result = '未成年';
// }
// document.write(result);

// // 60歳以上は割引
// let age = 65;
// let isMember = true;


// チケット割引
// var age = 16;
// var member = true;
// var result = null;

// if (15 > age && member) {
//     result = '800円です';
// } else if (member) {
//     result = '1000です';
// } else {
//     result = '1800円です';
// }
// document.write(result);

// let score = 29;
// let result = ''
// if (score >= 80) {
//     result = '優'
// } else if (score <= 79 && score >= 30) {
//     result = '合格';
// } else {
//     result = '補修'
// }
// document.write(result);

// for (var i = 0; i <= 10000; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         document.write('Fizz ');
//     } else if (i % 5 === 0) {
//         document.write('Buzz ');
//     } else if (i % 3 === 0) {
//         document.write('Fizz Buzz ');
//     } else {
//         document.write(i + ' ');
//     }
// }

// let classes = ['A組', 'B組', 'C組', 'D組'];

// for (let grade = 1; grade < 4; grade++) {
//     for (let i = 0; i < classes.length; i++) {
//         document.write('<p>' + grade + '年' + classes[i] + '</p>');
//     }
// }

// let chars = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

// for (let i = 0; i < chars.length; i++) {
//     for (let r = 0; r < chars.length; r++) {
//         document.write(chars[i] + chars[r]);
//     }
// }

// let firstName = ['小宮', '太田', '田中', '牛久', '中村', '日高', '五味'];
// firstName.push('山田', '藤原');
// let lastName = ['明彦', '朱音', '健人', '勇人', '優作', 'まさき', 'けいご'];
// lastName.push('くにこ', 'あかり');

// for (let i = 0; i < firstName.length; i++) {
//     for (let l = 0; l < lastName.length; l++) {
//         document.write(firstName[i] + ' ' + lastName[l] + '<br>');
//     }
// }

// let myBirthTime = new Date(1995, 12, 27);

// function myLife() {
//     let now = new Date();
//     let seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
//     document.getElementById('birth-time').innerText = `生まれてから ${seconds} 秒です`;
// }
// setInterval(myLife, 100);

// function yearTime() {
//     let twentySix = (365 * 24 * 26);
//     document.getElementById('year-time').innerText = '26年は' + twentySix + ' 時間です';
// }
// yearTime();

// function circleArea(r) {
//     return r * r * 3.14;
// }
// console.log(circleArea(5));

// let counter = {
//     count: 0,
//     print: function () {
//         counter.count++;
//         console.log(counter.count);
//     }
// };

// let startTime = null;

// function start() {
//     startTime = Date.now();
//     document.body.onkeydown = stop;
// }
// let displayArea = document.getElementById('display-area');
// function stop() {
//     let currentTime = Date.now();
//     let seconds = (currentTime - startTime) / 1000;
//     if (9.5 <= seconds && 10.5 >= seconds) {
//         displayArea.innerText = `${seconds}秒でした！　すごい！！`;
//     } else {
//         displayArea.innerText = `${seconds}秒でした！　残念`;
//     }
// }
// if (confirm('スタートを押して10秒たったらキーを押してください')) {
//     start();
// }

// let game = {
//     startTime: null,
//     displayArea: document.getElementById('display-area'),
//     start: function () {
//         game.startTime = Date.now();
//         document.body.onkeydown = game.stop;
//     },
//     stop: function () {
//         let currentTime = Date.now();
//         let seconds = (currentTime - game.startTime) / 1000;
//         if (9.5 <= seconds && seconds <= 10.5) {
//             game.displayArea.innerText = `${seconds}でした　すごい！！`;
//         } else {
//             game.displayArea.innerText = `${seconds}でした　残念`;
//         }
//     }
// };

// if (confirm('スタートを押して10秒たったら何かキーを押してください')) {
//     game.start();
// }

// let header = document.getElementById('header');
// let degree = 0;
// function rotateHeader() {
//     degree += 6;
//     header.style.transform = 'rotateX(' + degree + 'deg';
// }
// setInterval(rotateHeader, 20);

// let header = document.getElementById('header');
// let degree = 0;

// function rotateHeader() {
//     degree += 6;
//     degree = degree % 360;
//     header.style.transform = `rotateX(${degree}deg)`;
//     header.style.color = 'red';
//     if (degree <= 360 && degree >= 270 || degree <= 90 && degree >= 0) {
//         header.className = '';
//     } else {
//         header.className = 'back';
//     }
// }
// setInterval(rotateHeader,20)



let userNameInput = document.getElementById('user-name');
let assessmentButton = document.getElementById('assessment');
let resultArea = document.getElementById('result-area');
let tweetArea = document.getElementById('tweet-area');

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

userNameInput.onkeydown = event => {
    if (event.key === 'Enter') {
        assessmentButton.onclick()
    }    
}

assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
        return;
    }

    removeAllChildren(resultArea);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultArea.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultArea.appendChild(paragraph);

    removeAllChildren(tweetArea);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' + encodeURIComponent('あなたのいいところ') + '&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.setAttribute('date-text','診断結果の文章');
    anchor.className = 'twitter-hashtag-button';
    anchor.innerText = 'Twitter #あなたのいいところ';
    tweetArea.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetArea.appendChild(script);
}



const answer = [
    `{user-name}のいいところは声です。`,
    `{user-name}のいいところはaです。`,
    `{user-name}のいいところはbです。`,
    `{user-name}のいいところはcです。`,
    `{user-name}のいいところはdです。`,
    `{user-name}のいいところはeです。`,
    `{user-name}のいいところはfです。`,
    `{user-name}のいいところはgです。`,
    `{user-name}のいいところはhです。`
];

/*
*名前の文字を入力すると診断結果を返す関数
＊@param {string} userName ユーザーの名前
*@return {string} 診断結果
*/

function assessment(userName) {
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfCharCode += userName[i].charCodeAt();
    }
    let index = sumOfCharCode % answer.length;
    let result = answer[index]; 

    result = result.replace(/\{user-name\}/g, userName);
    return result;
}
console.log(assessment('太郎'))
console.assert(
    assessment('太郎') === '太郎のいいところはaです。',
    '診断結果の特定の部分の名前を置き換える処理が間違っています。'
);

console.assert(
    assessment('太郎') === assessment('太郎'),
    '同じ名前を入れたら同じ答えを出力する処理が間違っています。'
);
