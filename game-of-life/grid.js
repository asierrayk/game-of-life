function Grid(){
	this.grid = new Array(GRID_SIZE+2);
	
	
	for (var i = 0; i < GRID_SIZE+2; i++) {
	  this.grid[i] = new Array(GRID_SIZE+2);
	  
	  for (var j = 0; j < GRID_SIZE+2; j++){
		  this.grid[i][j] = new Cell(i,j);
	  }
	}
	
	
	this.show = function(){
		for (var i = 1; i <= GRID_SIZE; i++) {
			for (var j = 1; j <= GRID_SIZE; j++) {
				this.grid[i][j].show();
			}
		}
	}
	
	this.update = function(){
		
		this.updateNeighbors();
		
		for (var i = 1; i <= GRID_SIZE; i++) {
			for (var j = 1; j <= GRID_SIZE; j++) {
				
				var n = this.grid[i][j].neighbors;
				if (this.grid[i][j].alive && n != 2 && n != 3){
					this.changeCell(i,j);
				}
				if (!this.grid[i][j].alive && n == 3){
					this.changeCell(i,j);
				}

			}
		}
		
	}
	
	
	this.updateNeighbors = function(){
		for (var i = 1; i <= GRID_SIZE; i++) {
			for (var j = 1; j <= GRID_SIZE; j++) {
					this.grid[i][j].updateNeighbors();
			}
		}
	}
	
	
	this.changeCell = function(i, j){
		var incrementNeighbors;
		if (this.grid[i][j].alive){
			this.grid[i][j].alive = false;
			incrementNeighbors = -1;
		}
		else {
			this.grid[i][j].alive = true;
			incrementNeighbors = 1;
		}

		
		for(k = i-1; k <= i+1; k++){
			for (var l = j-1; l <= j+1; l++){
				if (k == i && l == j) continue;
				this.grid[k][l].modifyNeighbors(incrementNeighbors);
			}
		}
		
	}
}
