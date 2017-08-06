(function($) {

  var menu = $('#civicrm-menu');

  // Remove QuickSearch
  // TODO only do this if user-defined preferences say so
  menu.find('#crm-qsearch').remove();

  // Add Smart Search link to the main menu
  menu.find('li.crm-link-home')
    .after('<li class="menumain crm-SmartSearch">' +
      '  <a class="crm-popup" title="Smart Search" aria-label="Smart Search" href="/civicrm/smartsearch">' +
      '    <i class="crm-i fa-search" aria-hidden="true"></i>' +
      '  </a>' +
      '</li>');

})(CRM.$);




