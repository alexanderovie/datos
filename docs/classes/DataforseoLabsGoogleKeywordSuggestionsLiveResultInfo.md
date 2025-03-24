[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

# Class: DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

Defined in: main.ts:105798

## Implements

- [`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo**(`data`?): `DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`

Defined in: main.ts:105827

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)

#### Returns

`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

Defined in: main.ts:105823

contains keywords and related data

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:105815

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:105811

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:105808

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#location_code)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:105817

current offset value

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:105821

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#offset_token)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:105800

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#se_type)

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

Defined in: main.ts:105802

keyword in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`seed_keyword`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#seed_keyword)

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:105805

keyword data for the seed keyword
fields in this object are identical to those of the items array

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`seed_keyword_data`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#seed_keyword_data)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:105813

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:105836

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:105866

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`

Defined in: main.ts:105859

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`
