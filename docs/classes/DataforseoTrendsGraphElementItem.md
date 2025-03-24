[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoTrendsGraphElementItem

# Class: DataforseoTrendsGraphElementItem

Defined in: main.ts:147860

## Extends

- [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

## Implements

- [`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoTrendsGraphElementItem**(`data`?): `DataforseoTrendsGraphElementItem`

Defined in: main.ts:147868

#### Parameters

##### data?

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md)

#### Returns

`DataforseoTrendsGraphElementItem`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`constructor`](BaseDataforseoTrendsItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23941

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`_discriminator`](BaseDataforseoTrendsItem.md#_discriminator)

***

### averages?

> `optional` **averages**: `number`[]

Defined in: main.ts:147864

keyword popularity values averaged over the whole time range

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`averages`](../interfaces/IDataforseoTrendsGraphElementItem.md#averages)

***

### data?

> `optional` **data**: [`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)[]

Defined in: main.ts:147862

DataForSEO Trends data for the specified parameters

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`data`](../interfaces/IDataforseoTrendsGraphElementItem.md#data)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:23939

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`keywords`](../interfaces/IDataforseoTrendsGraphElementItem.md#keywords)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`keywords`](BaseDataforseoTrendsItem.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:23936

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`position`](../interfaces/IDataforseoTrendsGraphElementItem.md#position)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`position`](BaseDataforseoTrendsItem.md#position)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23933

type of element

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`type`](../interfaces/IDataforseoTrendsGraphElementItem.md#type)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`type`](BaseDataforseoTrendsItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:147873

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`init`](BaseDataforseoTrendsItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:147900

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`toJSON`](BaseDataforseoTrendsItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoTrendsGraphElementItem`

Defined in: main.ts:147893

#### Parameters

##### data

`any`

#### Returns

`DataforseoTrendsGraphElementItem`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`fromJS`](BaseDataforseoTrendsItem.md#fromjs)
