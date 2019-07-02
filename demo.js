/**
 *  把整个游戏也看成对象
 * 
 *  对象的属性： 蛇、食物
 *  
 *  对象的方法： 开始游戏
 * 
 */
;
(function (window) {

  // 游戏对象的构造函数
  function Game(canvas) {
    this.snake = new Snake();
    this.food = new Food();
    this.food.randomPosition(canvas.offsetWidth, canvas.offsetHeight);
    // 所有的游戏里面的这些对象，需要渲染，都需要一个画笔
    this.context = canvas.getContext('2d');
    // 把canvas对象先存储起来，以备后面需要的时候使用
    this.canvas = canvas;
  }

  //一般在游戏里面，至少有两个函数 
  // update   -  这个用于更新游戏物体的状态
  // render   -  渲染游戏物体
  Game.prototype.update = function(){
    //这个函数负责处理所有的游戏物体的改变
    this.snake.move()
  }
  // 这个函数负责渲染所有的游戏物体
  Game.prototype.render = function(){
    // 在重新渲染游戏对象之前，先把原本的擦除
    this.context.clearRect(0,0,this.canvas.offsetWidth,this.canvas.offsetHeight);
    // 画蛇
    this.snake.render(this.context);
    // 画食物
    this.food.render(this.context);
  }

  // 游戏开始的方法
  Game.prototype.start = function () {
    setInterval((function(){
      this.update()
      this.render();
    }).bind(this),1000);
  }

  window.Game = Game;

})(window);