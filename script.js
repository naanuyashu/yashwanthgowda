const popup = document.getElementById("popup");

window.onload = function() {
    setTimeout(() => {
        popup.style.display = "block";
        
        setTimeout(() => {
            popup.style.display = "none";
        }, 4000); 
    }, 1000); 
};
