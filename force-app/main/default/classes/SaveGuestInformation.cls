public with sharing class SaveGuestInformation {
    @AuraEnabled
    public static Guest_Master__c SaveGuest(String firstName, String lastName, String phone, String email) {
        System.debug(firstName);
        System.debug(lastName);
        System.debug(email);
        System.debug(phone);

        Guest_Master__c g = new Guest_Master__c();
        g.Guest_First_Name__c = firstName;
        g.Guest_Last_Name__c =lastName;
        g.Guest_Phone__c = phone;
        g.Guest_Email__c = email;
        try {
            insert g;
        } catch (Exception e) {
            system.debug(e.getMessage());

        }

        return g;

    }
}