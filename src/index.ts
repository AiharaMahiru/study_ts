import {hi} from './lib';

let d: (a: number, b: number) => number;
function sum(a: number, b: number){
    return a + b;
}

let e : Array<number>;
e = [1, 2, 3];

let h : [string, number];
h = ['hello', 10];

enum Anime{
    name = "name",
    time = "time",
    isCompleted = "false"
}

let anime : {name: string, time: string, isCompleted: boolean};
anime = {
    name: 'naruto',
    time: '2002',
    isCompleted: Anime.isCompleted == "false" ? false : true
}


let box1 = document.getElementById('box1');
box1?.addEventListener('click', function(e){
    alert(hi);
});
