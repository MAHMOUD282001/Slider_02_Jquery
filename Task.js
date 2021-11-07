

let nextBtn = $(".next");

let prevBtn = $(".prev");

let slider = $(".slider-container div");

let divLength = slider.length;

console.log(divLength)


var i = 0;


function next(){
        i++;
        
        if(i == divLength){
        
            i = 0;
    }
    
    // slider.removeClass("active");
    
    // $(slider[i]).addClass("active");
    
    $(slider).fadeOut(1000).delay(1000);
    
    $(slider[i]).fadeIn(1000);
    
    
}



function previous(){
        
        if(i == 0){
        
            i = divLength-1;
            
        }
        else{
        
            i--;
            
        }
    
    // slider.removeClass("active");
    
    // $(slider[i]).addClass("active");
    
    $(slider).fadeOut(1000).delay(1000);
    
    $(slider[i]).fadeIn(1000);
    
}

nextBtn.on("click",function(){
    next()
});



prevBtn.on("click",function(){
    previous();
})


var Timer = setInterval(()=>{
//     // previous();
    next();
},3000)