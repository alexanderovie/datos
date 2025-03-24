[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceTickerSearchLiveAdvancedResultInfo

# Class: SerpGoogleFinanceTickerSearchLiveAdvancedResultInfo

Defined in: main.ts:95304

## Implements

- [`ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceTickerSearchLiveAdvancedResultInfo**(`data`?): `SerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`

Defined in: main.ts:95345

#### Parameters

##### data?

[`ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md)

#### Returns

`SerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:95318

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:95323

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:95333

types of search results in SERP
contains types of search results (items) found in SERP;
possible item types: google_finance_market_index, google_finance_asset_pair, google_finance_market_instrument

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseGoogleFinanceTickerSearchSerpElementItem`](BaseGoogleFinanceTickerSearchSerpElementItem.md)[]

Defined in: main.ts:95341

items of search results found in SERP
array of items containing market indexes data;
possible type of items: google_finance_market_index, google_finance_asset_pair, google_finance_market_instrument

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:95337

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:95307

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:95315

language code in a POST array

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:95313

location code in a POST array

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:95329

search refinement chips
in this case, the value will be null

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:95311

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:95335

total number of results in SERP

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:95326

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:95309

type of element

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:95354

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:95391

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`

Defined in: main.ts:95384

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceTickerSearchLiveAdvancedResultInfo`
