let LOCATIONS;
let stateSel;	
let citySel;

const setupMenus = () => {
	console.log('setting up menus');
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
};

window.onload = () => {
	stateSel = document.getElementById("state");	
	citySel = document.getElementById("city");

	fetch("/city-state-data")
	.then(raw => raw.json())
	.then(json => {
		LOCATIONS = json;
		setupMenus();
	});
};
 
button = () => {
	
}
 

