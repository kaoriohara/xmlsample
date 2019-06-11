
$(function () {
  $.ajax({
    url: 'shoplist.xml',
    dataType: 'xml',
    success: function (data) {
      // NEWSページ

      var insertContents = '';
      $('shop', data).each(function () {
        var thisAddress = $(this);
        insertContents += '<li>';
        insertContents += '<p class="shop-name">';
        insertContents += thisAddress.children('name').text();
        insertContents += '</p class="shop-name">';
        insertContents += '<p class="shop-address">';
        insertContents += thisAddress.children('address').text();
        insertContents += '</p class="shop-address">';
        insertContents += '</li>';
      });
      $('.linkbox-shoplist').append(insertContents);
    }
  });
});
