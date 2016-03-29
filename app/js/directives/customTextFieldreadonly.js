four51.app.directive('customtextfieldreadonly', function() {
    var obj = {
        scope: {
            customfield : '=',
            changed: '=',
            hidesuffix: '@',
            hideprefix: '@',
            label: '@label'
        },
        restrict: 'E',
        transclude: true,
        templateUrl: 'partials/controls/customTextFieldreadonly.html'
    }
    return obj;
});