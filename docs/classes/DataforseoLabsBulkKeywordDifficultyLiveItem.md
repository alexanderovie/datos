[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBulkKeywordDifficultyLiveItem

# Class: DataforseoLabsBulkKeywordDifficultyLiveItem

Defined in: main.ts:106866

## Implements

- [`IDataforseoLabsBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsBulkKeywordDifficultyLiveItem**(`data?`): `DataforseoLabsBulkKeywordDifficultyLiveItem`

Defined in: main.ts:106879

#### Parameters

##### data?

[`IDataforseoLabsBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md)

#### Returns

`DataforseoLabsBulkKeywordDifficultyLiveItem`

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:106870

keyword in a POST array

#### Implementation of

[`IDataforseoLabsBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md).[`keyword`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md#keyword)

***

### keyword\_difficulty?

> `optional` **keyword\_difficulty**: `number`

Defined in: main.ts:106875

difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide

#### Implementation of

[`IDataforseoLabsBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md).[`keyword_difficulty`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md#keyword_difficulty)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:106868

search engine type

#### Implementation of

[`IDataforseoLabsBulkKeywordDifficultyLiveItem`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsBulkKeywordDifficultyLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:106888

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:106907

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsBulkKeywordDifficultyLiveItem`

Defined in: main.ts:106900

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsBulkKeywordDifficultyLiveItem`
