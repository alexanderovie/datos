[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo

# Class: KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo

Defined in: main.ts:160618

## Implements

- [`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo**(`data?`): `KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`

Defined in: main.ts:160628

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md)

#### Returns

`KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`KeywordsDataClickstreamDataSearchVolumeLiveItem`](KeywordsDataClickstreamDataSearchVolumeLiveItem.md)[]

Defined in: main.ts:160624

contains keywords and related data

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md).[`items`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:160622

the number of results returned in the items array

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md).[`items_count`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md#items_count)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:160620

location code in a POST array

#### Implementation of

[`IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo.md#location_code)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:160637

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:160660

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`

Defined in: main.ts:160653

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataClickstreamDataBulkSearchVolumeLiveResultInfo`
