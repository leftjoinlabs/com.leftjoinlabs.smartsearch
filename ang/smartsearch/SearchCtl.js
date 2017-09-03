(function(angular, $, _) {

  angular.module('smartsearch').controller('SmartsearchSearchCtl', function($scope, crmApi, crmStatus, crmUiHelp) {
    var ts = $scope.ts = CRM.ts('smartsearch');
  });

})(angular, CRM.$, CRM._);
