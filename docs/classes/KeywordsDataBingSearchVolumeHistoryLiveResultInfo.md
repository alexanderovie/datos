[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeHistoryLiveResultInfo

# Class: KeywordsDataBingSearchVolumeHistoryLiveResultInfo

Defined in: main.ts:159122

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataBingSearchVolumeHistoryLiveResultInfo**(`data`?): `KeywordsDataBingSearchVolumeHistoryLiveResultInfo`

Defined in: main.ts:159142

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeHistoryLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md)

#### Returns

`KeywordsDataBingSearchVolumeHistoryLiveResultInfo`

## Properties

### device?

> `optional` **device**: `string`[]

Defined in: main.ts:159131

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md).[`device`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:159124

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:159130

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:159127

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md#location_code)

***

### period?

> `optional` **period**: `string`

Defined in: main.ts:159135

time period
indicates if returned data is aggregated to a certain time period
default value monthly

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md).[`period`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md#period)

***

### searches?

> `optional` **searches**: [`SearchVolumeHistorySearchInfo`](SearchVolumeHistorySearchInfo.md)

Defined in: main.ts:159138

contains results distributed by device type
if the device parameter is not specified, the data will be returned for all available device types

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md).[`searches`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveResultInfo.md#searches)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:159151

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:159177

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataBingSearchVolumeHistoryLiveResultInfo`

Defined in: main.ts:159170

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataBingSearchVolumeHistoryLiveResultInfo`
