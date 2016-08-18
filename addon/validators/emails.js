import Base from 'ember-cp-validations/validators/base';
import $ from 'jquery';

export default Base.extend({
  validate(value) {
    var emailList = [];
    var regex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

    if(value === undefined || value === null) {
        return true;
    }

    emailList = value.split(',');
    
    var invalidEmails = [];
    emailList.forEach(function(email) {
      email = $.trim(email);
      if (email && !regex.test(email)){
        invalidEmails.push(email);
      }
    });
    if(invalidEmails.length > 0) {
      return this.createErrorMessage('invalid', invalidEmails.join(','));
    }
    return true;
  }
});
