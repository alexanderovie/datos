[**Documentation**](../README.md)

***

[Documentation](../README.md) / TwitterElement

# Class: TwitterElement

Defined in: main.ts:34401

## Implements

- [`ITwitterElement`](../interfaces/ITwitterElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new TwitterElement**(`data?`): `TwitterElement`

Defined in: main.ts:34418

#### Parameters

##### data?

[`ITwitterElement`](../interfaces/ITwitterElement.md)

#### Returns

`TwitterElement`

## Properties

### date?

> `optional` **date**: `string`

Defined in: main.ts:34407

the date when the page source of the element was published

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`date`](../interfaces/ITwitterElement.md#date)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:34412

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`timestamp`](../interfaces/ITwitterElement.md#timestamp)

***

### tweet?

> `optional` **tweet**: `string`

Defined in: main.ts:34405

tweet message

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`tweet`](../interfaces/ITwitterElement.md#tweet)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:34403

type of element

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`type`](../interfaces/ITwitterElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:34414

URL

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`url`](../interfaces/ITwitterElement.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:34427

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:34448

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `TwitterElement`

Defined in: main.ts:34441

#### Parameters

##### data

`any`

#### Returns

`TwitterElement`
