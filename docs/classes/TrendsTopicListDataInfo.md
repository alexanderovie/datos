[**Documentation**](../README.md)

***

[Documentation](../README.md) / TrendsTopicListDataInfo

# Class: TrendsTopicListDataInfo

Defined in: main.ts:147199

## Implements

- [`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new TrendsTopicListDataInfo**(`data?`): `TrendsTopicListDataInfo`

Defined in: main.ts:147209

#### Parameters

##### data?

[`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md)

#### Returns

`TrendsTopicListDataInfo`

## Properties

### rising?

> `optional` **rising**: [`TopicListDataItemInfo`](TopicListDataItemInfo.md)[]

Defined in: main.ts:147205

emerging related topics
represents the list of related topics with the biggest increase in search frequency since the last time period

#### Implementation of

[`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md).[`rising`](../interfaces/ITrendsTopicListDataInfo.md#rising)

***

### top?

> `optional` **top**: [`TopicListDataItemInfo`](TopicListDataItemInfo.md)[]

Defined in: main.ts:147202

the most popular related topics
represents the list of the most popular related topics

#### Implementation of

[`ITrendsTopicListDataInfo`](../interfaces/ITrendsTopicListDataInfo.md).[`top`](../interfaces/ITrendsTopicListDataInfo.md#top)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:147218

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:147244

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `TrendsTopicListDataInfo`

Defined in: main.ts:147237

#### Parameters

##### data

`any`

#### Returns

`TrendsTopicListDataInfo`
