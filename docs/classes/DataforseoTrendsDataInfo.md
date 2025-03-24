[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoTrendsDataInfo

# Class: DataforseoTrendsDataInfo

Defined in: main.ts:149190

## Implements

- [`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoTrendsDataInfo**(`data`?): `DataforseoTrendsDataInfo`

Defined in: main.ts:149198

#### Parameters

##### data?

[`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md)

#### Returns

`DataforseoTrendsDataInfo`

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:149192

relevant keyword for which demographic data is provided

#### Implementation of

[`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md).[`keyword`](../interfaces/IDataforseoTrendsDataInfo.md#keyword)

***

### values?

> `optional` **values**: [`DemographyItemValueInfo`](DemographyItemValueInfo.md)[]

Defined in: main.ts:149194

contains age range and corresponding keyword popularity values

#### Implementation of

[`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md).[`values`](../interfaces/IDataforseoTrendsDataInfo.md#values)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:149207

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:149229

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoTrendsDataInfo`

Defined in: main.ts:149222

#### Parameters

##### data

`any`

#### Returns

`DataforseoTrendsDataInfo`
