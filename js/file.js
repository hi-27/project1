function upload() {
    var file = document.getElementById('upload').files[0];
    var pic = document.getElementById('pic');
    var reader = new FileReader();
    reader.onloadend = function(){
        pic.src = reader.result;
        pic.style.display = "block";
    }
    if (file){
        reader.readAsDataURL(file);
    }else{
        pic.src="";
    }

}