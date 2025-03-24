[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingSubdomainsLiveResultInfo

# Class: DataforseoLabsBingSubdomainsLiveResultInfo

Defined in: main.ts:132496

## Implements

- [`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsBingSubdomainsLiveResultInfo**(`data`?): `DataforseoLabsBingSubdomainsLiveResultInfo`

Defined in: main.ts:132514

#### Parameters

##### data?

[`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md)

#### Returns

`DataforseoLabsBingSubdomainsLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)[]

Defined in: main.ts:132510

contains subdomains and related data

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:132508

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:132504

language code in a POST array

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:132502

location code in a POST array

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:132498

search engine type

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:132500

domain in a POST array

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:132506

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:132523

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:132550

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsBingSubdomainsLiveResultInfo`

Defined in: main.ts:132543

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsBingSubdomainsLiveResultInfo`
