public with sharing class SavePaymentDetails {
    @AuraEnabled
    public static Payment_Master__c SavePaymentDetailsNow(Id recordId, Integer cardNumber, Integer cardExpiryMonth, Integer cardExpiryYear, Integer cardCvv) {

        System.debug(recordId);
        System.debug(cardNumber);
        System.debug(cardExpiryMonth);
        System.debug(cardExpiryYear);
        System.debug(cardCvv);

        Payment_Master__c p = new Payment_Master__c();
        p.Guest_Master__c = recordId;
        p.Card_Number__c = cardNumber;
        p.Expiry_Month__c = cardExpiryMonth;
        p.Expiry_Year__c = cardExpiryYear;
        p.CVV__c = cardCvv;

        try {
            insert p;
           System.debug('successfully inserted');
        } catch (Exception e) {
            System.debug('Failed to get inserted');
            system.debug(e.getMessage());


        }

        return p;

    }
}