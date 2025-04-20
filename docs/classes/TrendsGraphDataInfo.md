[**Documentation**](../README.md)

***

[Documentation](../README.md) / TrendsGraphDataInfo

# Class: TrendsGraphDataInfo

Defined in: main.ts:145938

## Implements

- [`ITrendsGraphDataInfo`](../interfaces/ITrendsGraphDataInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new TrendsGraphDataInfo**(`data?`): `TrendsGraphDataInfo`

Defined in: main.ts:145958

#### Parameters

##### data?

[`ITrendsGraphDataInfo`](../interfaces/ITrendsGraphDataInfo.md)

#### Returns

`TrendsGraphDataInfo`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:145941

start date of the corresponding time range
in the UTC format: “yyyy-mm-dd”

#### Implementation of

[`ITrendsGraphDataInfo`](../interfaces/ITrendsGraphDataInfo.md).[`date_from`](../interfaces/ITrendsGraphDataInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:145944

end date of the corresponding time range
in the UTC format: “yyyy-mm-dd”

#### Implementation of

[`ITrendsGraphDataInfo`](../interfaces/ITrendsGraphDataInfo.md).[`date_to`](../interfaces/ITrendsGraphDataInfo.md#date_to)

***

### missing\_data?

> `optional` **missing\_data**: `boolean`

Defined in: main.ts:145949

indicates whether the data is unavailable
if true the data on the graph in the Google Trends interface is missing and thus labelled with a dotted line

#### Implementation of

[`ITrendsGraphDataInfo`](../interfaces/ITrendsGraphDataInfo.md).[`missing_data`](../interfaces/ITrendsGraphDataInfo.md#missing_data)

***

### timestamp?

> `optional` **timestamp**: `number`

Defined in: main.ts:145946

a point in time in the Unix time format

#### Implementation of

[`ITrendsGraphDataInfo`](../interfaces/ITrendsGraphDataInfo.md).[`timestamp`](../interfaces/ITrendsGraphDataInfo.md#timestamp)

***

### values?

> `optional` **values**: `number`[]

Defined in: main.ts:145954

relative keyword popularity rate at a specific timestamp
represents the keyword popularity rate over the given time range
if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords
a value of 100 is the peak popularity for the term. A value of 50 means that the term is half as popular. A score of 0 means there was not enough data for this term

#### Implementation of

[`ITrendsGraphDataInfo`](../interfaces/ITrendsGraphDataInfo.md).[`values`](../interfaces/ITrendsGraphDataInfo.md#values)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:145967

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:145992

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `TrendsGraphDataInfo`

Defined in: main.ts:145985

#### Parameters

##### data

`any`

#### Returns

`TrendsGraphDataInfo`
