<?php
use CRM_SmartSearch_ExtensionUtil as E;
use Civi\SmartSearch\Searcher;

/**
 * SmartSearch.Search API specification (optional)
 * This is used for documentation and validation.
 *
 * @param array $spec description of fields supported by this API call
 * @return void
 * @see http://wiki.civicrm.org/confluence/display/CRMDOC/API+Architecture+Standards
 */
function _civicrm_api3_smart_search_Search_spec(&$spec) {
}

/**
 * SmartSearch.Search API
 *
 * @param array $params
 * @return array API result descriptor
 * @see civicrm_api3_create_success
 * @see civicrm_api3_create_error
 * @throws API_Exception
 */
function civicrm_api3_smart_search_Search($params) {
  $searcher = new Searcher();
  $results = $searcher->getResults();
  return civicrm_api3_create_success($results, $params, 'SmartSearch', 'Search');
}
