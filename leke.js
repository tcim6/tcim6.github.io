cl=console.log;
body=document.body;
root=document.querySelector("[root]");

mState={
	// elements are id'ed here in mState directly from record constructor
	elements:[],
	records:[], 
};

function alias(id,fn){
    return window[id]=fn;
}

const px="px";
const auto="auto";

function RegisterService(service){
	alias(service.name,service)
	mState[service.name]=service;
}

function attr(elm,type,val){ // helperfunction shortcut
		elm.setAttribute(type,val) // coulod i directly push a childnode to childnodes array
		return elm;
}

function o(args){ 
// how to get index of
// this arguments object 
// debugger info solid 
// understanding
// type input field

	let r=document.createElement(args.type?args.type:"div"); // changing the typ lang the way
		mState.elements.push(r);

	for(let prop in args){ // content = args[prop]
		var map={ // block wise execution of modifications
			"text": o =>{
					r.textContent=args[prop];
			},
			"value": o =>{				
				attr(r,"value",args[prop])
			},
			"id": o =>{
				attr(r,prop,args[prop])
  			mState[args[prop]]=r;			
			},
			"class": o =>{
				attr(r,prop,args[prop])
			},
			"editable": o =>{				
				attr(r,"contentEditable",true)
			},
			"plainText": o =>{ // boolean ? plain / plainMode
				e(r,"paste",function(){ // this expression is outside this scope
					this.preventDefault();
					var text=(this.originalEvent||this).clipboardData.getData('text/plain');
					document.execCommand("insertHTML", false, text)
				});
			},
			"type": o =>{} // then event handler
		};

		map[prop]() 
	}
	return r;
}

function m(elm,args){
	// helper functions
	text=o=> elm.textContent=o;
	id=o=> (attr(elm,"id",args.id),mState[args.id]=elm);
	// if layer; is o?<handle>:<do nothing
	text(args.text)
	id(elm,"id")
	// no call for forloop needed
	return elm;// return
}

// ## function order ##

function clear(elm){
	elm.value="";
	elm.textContent="";
	return elm;
}

function y(elm,args){
	for(let prop in args){
		elm.style[prop]=args[prop];
	}
	return elm;
}

function e(elm,type,fn){
	elm.addEventListener(type,function(e){ 
		fn.call(e)
	});
  return elm;
}

function s(id){
  return mState[id];
}

function b(elm,...nodes){
	nodes.map(function(node){
		elm.appendChild(node)
	})
	return elm;
}

function input(args){ // could be completed by using o
	let r=document.createElement("input");
	attr(r,"class","input")
	return r;
}

function text(text){
	let r=document.createElement("div");
		r.textContent=text;
		r.setAttribute("class","text")
	return r;
}

function img(src){
	var img=document.createElement("div");
		y(img,{
			backgroundImage:"url("+ src +")",
			backgroundSize:"cover",
			class:"img"
		})
	return img;
}

function iframe(src,props){
	var elm=o({class:"wrapper"});
	let r=document.createElement("iframe");

	addressBar=input();
	y(addressBar,{
		width:"300px"
	})

	buttonfollow=button("Go");
	y(buttonfollow,{
		margin:"5px",
		lineHeight:"8px"
	})

	e(buttonfollow,"click",function(){
		r.src=addressBar.value;
	})

	b(elm,addressBar,buttonfollow,r)

	y(r,{
		width:"400px",
		height:"400px"})

	attr(r,"height","600px")
	attr(r,"width","600px")
	
	r.src=src;
	return r;
}

function l(elm,pathName){ // key down enter
	return e(elm,"click",function(){
		window.open(pathName,"_blank")
	});
}

function a(text,ref){
	var a=document.createElement("a");
		a.textContent=text;
		a.setAttribute("href",ref)
	return a;
}

function button(text){
	var button=o({text,class:"button"});
	return button;
}

function block(text){
	var elm=o({
		class:"block",
		text:text,
		editable:"true",
		plainText:"true", // plain text paste only 
	});
	return elm;
}

