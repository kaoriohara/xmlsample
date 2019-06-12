// $(function () {
//   $.ajax({
//     url: 'shoplist.xml',
//     dataType: 'xml',
//     error: function () {
//       alert("ロード失敗");
//     },
//     success: function (xml) {
//       $(xml).find("shop").each(function () {
//         $(".linkbox-shoplist").append('<li><p class="shop-name">' + $(this).find('name').text() + '</p>'
//           + '<p class="shop-address">' + $(this).find('address').text() + '</p></li>');
//       });
//     }
//   });
// });
$(function () {
  $.ajax({
    url: 'shoplist.xml',
    dataType: 'xml',
    error(function(XMLHttpRequest, textStatus, errorThrown) {
      alert('error!!!');
      console.log("XMLHttpRequest : " + XMLHttpRequest.status);
      console.log("textStatus     : " + textStatus);
      console.log("errorThrown    : " + errorThrown.message);
    }),
    success: function (xml) {

      var insertContents = '';
      $('item', xml).each(function () {
        var thisItems = $(this);
        insertContents += '<li>';
        insertContents += '<p class="shop-name">';
        insertContents += thisItems.children('name').text();
        insertContents += '</p class="shop-name">';
        insertContents += '<p class="shop-address">';
        insertContents += thisItems.children('address').text();
        insertContents += '</p class="shop-address">';
        insertContents += '</li>';
      });
      $('.linkbox-shoplist').append(insertContents);
    }
});
// });
