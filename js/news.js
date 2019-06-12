
$(function () {
  $.ajax({
    url: 'news.xml',
    dataType: 'xml',
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log("ajax通信に失敗しました");
      console.log("XMLHttpRequest : " + XMLHttpRequest.status);
      console.log("textStatus     : " + textStatus);
      console.log("errorThrown    : " + errorThrown.message);
    },
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
      if (insertContents.length <= 0) { insertContents = '更新中' };
      $('.linkbox-news').append(insertContents);
    }
  });
});


