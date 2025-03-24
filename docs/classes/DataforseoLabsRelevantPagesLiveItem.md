[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsRelevantPagesLiveItem

# Class: DataforseoLabsRelevantPagesLiveItem

Defined in: main.ts:115402

## Implements

- [`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsRelevantPagesLiveItem**(`data`?): `DataforseoLabsRelevantPagesLiveItem`

Defined in: main.ts:115412

#### Parameters

##### data?

[`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md)

#### Returns

`DataforseoLabsRelevantPagesLiveItem`

## Properties

### metrics?

> `optional` **metrics**: `object`

Defined in: main.ts:115408

rankings and traffic metrics for the relevant page

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md#metrics)

***

### page\_address?

> `optional` **page\_address**: `string`

Defined in: main.ts:115406

absolute URL of the relevant page

#### Implementation of

[`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md).[`page_address`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md#page_address)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:115404

search engine type

#### Implementation of

[`IDataforseoLabsRelevantPagesLiveItem`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsRelevantPagesLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:115421

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:115446

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsRelevantPagesLiveItem`

Defined in: main.ts:115439

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsRelevantPagesLiveItem`
