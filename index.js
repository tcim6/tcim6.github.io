/**/

header=o({
	id:"header",
	class:"header",
});

view=o({
	id:"view",
	class:"view"
});

y(view,{left:"0px",top:"0px",right:"100px"})
b(root,view)

/* build data-objects from the ui */

var currentObject={};
var inputKey=o({type:"input"});
var inputValue=o({type:"input"});
var buttonSaveToCollection=o({type:"button",text:"Save"});
var currentObjectView=o({type:"div"});
var objectsView=o({type:"div"});

b(view,
inputKey,
inputValue,
buttonSaveToCollection,
currentObjectView,
objectsView)

var queryType="filter";
var queryValue="";
var queryMethod="includes";

function mod(value){ // value , type of method
	return _[queryType](value,function(val){
		return _.includes(val.data,queryValue);
	});
}

function string(value){
	return JSON.stringify(value);
}
	
e(inputValue,"change",function(){
	currentObject[inputKey.value]=inputValue.value;
	clear(currentObjectView)
	b(currentObjectView,text(string(currentObject)))
})

e(buttonSaveToCollection,"click",function(){ // invokes the update
	Collections.add("objects",currentObject)
	currentObject={};
	clear(objectsView)
	clear(inputKey)
	clear(inputValue)
	mod(Collections.get("objects")).map(function(obj){ 
		b(objectsView,text(string(obj)))
	})
})

mod(Collections.get("objects")).map(function(obj){ 
	b(objectsView,text(string(obj)))
})

var selection=o({type:"select"}); // adding options through o({}) impl.
b(selection,o({type:"option",text:"filter"})) // to simplify 
b(selection,o({type:"option",text:"map"})) // to simplify ( not text but value or so)
b(selection,o({type:"option",text:"reduce"})) // to simplify ( not text but value or so)
b(selection,o({type:"option",text:"orderBy"})) // to simplify ( not text but value or so)
b(view,selection)

e(selection,"change",function(){
	cl("queryType is now",this.target.value)
	queryType=this.target.value;
})

/* 
	do not clear inputfield
	1,2,3
	read-in mdn page filter method
*/

var queryArgument1=o({type:"input",placeholder:"queryValue"});
var queryArgument2=o({type:"input",placeholder:"queryMethod"});
b(view,queryArgument1)
b(view,queryArgument2)

e(queryArgument1,"change",function(){ // set filter parameters
	queryValue=this.target.value;

	clear(objectsView)
	mod(Collections.get("objects")).map(function(obj){ 
		b(objectsView,text(string(obj)))
	})
})

e(queryArgument2,"change",function(){ // set filter parameters
	queryMethod=this.target.value;
	clear(objectsView)
	mod(Collections.get("objects")).map(function(obj){ 
		b(objectsView,text(string(obj)))
	})
})