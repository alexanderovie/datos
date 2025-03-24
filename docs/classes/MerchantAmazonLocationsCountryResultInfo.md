[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonLocationsCountryResultInfo

# Class: MerchantAmazonLocationsCountryResultInfo

Defined in: main.ts:203032

## Implements

- [`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantAmazonLocationsCountryResultInfo**(`data`?): `MerchantAmazonLocationsCountryResultInfo`

Defined in: main.ts:203050

#### Parameters

##### data?

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md)

#### Returns

`MerchantAmazonLocationsCountryResultInfo`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:203044

ISO country code of the location

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:203034

location code

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:203036

full name of the location

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`location_name`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#location_name)

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

Defined in: main.ts:203042

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "90290,California,United States",
"location_name_parent": "California,United States"

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`location_name_parent`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#location_name_parent)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:203046

location type

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`location_type`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:203059

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:203080

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantAmazonLocationsCountryResultInfo`

Defined in: main.ts:203073

#### Parameters

##### data

`any`

#### Returns

`MerchantAmazonLocationsCountryResultInfo`
