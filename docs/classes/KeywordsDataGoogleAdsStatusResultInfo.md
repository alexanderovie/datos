[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsStatusResultInfo

# Class: KeywordsDataGoogleAdsStatusResultInfo

Defined in: main.ts:137826

## Implements

- [`IKeywordsDataGoogleAdsStatusResultInfo`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataGoogleAdsStatusResultInfo**(`data`?): `KeywordsDataGoogleAdsStatusResultInfo`

Defined in: main.ts:137844

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsStatusResultInfo`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md)

#### Returns

`KeywordsDataGoogleAdsStatusResultInfo`

## Properties

### actual\_data?

> `optional` **actual\_data**: `boolean`

Defined in: main.ts:137831

indicates whether Google updated keyword data for the previous month
generally, Google updates keyword data in the middle of the month
if the value is true, Google currently provides up-to-date data for the previous month
if the value is false, we are not able to provide data for the previous month

#### Implementation of

[`IKeywordsDataGoogleAdsStatusResultInfo`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md).[`actual_data`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md#actual_data)

***

### date\_update?

> `optional` **date\_update**: `string`

Defined in: main.ts:137836

date of the latest update of Google Ads data
indicates the latest date when Google updated search volume, CPC, and other keyword metrics
example:
2020-05-15

#### Implementation of

[`IKeywordsDataGoogleAdsStatusResultInfo`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md).[`date_update`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md#date_update)

***

### last\_month\_in\_monthly\_searches?

> `optional` **last\_month\_in\_monthly\_searches**: `number`

Defined in: main.ts:137840

the latest month for which search volume data is available

#### Implementation of

[`IKeywordsDataGoogleAdsStatusResultInfo`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md).[`last_month_in_monthly_searches`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md#last_month_in_monthly_searches)

***

### last\_year\_in\_monthly\_searches?

> `optional` **last\_year\_in\_monthly\_searches**: `number`

Defined in: main.ts:137838

the latest year for which search volume data is available

#### Implementation of

[`IKeywordsDataGoogleAdsStatusResultInfo`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md).[`last_year_in_monthly_searches`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md#last_year_in_monthly_searches)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:137853

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:137873

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataGoogleAdsStatusResultInfo`

Defined in: main.ts:137866

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataGoogleAdsStatusResultInfo`
