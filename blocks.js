/* # Blocks implementation */

var blocks=o({id:"blocks"}); // * c => ref

Collections.get("blocks").map(function(text){
	var elm=block(text); // wrapper here
	b(blocks,elm) // the same name as the collection itself
})

Router.switchTo("blocks")

// in third layer of osi-model

var newButton=o({class:"button",text:"New"});
e(newButton,"click",function(){
	Collections.add("blocks","")
	clear(blocks) // * c => ref
	Collections.get("blocks").map(text=>b(blocks,block(text))) // reload the blocks container
})

var saveButton=o({class:"button",text:"Save"});
e(saveButton,"click",function(){ // ;?; stateChange("blocks")
	var data=Array.from(s("blocks").childNodes).map(elm=>elm.textContent); // array mapping
	stateChange("blocks",data)
	cl("Contents have been saved..",data)
})

b(header,newButton,saveButton)