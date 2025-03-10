[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesLiveResultInfo

# Class: BusinessDataGoogleHotelSearchesLiveResultInfo

Defined in: main.ts:227489

## Implements

- [`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesLiveResultInfo()

> **new BusinessDataGoogleHotelSearchesLiveResultInfo**(`data`?): [`BusinessDataGoogleHotelSearchesLiveResultInfo`](BusinessDataGoogleHotelSearchesLiveResultInfo.md)

Defined in: main.ts:227514

#### Parameters

##### data?

[`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelSearchesLiveResultInfo`](BusinessDataGoogleHotelSearchesLiveResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:227499

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:227504

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)[]

Defined in: main.ts:227510

array of items
note: this field always equals null; use it to facilitate integration and ensure interoperability with the Hotel Info endpoint

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:227507

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:227492

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:227496

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:227494

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#location_code)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:227523

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:227550

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesLiveResultInfo`](BusinessDataGoogleHotelSearchesLiveResultInfo.md)

Defined in: main.ts:227543

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelSearchesLiveResultInfo`](BusinessDataGoogleHotelSearchesLiveResultInfo.md)
