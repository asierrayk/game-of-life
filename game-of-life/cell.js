function Cell(x, y){
	this.x = x;
	this.y = y;
	this.alive = false;
	this.neighbors = 0;
	this.acumNeighbors = 0;
	
	
	
	this.show = function(){
		if (this.alive == 1) {
			fill(255,255,255);
		}
		else {
			fill(0,0,0);
		}
		rect((x-1)*CELL_SIZE, (y-1)*CELL_SIZE, CELL_SIZE, CELL_SIZE);
	}
	
	this.modifyNeighbors = function(n){
		this.acumNeighbors += n;
	}
	
	this.updateNeighbors = function(){
		this.neighbors += this.acumNeighbors;
		this.acumNeighbors = 0;
		return this.neighbors;
	}
}