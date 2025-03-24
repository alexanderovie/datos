[**Documentation**](../README.md)

***

[Documentation](../README.md) / CommercialUnitsElement

# Class: CommercialUnitsElement

Defined in: main.ts:38299

## Implements

- [`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new CommercialUnitsElement**(`data`?): `CommercialUnitsElement`

Defined in: main.ts:38319

#### Parameters

##### data?

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md)

#### Returns

`CommercialUnitsElement`

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:38307

website domain

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`domain`](../interfaces/ICommercialUnitsElement.md#domain)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:38309

price indicated in the element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`price`](../interfaces/ICommercialUnitsElement.md#price)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:38315

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`rating`](../interfaces/ICommercialUnitsElement.md#rating)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:38312

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`source`](../interfaces/ICommercialUnitsElement.md#source)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:38303

title of a given link element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`title`](../interfaces/ICommercialUnitsElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:38301

type of element

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`type`](../interfaces/ICommercialUnitsElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:38305

URL

#### Implementation of

[`ICommercialUnitsElement`](../interfaces/ICommercialUnitsElement.md).[`url`](../interfaces/ICommercialUnitsElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:38328

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:38351

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `CommercialUnitsElement`

Defined in: main.ts:38344

#### Parameters

##### data

`any`

#### Returns

`CommercialUnitsElement`
