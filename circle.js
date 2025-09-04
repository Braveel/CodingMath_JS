window.onload = function () {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;

    var centerX = width * .5,
        centerY = height * .5,
        xRadius = 200,
        yRadius = 400,
        angle = 0,
        speed = .01,
        x, y;

    render();
        
    function render() {
        context.clearRect(0, 0, width, height);

        x = centerX + Math.cos(angle) * xRadius;
        y = centerY + Math.sin(angle) * yRadius;

        context.beginPath();
        context.arc(x, y, 40, 0, Math.PI * 2, false);
        context.fill();

        angle += speed;

        requestAnimationFrame(render);
    };
        
};

