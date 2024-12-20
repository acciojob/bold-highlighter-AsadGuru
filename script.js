function highlight() {
    // Get all bold words
    var boldWords = document.getElementsByTagName('strong');
    
    // Change color of bold words to green
    for (var i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = 'green';
    }
}


function return_normal() {
    // Get all bold words
    var boldWords = document.getElementsByTagName('strong');
    
    // Change color of bold words back to black
    for (var i = 0; i < boldWords.length; i++) {
        boldWords[i].style.color = 'black';
    }
}