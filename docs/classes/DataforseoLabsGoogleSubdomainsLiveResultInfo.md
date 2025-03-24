[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleSubdomainsLiveResultInfo

# Class: DataforseoLabsGoogleSubdomainsLiveResultInfo

Defined in: main.ts:114866

## Implements

- [`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleSubdomainsLiveResultInfo**(`data`?): `DataforseoLabsGoogleSubdomainsLiveResultInfo`

Defined in: main.ts:114884

#### Parameters

##### data?

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md)

#### Returns

`DataforseoLabsGoogleSubdomainsLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)[]

Defined in: main.ts:114880

contains subdomains and related data

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:114878

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:114874

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:114872

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:114868

search engine type

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:114870

domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:114876

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:114893

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:114920

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleSubdomainsLiveResultInfo`

Defined in: main.ts:114913

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleSubdomainsLiveResultInfo`
