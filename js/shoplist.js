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
    // error: function (XMLHttpRequest, textStatus, errorThrown) {
    //   alert('error!!!');
    //   console.log("XMLHttpRequest : " + XMLHttpRequest.status);
    //   console.log("textStatus     : " + textStatus);
    //   console.log("errorThrown    : " + errorThrown.message);
    // },
    error: function (xml) {
      $('.linkbox-shoplist').text('<p>更新中です</p>');
    },
    success: function (xml) {

      var insertContent = '';
      $('item', xml).each(function () {
        var thisItems = $(this);
        insertContent += '<li>';
        insertContent += '<p class="shop-name">';
        insertContent += thisItems.children('name').text();
        insertContent += '</p class="shop-name">';
        insertContent += '<p class="shop-address">';
        insertContent += thisItems.children('address').text();
        insertContent += '</p class="shop-address">';
        insertContent += '</li>';
      });
      $('.linkbox-shoplist').append(insertContent);
    }
  });
});
