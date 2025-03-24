[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentOfferInfo

# Class: ContentOfferInfo

Defined in: main.ts:27065

## Implements

- [`IContentOfferInfo`](../interfaces/IContentOfferInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentOfferInfo**(`data`?): `ContentOfferInfo`

Defined in: main.ts:27079

#### Parameters

##### data?

[`IContentOfferInfo`](../interfaces/IContentOfferInfo.md)

#### Returns

`ContentOfferInfo`

## Properties

### name?

> `optional` **name**: `string`

Defined in: main.ts:27067

name of the product

#### Implementation of

[`IContentOfferInfo`](../interfaces/IContentOfferInfo.md).[`name`](../interfaces/IContentOfferInfo.md#name)

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:27069

price of the product

#### Implementation of

[`IContentOfferInfo`](../interfaces/IContentOfferInfo.md).[`price`](../interfaces/IContentOfferInfo.md#price)

***

### price\_currency?

> `optional` **price\_currency**: `string`

Defined in: main.ts:27071

price currency

#### Implementation of

[`IContentOfferInfo`](../interfaces/IContentOfferInfo.md).[`price_currency`](../interfaces/IContentOfferInfo.md#price_currency)

***

### price\_valid\_until?

> `optional` **price\_valid\_until**: `string`

Defined in: main.ts:27075

displays the date and time until which the price is valid
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example: "2022-11-01 10:02:52 +00:00"

#### Implementation of

[`IContentOfferInfo`](../interfaces/IContentOfferInfo.md).[`price_valid_until`](../interfaces/IContentOfferInfo.md#price_valid_until)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:27088

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:27108

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ContentOfferInfo`

Defined in: main.ts:27101

#### Parameters

##### data

`any`

#### Returns

`ContentOfferInfo`
