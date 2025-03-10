[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseDataforseoTrendsItem

# Class: BaseDataforseoTrendsItem

Defined in: main.ts:23592

## Extended by

- [`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)
- [`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)
- [`DataforseoTrendsDemographyElementItem`](DataforseoTrendsDemographyElementItem.md)

## Implements

- [`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md)

## Constructors

### new BaseDataforseoTrendsItem()

> **new BaseDataforseoTrendsItem**(`data`?): [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

Defined in: main.ts:23604

#### Parameters

##### data?

[`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md)

#### Returns

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23602

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:23600

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md).[`keywords`](../interfaces/IBaseDataforseoTrendsItem.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:23597

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md).[`position`](../interfaces/IBaseDataforseoTrendsItem.md#position)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23594

type of element

#### Implementation of

[`IBaseDataforseoTrendsItem`](../interfaces/IBaseDataforseoTrendsItem.md).[`type`](../interfaces/IBaseDataforseoTrendsItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:23614

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:23648

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

Defined in: main.ts:23626

#### Parameters

##### data

`any`

#### Returns

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)