function chart(...values){
	var chart=o({
		class:"chart",
	});
	var wrapper=o({class:"wrapper"});
	values.map(function(val){
		b(wrapper,y(o({class:"bar",text:val}),{
			height:(val*10)+"px",
		}))
	})	
	return b(chart,wrapper);
}

function list(id,arr){
	var r=o({id,class:"list"});
	arr.map(function(item){
		b(r,o({class:"listItem",text:item}))
	})
	return r;
}

function barIndicator(count){
	var elm=o({
		class:"barIndicator",
	});
	for(let i=0;i<count;i++){
		b(elm,o({class:"indicator"}))
	}
	return elm;
}

function toRow(obj){ // default fn
		var r=o({class:"row"});
		b(r,text(obj.header))
		obj.values.map(function(val){
			b(r,o({class:"item",text:val}))
		})
		return r;
	}

	function converter(input){
		return input.map(obj=>toRow(obj));
	}

	function tabl(id,rows){
		var r=o({id,class:"list"});
		rows.map(function(row){
			b(r,row)
		})
		return r;
	}

function tiles(string){
	var elm=o({class:"tiles"});
	var component=string.split(",").map(function(val){
		b(elm,o({class:"tile",text:val}))
	})
	return elm;
}

function typer(target,text){
	text.split('').map(function(val,idx){
		setTimeout(function(){
			target.textContent=target.textContent+=val;
		},400*idx)
	})
	return target;
}

function hypertext(target,text){
	text.split('').map(function(val,idx){
		setTimeout(function(){
			// split join tric build in? uh ..
			target.textContent=shuffle(text.split(" ")).join(" ")
		},200*idx) // speed sync
	})
	return text;
}


// interact between Collections service and Toggler implementation
// and global scope records, a record node consist of(validators, inputfields, service for api calls)


function currentTime(target){
	while(true){
		setTimeout(function(){
			var clock=o({ // outside async 
				class:"clock",
				text:Date.now()
			});
			b(target,clock)
		},100)
	}

	return clock;
}


/* 
	conventional type
	in case of "re" factorization
	check base script or auto-complete

	play-around till : [main][sub][enum] is accumulator?
 */

function inputField(){ // component logical name
	var output=o({});
	var elm=input();
	b(output,elm)
/* b > e > button/o */
	b(output,e(button("Go"),"click",function(){
		Router.switchTo(elm.value)
		Collections.add("wordlist",elm.value)
		clear(view) // "combine logic"
		Collections.get("wordlist").map(item=>b(view,text(item)))
	}))

	// btn1=button("Go"); // Enter keypress(via Keymap) 
	// e(btn1,"click",function(){
	// 	cl("Added to Collections..",elm.value)
	// 	Router.switchTo(elm.value) // possible shortcut for loading components
		
	// 	Collections.add("wordlist",elm.value)
	// 	// arguments listing
	// 	// >> Updater stateChange(storeName,target)::
	// 	// >> Updater stateChange(argumentslist)::
	// 	clear(s("r2"))
	// 	Collections.get("wordlist")
	// 		.map((item)=>b(s("r2"),text(item)))
																							
	// })
	b(output,btn1)
	return output;
}

function crosshair(){ // simple not element based
	var horizontalLine=o({class:"line"});
	var verticalLine=o({class:"line"});

	e(root,"mousemove",function(){ // this the right event? .. 
		cl("x:"+this.clientX+"y:"+this.clientY)

		y(horizontalLine,{
			top:this.clientY+1+px,
		})

		y(verticalLine,{
			height:auto,
			width:1+"px",
			left:this.clientX+1+px,
			top:0,
			bottom:0
		})
	})

	b(root,horizontalLine)
	b(root,verticalLine)
}
// crosshair()

/**/

function update(target,newValue){ // @f4 former the replace fn
	clear(target)
	b(target,newValue)
	return;
}
