[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingRelevantPagesLiveResultInfo

# Class: DataforseoLabsBingRelevantPagesLiveResultInfo

Defined in: main.ts:131446

## Implements

- [`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsBingRelevantPagesLiveResultInfo**(`data`?): `DataforseoLabsBingRelevantPagesLiveResultInfo`

Defined in: main.ts:131466

#### Parameters

##### data?

[`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md)

#### Returns

`DataforseoLabsBingRelevantPagesLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)[]

Defined in: main.ts:131462

relevant pages and related data

#### Implementation of

[`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:131460

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:131456

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:131453

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:131448

search engine type

#### Implementation of

[`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:131450

target domain in a POST array

#### Implementation of

[`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:131458

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:131475

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:131502

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsBingRelevantPagesLiveResultInfo`

Defined in: main.ts:131495

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsBingRelevantPagesLiveResultInfo`
