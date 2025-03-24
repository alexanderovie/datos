[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordOverviewLiveItem

# Class: DataforseoLabsGoogleKeywordOverviewLiveItem

Defined in: main.ts:123314

## Implements

- [`IDataforseoLabsGoogleKeywordOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleKeywordOverviewLiveItem**(`data`?): `DataforseoLabsGoogleKeywordOverviewLiveItem`

Defined in: main.ts:123352

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md)

#### Returns

`DataforseoLabsGoogleKeywordOverviewLiveItem`

## Properties

### avg\_backlinks\_info?

> `optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

Defined in: main.ts:123345

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md).[`avg_backlinks_info`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md#avg_backlinks_info)

***

### clickstream\_keyword\_info?

> `optional` **clickstream\_keyword\_info**: [`ClickstreamKeywordInfo`](ClickstreamKeywordInfo.md)

Defined in: main.ts:123337

clickstream data for the returned keyword
to retrieve results for this field, the parameter include_clickstream_data must be set to true

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md).[`clickstream_keyword_info`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md#clickstream_keyword_info)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:123319

keyword
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md).[`keyword`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md#keyword)

***

### keyword\_info?

> `optional` **keyword\_info**: [`KeywordInfo`](KeywordInfo.md)

Defined in: main.ts:123330

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md).[`keyword_info`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md#keyword_info)

***

### keyword\_info\_normalized\_with\_bing?

> `optional` **keyword\_info\_normalized\_with\_bing**: [`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

Defined in: main.ts:123332

contains keyword search volume normalized with Bing search volume

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md).[`keyword_info_normalized_with_bing`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md#keyword_info_normalized_with_bing)

***

### keyword\_info\_normalized\_with\_clickstream?

> `optional` **keyword\_info\_normalized\_with\_clickstream**: [`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

Defined in: main.ts:123334

contains keyword search volume normalized with clickstream data

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md).[`keyword_info_normalized_with_clickstream`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md#keyword_info_normalized_with_clickstream)

***

### keyword\_properties?

> `optional` **keyword\_properties**: [`KeywordProperties`](KeywordProperties.md)

Defined in: main.ts:123339

additional information about the keyword

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md).[`keyword_properties`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md#keyword_properties)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:123324

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:123322

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:123316

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md#se_type)

***

### search\_intent\_info?

> `optional` **search\_intent\_info**: [`SearchIntentInfo`](SearchIntentInfo.md)

Defined in: main.ts:123348

search intent info for the returned keyword
learn about search intent in this help center article

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md).[`search_intent_info`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md#search_intent_info)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:123328

indicates data for Google and partner sites
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md).[`search_partners`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md#search_partners)

***

### serp\_info?

> `optional` **serp\_info**: [`SerpInfo`](SerpInfo.md)

Defined in: main.ts:123342

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md).[`serp_info`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveItem.md#serp_info)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:123361

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:123390

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleKeywordOverviewLiveItem`

Defined in: main.ts:123383

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleKeywordOverviewLiveItem`
