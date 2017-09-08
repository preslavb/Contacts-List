import Ember from 'ember';

export default Ember.Controller.extend({
  //Create a Store record of a new contact using the values from the form
  actions: {
    submitFormData(firstName, surname, phoneNum, mobileNum) {
      this.store.createRecord('contact', {
        firstName: firstName,
        surname: surname,
        phone: phoneNum,
        mobile: mobileNum
      })
    },

    deleteContact(contactID)  {
      //Store a local copy of all contacts currently in the Data Store, then delete the one corresponding to the ID of the component pressed
      let contacts = this.store.peekAll('contact');

      contacts.objectAt(contactID).destroyRecord();
    }
  }
});
