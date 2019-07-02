;
(function (window) {
  function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
  function Food(color, x, y, width, height, speed) {

    this.color = color || randomColor() ;
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 50;
    this.height = height || 50;
  }

  Food.prototype.randomPosition = function (mapWidth, mapHeight) {
    var x = Math.floor(Math.random() * mapWidth / this.width) * this.width;
    var y = Math.floor(Math.random() * mapHeight / this.height) * this.height;
    this.x = x;
    this.y = y;
  }
  Food.prototype.render = function (context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  window.Food = Food;
})(window);