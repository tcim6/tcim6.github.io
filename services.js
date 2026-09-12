RegisterService({ 
	name:"Storage",
	init:function(){
		var self=this;
		if(typeof self.get("collections")=="undefined"){
			self.save("collections",{})
		}
		return self;
	},
	get:function(key){ 
		return parser(localStorage[key]); // parser needed using localStorage
	},
	save:function(key,value){
		return localStorage[key]=parser(value);
	},
})

Storage.init()

RegisterService({ 
	name:"Collections",
	init:function(){ 
		var self=this;
		var stores=[
			"state",
			"records",
			"blocks",
			"wordlist",
			"objects"];

			stores.map(function(storeName){
				if(!Array.isArray(Collections.get(storeName))){
					Collections.new(storeName)
				}
			})
	},
	new:function(name){
		var store=Storage.get("collections");
			store[name]=[];
		return Storage.save("collections",store);
	},
	add:function(name,item){
		var store=Storage.get("collections");
			store[name].push(item);
		return Storage.save("collections",store);
	},
	save:function(name,data){
		var store=Storage.get("collections");
			store[name]=data;
		return Storage.save("collections",store);
	},
	get:function(name){
		return Storage.get("collections")[name];
	},
	list:function(){
		return Storage.get("collections");
	},
	export:function(){
		var self=this;
		let content="data:text/csv;charset=utf-8,"+JSON.stringify(self.list());
		let encoded=encodeURI(content); 
		window.open(encoded,"_self")
	},
	import:function(data){
		var self=this;
		cl(data)
		// prevent from running; return Storage.save("collections",data);
	}
})

Collections.init()