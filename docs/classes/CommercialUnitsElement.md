[**Documentation**](../README.md)

***

[Documentation](../README.md) / CommercialUnitsElement

# Class: CommercialUnitsElement

Defined in: main.ts:38307

## Implements

- [`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new CommercialUnitsElement**(`data?`): `CommercialUnitsElement`

Defined in: main.ts:38327

#### Parameters

##### data?

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md)

#### Returns

`CommercialUnitsElement`

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:38315

website domain

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`domain`](../interfaces/ICommercialUnitsElement.md#domain)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:38317

price indicated in the element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`price`](../interfaces/ICommercialUnitsElement.md#price)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:38323

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`rating`](../interfaces/ICommercialUnitsElement.md#rating)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:38320

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`source`](../interfaces/ICommercialUnitsElement.md#source)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:38311

title of a given link element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`title`](../interfaces/ICommercialUnitsElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:38309

type of element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`type`](../interfaces/ICommercialUnitsElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:38313

URL

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`url`](../interfaces/ICommercialUnitsElement.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:38336

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:38359

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `CommercialUnitsElement`

Defined in: main.ts:38352

#### Parameters

##### data

`any`

#### Returns

`CommercialUnitsElement`
