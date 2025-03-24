[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordOverviewLiveResultInfo

# Class: DataforseoLabsGoogleKeywordOverviewLiveResultInfo

Defined in: main.ts:123452

## Implements

- [`IDataforseoLabsGoogleKeywordOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleKeywordOverviewLiveResultInfo**(`data`?): `DataforseoLabsGoogleKeywordOverviewLiveResultInfo`

Defined in: main.ts:123466

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResultInfo.md)

#### Returns

`DataforseoLabsGoogleKeywordOverviewLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleKeywordOverviewLiveItem`](DataforseoLabsGoogleKeywordOverviewLiveItem.md)[]

Defined in: main.ts:123462

contains keywords and related data

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:123460

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:123458

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:123456

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:123454

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordOverviewLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordOverviewLiveResultInfo.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:123475

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:123500

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleKeywordOverviewLiveResultInfo`

Defined in: main.ts:123493

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleKeywordOverviewLiveResultInfo`
