import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:emails', 'Unit | Validator | emails', {
  needs: ['validator:messages'],
});

test('return true when the emails are valid', function(assert) { 
  var result;
  var validator = this.subject();
  result = validator.validate('test@test.com, email@domain.com, firstname.lastname@domain.com, ');
  assert.equal(result, true);

});
test('return false when the emails are invalid', function(assert) {
  var result;
  var validator = this.subject();
  result = validator.validate('あいうえお@domain.com,email@domain.com (Joe Smith),email@domain,#@%^%#$@#$@#.com');
  assert.notEqual(result, true);
});

test('return true when the emails value is null', function(assert) {
  var result;
  var value = null;
  var validator = this.subject();
  result = validator.validate(value);
  assert.equal(result, true);
});

test('return true when the emails is not provid', function(assert) {
  var result;
  var validator = this.subject();
  result = validator.validate();
  assert.equal(result, true);
});