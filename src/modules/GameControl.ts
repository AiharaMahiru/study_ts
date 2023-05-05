import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

class GameControl{
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    isLive: boolean = true;
    direction: string = 'Right';

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10, 2);

        this.init();
    }

    checkEat(X: number, Y: number){
        if(X === this.food.X && Y === this.food.Y){
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
        // return X === this.food.X && Y === this.food.Y;
    }

    //响应键盘按下的事件
    keydownHandler(event: KeyboardEvent){
        // console.log(event.key);
        this.direction = event.key;
    }

    //限制按键响应时间，也可防抖
    debounce(func: Function, wait: number) {
        let timeout: ReturnType<typeof setTimeout>;
        return function(this: any, ...args: any[]) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        }
    }
    
    // Usage
    // debouncedKeydownHandler = this.debounce(this.keydownHandler.bind(this), 50);
    
    run(){
        let X = this.snake.X;
        let Y = this.snake.Y;
        //判断按键方向
        switch(this.direction){
            case 'ArrowUp':
            case 'Up':
                Y -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10;
                break;
        };

        // if(this.checkEat(X, Y)){
        //     console.log('吃到食物了');
        //     this.food.change();
        //     this.scorePanel.addScore();
        //     this.snake.addBody();
        // }
        this.checkEat(X, Y);
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e: any){
            alert(e.message + 'GAME OVER!');
            this.isLive = false;
        }
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    init(){
        document.addEventListener('keydown', this.debounce(this.keydownHandler.bind(this), 50));
        this.run();
    }
}
export default GameControl;