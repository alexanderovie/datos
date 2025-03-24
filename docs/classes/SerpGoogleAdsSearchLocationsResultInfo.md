[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsSearchLocationsResultInfo

# Class: SerpGoogleAdsSearchLocationsResultInfo

Defined in: main.ts:64371

## Implements

- [`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleAdsSearchLocationsResultInfo**(`data`?): `SerpGoogleAdsSearchLocationsResultInfo`

Defined in: main.ts:64392

#### Parameters

##### data?

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md)

#### Returns

`SerpGoogleAdsSearchLocationsResultInfo`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:64386

ISO country code of the location

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:64373

location code

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md).[`location_code`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:64384

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:64375

full name of the location

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md).[`location_name`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:64388

location type

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md).[`location_type`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:64401

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:64422

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleAdsSearchLocationsResultInfo`

Defined in: main.ts:64415

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleAdsSearchLocationsResultInfo`
