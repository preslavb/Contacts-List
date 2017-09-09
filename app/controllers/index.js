import Ember from 'ember';

export default Ember.Controller.extend({
  //Create a Store record of a new contact using the values from the form
  actions: {
    submitFormData(firstName, surname, phoneNum, mobileNum) {
      //Get all of the contacts in model
      let recordsToCompare = this.store.peekAll('contact');
      //Bool tracking whether a match was found
      let recordAlreadyInModel = false;

      //Only check the records for a match if there are any records in the model
      if(recordsToCompare.get('length') != 0)  {
        //Loop through all records and compare them to the one being added. If it is a complete match, then set the tracking bool to true
        for (var i = 0 ; i < recordsToCompare.get('length'); i++) {          
          let recordToCompare = recordsToCompare.objectAt(i);

          if (recordToCompare.get('firstName') == firstName && recordToCompare.get('surname') == surname && 
              recordToCompare.get('phone') == phoneNum && recordToCompare.get('mobile') == mobileNum) {
            recordAlreadyInModel = true;
          }
        }
      }

      //If there were no matches found, add the contact to the model
      if(!recordAlreadyInModel)  {
        this.store.createRecord('contact', {
        firstName: firstName,
        surname: surname,
        phone: phoneNum,
        mobile: mobileNum
        });
      }
      else  {
        alert("Record already in contacts");
      }
    },

    deleteContact(contactID)  {
      //Store a local copy of all contacts currently in the Data Store, then delete the one corresponding to the ID of the component pressed
      let contacts = this.store.peekAll('contact');

      contacts.objectAt(contactID).destroyRecord();
    }
  }
});
