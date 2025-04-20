[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalSerpsLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalSerpsLiveResultInfo

Defined in: main.ts:117382

## Implements

- [`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleHistoricalSerpsLiveResultInfo**(`data?`): `DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`

Defined in: main.ts:117402

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

#### Returns

`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)[]

Defined in: main.ts:117398

additional items present in the element
if there are none, equals null

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:117395

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:117387

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`keyword`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:117391

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:117389

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:117384

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:117393

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:117411

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:117438

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`

Defined in: main.ts:117431

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`
