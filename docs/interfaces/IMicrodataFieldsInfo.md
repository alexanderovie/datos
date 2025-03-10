[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMicrodataFieldsInfo

# Interface: IMicrodataFieldsInfo

Defined in: main.ts:181295

## Indexable

\[`key`: `string`\]: `any`

## Properties

### fields?

> `optional` **fields**: [`MicrodataFieldsInfo`](../classes/MicrodataFieldsInfo.md)[]

Defined in: main.ts:181310

microdata fields
an array of objects containing data fields related to the certain microdata type

***

### name?

> `optional` **name**: `string`

Defined in: main.ts:181298

field name
name of the data field

***

### test\_results?

> `optional` **test\_results**: [`Test_results`](../classes/Test_results.md)

Defined in: main.ts:181307

microdata validation test results
sub-type microdata test results that contain detected errors and related messages

***

### types?

> `optional` **types**: `string`[]

Defined in: main.ts:181301

parent microdata types
for a full list of available types, please visit schema.org

***

### value?

> `optional` **value**: `string`

Defined in: main.ts:181304

microdata value
microdata value specified on a target web page
