public with sharing class GetHotelsList {
    @AuraEnabled (Cacheable=true)
    public static List<Hotel_Master__c> getHotels(String city){
        System.debug('city is' + city);
        String key = '%' + city + '%' ;
        return [SELECT Id,Hotel_Name__c,	Hotel_Type__c, 	Per_Day_Cost__c,
                    WiFi_Availability__c,Hotel_City__c,Cash_Pay_Availability__c,Cancellation_Availability__c
                     FROM Hotel_Master__c WHERE Hotel_City__c LIKE : key];

    }
}