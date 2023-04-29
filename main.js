const xScorePoint = document.querySelector('#xScore h2');
const xImg = document.querySelector('#xScore h3');
const yImg = document.querySelector('#yScore h3');
const yScorePoint = document.querySelector('#yScore h2');
const body = document.querySelector('body');
const loading = document.querySelector('.loading');
const progress = document.querySelector('.progress progress');
const progressIndicator = document.querySelector('.progress h3');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelectorAll('.menu .btn');
const setMenu = document.querySelector('.menu .settings');
const playerChoice = document.querySelector('.menu .table');
const menuh1 = document.querySelector('.menu h1');
const menuContinue = document.querySelector('.menu .btn.continue');
const menuNewGame = document.querySelector('.menu .btn.new');
const menuAbout = document.querySelector('.menu .btn.about');
const menuExit = document.querySelector('.menu .btn.exit');
const aboutInfo = document.querySelector('.menu_about');
const aboutClose = document.querySelector('.menu_about .aboutClose');
const game = document.querySelector('.game');
const gameUl = document.querySelector('.game ul');
const gameLi = document.querySelectorAll('.game ul li');
const gameBtn = document.querySelectorAll('.game ul li button');
const gameLine1 = document.querySelector('.game .line1');
const gameLine2 = document.querySelector('.game .line2');
const gameLine3 = document.querySelector('.game .line3');
const gameLine4 = document.querySelector('.game .line4');
const winMenu = document.querySelector('.game .win');
const menuBtn2 = document.querySelector('.btn3');
const winRetrybtn = document.querySelector('.game .win .btn1');
const winMenubtn = document.querySelector('.game .win .btn2');
const SelectPlayerX = document.querySelectorAll('.menu .table .forX button');
const SelectPlayer0 = document.querySelectorAll('.menu .table .for0 button');

let x = 0;
let xx = 0;
let xp = 0;
let yp = 0;
xp = localStorage.getItem('xScorePoint');
yp = localStorage.getItem('yScorePoint');

window.onload = () => {
    progress.value = 4;
    let load = setInterval(function () {
        progress.value += .1;
        progressIndicator.textContent = Math.round(progress.value) + '%';
        if (progress.value == 100) {
            clearInterval(load);
            setTimeout(function () {
                loading.style = 'opacity: 0; visibility: hidden; z-index: -1;';
                setTimeout(function () {
                    menu.style.opacity = '1';
                }, 700)
            }, 500);
        }
    }, 10);
    if (localStorage.getItem('xScorePoint') && localStorage.getItem('yScorePoint')) {
        menuContinue.style.display = 'block';
        xScorePoint.textContent = localStorage.getItem('xScorePoint');
        yScorePoint.textContent = localStorage.getItem('yScorePoint');
    } else if (localStorage.getItem('xScorePoint')) {
        menuContinue.style.display = 'block';
        xScorePoint.textContent = localStorage.getItem('xScorePoint');
    } else if (localStorage.getItem('yScorePoint')) {
        menuContinue.style.display = 'block';
        yScorePoint.textContent = localStorage.getItem('yScorePoint');
    } else {
        menuContinue.style.display = 'none';
        xScorePoint.textContent = 0;
        yScorePoint.textContent = 0;
    }
};

//---------------------------Game_Menu-----------------------//




setInterval(function () {
    let r1 = Math.random() * 12 + -6;
    let r2 = Math.random() * 16 + -8;
    let r3 = Math.random() * 16 + -8;
    let r4 = Math.random() * 16 + -8;
    let r5 = Math.random() * 16 + -8;
    let r6 = Math.random() * 2 + -1;
    menuh1.style.transform = `rotate(${r1}deg)`;
    menuBtn[0].style.transform = `rotate(${r2}deg)`;
    menuBtn[1].style.transform = `rotate(${r3}deg)`;
    menuBtn[2].style.transform = `rotate(${r4}deg)`;
    menuBtn[3].style.transform = `rotate(${r5}deg)`;
    aboutInfo.style.transform = `translateX(-50%) rotate(${r6}deg)`;
}, 300);

