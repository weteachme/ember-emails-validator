import Base from 'ember-cp-validations/validators/base';
import $ from 'jquery';

export default Base.extend({
  validate(value) {
    var emailList = [];
    var regex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    // assert(`[ember-cp-validations] [validator:emails] [${attribute}] no options were passed in`, !isEmpty(Object.keys(options)));

    if(value.length > 0) {
      emailList = value.split(',');
    } else {
      return this.createErrorMessage('invalid', value);
    }
    
    var invalidEmails = [];
    emailList.forEach(function(email) {
      email = $.trim(email);
      if (!regex.test(email)){
        invalidEmails.push(email);
      }
    });
    if(invalidEmails.length > 0) {
      return this.createErrorMessage('invalid', invalidEmails.join(','));
    }
    return true;
  }
});
// Emails.reopenClass({
  /**
   * Define attribute specific dependent keys for your validator
   *
   * [
   * 	`model.array.@each.${attribute}` --> Dependent is created on the model's context
   * 	`${attribute}.isValid` --> Dependent is created on the `model.validations.attrs` context
   * ]
   *
   * @param {String}  attribute   The attribute being evaluated
   * @param {Unknown} options     Options passed into your validator
   * @return {Array}
   */
//   getDependentsFor( attribute, options ) {
//     return [];
//   }
// });

// export default Emails;
