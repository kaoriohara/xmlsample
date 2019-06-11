
$(function () {
  $.ajax({
    url: 'shoplist.xml',
    dataType: 'xml',
    success: function (data) {
      // NEWSページ

      var insertShoplists = '';
      $('shop', data).each(function () {
        var thisAddress = $(this);
        insertShoplists += '<li>';
        insertShoplists += '<p class="shop-name">';
        insertShoplists += thisAddress.children('name').text();
        insertShoplists += '</p class="shop-name">';
        insertShoplists += '<p class="shop-address">';
        insertShoplists += thisAddress.children('address').text();
        insertShoplists += '</p class="shop-address">';
        insertShoplists += '</li>';
      });
      $('.linkbox-shoplist').append(insertShoplists);
    }
  });
});
