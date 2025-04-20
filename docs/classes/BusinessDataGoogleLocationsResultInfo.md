[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleLocationsResultInfo

# Class: BusinessDataGoogleLocationsResultInfo

Defined in: main.ts:224734

## Implements

- [`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataGoogleLocationsResultInfo**(`data?`): `BusinessDataGoogleLocationsResultInfo`

Defined in: main.ts:224752

#### Parameters

##### data?

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md)

#### Returns

`BusinessDataGoogleLocationsResultInfo`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:224746

ISO country code of the location

#### Implementation of

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[`country_iso_code`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:224736

location code

#### Implementation of

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:224738

full name of the location

#### Implementation of

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_name)

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

Defined in: main.ts:224744

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[`location_name_parent`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_name_parent)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:224748

location type

#### Implementation of

[`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[`location_type`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:224761

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:224782

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataGoogleLocationsResultInfo`

Defined in: main.ts:224775

#### Parameters

##### data

`any`

#### Returns

`BusinessDataGoogleLocationsResultInfo`
