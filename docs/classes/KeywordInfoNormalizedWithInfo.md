[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordInfoNormalizedWithInfo

# Class: KeywordInfoNormalizedWithInfo

Defined in: main.ts:26641

## Implements

- [`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordInfoNormalizedWithInfo**(`data?`): `KeywordInfoNormalizedWithInfo`

Defined in: main.ts:26658

#### Parameters

##### data?

[`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md)

#### Returns

`KeywordInfoNormalizedWithInfo`

## Properties

### is\_normalized?

> `optional` **is\_normalized**: `string`

Defined in: main.ts:26651

keyword info is normalized
if true, values are normalized with Bing data

#### Implementation of

[`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md).[`is_normalized`](../interfaces/IKeywordInfoNormalizedWithInfo.md#is_normalized)

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:26646

date and time when the dataset was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md).[`last_updated_time`](../interfaces/IKeywordInfoNormalizedWithInfo.md#last_updated_time)

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

Defined in: main.ts:26654

monthly search volume rates
array of objects with search volume rates in a certain month of a year

#### Implementation of

[`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md).[`monthly_searches`](../interfaces/IKeywordInfoNormalizedWithInfo.md#monthly_searches)

***

### search\_volume?

> `optional` **search\_volume**: `string`

Defined in: main.ts:26648

current search volume rate of a keyword

#### Implementation of

[`IKeywordInfoNormalizedWithInfo`](../interfaces/IKeywordInfoNormalizedWithInfo.md).[`search_volume`](../interfaces/IKeywordInfoNormalizedWithInfo.md#search_volume)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:26667

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:26691

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordInfoNormalizedWithInfo`

Defined in: main.ts:26684

#### Parameters

##### data

`any`

#### Returns

`KeywordInfoNormalizedWithInfo`
