define(['components/models/canvas'], function(Canvas) {
    "use strict";
    var score = {
        count: 0,
        draw: function() {
            Canvas.ctx.font = "24px Arial";
            Canvas.ctx.fillStyle = "white";
            Canvas.ctx.fillText("Score: " + this.count, +8, 20);
        }
    };
    return score;
});