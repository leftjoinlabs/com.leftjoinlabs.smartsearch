<?php

class CRM_SmartSearch_Page_SmartSearch extends CRM_Core_Page {

  public function run() {
    $loader = new \Civi\Angular\AngularLoader();
    $loader->setModules(array('crmUi', 'crmUtil', 'ngRoute', 'smartsearch'));
    $loader->setPageName('civicrm/smartsearch');
    $loader->load();
    parent::run();
  }

}
