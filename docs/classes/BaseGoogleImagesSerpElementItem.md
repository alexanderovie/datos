[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseGoogleImagesSerpElementItem

# Class: BaseGoogleImagesSerpElementItem

Defined in: main.ts:53575

## Extended by

- [`GoogleImageCarouselSerpElementItem`](GoogleImageCarouselSerpElementItem.md)
- [`GoogleImageImagesSearchSerpElementItem`](GoogleImageImagesSearchSerpElementItem.md)
- [`GoogleImageRelatedSearchesSerpElementItem`](GoogleImageRelatedSearchesSerpElementItem.md)

## Implements

- [`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md)

## Constructors

### Constructor

> **new BaseGoogleImagesSerpElementItem**(`data`?): `BaseGoogleImagesSerpElementItem`

Defined in: main.ts:53590

#### Parameters

##### data?

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md)

#### Returns

`BaseGoogleImagesSerpElementItem`

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:53588

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:53584

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseGoogleImagesSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:53581

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md).[`rank_group`](../interfaces/IBaseGoogleImagesSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:53577

type of element

#### Implementation of

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md).[`type`](../interfaces/IBaseGoogleImagesSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:53586

the XPath of the element

#### Implementation of

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md).[`xpath`](../interfaces/IBaseGoogleImagesSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:53600

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:53631

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BaseGoogleImagesSerpElementItem`

Defined in: main.ts:53609

#### Parameters

##### data

`any`

#### Returns

`BaseGoogleImagesSerpElementItem`
