[**Documentation**](../README.md)

***

[Documentation](../README.md) / PeopleAlsoSearch

# Class: PeopleAlsoSearch

Defined in: main.ts:222674

## Implements

- [`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new PeopleAlsoSearch**(`data`?): `PeopleAlsoSearch`

Defined in: main.ts:222691

#### Parameters

##### data?

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md)

#### Returns

`PeopleAlsoSearch`

## Properties

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:222678

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`cid`](../interfaces/IPeopleAlsoSearch.md#cid)

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:222681

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`feature_id`](../interfaces/IPeopleAlsoSearch.md#feature_id)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:222687

the element’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`rating`](../interfaces/IPeopleAlsoSearch.md#rating)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:222684

title of the element in SERP
the name of the business entity for which the results are collected

#### Implementation of

[`IPeopleAlsoSearch`](../interfaces/IPeopleAlsoSearch.md).[`title`](../interfaces/IPeopleAlsoSearch.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:222700

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:222720

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `PeopleAlsoSearch`

Defined in: main.ts:222713

#### Parameters

##### data

`any`

#### Returns

`PeopleAlsoSearch`
