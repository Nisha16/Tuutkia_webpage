(function() {

        angular
        .module("mainApp")
        .controller("footerCtrl", FooterController);

        FooterController.$inject = ['dataService'];

        function FooterController(dataService){
                var vm = this;

                vm.salesDetails = sales;
                vm.leadDetails = leads;
                vm.dataService = dataService;
                vm.search = '';

        }

        var sales = [
                {

                        question: "What are the Benefits?",
                        answer: "Convert leads by managing contacts and sharing customer insights."
                },
                {

                        question: "What is a Lead?",
                        answer: "Any business opportunity that is characterized by a name, product or service, associated company or individual, address, opportunity size, close date, and probability of closure. A Lead will always have one or more Contacts associated with it."
                },
                {

                        question: "How to add a Lead or Contact?",
                        answer: "Go to the Create Lead or Create Contact link. You can either create a new contact or associate an existing contact with a Lead in the Create Lead page directly."
                },
                {
                        question: "How to Share a Contact?",
                        answer: "Go to the My Contacts link, select the contact you want to share with others on the platform and then the Share button."
                },
                {
                        question: "How to Search for Contacts?",
                        answer: "Go to Search for Contacts link and search by Name, Title, Company, City, or State."
                },
                {
                        question: "How to Request to Share a Contact?",
                        answer: "A premium service that allows you to send a request to others who know the contact that you might be interested in connecting with. Available at Create Contact, My Contacts, or Search for Contacts links."
                },
                {
                        question: "How to find other Sales people who have done business with a Contact?",
                        answer: "When you are creating a Contact, viewing a contact in My Contacts, or searching for a Contact in Search for Contacts, you will be able to see others who have transacted business with that Contact. An opportunity for you ask to share that relationship."
                },
                {
                        question: "What are Contact Insights?",
                        answer: "A premium service that allows you to view Contact Insights. An invaluable resource that gathers what your peers are sharing about a contact, not predictive but an actual perspective from existing relationships. Available at My Contacts link."
                },
                {
                        question: "What is Message Collaboration?",
                        answer: "A premium service that enables you to connect with other members and sales people on the platform. Collaborate and exchange Contact or Lead information with one another. Available at Messages link."
                },
                {
                        question: "What are Follow-ups?",
                        answer: "A feature that allows you to schedule calendar events and follow-ups with Contacts using your Google Calendar. Available at My Contacts and My Leads links."
                }
        ];

        var leads = [
                {

                        question: "What are the Benefits?",
                        answer: "A sales-crowdsourced platform that will help you to convert leads, generate opportunities and grow revenue."
                },
                {

                        question: "How to buy and sell?",
                        answer: "To sell: Once logged in go to ‘Create Lead’. Fill out and publish it, is as easy as that. Remember to check the Status of your Published Lead at ‘My Published Leads’.To buy: Log in and click on Browse Leads for Sale. Select the right Lead(s) that you want to buy, you have the choice to accept or counter offer. You pay securely selecting one of the Stripe payment options. In the Messages link you will be alerted with the Seller's status/response to your offer."
                },
                {

                        question: "What are the Seller's Obligations?",
                        answer: "When a Seller accepts an offer, the Seller shall meet all obligations related to either introducing the Buyer to the Contact for the Lead and/or by providing Customer Verification, if Seller agreed to do so. Seller agrees that any Leads/Contacts that they offer for sale are legitimate and real."
                },
                {
                        question: "What is Publishing?",
                        answer: "When the Seller wants to Sell their Lead or Leads, there are several options of Publishing the Leads(s). The Lead(s) 1) are automatically Published on the TheLeadsXchange platform for others to see, 2) on Seller's discretion they can be shared on their Social Media sites, 3) on Seller's discretion they can be shared directly with Buyers using their email addresses."
                },
                {
                        question: "When is the Transaction Considered Final?",
                        answer: "Once Seller and Buyer fulfill their obligations the transaction is considered final and complete. The payment will only be released to the Seller when the Seller's obligations are completed and within one week of acceptance of the offer."
                },
                {
                        question: "How do I view the results of my offer?",
                        answer: "View the status of your offers at ‘Browse Leads for Sale’ link. You will also be alerted through system generated ‘Notifications’ using this link."
                },
                {
                        question: "How to find other Sales people who have done business with a Contact?",
                        answer: "When you are creating a Contact, viewing a contact in My Contacts, or searching for a Contact in Search for Contacts, you will be able to see others who have transacted business with that Contact. An opportunity for you ask to share that relationship."
                },
                {
                        question: "What are Contact Insights?",
                        answer: "A premium service that allows you to view Contact Insights. An invaluable resource that gathers what your peers are sharing about a contact, not predictive but an actual perspective from existing relationships. Available at My Contacts link."
                },
                {
                        question: "What is Message Collaboration?",
                        answer: "A premium service that enables you to connect with other members and sales people on the platform. Collaborate and exchange Contact or Lead information with one another. Available at Messages link."
                },
                {
                        question: "What are Follow-ups?",
                        answer: "A feature that allows you to schedule calendar events and follow-ups with Contacts using your Google Calendar. Available at My Contacts and My Leads links."
                }
        ];

})();
