trigger S44SendBccEmailTriggerTwo on Training_Deal__c (before insert) {
    for(Training_Deal__c t : Trigger.new){
        S44SendBccEmailClass.sendBccEmailOnce(t);

    }
}