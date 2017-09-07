<?php

namespace Civi\SmartSearch;

class Searcher {

  public function __construct() {
  }

  private static function sql() {
    // TODO
    return "
      select
        id
        contact_type,
        display_name,
        first_name,
        last_name
      from civicrm_contact
      limit 30;
    ";
  }

  public function getResults($format = 'JSON') {
    $results = \CRM_Core_DAO::executeQuery(self::sql())->fetchAll();
    if ($format == 'JSON') {
      $results = json_encode($results);
    }
    return $results;
  }

}
