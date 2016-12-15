(function() {

        angular
        .module("mainApp")
        .controller("newsCtrl", NewsController);

        // NewsController.$inject = ['newsMetrics'];
        

        function NewsController(){
          var vm = this;
          vm.newsroomActive = false;
          vm.activateNewsroom = activateNewsroom;

          vm.data = papers;

          function activateNewsroom() {
            vm.newsroomActive = true;
          }
        }

  var papers = [
          {
                  author: "null",
                  title: "The Leads Manager",
                  details: "Convert leads by managing contacts and sharing customer insights.",
                  link: "https://www.tuutkia.com/Leads_Manager_White_Paper.pdf"
          },
          {
                  author: "null",
                  title: "Sales Leads Exchange",
                  details: "Grow income by generating and sharing opportunities with the sales crowd.",
                  link: "https://www.tuutkia.com/LeadsXchange_White_Paper.pdf"
          }
  ];
})();
