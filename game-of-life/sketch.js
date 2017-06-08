var GRID_SIZE = 20;
var CANVAS_SIZE = 550;
var CELL_SIZE = CANVAS_SIZE/GRID_SIZE;
var grid;
var nextGrid;

function setup() {
	grid = new Grid();
	createCanvas(CANVAS_SIZE, CANVAS_SIZE);
}

function draw() {
	
	if (frameCount % 50 == 0){
	
	background(0);
	
	stroke(255, 204, 0);
	
	//draw
	grid.show();
	
	
	
	//update
	grid.update();
	
	
	}
}