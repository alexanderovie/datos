[**Documentation**](../README.md)

***

[Documentation](../README.md) / RankedKeywordsInfo

# Class: RankedKeywordsInfo

Defined in: main.ts:163842

## Implements

- [`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new RankedKeywordsInfo**(`data?`): `RankedKeywordsInfo`

Defined in: main.ts:163852

#### Parameters

##### data?

[`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md)

#### Returns

`RankedKeywordsInfo`

## Properties

### page\_from\_keywords\_count\_top\_10?

> `optional` **page\_from\_keywords\_count\_top\_10**: `number`

Defined in: main.ts:163846

number of keywords for which the page is ranked in top 10 search results

#### Implementation of

[`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md).[`page_from_keywords_count_top_10`](../interfaces/IRankedKeywordsInfo.md#page_from_keywords_count_top_10)

***

### page\_from\_keywords\_count\_top\_100?

> `optional` **page\_from\_keywords\_count\_top\_100**: `number`

Defined in: main.ts:163848

number of keywords for which the page is ranked in top 100 search results

#### Implementation of

[`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md).[`page_from_keywords_count_top_100`](../interfaces/IRankedKeywordsInfo.md#page_from_keywords_count_top_100)

***

### page\_from\_keywords\_count\_top\_3?

> `optional` **page\_from\_keywords\_count\_top\_3**: `number`

Defined in: main.ts:163844

number of keywords for which the page is ranked in top 3 search results

#### Implementation of

[`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md).[`page_from_keywords_count_top_3`](../interfaces/IRankedKeywordsInfo.md#page_from_keywords_count_top_3)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:163861

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:163880

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `RankedKeywordsInfo`

Defined in: main.ts:163873

#### Parameters

##### data

`any`

#### Returns

`RankedKeywordsInfo`
