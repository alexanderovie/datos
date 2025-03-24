[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo

# Class: SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo

Defined in: main.ts:64105

## Implements

- [`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo**(`data`?): `SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`

Defined in: main.ts:64144

#### Parameters

##### data?

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md)

#### Returns

`SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:64119

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:64124

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:64134

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
ads_muti_account_advertiser, ads_advertiser, ads_domain

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseGoogleAdsAdvertisersSerpElementItem`](BaseGoogleAdsAdvertisersSerpElementItem.md)[]

Defined in: main.ts:64140

items of the element

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:64138

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:64108

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:64116

language code in a POST array

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:64114

location code in a POST array

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:64129

search refinement chips

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:64112

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:64136

total number of results in SERP

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:64127

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:64110

type of element

#### Implementation of

[`ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:64153

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:64190

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`

Defined in: main.ts:64183

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleAdsAdvertisersTaskGetAdvancedResultInfo`
