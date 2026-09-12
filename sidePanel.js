var sidePanel=o({class:"right"});

function pre(val,arr){ 
	return r=[val,...arr];
}

r1=[2,3,4];
seed=0;

// event call
b(sidePanel,e(button("new"),"click",function(){
	r1=pre(seed,r1);
	seed+=1;
	b(sidePanel,button("")) // stateChange /&*# empty one
	r1.map(function(item,idx){ // fill element with text
		Array
			.from(sidePanel.childNodes)
			.splice(1)[idx].textContent=item; // append after  
	})
}))

// onload call
r1.map(function(item){
	b(sidewrap,button(item)) 
})

