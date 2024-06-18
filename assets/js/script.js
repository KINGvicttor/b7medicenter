window.onload = function () {
        document.getElementById("menuMobile").addEventListener("click", function() {
            if(document.getElementById("ulMobile").style.display == 'flex'){
                document.getElementById("ulMobile").style.display = 'none';
            }else {
                document.getElementById("ulMobile").style.display = 'flex';
            }
        });
};