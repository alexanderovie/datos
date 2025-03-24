[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesTaskGetResultInfo

# Class: BusinessDataGoogleHotelSearchesTaskGetResultInfo

Defined in: main.ts:229218

## Implements

- [`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataGoogleHotelSearchesTaskGetResultInfo**(`data`?): `BusinessDataGoogleHotelSearchesTaskGetResultInfo`

Defined in: main.ts:229244

#### Parameters

##### data?

[`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md)

#### Returns

`BusinessDataGoogleHotelSearchesTaskGetResultInfo`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:229229

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:229234

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)[]

Defined in: main.ts:229240

array of items
note: this field always equals null; use it to facilitate integration and ensure interoperability with the Hotel Info endpoint

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:229237

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:229222

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character);
in order to obtain accurate search results, the location name is appended to the keyword automatically

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:229226

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:229224

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#location_code)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:229253

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:229280

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataGoogleHotelSearchesTaskGetResultInfo`

Defined in: main.ts:229273

#### Parameters

##### data

`any`

#### Returns

`BusinessDataGoogleHotelSearchesTaskGetResultInfo`
