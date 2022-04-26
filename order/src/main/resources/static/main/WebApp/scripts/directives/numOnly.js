(function () {
      'use strict';
  
      angular
          .module('technical-exam')
          .directive('allowOnlyNumbers', allowOnlyNumbers);
  
      allowOnlyNumbers.$inject = [];
  
      function allowOnlyNumbers() {
          var directive = {
              restrict: 'A',            
              link: linkFunc
          };
  
          return directive;
  
          function linkFunc(scope, elm, attrs, ctrl) {
                elm.on('keydown', function (txt, evt) {
                      //alert(event.keyCode);
                  //     if (  event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                  //           (event.keyCode == 65 && event.ctrlKey === true) ||
                  //           (event.keyCode >= 35 && event.keyCode <= 39)) {
                  //           return;
                  //       }
                  //       else {
                  //           // Ensure that it is a number and stop the keypress
                  //           if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                  //               event.preventDefault();
                  //           }
                  //       }     
                  debugger
                  var charCode = (evt.which) ? evt.which : evt.keyCode;
                        if (charCode == 46) {
                              //Check if the text already contains the . character
                              if (txt.value.indexOf('.') === -1) {
                              return true;
                              } else {
                              return false;
                              }
                        } else {
                              if (charCode > 31 &&
                              (charCode < 48 || charCode > 57))
                              return false;
                        }
                        return true;
  
              });  
          }
  
      }
  
  })();