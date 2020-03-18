// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }
// function handler1() {
//     alert('Thanks!');
//   };

    // var randomColor = Math.floor(Math.random()*16777215).toString(16);
    // function random_bg_color() {
    //     var x = Math.floor(Math.random() * 256);
    //     var y = Math.floor(Math.random() * 256);
    //     var z = Math.floor(Math.random() * 256);
    //     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    //  console.log(bgColor);
      
    //     document.body.style.background = bgColor;
    //     }

    function color(){
        var letters="0123456789ABCDEF";
        var colors="#";
        for (var i=0;i<6;i++){
        colors +=letters[(Math.floor(Math.random()*16))]
        }
        return colors;

    }
 
    
  document.body.addEventListener("click",function(){
    return document.body.style.backgroundColor=color();
  })