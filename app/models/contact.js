import DS from 'ember-data';

//Model for the contacts
export default DS.Model.extend({
  firstName: DS.attr(),
  surname: DS.attr(),
  phone: DS.attr(),
  mobile: DS.attr()
});
