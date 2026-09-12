/*

*/

function bitscan(source,bits){ // naming 
   var r=[];
   var blen = bits.length; // could be any type of value // variable name (alen, blen) (string,source)
   var slen = source.length; 

   for(let a = 0; a < slen; a++){ // i0 i1 i2
      var match = true;

      for(let b = 0;b < blen; b++){
         cl(bits[b],source[a+b], match)

         if(bits[b] !== source[a+b]){
            if(b == 4){
               cl("reached 4 times")
            }
         }
         match = false;
         if(b == blen-1 && match == true){
            cl("MATCH","index:", a) 
            r.push(["index:", a])
         }
      }
   }
   return r;
}

bitscan("1010ff001","ff")

// astraction of that thing above

// temporarily leaving out the following
// function scan(str,term){
//    let len=string=>string.length;
//    for(let i=0;i<len(str);i++){
//       for(let x=0;x<len(term);x++){
//          cl(i,x,str[i+x]==term[x])
//       }
//    }
// }



var clear; // by listing 

function setTimer(timeSet,fn){
   clear=setInterval(function(){ // propably async
      fn()
   },timeSet)
}

setTimeout(function(clearAllTimers){
   clearInterval(clear)
},5000)


function timeCompare(time1,time2){ 
   return time2-time1;
}

/*
   Speed Direction Combined Map
   for example:

   0851 (speed mode 1)
   0051 (speed mode 2)
   081 (speed mode 3)

   var diagonalLeft=0854; // corner
   var leftViewDirect=851; // o clock

*/
function direction(){
   var matrix=[
        1,2,3,
        4,5,6,
        7,8,9,
//      *,0,#
   ];

   var left=[2,5,4]
   var diagonalLeft=0854; // (corner)
   var leftViewDirect=851;
   return;
}