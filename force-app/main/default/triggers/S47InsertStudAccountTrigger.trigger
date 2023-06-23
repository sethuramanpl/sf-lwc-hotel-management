trigger S47InsertStudAccountTrigger on Student_Master__c (before insert,after insert) {
 if(Trigger.isBefore){
        if(Trigger.isInsert){
            for(Student_Master__c t : Trigger.new){
                S47InsertStudAccountClass.checkPanDetails(t);
            }
        }
    }
    
     /*if(Trigger.isAfter){
        if(Trigger.isUpdate){
            for(Student_Master__c t : Trigger.new){
                S47InsertStudAccountClass.checkPanDetails(t);
            }
        }
    }*/
}