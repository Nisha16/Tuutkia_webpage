(function() {


      angular
      .module("mainApp")
      .factory("dataService", DataService);

      function DataService() {
            var newsObj = {
                  FAQActive: false,
                  changeState: changeState
            };
            return newsObj;

      function changeState(metric, state){
            if(metric == "FAQ"){
                  newsObj.FAQActive = state;
            }
            else {
                  return false;
            }
      }
   }
})();
