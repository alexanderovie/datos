[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleLocationsResultInfo

# Class: MerchantGoogleLocationsResultInfo

Defined in: main.ts:196474

## Implements

- [`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantGoogleLocationsResultInfo**(`data`?): `MerchantGoogleLocationsResultInfo`

Defined in: main.ts:196491

#### Parameters

##### data?

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md)

#### Returns

`MerchantGoogleLocationsResultInfo`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:196485

ISO country code of the location

#### Implementation of

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md).[`country_iso_code`](../interfaces/IMerchantGoogleLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:196476

location code

#### Implementation of

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleLocationsResultInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:196478

full name of the location

#### Implementation of

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md).[`location_name`](../interfaces/IMerchantGoogleLocationsResultInfo.md#location_name)

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

Defined in: main.ts:196483

the name of the superordinate location
example:
"location_name": "Arkansas,United States",
"location_name_parent": "United States"

#### Implementation of

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md).[`location_name_parent`](../interfaces/IMerchantGoogleLocationsResultInfo.md#location_name_parent)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:196487

location type

#### Implementation of

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md).[`location_type`](../interfaces/IMerchantGoogleLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:196500

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:196521

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantGoogleLocationsResultInfo`

Defined in: main.ts:196514

#### Parameters

##### data

`any`

#### Returns

`MerchantGoogleLocationsResultInfo`
