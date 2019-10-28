// $(document).ready(function(){
//   $("#grocerieList").submit(function(event){
//     event.preventDefault();
//     var items = $("input#item").val()
//     // console.log(items);
//     var groceries = [];
//     var groceries2 = groceries.push(items);
//     console.log(groceries2);
//      // $("#result").(groceries);
//     // items.ForEach(function(word){
//     //   groceries.push(word).toUpperCase();
//     })
//   });
// // });
$(document).ready(function(){
  $("form#grocerieList").submit(function(event){

    var item = $("#item").val();
    var item2 = $("#item2").val();
    var item3 = $("#item3").val();

    var items = []
    items.push(item, item2, item3);
       items.sort()
         console.log(items);
      $("#result").append(items);




  event.preventDefault()

  });
});
