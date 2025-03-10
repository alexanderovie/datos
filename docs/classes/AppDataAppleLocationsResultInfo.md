[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleLocationsResultInfo

# Class: AppDataAppleLocationsResultInfo

Defined in: main.ts:214253

## Implements

- [`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleLocationsResultInfo()

> **new AppDataAppleLocationsResultInfo**(`data`?): [`AppDataAppleLocationsResultInfo`](AppDataAppleLocationsResultInfo.md)

Defined in: main.ts:214274

#### Parameters

##### data?

[`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md)

#### Returns

[`AppDataAppleLocationsResultInfo`](AppDataAppleLocationsResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:214268

ISO country code of the location

#### Implementation of

[`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md).[`country_iso_code`](../interfaces/IAppDataAppleLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:214255

location code

#### Implementation of

[`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md).[`location_code`](../interfaces/IAppDataAppleLocationsResultInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:214257

full name of the location

#### Implementation of

[`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md).[`location_name`](../interfaces/IAppDataAppleLocationsResultInfo.md#location_name)

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `number`

Defined in: main.ts:214266

the name of the superordinate location
example:
"location_code": 1006473,
"location_name": "Altrincham,England,United Kingdom",
"location_name_parent": "England,United Kingdom", where location_name_parent corresponds to:
"location_code": 20339,
"location_name": "England,United Kingdom"
note: Apple App Data API currently supports countries only, that is why this value will always be null

#### Implementation of

[`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md).[`location_name_parent`](../interfaces/IAppDataAppleLocationsResultInfo.md#location_name_parent)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:214270

location type

#### Implementation of

[`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md).[`location_type`](../interfaces/IAppDataAppleLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:214283

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:214304

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleLocationsResultInfo`](AppDataAppleLocationsResultInfo.md)

Defined in: main.ts:214297

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleLocationsResultInfo`](AppDataAppleLocationsResultInfo.md)
