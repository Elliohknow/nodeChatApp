const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
	var users;
	
	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Joe',
			room: 'A Conspicuous Deli'
		}, {
			id: '2',
			name: 'Paul',
			room: 'A Conspicuous Deli'
		}, {
			id: '3',
			name: 'Sobek Nadagatyr',
			room: 'Florida marshland'
		}]
	});
	
	
	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '789789',
			name: 'Elliott',
			room: 'Party Lads GO!'
		};
		var resUser = users.addUser(user.id, user.name, user.room);
		
		expect(users.users).toEqual([user]);
	});
	
	it('should remove a user', () => {
		var userId = '1';
		var user = users.removeUser(userId);
		
		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});
	
	it('should not remove a user', () => {
		var userId = '13';
		var user = users.removeUser(userId);
		
		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});
	
	it('should find a user', () => {
		var userId = '3';
		var user = users.getUser(userId);
		
		expect(user.id).toBe(userId);
	});
	
	it('should not find a user', () => {
		var userId = '7';
		var user = users.getUser(userId);
		
		expect(user).toNotExist();
	});
	
	it('should return names for a conspicuous deli', () => {
		var userList = users.getUserList('A Conspicuous Deli');
		
		expect(userList).toEqual(['Joe', 'Paul']);
	});
	
	it('should return names for Florida marshland', () => {
		var userList = users.getUserList('Florida marshland');
		
		expect(userList).toEqual(['Sobek Nadagatyr']);
	});
});