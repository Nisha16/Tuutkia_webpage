// create angular app
(function () {

          angular
          .module("mainApp")
          .controller("contactCtrl", contactController);

					function contactController() {
						var vm = this;

						vm.submitForm = submitForm;

						function submitForm() {
							if (vm.userForm.$valid){
								alert('Thanks for contacting us.');
							}
						}
					}
})();
