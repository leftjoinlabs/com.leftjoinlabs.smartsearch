<?php
// This file declares an Angular module which can be autoloaded
// in CiviCRM. See also:
// http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_angularModules

return array(
  'js' => array(
      0 => 'ang/smartsearch.js',
      1 => 'ang/smartsearch/*.js',
      2 => 'ang/smartsearch/*/*.js',
    ),
  'css' => array(
      0 => 'ang/smartsearch.css',
    ),
  'partials' => array(
      0 => 'ang/smartsearch',
    ),
  'settings' => array(),
);
