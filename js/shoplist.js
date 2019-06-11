
$(function () {
  $.ajax({
    url: 'shoplist.xml',
    dataType: 'xml',
    success: function (data) {
      // NEWSページ

      var insertContents = '';
      $('item', data).each(function () {
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
});
