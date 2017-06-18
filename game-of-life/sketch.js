var GRID_SIZE = 50;
var CANVAS_SIZE = 600;
var CELL_SIZE = CANVAS_SIZE/GRID_SIZE;
var grid;
var button;
var play;
var slider_speed;


function setup() {
	grid = new Grid();
	createCanvas(CANVAS_SIZE, CANVAS_SIZE);
	
	
	
	
	slider_speed = createSlider(1, 200, 10, 1);
	slider_speed.style('width', '80px');
	
	
	button = createButton("Play");
	button.mousePressed(play_pause);
}

function play_pause(){	
	play = !play
	if(play) button.html("Pause");
	else button.html("Play");
}

function draw() {
	
	
			
		background(0);
		
		stroke(255, 255, 255);
		
		
		//draw
		grid.show();
		
		
	if(play && frameCount % slider_speed.value() == 0){	
		//update
		grid.update();
	}
}

function mousePressed(){
	if (0<=mouseX && mouseX<=CANVAS_SIZE && 0<=mouseY && mouseY<=CANVAS_SIZE){
		this.grid.changeCell(ceil(mouseX/CELL_SIZE), ceil(mouseY/CELL_SIZE));
	}
}

function mouseWheel(){
	if (0<=mouseX && mouseX<=CANVAS_SIZE && 0<=mouseY && mouseY<=CANVAS_SIZE){
		var a = this.grid.grid[ceil(mouseX/CELL_SIZE)][ceil(mouseY/CELL_SIZE)];
		
		console.log(a.neighbors);
		console.log(a.acumNeighbors);
	}
}