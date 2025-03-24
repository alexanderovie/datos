[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalKeywordDataLiveItem

# Class: DataforseoLabsGoogleHistoricalKeywordDataLiveItem

Defined in: main.ts:122848

## Implements

- [`IDataforseoLabsGoogleHistoricalKeywordDataLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleHistoricalKeywordDataLiveItem**(`data`?): `DataforseoLabsGoogleHistoricalKeywordDataLiveItem`

Defined in: main.ts:122864

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalKeywordDataLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveItem.md)

#### Returns

`DataforseoLabsGoogleHistoricalKeywordDataLiveItem`

## Properties

### history?

> `optional` **history**: [`History`](History.md)[]

Defined in: main.ts:122860

array of objects with historical data for the keyword

#### Implementation of

[`IDataforseoLabsGoogleHistoricalKeywordDataLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveItem.md).[`history`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveItem.md#history)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:122853

keyword
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IDataforseoLabsGoogleHistoricalKeywordDataLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveItem.md).[`keyword`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveItem.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:122858

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalKeywordDataLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveItem.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveItem.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:122856

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleHistoricalKeywordDataLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveItem.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveItem.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:122850

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalKeywordDataLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:122873

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:122898

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleHistoricalKeywordDataLiveItem`

Defined in: main.ts:122891

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleHistoricalKeywordDataLiveItem`
