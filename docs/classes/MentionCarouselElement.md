[**Documentation**](../README.md)

***

[Documentation](../README.md) / MentionCarouselElement

# Class: MentionCarouselElement

Defined in: main.ts:35993

## Implements

- [`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MentionCarouselElement**(`data`?): `MentionCarouselElement`

Defined in: main.ts:36008

#### Parameters

##### data?

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md)

#### Returns

`MentionCarouselElement`

## Properties

### mentioned\_in?

> `optional` **mentioned\_in**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:36004

additional elements in the mention_carousel item

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`mentioned_in`](../interfaces/IMentionCarouselElement.md#mentioned_in)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:35999

price indicated in the element

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`price`](../interfaces/IMentionCarouselElement.md#price)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:36002

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`rating`](../interfaces/IMentionCarouselElement.md#rating)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:35997

title of a given link element

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`title`](../interfaces/IMentionCarouselElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:35995

type of element

#### Implementation of

[`IMentionCarouselElement`](../interfaces/IMentionCarouselElement.md).[`type`](../interfaces/IMentionCarouselElement.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:36017

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:36042

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MentionCarouselElement`

Defined in: main.ts:36035

#### Parameters

##### data

`any`

#### Returns

`MentionCarouselElement`
