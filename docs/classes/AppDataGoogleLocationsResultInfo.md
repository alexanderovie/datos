[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleLocationsResultInfo

# Class: AppDataGoogleLocationsResultInfo

Defined in: main.ts:211012

## Implements

- [`IAppDataGoogleLocationsResultInfo`](../interfaces/IAppDataGoogleLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataGoogleLocationsResultInfo**(`data?`): `AppDataGoogleLocationsResultInfo`

Defined in: main.ts:211032

#### Parameters

##### data?

[`IAppDataGoogleLocationsResultInfo`](../interfaces/IAppDataGoogleLocationsResultInfo.md)

#### Returns

`AppDataGoogleLocationsResultInfo`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:211026

ISO country code of the location

#### Implementation of

[`IAppDataGoogleLocationsResultInfo`](../interfaces/IAppDataGoogleLocationsResultInfo.md).[`country_iso_code`](../interfaces/IAppDataGoogleLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:211014

location code

#### Implementation of

[`IAppDataGoogleLocationsResultInfo`](../interfaces/IAppDataGoogleLocationsResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleLocationsResultInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:211016

full name of the location

#### Implementation of

[`IAppDataGoogleLocationsResultInfo`](../interfaces/IAppDataGoogleLocationsResultInfo.md).[`location_name`](../interfaces/IAppDataGoogleLocationsResultInfo.md#location_name)

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

Defined in: main.ts:211024

the name of the superordinate location
example:
"location_code": 1006473,
"location_name": "Altrincham,England,United Kingdom",
"location_name_parent": "England,United Kingdom", where location_name_parent corresponds to:
"location_code": 20339,
"location_name": "England,United Kingdom"

#### Implementation of

[`IAppDataGoogleLocationsResultInfo`](../interfaces/IAppDataGoogleLocationsResultInfo.md).[`location_name_parent`](../interfaces/IAppDataGoogleLocationsResultInfo.md#location_name_parent)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:211028

location type

#### Implementation of

[`IAppDataGoogleLocationsResultInfo`](../interfaces/IAppDataGoogleLocationsResultInfo.md).[`location_type`](../interfaces/IAppDataGoogleLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:211041

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:211062

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataGoogleLocationsResultInfo`

Defined in: main.ts:211055

#### Parameters

##### data

`any`

#### Returns

`AppDataGoogleLocationsResultInfo`
