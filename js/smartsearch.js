(function($, angular) {

  // Add markup for the modal dialog to contain Smart Search
  $('body').append(
      '<div id="smartsearch-dialog" title="Smart Search">' +
      '  <div id="smartsearch-app">' +
      '    <ng-include src="\'~/smartsearch/SearchCtl.html\'" />' +
      '  </div>' +
      '</div>');

  // Bootstrap AngularJS for Smart Search
  angular.bootstrap(document.getElementById("smartsearch-app"), ['smartsearch']);

  // Turn #ss-dialog into a jQuery UI modal dialog
  $("#smartsearch-dialog").dialog({autoOpen: false});

  var menu = $('#civicrm-menu');

  // Remove QuickSearch
  // TODO only do this if user-defined preferences say so
  menu.find('#crm-qsearch').remove();

  // Add Smart Search link to the main menu
  menu.find('li.crm-link-home')
    .after('<li class="menumain" id="smartsearch-menu-link">' +
      '  <a title="Smart Search" aria-label="Smart Search" >' +
      '    <i class="crm-i fa-search" aria-hidden="true"></i>' +
      '  </a>' +
      '</li>');

  $('#smartsearch-menu-link a').click(function () {
    $("#smartsearch-dialog").dialog("open");
  });

})(CRM.$, angular);




