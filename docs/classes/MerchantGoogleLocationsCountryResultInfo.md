[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleLocationsCountryResultInfo

# Class: MerchantGoogleLocationsCountryResultInfo

Defined in: main.ts:197194

## Implements

- [`IMerchantGoogleLocationsCountryResultInfo`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantGoogleLocationsCountryResultInfo**(`data?`): `MerchantGoogleLocationsCountryResultInfo`

Defined in: main.ts:197211

#### Parameters

##### data?

[`IMerchantGoogleLocationsCountryResultInfo`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md)

#### Returns

`MerchantGoogleLocationsCountryResultInfo`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:197205

ISO country code of the location

#### Implementation of

[`IMerchantGoogleLocationsCountryResultInfo`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:197196

location code

#### Implementation of

[`IMerchantGoogleLocationsCountryResultInfo`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:197198

full name of the location

#### Implementation of

[`IMerchantGoogleLocationsCountryResultInfo`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md).[`location_name`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md#location_name)

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

Defined in: main.ts:197203

the name of the superordinate location
example:
"location_name": "Arkansas,United States",
"location_name_parent": "United States"

#### Implementation of

[`IMerchantGoogleLocationsCountryResultInfo`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md).[`location_name_parent`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md#location_name_parent)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:197207

location type

#### Implementation of

[`IMerchantGoogleLocationsCountryResultInfo`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md).[`location_type`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:197220

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:197241

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantGoogleLocationsCountryResultInfo`

Defined in: main.ts:197234

#### Parameters

##### data

`any`

#### Returns

`MerchantGoogleLocationsCountryResultInfo`
