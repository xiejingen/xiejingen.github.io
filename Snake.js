;
(function () {
  function Snake(direction, speed, width, height) {
    this.direction = direction || 'right';
    this.speed = speed || 300;
    // this.tempSpeed = this.speed;
    this.timer = 0;
    this.width = width || 50;
    this.height = height || 50;
    this.body = [];

    this.body[0] = {
      x: 150,
      y: 50,
      color: 'yellow'
    }
    this.body[1] = {
      x: 100,
      y: 50,
      color: 'red'
    }
    this.body[2] = {
      x: 50,
      y: 50,
      color: 'green'
    }
  }

  Snake.prototype.render = function (context) {
    this.body.forEach((function (item) {
      context.fillStyle = item.color;
      context.fillRect(item.x, item.y, this.width, this.height);
      var res = context.fillRect(item.x, item.y, this.width, this.height);
      console.log(res)
    }).bind(this))
  }


  Snake.prototype.move = function () {

      for (var i = this.body.length - 1; i > 0; i--) {
        this.body[i].x = this.body[i - 1].x;
        this.body[i].y = this.body[i - 1].y;
      }
      switch (this.direction) {
        case "right":
          this.body[0].x += this.width;
          break;
        case "left":
          this.body[0].x -= this.width;
          break;
        case "top":
          this.body[0].y -= this.height;
          break;
        case "bottom":
          this.body[0].y += this.height;
          break;
      }


  }

  Snake.prototype.growth = function (color) {
    var last = this.body[this.body.length - 1];
    var block = {
      x: last.x,
      y: last.y,
      color:color,
      
    }
    this.body.push(block);
  }


  window.Snake = Snake;
})(window);