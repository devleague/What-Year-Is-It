var chai = require('chai');
chai.should();
var dateFormats = require('../lib/date_formats');

describe('Date Formats', function() {
  var theDate = dateFormats.theDate;

  it('should display as: Thu, 11 Jun 2015 17:53:44 GMT', function() {
    theDate.should.be.equal('Thu, 11 Jun 2015 17:53:44 GMT');
  });
  
});
