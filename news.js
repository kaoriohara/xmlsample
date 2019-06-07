
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
