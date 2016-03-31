define(['components/models/canvas'], function(Canvas) {
    "use strict";
    var lives = {
        count: 3,
        draw: function() {
            Canvas.ctx.font = "24px Arial";
            Canvas.ctx.fillStyle = "white";
            Canvas.ctx.fillText("Lives: " + this.count, Canvas.canvas.width - 90, 20);
        }
    };
    return lives;
});