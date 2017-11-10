 
$(function (){ 
    
    var hours = 0;
    var minutes = 0;
  
 
    var imagesCount = 8;
    var images = [];
    
    for(var i=1;i<=imagesCount;i++){
        images.push('pic'+i);
        
    } 
    
    
    /* setInterval(function() {
        updateClock()
    }, 1000);
     */
     function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex --;
            
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
   
  
    var shuffleArray1 = shuffle(images);
     var shuffleArray2 = shuffle(images);
    var shuffleArray =shuffleArray1.concat(shuffleArray2);
    shuffleArray = shuffle(shuffleArray);
     console.log(shuffleArray);
 
    
     for(var i =0;i<shuffleArray.length;i++){
        var div = $('<div>');
        var img = $('<div>');
        div.addClass('block');
        img.addClass(shuffleArray[i]);
        img.addClass('hide');
        div.attr('data-block-name',shuffleArray[i]);
        div.append(img);
        $('.blocks').append(div);
        
    }
    $('.b1').on('click',function(){
    var pair = [];
    var step = 1;
         setInterval(function() {
        updateClock()
    }, 1000);
     
    function updateClock() {

   minutes +=1;

    if (minutes > 59) {
        minutes -= 60;
        hours++;
    }
    if (hours > 23) {
        hours = 0;
    }
   var d = $("#clock").html('Time'+'  '+ '<br>'+hours + ':' + minutes);
    
}
        
    $('.block').on('click',function(){
        
       if($(this).hasClass("clicked") || $(this).hasClass("match")){
           
           return false;
       }
        $(this).find('div').removeClass('hide');
        $(this).addClass('clicked');
        pair.push($(this).data('blockName'));
        //console.log(pair);
        if(step%2==0){
           // console.log(pair)
            if(pair[0]==pair[1]){
                $('.clicked').addClass('match');
                $('.match').find('div').removeClass('hide');
                pair = [];
                     var audio = new Audio('sounde1.mp3');
         audio.play();
            }
            
            else{
                
               $('.clicked').addClass('not-match'); 
                $('.match').removeClass('not-match');
                pair = [];
                
                setTimeout(function(){
                    
                    $('.not-match').find("div").addClass('hide');
                    
                },800)
                $('.block').removeClass('clicked');
                var audio1 = new Audio('sounde3.mp3');
                 audio1.play();
            }
        }
      step++;
      setTimeout(function(){
            
          if($('.match').length ==16)
           
        { 
        
            if(confirm('You Win  !!Thank You For Playing.If you wanna play again click OK.')){
                
       window.location.reload();
       }
                           }
         }, 1000) ;
       
   
        })
    
 

    })
 
 
            })
 








/*
    var array=['A','A','B','B','N','N','D','D','M','M','L','L','G','G','S','S','I','I','W','W'];
    var values = [];
    var tile_ids = [];
    var flipped = 0;
       
Array.prototype.shuffle=function(){
            var i=this.length, j,temp;
            while(--i>0){
                j=Math.floor(Math.random()*(i+1));
                temp=this[j];
                this[j]=this[i];
                this[i]=temp;
            }
        }
        function board(){
            flipped=0;
            var output='';
            array.shuffle();
            for (var i=0;i<array.length;i++){
                
             output +='<div id="tile_'+i+'" onclick="fliptile(this,\''+array[i]+'\')"></div> ' ; 
                
            }
               document.getElementById('board').innerHTML=output;
            
        }
        
        function fliptile(tile,val){
            if(tile.innerHTML=="" && values.length<2){
                tile.style.background='#95eeb4';
                tile.innerHTML=val;
                if(values.length==0){
                    values.push(val);
                    tile_ids.push(tile.id);
                    
                }else if (values.length==1){
                    values.push(val);
                     tile_ids.push(tile.id);
                   if (values[0]==values[1]){
                    flipped+=2;
                       values=[];
                       tile_ids=[];
                       if (flipped==array.length){ 
                       }
                   } 
                      else {
                       function flipback(){
                           var tile_1=document.getElementById(tile_ids[0]);
                           var tile_2=document.getElementById(tile_ids[1]);
                           tile_1.style.background = '#fdb689 ';
                           tile_1.innerHTML = "";
                           tile_2.style.background = '#fdb689';
                              tile_2.innerHTML = "";
                           values=[];
                           tile_ids=[];

                       }
                       setTimeout(flipback,1000);
                   }
                }
            }
        } */