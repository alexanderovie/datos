[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseDataforseoTrendsItem

# Class: BaseDataforseoTrendsItem

Defined in: main.ts:23931

## Extended by

- [`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)
- [`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)
- [`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

## Implements

- [`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md)

## Constructors

### Constructor

> **new BaseDataforseoTrendsItem**(`data`?): `BaseDataforseoTrendsItem`

Defined in: main.ts:23943

#### Parameters

##### data?

[`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md)

#### Returns

`BaseDataforseoTrendsItem`

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23941

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:23939

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md).[`keywords`](../interfaces/IBaseDataforseoTrendsItem.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:23936

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md).[`position`](../interfaces/IBaseDataforseoTrendsItem.md#position)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23933

type of element

#### Implementation of

[`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md).[`type`](../interfaces/IBaseDataforseoTrendsItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:23953

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:23987

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BaseDataforseoTrendsItem`

Defined in: main.ts:23965

#### Parameters

##### data

`any`

#### Returns

`BaseDataforseoTrendsItem`
