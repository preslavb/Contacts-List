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

    deleteContact(firstName, surname, phoneNum, mobileNum)  {

      let contacts = this.store.peekAll('contact');

      for (var i = 0; i < contacts.get('length'); i++) {
        if(firstName == contacts.objectAt(i).get('firstName') && surname == contacts.objectAt(i).get('surname') 
           && phoneNum == contacts.objectAt(i).get('phone') && mobileNum == contacts.objectAt(i).get('mobile'))  {
          contacts.objectAt(i).destroyRecord();
        }
      }
    }
  }
});
