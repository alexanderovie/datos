[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleTrendsTopicsListElementItem

# Class: GoogleTrendsTopicsListElementItem

Defined in: main.ts:147275

## Extends

- [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

## Implements

- [`IGoogleTrendsTopicsListElementItem`](../interfaces/IGoogleTrendsTopicsListElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleTrendsTopicsListElementItem**(`data?`): `GoogleTrendsTopicsListElementItem`

Defined in: main.ts:147281

#### Parameters

##### data?

[`IGoogleTrendsTopicsListElementItem`](../interfaces/IGoogleTrendsTopicsListElementItem.md)

#### Returns

`GoogleTrendsTopicsListElementItem`

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`constructor`](BaseGoogleTrendsItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23859

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`_discriminator`](BaseGoogleTrendsItem.md#_discriminator)

***

### data?

> `optional` **data**: [`TrendsTopicListDataInfo`](TrendsTopicListDataInfo.md)

Defined in: main.ts:147277

Google Trends data from the corresponding item

#### Implementation of

[`IGoogleTrendsTopicsListElementItem`](../interfaces/IGoogleTrendsTopicsListElementItem.md).[`data`](../interfaces/IGoogleTrendsTopicsListElementItem.md#data)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:23857

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IGoogleTrendsTopicsListElementItem`](../interfaces/IGoogleTrendsTopicsListElementItem.md).[`keywords`](../interfaces/IGoogleTrendsTopicsListElementItem.md#keywords)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`keywords`](BaseGoogleTrendsItem.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:23852

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IGoogleTrendsTopicsListElementItem`](../interfaces/IGoogleTrendsTopicsListElementItem.md).[`position`](../interfaces/IGoogleTrendsTopicsListElementItem.md#position)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`position`](BaseGoogleTrendsItem.md#position)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:23854

title of the element in Google Trends

#### Implementation of

[`IGoogleTrendsTopicsListElementItem`](../interfaces/IGoogleTrendsTopicsListElementItem.md).[`title`](../interfaces/IGoogleTrendsTopicsListElementItem.md#title)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`title`](BaseGoogleTrendsItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23849

type of element

#### Implementation of

[`IGoogleTrendsTopicsListElementItem`](../interfaces/IGoogleTrendsTopicsListElementItem.md).[`type`](../interfaces/IGoogleTrendsTopicsListElementItem.md#type)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`type`](BaseGoogleTrendsItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:147286

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`init`](BaseGoogleTrendsItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:147304

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`toJSON`](BaseGoogleTrendsItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleTrendsTopicsListElementItem`

Defined in: main.ts:147297

#### Parameters

##### data

`any`

#### Returns

`GoogleTrendsTopicsListElementItem`

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`fromJS`](BaseGoogleTrendsItem.md#fromjs)
