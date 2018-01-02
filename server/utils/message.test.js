var expect = require('expect');

var {generateMessage} = require('./message')

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Gary';
		var text = 'some nonsense';
		var message = generateMessage(from, text);
		
		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, text});
	});
});