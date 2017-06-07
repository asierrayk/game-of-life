var GRID_SIZE = 20;
var CANVAS_SIZE = 550;
var CELL_SIZE = CANVAS_SIZE/GRID_SIZE;
var grid;
var nextGrid;

function setup() {
	grid = new Array(GRID_SIZE+2);
	nextGrid = new Array(GRID_SIZE+2);
	for (var i = 0; i < GRID_SIZE+2; i++) {
	  grid[i] = new Array(GRID_SIZE+2);
	  nextGrid[i] = new Array(GRID_SIZE+2);
	  
	  for (var j = 0; j < GRID_SIZE+2; j++){
		  grid[i][j] = 0;
		  nextGrid[i][j] = 0;
	  }
	}
	
	
	grid[2][1] = 1;
	grid[3][2] = 1;
	grid[3][3] = 1;
	grid[2][3] = 1;
	grid[1][3] = 1;
	
	
	createCanvas(CANVAS_SIZE, CANVAS_SIZE);
}

function draw() {
	
	if (frameCount % 50 == 0){
	
	background(0);
	
	stroke(255, 204, 0);
	
	//draw
	for (var i = 1; i <= GRID_SIZE; i++) {
		for (var j = 1; j <= GRID_SIZE; j++) {
			if (grid[i][j] == 1) {
				fill(255,255,255);
			}
			else {
				fill(0,0,0);
			}
			rect((i-1)*CELL_SIZE, (j-1)*CELL_SIZE, CELL_SIZE, CELL_SIZE);
		}
	}
	
	
	
	//update
	for (var i = 1; i <= GRID_SIZE; i++) {
		for (var j = 1; j <= GRID_SIZE; j++) {
			
			var neighbors = grid[i-1][j-1] + grid[i][j-1] +grid[i+1][j-1] +grid[i-1][j] +grid[i+1][j] +grid[i-1][j+1] +grid[i][j+1] +grid[i+1][j+1]; 
			
			nextGrid[i][j] = 0;
			if (grid[i][j] == 1 && neighbors == 2 || neighbors == 3) nextGrid[i][j] = 1;
			if (grid[i][j] == 0 && neighbors == 3) nextGrid[i][j] = 1;

		}
	}
	
	for (var i=0; i < GRID_SIZE+2; i++){
		for (var j=0; j < GRID_SIZE+2; j++){
			grid[i][j] = nextGrid[i][j];
		}
	}
	}
}