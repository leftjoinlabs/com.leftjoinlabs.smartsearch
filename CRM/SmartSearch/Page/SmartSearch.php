<?php

class CRM_SmartSearch_Page_SmartSearch extends CRM_Core_Page {

  public function run() {
    // Example: Set the page-title dynamically; alternatively, declare a static title in xml/Menu/*.xml
    CRM_Utils_System::setTitle(ts('Smart Search'));



    parent::run();
  }

}
