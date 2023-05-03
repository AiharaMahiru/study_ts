import './style/index.less';
// console.log('hello world');

class Food{
    element: HTMLElement;
    constructor(){
        this.element = document.getElementById('food')!;
    }
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }
    change(){
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

class ScorePanel{
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    maxLevel: number;
    upScore: number;
    constructor(maxLevel: number = 10, upScore: number = 10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
}