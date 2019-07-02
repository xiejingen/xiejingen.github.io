
(function (window) { 
  function Game(canvas) { 
    this.snake = new Snake();
    this.food = new Food();
    this.food.randomPosition(canvas.offsetWidth, canvas.offsetHeight);
    this.context = canvas.getContext('2d');//获取画布
    this.canvas = canvas;//画笔
  }
  
  Game.prototype.update = function () { 
    this.snake.timer += 10;
 
    if(this.snake.timer >= this.snake.speed){
      this.snake.timer = 0;
      this.snake.move();
    }

   
    var head = this.snake.body[0];
    if (head.x < 0 || head.y < 0 || head.x > this.canvas.offsetWidth - this.snake.width || head.y > this.canvas.offsetHeight - this.snake.height) { 
      clearInterval(this.timer);
      alert('game over');
    }
   
    if (head.x === this.food.x && head.y === this.food.y) { 
      this.snake.growth(this.food.color);
      this.food = new Food();
      if(this.snake.body.length % 2 == 0){
        this.snake.speed -= 40;
        console.log( this.snake.speed)
        if(this.snake.speed < 100){
          this.snake.speed = 100;
        }
    
      }
      this.food.randomPosition(this.canvas.offsetWidth, this.canvas.offsetHeight);
    }
   
  }
  
  Game.prototype.render = function () { 
    this.context.clearRect(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight);
    this.snake.render(this.context);
    this.food.render(this.context);
  }
  
  Game.prototype.start = function () {
 
    this.timer = setInterval((function(){ 
      this.update();
      this.render();
    }).bind(this), 20)
    this.keyEvent();
  }


  var document = window.document;
  Game.prototype.keyEvent = function () { 
    document.addEventListener('keydown', (function (e) { 
      switch (e.keyCode) { 
        case 38:
          this.snake.direction = 'top';
          break;
        case 39:
          this.snake.direction = 'right';
          break;
        case 40:
          this.snake.direction = 'bottom';
          break;
        case 37:
          this.snake.direction = 'left';
          break;
      }
    }).bind(this))
  }

  window.Game = Game;
})(window)
