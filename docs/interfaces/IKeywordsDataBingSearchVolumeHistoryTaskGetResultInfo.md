[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo

# Interface: IKeywordsDataBingSearchVolumeHistoryTaskGetResultInfo

Defined in: main.ts:158869

## Indexable

\[`key`: `string`\]: `any`

## Properties

### device?

> `optional` **device**: `string`[]

Defined in: main.ts:158878

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:158871

keyword in a POST array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:158877

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:158874

location code in a POST array
if there is no data, then the value is null

***

### period?

> `optional` **period**: `string`

Defined in: main.ts:158882

time period
indicates if returned data is aggregated to a certain time period
default value monthly

***

### searches?

> `optional` **searches**: [`SearchVolumeHistorySearchInfo`](../classes/SearchVolumeHistorySearchInfo.md)

Defined in: main.ts:158885

contains results distributed by device type
if the device parameter is not specified, the data will be returned for all available device types
