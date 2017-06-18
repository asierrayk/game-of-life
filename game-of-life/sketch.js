var GRID_SIZE = 20;
var CANVAS_SIZE = 550;
var CELL_SIZE = CANVAS_SIZE/GRID_SIZE;
var grid;
var button;
var play;

function setup() {
	grid = new Grid();
	createCanvas(CANVAS_SIZE, CANVAS_SIZE);
	
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
	
	
	
	//update
	if (play){
		grid.update();
	}
	
}

function mousePressed(){
	if (0<=mouseX && mouseX<=CANVAS_SIZE && 0<=mouseY && mouseY<=CANVAS_SIZE){
		console.log("entra");
		this.grid.changeCell(ceil(mouseX/CELL_SIZE), ceil(mouseY/CELL_SIZE));
	}
}