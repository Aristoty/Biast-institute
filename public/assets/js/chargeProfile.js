function onFileSelect(e){
    var f = e.target.files[0];
   
        var reader = new FileReader;
        place = document.getElementById("previewImg");
        reader.readAsDataURL(f);
        reader.onload = function(e){ 
            place.src = e.target.result;
        }
    }

if(window.File && window.FileReader && window.FileList && window.Blob){
    document.querySelector("input[type=file]").addEventListener("change", onFileSelect, false);
}else{
    console.warn( "Your browser does not support FileAPI");
};