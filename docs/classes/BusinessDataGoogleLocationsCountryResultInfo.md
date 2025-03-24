[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleLocationsCountryResultInfo

# Class: BusinessDataGoogleLocationsCountryResultInfo

Defined in: main.ts:224396

## Implements

- [`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataGoogleLocationsCountryResultInfo**(`data`?): `BusinessDataGoogleLocationsCountryResultInfo`

Defined in: main.ts:224414

#### Parameters

##### data?

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md)

#### Returns

`BusinessDataGoogleLocationsCountryResultInfo`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:224408

ISO country code of the location

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:224398

location code

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:224400

full name of the location

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#location_name)

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

Defined in: main.ts:224406

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[`location_name_parent`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#location_name_parent)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:224410

location type

#### Implementation of

[`IBusinessDataGoogleLocationsCountryResultInfo`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md).[`location_type`](../interfaces/IBusinessDataGoogleLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:224423

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:224444

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataGoogleLocationsCountryResultInfo`

Defined in: main.ts:224437

#### Parameters

##### data

`any`

#### Returns

`BusinessDataGoogleLocationsCountryResultInfo`
