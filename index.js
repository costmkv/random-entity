const _ = require('underscore');
const jsf = require('json-schema-faker');
const path = require('path');

exports.createRandomEntityGetter = function(schemasParams) {
	const { schemasDirPath, defaultGetters = {} } = schemasParams;

	return function(entityParams) {
		const { schema, extend = {}, omit = {}} = entityParams;

		const schemaPath = path.resolve(schemasDirPath, schema + '.js');

		const defaultGetter = defaultGetters[schema]
			? defaultGetters[schema]()
			: {};

		return _(jsf.generate(require(schemaPath), []))
			.chain()
			.extend(defaultGetter, extend)
			.omit(omit)
			.value();
	};
};
