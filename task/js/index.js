var url = "https://bashcloud.github.io/reactSPA/foodyo_output.json";

$.getJSON(url, function (data) {
  var res = data.body.Recommendations;
  $.each(res, function (index, value) {
    $("#tree").append(value.RestaurantName + "<BR>");
    console.log(value.RestaurantName);
    $.each(value.menu, function (index, value) {
      if(value.type == "sectionheader")
      {
        printChilds(value.children,1);
      }
    });
  });
});

function printChilds(data,level){ //recursive function to check on childs
  $.each(data, function (index, value) {
    if(value.selected ==1 && 
       ((level == 1 && value.type == "item") || level > 1)){
      var arrow = "";
      for(i=0;i<level;i++){ // increasing arrow based on levels.
        arrow = arrow + "--";
      }arrow = arrow + ">";
      $("#tree").append(arrow + value.name + "<BR>");
      console.log(arrow + value.name);
      if(value.children){
        printChilds(value.children,level+1);
      }
    }
  });
}