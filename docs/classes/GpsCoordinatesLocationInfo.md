[**Documentation**](../README.md)

***

[Documentation](../README.md) / GpsCoordinatesLocationInfo

# Class: GpsCoordinatesLocationInfo

Defined in: main.ts:229216

## Implements

- [`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GpsCoordinatesLocationInfo**(`data?`): `GpsCoordinatesLocationInfo`

Defined in: main.ts:229228

#### Parameters

##### data?

[`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md)

#### Returns

`GpsCoordinatesLocationInfo`

## Properties

### latitude?

> `optional` **latitude**: `number`

Defined in: main.ts:229220

latitude coordinate of the hotel in google maps
example:
"latitude": 51.584091

#### Implementation of

[`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md).[`latitude`](../interfaces/IGpsCoordinatesLocationInfo.md#latitude)

***

### longitude?

> `optional` **longitude**: `number`

Defined in: main.ts:229224

longitude coordinate of the hotel in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md).[`longitude`](../interfaces/IGpsCoordinatesLocationInfo.md#longitude)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:229237

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:229255

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `GpsCoordinatesLocationInfo`

Defined in: main.ts:229248

#### Parameters

##### data

`any`

#### Returns

`GpsCoordinatesLocationInfo`
