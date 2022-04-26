
(function () {
    'use strict';

    angular
        .module('technical-exam')
        .directive('sort', sort);

    sort.$inject = [];

    function sort() {

        var directive = {
            scope: {
                sortBy: '=sort',
                sortOptions: '=',
                onSort: "&"
            },
            link: linkFunc
        };

        return directive;

        function linkFunc($scope, $element) {

            var ascendingClasses = 'sort-ascending tim-icons icon-minimal-up ';
            var descendingClasses = 'sort-descending tim-icons icon-minimal-down ';

            $element.bind('click', function () {
                var sortBy = $scope.sortBy;
                var sortOptions = $scope.sortOptions;

                if (sortOptions == undefined) {
                    return;
                }

                if (sortBy == sortOptions.sortBy) {
                    if (sortOptions.order == 'ASC') {
                        sortOptions.order = 'DESC';
                        clearClasses();
                        addDescending($element);
                    } else {
                        sortOptions.order = 'ASC';
                        clearClasses();
                        addAscending($element);
                    }
                } else {
                    sortOptions.sortBy = sortBy;
                    sortOptions.order = 'ASC';
                    clearClasses();
                    addAscending($element);
                }

                $scope.onSort();
            });

            function createIconElement(element) {
                element.append(document.createElement('i'));

                return element.find('div');
            }

            function addAscending(element) {
                var iconElement = element.find('div');

                if (iconElement.length == 0) {
                    iconElement = createIconElement(element);
                }

                iconElement
                    .addClass(ascendingClasses)
            }

            function addDescending(element) {
                var iconElement = element.find('div');

                if (iconElement.length == 0) {
                    iconElement = createIconElement(element);
                }

                iconElement
                    .addClass(descendingClasses);
            }

            function removeAscending() {
                angular
                    .element('.sort-ascending')
                    .removeClass(ascendingClasses);
            }

            function removeDescending() {
                angular
                    .element('.sort-descending')
                    .removeClass(descendingClasses);
            }

            function clearClasses() {
                removeAscending();
                removeDescending();
            }

        }

    }

})();