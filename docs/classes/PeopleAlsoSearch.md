[**Documentation**](../README.md)

***

[Documentation](../README.md) / PeopleAlsoSearch

# Class: PeopleAlsoSearch

Defined in: main.ts:223204

## Implements

- [`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new PeopleAlsoSearch**(`data?`): `PeopleAlsoSearch`

Defined in: main.ts:223221

#### Parameters

##### data?

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md)

#### Returns

`PeopleAlsoSearch`

## Properties

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:223208

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`cid`](../interfaces/IPeopleAlsoSearch.md#cid)

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:223211

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`feature_id`](../interfaces/IPeopleAlsoSearch.md#feature_id)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:223217

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`rating`](../interfaces/IPeopleAlsoSearch.md#rating)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:223214

title of the element in SERP
the name of the business entity for which the results are collected

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`title`](../interfaces/IPeopleAlsoSearch.md#title)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:223230

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:223250

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `PeopleAlsoSearch`

Defined in: main.ts:223243

#### Parameters

##### data

`any`

#### Returns

`PeopleAlsoSearch`
