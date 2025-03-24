[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem

# Interface: IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem

Defined in: main.ts:63964

## Extends

- [`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### advertisers?

> `optional` **advertisers**: [`Advertiser`](../classes/Advertiser.md)[]

Defined in: main.ts:63974

associated advertiser accounts
contains objects with data on associated advertiser accounts

***

### approx\_ads\_count?

> `optional` **approx\_ads\_count**: `number`

Defined in: main.ts:63971

ads count
the approximate number of ads that are run by the advertiser across all available Google Ads platforms

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:63968

advertiser location

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:63898

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_absolute`](IBaseGoogleAdsAdvertisersSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:63895

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md).[`rank_group`](IBaseGoogleAdsAdvertisersSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:63966

title of the element

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:63891

type of element

#### Inherited from

[`IBaseGoogleAdsAdvertisersSerpElementItem`](IBaseGoogleAdsAdvertisersSerpElementItem.md).[`type`](IBaseGoogleAdsAdvertisersSerpElementItem.md#type)
