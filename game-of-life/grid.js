function Grid(){
	this.grid = new Array(GRID_SIZE+2);
	this.nextGrid = new Array(GRID_SIZE+2);
	this.neighbors = new Array(GRID_SIZE+2);
	
	
	for (var i = 0; i < GRID_SIZE+2; i++) {
	  this.grid[i] = new Array(GRID_SIZE+2);
	  this.nextGrid[i] = new Array(GRID_SIZE+2);
	  this.neighbors[i] = new Array(GRID_SIZE+2);
	  
	  for (var j = 0; j < GRID_SIZE+2; j++){
		  this.grid[i][j] = 0;
		  this.nextGrid[i][j] = 0;
		  this.neighbors[i][j] = 0;
	  }
	}
	
	this.grid[1][1] = 1;
	this.grid[2][2] = 1;
	this.grid[3][3] = 1;
	this.grid[3][4] = 1;
	this.grid[4][3] = 1;
	
	this.show = function(){
		for (var i = 1; i <= GRID_SIZE; i++) {
			for (var j = 1; j <= GRID_SIZE; j++) {
				if (this.grid[i][j] == 1) {
					fill(255,255,255);
				}
				else {
					fill(0,0,0);
				}
				rect((i-1)*CELL_SIZE, (j-1)*CELL_SIZE, CELL_SIZE, CELL_SIZE);
			}
		}
	}
	
	this.update = function(){
		for (var i = 1; i <= GRID_SIZE; i++) {
			for (var j = 1; j <= GRID_SIZE; j++) {
				
				var n = this.grid[i-1][j-1] + this.grid[i][j-1] + this.grid[i+1][j-1] + this.grid[i-1][j] + this.grid[i+1][j] + this.grid[i-1][j+1] + this.grid[i][j+1] + this.grid[i+1][j+1]; 
				
				this.nextGrid[i][j] = 0;
				if (this.grid[i][j] == 1 && n == 2 || n == 3) this.nextGrid[i][j] = 1;
				if (this.grid[i][j] == 0 && n == 3) this.nextGrid[i][j] = 1;

			}
		}


		for (var i=0; i < GRID_SIZE+2; i++){
			for (var j=0; j < GRID_SIZE+2; j++){
				this.grid[i][j] = this.nextGrid[i][j];
			}
		}
	}
	
	
	this.changeCell = function(i, j){
		this.grid[i][j] = 1 - this.grid[i][j];
	}
}