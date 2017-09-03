# Notes about Smart Search

(to be better organized later)


## DOM elements with IDs

* `#smartsearch-menu-link` - The `<li>` element in the CiviCRM menu to activate Smart Search
* `#smartsearch-page` - A `<div>` element in CiviCRM's page content only on the page `/civicrm/smartsearch`. On that page, we move the Smart Search app into the page so no modal dialog is needed.
* `#smartsearch-dialog` - The element used as a jQuery UI modal dialog.
    * `#smartsearch-app` - Bootstrap AnguarJS here.
        * `#smartsearch-container` - The root for Smart Search's visual layout
            * `#smartsearch-search-pane` - The whole left side of Smart Search
                * `#smartsearch-search-box`
                * `#smartsearch-results`
            * `#smartsearch-action-pane` - The whole right side of Smart Search

