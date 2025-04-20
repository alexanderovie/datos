[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksHistoryLiveRequestInfo

# Class: BacklinksHistoryLiveRequestInfo

Defined in: main.ts:162800

## Implements

- [`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksHistoryLiveRequestInfo**(`data?`): `BacklinksHistoryLiveRequestInfo`

Defined in: main.ts:162838

#### Parameters

##### data?

[`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md)

#### Returns

`BacklinksHistoryLiveRequestInfo`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:162812

starting date of the time range
optional field
minimum value 2019-01-01
if you don’t specify this field, the minimum value will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[`date_from`](../interfaces/IBacklinksHistoryLiveRequestInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:162819

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[`date_to`](../interfaces/IBacklinksHistoryLiveRequestInfo.md#date_to)

***

### rank\_scale?

> `optional` **rank\_scale**: `string`

Defined in: main.ts:162828

defines the scale used for calculating and displaying the rank, domain_from_rank, and page_from_rank values
optional field
you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale
possible values:
one_hundred — rank values are displayed on a 0–100 scale
one_thousand — rank values are displayed on a 0–1000 scale
default value: one_thousand
learn more about how this parameter works and how ranking metrics are calculated in this Help Center article

#### Implementation of

[`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[`rank_scale`](../interfaces/IBacklinksHistoryLiveRequestInfo.md#rank_scale)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:162834

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksHistoryLiveRequestInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:162804

domain
required field
a domain should be specified without https:// and www.

#### Implementation of

[`IBacklinksHistoryLiveRequestInfo`](../interfaces/IBacklinksHistoryLiveRequestInfo.md).[`target`](../interfaces/IBacklinksHistoryLiveRequestInfo.md#target)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:162847

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:162868

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksHistoryLiveRequestInfo`

Defined in: main.ts:162861

#### Parameters

##### data

`any`

#### Returns

`BacklinksHistoryLiveRequestInfo`
