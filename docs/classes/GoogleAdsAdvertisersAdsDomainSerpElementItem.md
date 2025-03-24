[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleAdsAdvertisersAdsDomainSerpElementItem

# Class: GoogleAdsAdvertisersAdsDomainSerpElementItem

Defined in: main.ts:64057

## Extends

- [`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md)

## Implements

- [`IGoogleAdsAdvertisersAdsDomainSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleAdsAdvertisersAdsDomainSerpElementItem**(`data`?): `GoogleAdsAdvertisersAdsDomainSerpElementItem`

Defined in: main.ts:64063

#### Parameters

##### data?

[`IGoogleAdsAdvertisersAdsDomainSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md)

#### Returns

`GoogleAdsAdvertisersAdsDomainSerpElementItem`

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`constructor`](BaseGoogleAdsAdvertisersSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:63837

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`_discriminator`](BaseGoogleAdsAdvertisersSerpElementItem.md#_discriminator)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:64059

domain in SERP

#### Implementation of

[`IGoogleAdsAdvertisersAdsDomainSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md).[`domain`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md#domain)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:63835

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleAdsAdvertisersAdsDomainSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_absolute`](BaseGoogleAdsAdvertisersSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:63832

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleAdsAdvertisersAdsDomainSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md).[`rank_group`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_group`](BaseGoogleAdsAdvertisersSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:63828

type of element

#### Implementation of

[`IGoogleAdsAdvertisersAdsDomainSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md).[`type`](../interfaces/IGoogleAdsAdvertisersAdsDomainSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`type`](BaseGoogleAdsAdvertisersSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:64068

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`init`](BaseGoogleAdsAdvertisersSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:64086

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`toJSON`](BaseGoogleAdsAdvertisersSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleAdsAdvertisersAdsDomainSerpElementItem`

Defined in: main.ts:64079

#### Parameters

##### data

`any`

#### Returns

`GoogleAdsAdvertisersAdsDomainSerpElementItem`

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`fromJS`](BaseGoogleAdsAdvertisersSerpElementItem.md#fromjs)
