var app = angular.module('technical-exam', ['ui.router','ui.bootstrap']).run(run);

run.$inject = ['stateHandler'];
function run(stateHandler) {	
    stateHandler.initialize();
}