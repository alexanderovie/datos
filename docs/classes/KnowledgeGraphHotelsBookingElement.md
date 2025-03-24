[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphHotelsBookingElement

# Class: KnowledgeGraphHotelsBookingElement

Defined in: main.ts:32577

## Implements

- [`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KnowledgeGraphHotelsBookingElement**(`data`?): `KnowledgeGraphHotelsBookingElement`

Defined in: main.ts:32596

#### Parameters

##### data?

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md)

#### Returns

`KnowledgeGraphHotelsBookingElement`

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:32583

description of the results element in SERP

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`description`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:32587

domain where a link points

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`domain`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#domain)

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

Defined in: main.ts:32592

indicates whether the element is an ad

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`is_paid`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#is_paid)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:32590

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`price`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#price)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:32581

source of additional information about the result

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`source`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#source)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:32579

type of element

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`type`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:32585

relevant URL

#### Implementation of

[`IKnowledgeGraphHotelsBookingElement`](../interfaces/IKnowledgeGraphHotelsBookingElement.md).[`url`](../interfaces/IKnowledgeGraphHotelsBookingElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:32605

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:32628

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KnowledgeGraphHotelsBookingElement`

Defined in: main.ts:32621

#### Parameters

##### data

`any`

#### Returns

`KnowledgeGraphHotelsBookingElement`
