/*globals WOW */
var setRange = function (itemNo, itemScore){
  'use strict';
  $('#js-range-' + itemNo).attr('value', itemScore);
  $('#js-range-result-' + itemNo).text(itemScore);
};

setRange('static-1', 80);
setRange('static-2', 50);
setRange('static-3', 75);

$(function(){
  'use strict';

  var menuMorph = function() {
    $('.icon-menu_atom--top').toggleClass('icon-menu_atom--rotatedown');
    $('.icon-menu_atom--middle').toggleClass('icon-menu_atom--hide-middle');
    $('.icon-menu_atom--bottom').toggleClass('icon-menu_atom--rotateup');
  };

  $('#js-nav-trigger, .site-overlay').on('click', function() {menuMorph();});

  var headerHeight = $('#js-header').height();
  $('.pushy, .site-overlay').css('top', headerHeight);

  var htmlBlockFunc = function (taskId, taskTitle, taskOwner) {
    var htmlBlock = '<div class="task-item wow bounceInLeft" id="js-task-item-' + taskId + '">' +
                  '<div class="row">' +
                    '<article class="col-xs-12">' +
                      '<h2 class="txt-title">' + taskTitle + '</h2>' +
                      '<div class="row">' +
                        '<div class="col-xs-5 col-sm-8 progress-block">' +
                          '<div class="row">' +
                            '<div class="col-sm-8">' +
                              '<div class="task-progress-bar task-progress-bar--sec">' +
                                '<input type="range" min="0" max="100" step="1" id="js-range-' + taskId + '" value="0" disabled>' +
                              '</div>' +
                              '<!-- /. progress -->' +
                            '</div>' +
                            '<!-- /. col -->' +
                            '<div class="col-sm-4">' +
                              '<p class="task-progress-score"><span id="js-range-result-' + taskId + '" class="color--sec">0</span> of <span class="color--sec">100</span></p>' +
                            '</div>' +
                            '<!-- /. col -->' +
                          '</div>' +
                          '<!-- /. row -->' +
                        '</div>' +
                        '<!-- /. progress-block -->' +
                        '<div class="col-xs-7 col-sm-4 task-deadline [ text-uppercase text-right ] js-task-deadline">Due tomorrow</div>' +
                        '<!-- /. task-deadline -->' +
                      '</div>' +
                      '<!-- /. row -->' +
                      '<p class="name text-capitalize"><img src="media/images/avatar-small.png" alt="Avator" class="mr-sm">' + taskOwner + '</p>' +
                    '</article>' +
                  '</div>' +
                  '<!-- /. row -->' +
                  '<hr>' +
                '</div>' +
                '<!-- /. task-item -->';
      return htmlBlock;
  };

  (function getTasks(){
    $.getJSON('./scripts/tasks.json', function(data) {
      $('#js-loading-tasks').hide('slow').remove();
      for (var i = 0, x = data.length; i < x ; i++) {
        var taskId = data[i].id,
            taskTitle = data[i].title,
            taskOwner = data[i].owner,
            htmlBlock = htmlBlockFunc(taskId, taskTitle, taskOwner);
        $('#js-main').append(htmlBlock);
        setRange(taskId, 0);
      }
    }).fail(function() {
        $('#js-loading-tasks').hide('slow').remove();
        var failMessage = '<div class="task-item wow bounceInLeft">' +
                  '<div class="row">' +
                    '<article class="col-xs-12">' +
                      '<h2 class="txt-title text-center">Failed to get data</h2>' +
                      '<div class="row">' +
                        '<div class="col-xs-12 progress-block">' +
                          '<p class="text-center">Make sure your loading the correct external file and your on a server</p>' +
                        '</div>' +
                        '<!-- /. progress-block -->' +
                      '</div>' +
                      '<!-- /. row -->' +
                    '</article>' +
                  '</div>' +
                  '<!-- /. row -->' +
                  '<hr>' +
                '</div>' +
                '<!-- /. task-item -->';
        $('#js-main').append(failMessage);
    });
  })();

  new WOW().init();

  $('#js-header').headroom({
    tolerance : {
      up : 5,
      down : 0
    },
  });
});
