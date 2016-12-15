(function() {

        angular
        .module("mainApp")
        .controller("mainCtrl", mainController);

    mainController.$inject = ['dataService'];


    function mainController(dataService){
      var vm = this;
      vm.dataService = dataService;

      vm.activeFAQS = activeFAQS;
      vm.deactivateFAQ = deactivateFAQ;

      function activeFAQS() {
            vm.dataService.FAQActive = true;
       }

       function deactivateFAQ() {
           vm.dataService.FAQActive = false;
       }

    }
})();
