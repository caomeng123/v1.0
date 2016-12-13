function PreviewImage(imgFile){
    var filextension=imgFile.value.substring(imgFile.value.lastIndexOf("."),imgFile.value.length);
    filextension=filextension.toLowerCase();
    if ((filextension!='.jpg')&&(filextension!='.gif')&&(filextension!='.jpeg')&&(filextension!='.png')&&(filextension!='.bmp')){
        alert("对不起，系统仅支持标准格式的照片，请您调整格式后重新上传，谢谢 !");
        imgFile.focus();
    }
    else{
        var path;
        if(document.all){
            imgFile.select();
            path = document.selection.createRange().text;
            document.getElementById("imgPreview").innerHTML="";
            document.getElementById("imgPreview").style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='scale',src=\"" + path + "\")";
        }
        else{
            path = window.URL.createObjectURL(document.getElementById("upload").files[0]);
            document.getElementById("imgPreview").innerHTML = "<img id='img1' width='220px' height='250px' src='"+path+"' onclick='DeleteImage( )';/>";
        }
    }
}
function DeleteImage( ){
    document.getElementById("img1").remove();
}