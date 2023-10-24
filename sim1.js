/* Source the CPM module (cpm-cjs version because this is a node script).*/
let CPM = require("../../build/artistoo-cjs.js")

let config = {

	// Grid settings
	ndim : 2,
	field_size : [100,100],
	
	// CPM parameters and configuration
	conf : {
		T : 20,			// CPM temperature
				
		// Adhesion parameters:
		J: [[0,20], [20,100]] ,
		
		// VolumeConstraint parameters
		LAMBDA_V : [0,50],	// VolumeConstraint importance per cellkind
		V : [0,500]		// Target volume of each cellkind
	},
	
	// Simulation setup and configuration
	simsettings : {
		// Cells on the grid
		NRCELLS : [1],		// Number of cells to seed for all
					// non-background cellkinds.
		RUNTIME : 500,                // Only used in node
		CANVASCOLOR : "eaecef",
		zoom : 4		// zoom in on canvas with this factor.
	}
}

let sim = new CPM.Simulation( config )

sim.run()