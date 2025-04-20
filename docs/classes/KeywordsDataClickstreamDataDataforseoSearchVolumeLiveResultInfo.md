[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo

# Class: KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo

Defined in: main.ts:159888

## Implements

- [`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo**(`data?`): `KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`

Defined in: main.ts:159908

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md)

#### Returns

`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`KeywordsDataClickstreamDataSearchVolumeLiveItem`](KeywordsDataClickstreamDataSearchVolumeLiveItem.md)[]

Defined in: main.ts:159904

array of keywords
contains keywords and their search volume rates

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md).[`items`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `string`

Defined in: main.ts:159901

ithe number of results returned in the items array

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md).[`items_count`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:159896

language code in a POST array

Note:if the keyword in the POST array appears to be misspelled, data will be returned for the correctly spelled keyword;
we use the functionality of Google Ads API to check and validate the spelling of keywords, learn more by this link

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:159891

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md#location_code)

***

### use\_clickstream?

> `optional` **use\_clickstream**: `boolean`

Defined in: main.ts:159899

indicates if the use_clickstream parameter is active
possible values: true, false

#### Implementation of

[`IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md).[`use_clickstream`](../interfaces/IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo.md#use_clickstream)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:159917

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:159942

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`

Defined in: main.ts:159935

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo`
