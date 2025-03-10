[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppMetricsInfo

# Class: AppMetricsInfo

Defined in: main.ts:123181

## Implements

- [`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppMetricsInfo()

> **new AppMetricsInfo**(`data`?): [`AppMetricsInfo`](AppMetricsInfo.md)

Defined in: main.ts:123197

#### Parameters

##### data?

[`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md)

#### Returns

[`AppMetricsInfo`](AppMetricsInfo.md)

## Properties

### count?

> `optional` **count**: `number`

Defined in: main.ts:123191

total count of Amazon organic SERPs that contain the product

#### Implementation of

[`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md).[`count`](../interfaces/IAppMetricsInfo.md#count)

***

### pos\_1?

> `optional` **pos\_1**: `number`

Defined in: main.ts:123183

number of organic SERPs where the product ranks #1

#### Implementation of

[`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md).[`pos_1`](../interfaces/IAppMetricsInfo.md#pos_1)

***

### pos\_11\_100?

> `optional` **pos\_11\_100**: `number`

Defined in: main.ts:123189

number of organic SERPs where the product ranks #11-100

#### Implementation of

[`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md).[`pos_11_100`](../interfaces/IAppMetricsInfo.md#pos_11_100)

***

### pos\_2\_3?

> `optional` **pos\_2\_3**: `number`

Defined in: main.ts:123185

number of organic SERPs where the product ranks #2-3

#### Implementation of

[`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md).[`pos_2_3`](../interfaces/IAppMetricsInfo.md#pos_2_3)

***

### pos\_4\_10?

> `optional` **pos\_4\_10**: `number`

Defined in: main.ts:123187

number of organic SERPs where the product ranks #4-10

#### Implementation of

[`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md).[`pos_4_10`](../interfaces/IAppMetricsInfo.md#pos_4_10)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:123193

total search volume of the product’s ranking keywords in organic SERP

#### Implementation of

[`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md).[`search_volume`](../interfaces/IAppMetricsInfo.md#search_volume)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:123206

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:123228

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppMetricsInfo`](AppMetricsInfo.md)

Defined in: main.ts:123221

#### Parameters

##### data

`any`

#### Returns

[`AppMetricsInfo`](AppMetricsInfo.md)
