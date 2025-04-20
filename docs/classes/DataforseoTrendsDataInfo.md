[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoTrendsDataInfo

# Class: DataforseoTrendsDataInfo

Defined in: main.ts:149314

## Implements

- [`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoTrendsDataInfo**(`data?`): `DataforseoTrendsDataInfo`

Defined in: main.ts:149322

#### Parameters

##### data?

[`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md)

#### Returns

`DataforseoTrendsDataInfo`

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:149316

relevant keyword for which demographic data is provided

#### Implementation of

[`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md).[`keyword`](../interfaces/IDataforseoTrendsDataInfo.md#keyword)

***

### values?

> `optional` **values**: [`DemographyItemValueInfo`](DemographyItemValueInfo.md)[]

Defined in: main.ts:149318

contains age range and corresponding keyword popularity values

#### Implementation of

[`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md).[`values`](../interfaces/IDataforseoTrendsDataInfo.md#values)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:149331

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:149353

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoTrendsDataInfo`

Defined in: main.ts:149346

#### Parameters

##### data

`any`

#### Returns

`DataforseoTrendsDataInfo`
