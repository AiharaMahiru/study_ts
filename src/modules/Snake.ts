class Snake{
    head : HTMLElement;
    bodies : HTMLCollection;
    element : HTMLElement;

    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    addBody(){
        this.element.insertAdjacentHTML('beforeend','<div></div>');
    }
    moveBody(){
        for(let i = this.bodies.length - 1; i > 0; i--){
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            console.log(X, Y);
            
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
            console.log((this.bodies[i] as HTMLElement).style.left, (this.bodies[i] as HTMLElement).style.top);
            
        }
    }
    checkHeadBody(){
        for(let i = 1; i < this.bodies.length; i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error('撞到自己了');
            }
        }
    }

    set X(value){
        if(this.X === value){
            return;
        }
        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了');
        }
        //向左移动时，不能向右
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            if(value > this.X){
                value = this.X - 10;
            }else{
                value = this.X + 10;
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }
    set Y(value){
        if(this.Y === value){
            return;
        }
        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了');
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if(value > this.Y){
                value = this.Y - 10;
            }else{
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }

}
export default Snake;