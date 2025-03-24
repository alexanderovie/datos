[**Documentation**](../README.md)

***

[Documentation](../README.md) / TopicListDataItemInfo

# Class: TopicListDataItemInfo

Defined in: main.ts:147003

## Implements

- [`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new TopicListDataItemInfo**(`data`?): `TopicListDataItemInfo`

Defined in: main.ts:147017

#### Parameters

##### data?

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md)

#### Returns

`TopicListDataItemInfo`

## Properties

### topic\_id?

> `optional` **topic\_id**: `string`

Defined in: main.ts:147005

unique topic identifier in Google Trends

#### Implementation of

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md).[`topic_id`](../interfaces/ITopicListDataItemInfo.md#topic_id)

***

### topic\_title?

> `optional` **topic\_title**: `string`

Defined in: main.ts:147007

title of the topic

#### Implementation of

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md).[`topic_title`](../interfaces/ITopicListDataItemInfo.md#topic_title)

***

### topic\_type?

> `optional` **topic\_type**: `string`

Defined in: main.ts:147010

type of the topic
represents the general type of the topic

#### Implementation of

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md).[`topic_type`](../interfaces/ITopicListDataItemInfo.md#topic_type)

***

### value?

> `optional` **value**: `string`

Defined in: main.ts:147013

search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on.

#### Implementation of

[`ITopicListDataItemInfo`](../interfaces/ITopicListDataItemInfo.md).[`value`](../interfaces/ITopicListDataItemInfo.md#value)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:147026

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:147046

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `TopicListDataItemInfo`

Defined in: main.ts:147039

#### Parameters

##### data

`any`

#### Returns

`TopicListDataItemInfo`
