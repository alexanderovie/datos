[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsAdvertisersLocationsResultInfo

# Class: SerpGoogleAdsAdvertisersLocationsResultInfo

Defined in: main.ts:63022

## Implements

- [`ISerpGoogleAdsAdvertisersLocationsResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleAdsAdvertisersLocationsResultInfo**(`data`?): `SerpGoogleAdsAdvertisersLocationsResultInfo`

Defined in: main.ts:63043

#### Parameters

##### data?

[`ISerpGoogleAdsAdvertisersLocationsResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md)

#### Returns

`SerpGoogleAdsAdvertisersLocationsResultInfo`

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:63037

ISO country code of the location

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:63024

location code

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md).[`location_code`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:63035

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:63026

full name of the location

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md).[`location_name`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:63039

location type

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md).[`location_type`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:63052

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:63073

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleAdsAdvertisersLocationsResultInfo`

Defined in: main.ts:63066

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleAdsAdvertisersLocationsResultInfo`
