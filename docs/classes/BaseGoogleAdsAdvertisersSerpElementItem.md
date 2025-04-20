[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseGoogleAdsAdvertisersSerpElementItem

# Class: BaseGoogleAdsAdvertisersSerpElementItem

Defined in: main.ts:63940

## Extended by

- [`GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md)
- [`GoogleAdsAdvertisersAdsAdvertiserSerpElementItem`](GoogleAdsAdvertisersAdsAdvertiserSerpElementItem.md)
- [`GoogleAdsAdvertisersAdsDomainSerpElementItem`](GoogleAdsAdvertisersAdsDomainSerpElementItem.md)

## Implements

- [`IBaseGoogleAdsAdvertisersSerpElementItem`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md)

## Constructors

### Constructor

> **new BaseGoogleAdsAdvertisersSerpElementItem**(`data?`): `BaseGoogleAdsAdvertisersSerpElementItem`

Defined in: main.ts:63953

#### Parameters

##### data?

[`IBaseGoogleAdsAdvertisersSerpElementItem`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md)

#### Returns

`BaseGoogleAdsAdvertisersSerpElementItem`

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:63951

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:63949

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IBaseGoogleAdsAdvertisersSerpElementItem`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:63946

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseGoogleAdsAdvertisersSerpElementItem`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_group`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:63942

type of element

#### Implementation of

[`IBaseGoogleAdsAdvertisersSerpElementItem`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md).[`type`](../interfaces/IBaseGoogleAdsAdvertisersSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:63963

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:63993

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BaseGoogleAdsAdvertisersSerpElementItem`

Defined in: main.ts:63971

#### Parameters

##### data

`any`

#### Returns

`BaseGoogleAdsAdvertisersSerpElementItem`
