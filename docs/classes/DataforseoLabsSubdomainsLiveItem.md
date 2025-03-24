[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsSubdomainsLiveItem

# Class: DataforseoLabsSubdomainsLiveItem

Defined in: main.ts:114792

## Implements

- [`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsSubdomainsLiveItem**(`data`?): `DataforseoLabsSubdomainsLiveItem`

Defined in: main.ts:114802

#### Parameters

##### data?

[`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md)

#### Returns

`DataforseoLabsSubdomainsLiveItem`

## Properties

### metrics?

> `optional` **metrics**: `object`

Defined in: main.ts:114798

ranking data relevant to subdomain

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md#metrics)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:114794

search engine type

#### Implementation of

[`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md#se_type)

***

### subdomain?

> `optional` **subdomain**: `string`

Defined in: main.ts:114796

returned subdomain

#### Implementation of

[`IDataforseoLabsSubdomainsLiveItem`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md).[`subdomain`](../interfaces/IDataforseoLabsSubdomainsLiveItem.md#subdomain)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:114811

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:114836

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsSubdomainsLiveItem`

Defined in: main.ts:114829

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsSubdomainsLiveItem`