let gameStart = () => {
    setTimeout(() => {
        xScore.style.display = 'block';
        yScore.style.display = 'block';
    }, 2000);
    menu.style.opacity = 0;
    gameLine1.style = 'animation: game_border_anim 1s 1.5s linear forwards';
    gameLine2.style = 'animation: game_border_anim 1s 1.5s linear forwards';
    gameLine3.style = 'animation: game_border_anim2 1s 1.5s linear forwards';
    gameLine4.style = 'animation: game_border_anim2 1s 1.5s linear forwards';
    setTimeout(() => {
        menu.style.display = 'none';
        body.style.background = 'url(img/back.jpg), rgba(255, 255, 255, 0.85)';
        for (let i = 0; i < gameLi.length; i++) {
            gameLi[i].style.opacity = 1;
            game.style.visibility = 'visible';
            game.style.opacity = 1;
            game.style.display = 'block';
            winMenu.style = 'opacity: 0; visibility: hidden; z-index: 0';
            gameBtn[i].textContent = '';
        }
        menuBtn2.style = 'opacity: .8; visibility: visible';
    }, 1000);
}
menuContinue.onclick = () => {
    if (localStorage.getItem('xScorePoint') && localStorage.getItem('yScorePoint')) {
        xScorePoint.textContent = localStorage.getItem('xScorePoint');
        yScorePoint.textContent = localStorage.getItem('yScorePoint');
    } else if (localStorage.getItem('xScorePoint')) {
        xScorePoint.textContent = localStorage.getItem('xScorePoint');
    } else if (localStorage.getItem('yScorePoint')) {
        yScorePoint.textContent = localStorage.getItem('yScorePoint');
    } else {
        xScorePoint.textContent = 0;
        yScorePoint.textContent = 0;
    }
    gameStart();
};

menuNewGame.onclick = () => {
    localStorage.clear();
    xImg.style.animation = 'score_back_anim .2s linear infinite';
    yImg.style.animation = 'none';
    yImg.style.background = 'rgba(255, 157, 0, 0.51)';
    x = 0;
    xp = 0;
    yp = 0;
    if (localStorage.getItem('xScorePoint') != null || localStorage.getItem('yScorePoint') != null) {
        xScorePoint.textContent = localStorage.getItem('xScorePoint');
        yScorePoint.textContent = localStorage.getItem('yScorePoint');
    } else {
        xScorePoint.textContent = 0;
        yScorePoint.textContent = 0;
    }
    gameStart();
};
menuAbout.onclick = () => aboutInfo.style.display = 'block';
aboutClose.onclick = () => aboutInfo.style.display = 'none';
menuExit.onclick = () => window.close();

//---------------------------Game-----------------------//

winRetrybtn.onclick = () => {
    winMenu.style = 'opacity: 0; visibility: hidden; z-index: 0';
    for (let i = 0; i < gameLi.length; i++) {
        gameBtn[i].disabled = false;
        gameBtn[i].textContent = '';
        gameBtn[i].style.animation = 0;
    }

}
let menuFunc = () => {
    if (localStorage.getItem('xScorePoint') || localStorage.getItem('yScorePoint')) {
        menuContinue.style.display = 'block';
    } else {
        menuContinue.style.display = 'none';
    }
    xScore.style.display = 'none';
    yScore.style.display = 'none';
    menu.style.opacity = 1;
    gameLine1.style = 'animation: 0';
    gameLine2.style = 'animation: 0';
    gameLine3.style = 'animation: 0';
    gameLine4.style = 'animation: 0';
    menu.style.display = 'flex';
    body.style.background = 'url(img/back.jpg)';
    for (let i = 0; i < gameLi.length; i++) {
        gameLi[i].style.opacity = 0;
        game.style = 'visibility: hidden; opacity: 0; z-index: -1;';
        gameBtn[i].textContent = '';
        gameBtn[i].style.animation = 0;
    }
    menuBtn2.style = 'opacity: 0; visibility: hidden';
}
winMenubtn.onclick = () => menuFunc();
menuBtn2.onclick = () => { 
    menuFunc();
    
}

let p1 = 'X';
let p2 = '0';

SelectPlayerX.forEach((item, index) => {
    SelectPlayerX[0].classList.add('select');
    item.onclick = () => {
        SelectPlayerX.forEach((item2, index2) => {
            if (p1 == p2) {
                SelectPlayerX[index2].classList.remove('select');
                SelectPlayerX[index].classList.remove('select');
                SelectPlayerX[index].classList.add('wrong');
                setTimeout(() => {
                    SelectPlayerX[index].classList.remove('wrong');
                }, 200)
                if(p2 != 'X') {
                    p1 = 'X';
                    SelectPlayerX[0].classList.add('select');
                    xImg.textContent = p1;
                } else {
                    p1 = '0';
                    SelectPlayerX[1].classList.add('select');
                    xImg.textContent = p1;
                }
            } else {
                SelectPlayerX[index2].classList.remove('select');
                p1 = SelectPlayerX[index].textContent;
                xImg.textContent = p1;
                SelectPlayerX[index].classList.add('select');
            }
        });
    }
});

SelectPlayer0.forEach((item, index) => {
    SelectPlayer0[1].classList.add('select');
    item.onclick = () => {
        SelectPlayer0.forEach((item2, index2) => {
            if (p1 == p2) {
                SelectPlayer0[index2].classList.remove('select');
                SelectPlayer0[index].classList.remove('select');
                SelectPlayer0[index].classList.add('wrong');
                setTimeout(() => {
                    SelectPlayer0[index].classList.remove('wrong');
                }, 200)
                if(p1 != '0') {
                    p2 = '0';
                    SelectPlayer0[1].classList.add('select');
                    yImg.textContent = p2;  
                } else {
                    p2 = 'X';
                    SelectPlayer0[0].classList.add('select');
                    yImg.textContent = p2; 
                }
            } else {
                SelectPlayer0[index2].classList.remove('select');
                p2 = SelectPlayer0[index].textContent;
                yImg.textContent = p2;
                SelectPlayer0[index].classList.add('select');
            }
        });
    }
});



for (let i = 0; i < gameLi.length; i++) {
    gameLi[i].onclick = () => {
        gameBtn[i].disabled = true;
        if (x % 2 == 0) {
            gameBtn[i].textContent = p1;
            gameBtn[i].style.textShadow = '0 0 3px red';
            yImg.style.animation = 'score_back_anim .2s linear infinite';
            xImg.style.animation = 'none';
            xImg.style.background = 'rgba(255, 157, 0, 0.51)';
        } else {
            gameBtn[i].textContent = p2;
            gameBtn[i].style.textShadow = '0 0 3px blue';
            xImg.style.animation = 'score_back_anim .2s linear infinite';
            yImg.style.animation = 'none';
            yImg.style.background = 'rgba(255, 157, 0, 0.51)';
        }
        x++;
        xx++;
        gameBtn[i].style.animation = 'game_btn_anim .3s linear forwards';

        if (gameBtn[0].textContent === p1 && gameBtn[4].textContent === p1 && gameBtn[8].textContent === p1 ||
            gameBtn[2].textContent === p1 && gameBtn[4].textContent === p1 && gameBtn[6].textContent === p1 ||
            gameBtn[0].textContent === p1 && gameBtn[3].textContent === p1 && gameBtn[6].textContent === p1 ||
            gameBtn[0].textContent === p1 && gameBtn[1].textContent === p1 && gameBtn[2].textContent === p1 ||
            gameBtn[1].textContent === p1 && gameBtn[4].textContent === p1 && gameBtn[7].textContent === p1 ||
            gameBtn[2].textContent === p1 && gameBtn[5].textContent === p1 && gameBtn[8].textContent === p1 ||
            gameBtn[3].textContent === p1 && gameBtn[4].textContent === p1 && gameBtn[5].textContent === p1 ||
            gameBtn[6].textContent === p1 && gameBtn[7].textContent === p1 && gameBtn[8].textContent === p1) {
            winMenu.style = 'opacity: 1; visibility: visible; z-index: 3';
            winP.textContent = p1 + '- win';
            xp++;
            localStorage.setItem('xScorePoint', xp);
            xScorePoint.textContent = xp;
            xx = 0;

        } else if (gameBtn[0].textContent === p2 && gameBtn[4].textContent === p2 && gameBtn[8].textContent === p2 ||
            gameBtn[2].textContent === p2 && gameBtn[4].textContent === p2 && gameBtn[6].textContent === p2 ||
            gameBtn[0].textContent === p2 && gameBtn[3].textContent === p2 && gameBtn[6].textContent === p2 ||
            gameBtn[0].textContent === p2 && gameBtn[1].textContent === p2 && gameBtn[2].textContent === p2 ||
            gameBtn[1].textContent === p2 && gameBtn[4].textContent === p2 && gameBtn[7].textContent === p2 ||
            gameBtn[2].textContent === p2 && gameBtn[5].textContent === p2 && gameBtn[8].textContent === p2 ||
            gameBtn[3].textContent === p2 && gameBtn[4].textContent === p2 && gameBtn[5].textContent === p2 ||
            gameBtn[6].textContent === p2 && gameBtn[7].textContent === p2 && gameBtn[8].textContent === p2) {
            winMenu.style = 'opacity: 1; visibility: visible; z-index: 3';
            winP.textContent = p2 + '- win';
            yp++;
            localStorage.setItem('yScorePoint', yp);
            yScorePoint.textContent = yp;
            xx = 0;

        } else if (gameBtn.length == xx) {
            winMenu.style = 'opacity: 1; visibility: visible; z-index: 3';
            winP.textContent = 'Nobody won';
        }
    }
}
setBtn.onclick = () => setMenu.classList.toggle('open');
playersSetting.onclick = () => playerChoice.classList.toggle('display');
tableClose.onclick = () => playerChoice.classList.toggle('display');