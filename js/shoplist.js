
$(function () {
  $.ajax({
    url: 'shoplist.xml',
    dataType: 'xml',
    success: function (data) {
      // NEWSページ

      var insertContents = '';
      $('shop', data).each(function () {
        var thisItem = $(this);
        insertContents += '<li>';
        insertContents += '<p class="shop-name">';
        insertContents += thisItem.children('name').text();
        insertContents += '</p class="shop-name">';
        insertContents += '<p class="shop-address">';
        insertContents += thisItem.children('address').text();
        insertContents += '</p class="shop-address">';
        insertContents += '</li>';
      });
      $('.linkbox-shoplist').append(insertContents);
    }
  });
});
