[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleCompetitorsDomainLiveResultInfo

# Class: DataforseoLabsGoogleCompetitorsDomainLiveResultInfo

Defined in: main.ts:113638

## Implements

- [`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleCompetitorsDomainLiveResultInfo**(`data`?): `DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`

Defined in: main.ts:113656

#### Parameters

##### data?

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md)

#### Returns

`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)[]

Defined in: main.ts:113652

contains data related to the target and competitor domains

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:113650

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:113646

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:113644

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:113640

search engine type

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:113642

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:113648

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleCompetitorsDomainLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:113665

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:113692

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`

Defined in: main.ts:113685

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleCompetitorsDomainLiveResultInfo`
