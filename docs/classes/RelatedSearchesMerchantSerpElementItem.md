[**Documentation**](../README.md)

***

[Documentation](../README.md) / RelatedSearchesMerchantSerpElementItem

# Class: RelatedSearchesMerchantSerpElementItem

Defined in: main.ts:198950

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new RelatedSearchesMerchantSerpElementItem**(`data?`): `RelatedSearchesMerchantSerpElementItem`

Defined in: main.ts:198959

#### Parameters

##### data?

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md)

#### Returns

`RelatedSearchesMerchantSerpElementItem`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22874

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: `string`[]

Defined in: main.ts:198955

additional items present in the element
if there are none, equals null

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`items`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22872

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`position`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#position)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`position`](BaseMerchantSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22868

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_absolute`](BaseMerchantSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22865

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`rank_group`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#rank_group)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_group`](BaseMerchantSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22862

type of element

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`type`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#type)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`type`](BaseMerchantSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:198952

XPath of the element

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`xpath`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:198964

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:198987

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `RelatedSearchesMerchantSerpElementItem`

Defined in: main.ts:198980

#### Parameters

##### data

`any`

#### Returns

`RelatedSearchesMerchantSerpElementItem`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)
