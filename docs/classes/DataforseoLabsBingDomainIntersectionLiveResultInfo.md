[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingDomainIntersectionLiveResultInfo

# Class: DataforseoLabsBingDomainIntersectionLiveResultInfo

Defined in: main.ts:128868

## Implements

- [`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsBingDomainIntersectionLiveResultInfo**(`data?`): `DataforseoLabsBingDomainIntersectionLiveResultInfo`

Defined in: main.ts:128890

#### Parameters

##### data?

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md)

#### Returns

`DataforseoLabsBingDomainIntersectionLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsDomainIntersectionLiveItem`](DataforseoLabsDomainIntersectionLiveItem.md)[]

Defined in: main.ts:128886

contains keywords, relevant SERP elements and related data

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:128884

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:128880

language code in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:128878

location code in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:128872

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#se_type)

***

### target1?

> `optional` **target1**: `string`

Defined in: main.ts:128874

target specified in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`target1`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#target1)

***

### target2?

> `optional` **target2**: `string`

Defined in: main.ts:128876

target specified in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`target2`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#target2)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:128882

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:128899

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:128927

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsBingDomainIntersectionLiveResultInfo`

Defined in: main.ts:128920

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsBingDomainIntersectionLiveResultInfo`
