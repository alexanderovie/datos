[**Documentation**](../README.md)

***

[Documentation](../README.md) / TrendsMapDataInfo

# Class: TrendsMapDataInfo

Defined in: main.ts:146153

## Implements

- [`ITrendsMapDataInfo`](../interfaces/ITrendsMapDataInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new TrendsMapDataInfo**(`data`?): `TrendsMapDataInfo`

Defined in: main.ts:146176

#### Parameters

##### data?

[`ITrendsMapDataInfo`](../interfaces/ITrendsMapDataInfo.md)

#### Returns

`TrendsMapDataInfo`

## Properties

### geo\_id?

> `optional` **geo\_id**: `string`

Defined in: main.ts:146158

Google Trends location identifier
you can use this field for matching obtained results with location parameters specified in the request
example:
US-NY

#### Implementation of

[`ITrendsMapDataInfo`](../interfaces/ITrendsMapDataInfo.md).[`geo_id`](../interfaces/ITrendsMapDataInfo.md#geo_id)

***

### geo\_name?

> `optional` **geo\_name**: `string`

Defined in: main.ts:146161

Google Trends location name
you can use this field for matching obtained results with location parameters specified in the request

#### Implementation of

[`ITrendsMapDataInfo`](../interfaces/ITrendsMapDataInfo.md).[`geo_name`](../interfaces/ITrendsMapDataInfo.md#geo_name)

***

### max\_value\_index?

> `optional` **max\_value\_index**: `number`

Defined in: main.ts:146172

max value among comparable terms
represents the maximum value if you specified more than two keywords in a POST array
if you specified only one keyword, the value will be null

#### Implementation of

[`ITrendsMapDataInfo`](../interfaces/ITrendsMapDataInfo.md).[`max_value_index`](../interfaces/ITrendsMapDataInfo.md#max_value_index)

***

### values?

> `optional` **values**: `any`[]

Defined in: main.ts:146168

relative keyword popularity rate in a given location
represents the location-specific keyword popularity rate over the given time range
if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords
a value of 100 is the peak popularity for the term
a value of 50 means that the term is half as popular
a value of 0 means there was not enough data for this term

#### Implementation of

[`ITrendsMapDataInfo`](../interfaces/ITrendsMapDataInfo.md).[`values`](../interfaces/ITrendsMapDataInfo.md#values)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:146185

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:146209

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `TrendsMapDataInfo`

Defined in: main.ts:146202

#### Parameters

##### data

`any`

#### Returns

`TrendsMapDataInfo`
