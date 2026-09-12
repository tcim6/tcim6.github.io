var archive=o({id:"archive"});
var backupButton=e(button("Backup"),"click",function(){
	// works only if window component is loaded;fix
	var blocks=Collections.get("blocks"); // stateChange..
	Collections.add("archive",{
		timestamp:Date.now(),
		blocks:blocks,
	})
	clear("blocks")
	sce() // <-- 

});
b(header,backupButton)


function sce(){
	b(archive,tabs("archive",Collections.get("archive").map(function(item){ 
		item.blocks.forEach(text=>b(blocksCurrent,block(text)))
		// and clear the screen
		return {
			text:item.timestamp,
			content:blocksCurrent,
		};
		})
	))	
}

sce() // -->