function record(nodes){
	var seed,elm;	

	if(Collections.get("records").length > 0){
		seed=Collections.get("records").length+1;		
		elm=o({class:"record",id:"record"+seed}); // on public scope? *generator fn
		mState.records.push(elm);
	}

	nodes.map(function(node){
		b(elm,node)
	})

	var textField=o({ // out of scope
		class:"container",
		editable:"true"
	});

	b(elm,textField)
	b(elm,saveButton)
	return elm;
}

record([ // auto id this 
	text("Sleepiness"), // just this in collections
	chart(1,5,8,4),
	text("Mood"),
	barIndicator(6),
	chart(1,5,8,4,4,4,8,2,1),
	text("Activity"),
	chart(1,5,8,4,6,6,6),
	text("Smokes"),
	barIndicator(5),
])

record([
	text("Sleepiness"),
	chart(1,4,6,3),
	text("Mood"),
	barIndicator(7),
	chart(1,3,3,4,6,4,8,7,1),
	text("Activity"),
	chart(1,3,6,4,5,6,5),
	text("Smokes"),
	barIndicator(4),
])

record([
	Popup(text("Awakeness"),"Awakeness refers to the literal quality or state of being awake, conscious, and alert rather than sleeping or unconscious."),
	chart(1,4,6,3),
	text("Mood"),
	barIndicator(7),
	chart(1,3,3,4,6,4,8,7,1),
	text("Activity"),
	chart(1,3,6,4,5,6,5),
	barIndicator(4),
	tabl("table1",converter([
		{
			header:"High",
			values:[2,4,0,2,6]
		},
		{
			header:"Memory",
			values:[2,4,0,2,6]
		}
	])),
])
// bring this to another file
 record([
	Popup(text("Awakeness"),"Awakeness refers to the literal quality or state of being awake, conscious, and alert rather than sleeping or unconscious."),
	chart(2,5,6,4),
	text("Mood"),
	barIndicator(8),
	chart(1,3,3,4,6,4,8,7,1),
	text("Activity"),
	chart(1,3,6,4,5,6,5),
	barIndicator(4),
	tabl("table1",converter([
		{
			header:"High",
			values:[2,4,0,2,6]
		},
		{
			header:"Memory",
			values:[2,4,0,2,6]
		}
	])),
])

record([ // specification of id. of record 
	text("Awakeness"),
	chart(2,4,7,3),
	text("Mood"),
	barIndicator(7),
	chart(1,3,3,4,6,4,8,7,1),
	text("Activity"),
	chart(1,3,6,4,5,4,4),
	barIndicator(6),
	text("(OD) Substances c.4b"),
	tabl("(OD) Substances c.4b",converter([
		{ header:"fluticasone", values:[2,4,1,2,4] },
		{ header:"cortisone", values:[3,4,4,2,4] },
		{ header:"prednisone", values:[2,4,4,4,6] },
		{ header:"flumetason", values:[2,1,2,2,2] },
		{ header:"miconazole", values:[2,3,2,2,2] },
		{ header:"fluixatine", values:[2,4,6,2,4] },
	])),
	text("Psychoactive SSRI/d2 - GABA"),
	tabl("Psychoactive SSRI/d2 - GABA",converter([
		{ header:"thiamide", values:[2,4,1,2,4] },
		{ header:"tyrosine", values:[2,4,1,2,4] },
		{ header:"orap", values:[2,1,2,2,2] },
		{ header:"oxytocine", values:[2,4,4,4,6] },
		{ header:"metadone", values:[2,3,2,2,2] },
		{ header:"GHB", values:[2,4,6,2,4] },
		{ header:"lorazepam", values:[3,4,4,2,4] },
		{ header:"wellbutrin", values:[3,4,4,2,4] },

	])),
])


 record([
	Popup(text("Awakeness"),"Awakeness refers to the literal quality or state of being awake, conscious, and alert rather than sleeping or unconscious."),
	chart(3,4,4,3),
	text("Mood"),
	barIndicator(6),
	chart(2,4,4,6,6,2),
	text("Activity"),
	chart(6,3,4,4,5,6,5),
	barIndicator(4),
	tabl("table1",converter([
		{
			header:"Information Utake",
			values:[3,3,5,4,6]
		},
		{
			header:"Memory",
			values:[2,4,4,3,6] // concatination issue
		}
	])),
])


 record([
	text("Cognition"),
	chart(4,3,4,4,0,2),
	text("Perceptuation"),
	chart(4,2,2,2,4,3),
	text("Awakeness"),
	chart(4,4,4,4,3,4),
	text("Mood"),
	barIndicator(6),
	text("Activity"),
	chart(3,7,2,4,6,4,6,5),
	text("Accuracy"),
	barIndicator(6),
	text("Conversation"),
	chart(3,3,2,3,5,3,5,6),
	text("Cigarettes"),
	barIndicator(6),
	tabl("table1",converter([
		{
			header:"Change",
			values:[2,4,0,2,6]
		},
		{
			header:"Memory",
			values:[2,4,3,2,5,6,2]
		},
		{
			header:"Feel",
			values:[2,13,11,6,2]
		},
		{
			header:"Fitness",
			values:[3,5,2,2,2,4,6]
		}
	])),
])