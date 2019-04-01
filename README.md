# Random entity

## Example

```javascript
const { createRandomEntityGetter } = require('./index');

const getRandomEntity = createRandomEntityGetter({
    schemasDirPath: 'schemas'
});

const book = getRandomEntity({
    schema: 'books',
    extend: {title: 'test'},
    omit: ['name']
});

console.log(book); // {title: 'test'}
```

## createRandomEntityGetter
- schemasDirPath
- defaultGetters

## getRandomEntity
- schema - schema name in schemasDirPath
- extend - extend validation data
- omit - omit validation data
