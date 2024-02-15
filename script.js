$(".add").click(function() {
    var image = $(".picture-url").val();
    $(".gallery").append("<img src=" + image + ">");
    if (image.match(/\.(jpg|jpeg|gif|png)$/) === null){
        alert("Error: url not loading");
    }
    $(".picture-url").val(" ");
});

// https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg
// https://www.sportspromedia.com/wp-content/uploads/2021/06/esports_arenas_main-1.jpg