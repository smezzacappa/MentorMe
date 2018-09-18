// var is the enemy
const stateSel = document.getElementById("state");	
const citySel = document.getElementById("city");

//Load countries
Object.keys(LOCATIONS).forEach(state => stateSel.appendChild(new Option(state, state)));
	
stateSel.onchange = e => {		 
	const selected = e.target.value;
	const options = citySel.children;
	// wipe prior options
	if (options.length > 0) {
		while (options.length > 0) {
			options[options.length - 1].remove();
		}   	
	}
	 
    LOCATIONS[selected].forEach(city => {
	    const cityText = (typeof city === 'string') ? city.toUpperCase() : ''; 
	    citySel.appendChild(new Option(cityText, city));
    });
};
 
 

