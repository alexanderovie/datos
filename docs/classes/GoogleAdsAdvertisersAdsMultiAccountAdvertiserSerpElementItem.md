[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem

# Class: GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem

Defined in: main.ts:63901

## Extends

- [`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md)

## Implements

- [`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem**(`data`?): `GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`

Defined in: main.ts:63915

#### Parameters

##### data?

[`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md)

#### Returns

`GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`constructor`](BaseGoogleAdsAdvertisersSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:63837

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`_discriminator`](BaseGoogleAdsAdvertisersSerpElementItem.md#_discriminator)

***

### advertisers?

> `optional` **advertisers**: [`Advertiser`](Advertiser.md)[]

Defined in: main.ts:63911

associated advertiser accounts
contains objects with data on associated advertiser accounts

#### Implementation of

[`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md).[`advertisers`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md#advertisers)

***

### approx\_ads\_count?

> `optional` **approx\_ads\_count**: `number`

Defined in: main.ts:63908

ads count
the approximate number of ads that are run by the advertiser across all available Google Ads platforms

#### Implementation of

[`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md).[`approx_ads_count`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md#approx_ads_count)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:63905

advertiser location

#### Implementation of

[`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md).[`location`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md#location)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:63835

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md#rank_absolute)

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

[`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md).[`rank_group`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_group`](BaseGoogleAdsAdvertisersSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:63903

title of the element

#### Implementation of

[`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md).[`title`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:63828

type of element

#### Implementation of

[`IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md).[`type`](../interfaces/IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`type`](BaseGoogleAdsAdvertisersSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:63920

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

Defined in: main.ts:63945

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`toJSON`](BaseGoogleAdsAdvertisersSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`

Defined in: main.ts:63938

#### Parameters

##### data

`any`

#### Returns

`GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem`

#### Overrides

[`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md).[`fromJS`](BaseGoogleAdsAdvertisersSerpElementItem.md#fromjs)
