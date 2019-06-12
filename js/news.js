
$(function () {
  $.ajax({
    url: 'news.xml',
    dataType: 'xml',
    success: function (data) {
      // NEWSページ

      var insertContents = '';
      $('item', data).each(function () {
        var thisItem = $(this);
        insertContents += '<li>';
        insertContents += '<time>';
        insertContents += thisItem.children('time').text();
        insertContents += '</time>';
        insertContents += '<p>';
        insertContents += '<a href="' + thisItem.children('link').text() + '" target="_blank">';
        insertContents += thisItem.children('article').text();
        insertContents += '</a>';
        insertContents += '</p>';
        insertContents += '</li>';
      });
      $('.linkbox-news').append(insertContents);
    }
  });
});

$(function () {
  $.ajax({
    url: 'shoplist.xml',
    dataType: 'xml',
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      alert('error!!!');
      console.log("XMLHttpRequest : " + XMLHttpRequest.status);
      console.log("textStatus     : " + textStatus);
      console.log("errorThrown    : " + errorThrown.message);
    },
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
});
