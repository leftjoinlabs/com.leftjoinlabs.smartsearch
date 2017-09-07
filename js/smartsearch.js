(function($, angular) {

  // Add markup for the modal dialog with the Smart Search app within
  $('body').append(
      '<div id="smartsearch-dialog" title="Smart Search">' +
      '  <div id="smartsearch-app" ng-controller="SmartsearchSearchCtl">' +
      '    <ng-include src="\'~/smartsearch/SearchCtl.html\'" />' +
      '  </div>' +
      '</div>');

  var pageElement = document.getElementById('smartsearch-page');
  var appElement = document.getElementById("smartsearch-app");

  // Bootstrap AngularJS for Smart Search
  angular.bootstrap(appElement, ['smartsearch']);

  // Menu stuff...
  var menu = $('#civicrm-menu');
  // Remove QuickSearch
  menu.find('#crm-qsearch').remove();
  // Add Smart Search link to the main menu
  menu.find('li.crm-link-home')
    .after('<li class="menumain" id="smartsearch-menu-link">' +
      '  <a title="Smart Search" aria-label="Smart Search" href="/civicrm/smartsearch">' +
      '    <i class="crm-i fa-search" aria-hidden="true"></i>' +
      '  </a>' +
      '</li>');

  if (pageElement) { // We are on the Smart Search standalone page...
    // Move the app out from the modal and into the page
    $(appElement).detach().appendTo(pageElement);
  }
  else { // We are on a normal CiviCRM page...
    // Enable the jQuery UI modal dialog
    $("#smartsearch-dialog").dialog({autoOpen: false});

    // Make the menu link open the dialog
    $('#smartsearch-menu-link a').click(function (e) {
      e.preventDefault();
      $("#smartsearch-dialog").dialog("open");
      return false;
    });
  }

})(CRM.$, angular);

