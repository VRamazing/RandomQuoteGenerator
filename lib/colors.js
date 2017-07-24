var colors= [{"name":"red darken-3","hex":"#c62828"},
			 {"name":"pink darken-3","hex":"#ad1457"},
			 {"name":"purple darken-4","hex":"#4a148c"},
			 {"name":"deep-purple","hex":"#673ab7"},
			 {"name":"indigo darken-2","hex":" #512da8"},
			 {"name":"blue darken-4","hex":"#01579b"},
			 {"name":"light-blue darken-4","hex":"#01579b"},
			 {"name":"cyan darken-1","hex":"#00acc1"},
			 {"name":"teal darken-1","hex":"#00897b"},
			 {"name":"green darken-1","hex":"#43a047"},
			 {"name":"amber accent-4","hex":"#ffab00 "},
			 {"name":"orange accent-4","hex":"#ff6d00"},
			 {"name":"deep-orange lighten-2","hex":"#ff7043"},
			 {"name":"grey darken-2","hex":" #616161"},
			 {"name":"brown darken-2","hex":"#5d4037"},
			 {"name":"blue-grey darken-1","hex":"#546e7a"}]

exports.getColor = function(){
	var idx = Math.floor(Math.random() * colors.length);
	return colors[idx];	
}