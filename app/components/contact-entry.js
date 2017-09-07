import Ember from 'ember';

export default Ember.Component.extend({
  //Ensures that the formatting of the table is correct by removing the <div> element surrounding a component by default. (Causes component to have the whole row in one table cell if ommited!)
  tagName: "",

  actions:  {
    deleteContact(firstName, surname, phoneNum, mobileNum)  {
      this.sendAction('deleteContact', firstName, surname, phoneNum, mobileNum);
    }
  }
});
