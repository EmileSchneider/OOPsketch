class Application {
		
	constructor() {
		this.canvas = document.getElementById("canvas");

		this.tool = new CircleTool(this.canvas);	
	}
	
	addingEventListeners() {
		this.canvas.addEventListener("click", this.tool.onClick )
		this.canvas.addEventListener("mouseup", this.tool.onMouseUp )
		this.canvas.addEventListener("mousemove", this.tool.onMouseMove )
			
	}
}

class Tool {
	
	constructor(canvas) {
		this.context = canvas.getContext("2d");
	}
	
	onClick() {	
	}
	
	onMouseUp() {

	}
	
	onMouseMove(){

	}		
	
}


class CircleTool extends Tool {

	onClick() {
		this.context.beginPath();
		this.context.arc(95,50,40,0,2*Math.PI);
		this.context.stroke();
	}	
}

var App = new Application();

App.addingEventListeners();
