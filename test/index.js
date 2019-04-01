const expect = require('expect.js');

const { createRandomEntityGetter } = require('../index');

const schemasDirPath = 'test/schemas';

describe('createRandomEntityGetter', function() {
	it('without params', function() {
		const getRandomEntity = createRandomEntityGetter({ schemasDirPath });
		const entity = getRandomEntity({ schema: 'books' });

		expect(entity).to.be.ok();
		expect(entity).to.have.keys(['title', 'name'])
	});

	it('with extend and omit', function() {
		const getRandomEntity = createRandomEntityGetter({ schemasDirPath });
		const testTitle = 'test';
		const entity = getRandomEntity({
			schema: 'books',
			extend: {title: testTitle},
			omit: ['name']
		});

		expect(entity).to.be.ok();
		expect(entity).to.only.have.key('title');
		expect(entity.title).to.be(testTitle);
	});

	it('with defaultGetters', function() {
		const testTitle = 'test';
		const getRandomEntity = createRandomEntityGetter({
			schemasDirPath,
			defaultGetters: {
				books: () => ({title: testTitle})
			}
		});

		const entity = getRandomEntity({ schema: 'books' });

		expect(entity).to.be.ok();
		expect(entity).to.have.keys(['title', 'name']);
		expect(entity.title).to.be(testTitle);
	});
});
