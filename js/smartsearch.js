(function($) {

  var menu = $('#civicrm-menu');

  // Remove QuickSearch
  // TODO only do this if user-defined preferences say so
  menu.find('#crm-qsearch').remove();

  // Add Smart Search link to the main menu
  // TODO figure out how to make the create a pop-up window
  menu.find('li.crm-link-home')
    .after('<li class="menumain crm-SmartSearch"><a href="/civicrm/smartsearch">SS</a></li>');

})(CRM.$);




