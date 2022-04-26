(function () {
      'use strict';
  
      angular
          .module('technical-exam')
          .factory('pagination', pagination);
  
          pagination.$inject = [];
  
      function pagination() {
  
          var factory = {
                validateUndefined:validateUndefined,
                getPaginationMessage:getPaginationMessage,
                initPage:initPage,
                pager:pager
          };
  
          return factory;
  
          function validateUndefined(pagination){        	
                
                 if(angular.isUndefined(pagination)){	        	 
                    pagination = {
                            maxSize: 5,                                
                             offset: 10,
                             limit: 0,
                             searchQuery: '',
                              searchId: '',
                             pageNumber: 1, 
                             sortBy: '', 	                    
                             order: 'ASC',
                             currentPage:1,
                             totalRows:0,
                             totalPages:0
                             
                        } 	           
                 }
              
                 return pagination;        	
          }
          
          function initPage(pagination,totalRows,pageSize){        	
                
                if(angular.isUndefined(pagination)){	        	 
                   pagination = {
                           maxSize: 5,                                
                            offset: pageSize.toString(),
                            limit: 0,
                            searchQuery: '',
                             searchId: '',
                            pageNumber: 1, 
                            sortBy: '', 	                    
                            order: 'ASC',
                            currentPage:1,
                            specialQuery:'',
                            totalRows:totalRows,
                            totalPages:totalPages(parseInt(pageSize),1,totalRows),
                            showingOf:getPaginationMessage(parseInt(pageSize),1,totalRows)
                            
                       } 	           
                }
                else{
                     pagination.currentPage = pagination.currentPage == "0" ? 1 : pagination.currentPage == "" ? 1 : parseInt(pagination.currentPage); 
                     pagination.limit =getlimit(pagination.currentPage,pagination.offset);       		
                     pagination.totalPages=totalPages(parseInt(pagination.offset),pagination.currentPage,pagination.totalRows);
                     pagination.showingOf=getPaginationMessage(parseInt(pagination.offset),pagination.currentPage,pagination.totalRows);
                }
             
                return pagination;        	
         }
          
          function getPaginationMessage(pageSize, page, totalRows){
                var message = '';
                if(totalRows >= 1){
                message =  'Showing ' + (totalRows >= 1 ? (pageSize * (page - 1)) + 1 : 0) + ' to ' + (
                (pageSize * ( page - 1)) + pageSize > totalRows ? 
                            totalRows : (pageSize * (page - 1)) + pageSize) + ' of ' + (totalRows)
                            + ' ' +  
                            ((totalRows == 0 || totalRows > 1) ? 'entries' : 'entry');
                }else{
                      message = 'No records found.';
                }
                return message;
          }
          
          function totalPages(pageSize, page, totalRows){
                              
                var totalPages = Math.floor(totalRows/pageSize);
                
                var remainder = totalRows%pageSize;
                   if(remainder != 0){
                         totalPages++;
                   }
                   
                return totalPages;
          }
  
          function getlimit(currentPage,offset){
                return ((currentPage -1 ) * offset);       	
          
          }
          
          function pager(pagination){
                
                //pagination=validateUndefined(pagination);
                
                pagination.limit = ((pagination.currentPage -1 ) * pagination.offset);
                
                pagination.totalPages = Math.floor(pagination.totalRows/pagination.offset);
                
                var remainder = pagination.totalRows%pagination.offset;
                   if(remainder != 0){
                         pagination.totalPages++;
                   }
                   
                return pagination;
          }
      }
  
  })();
  