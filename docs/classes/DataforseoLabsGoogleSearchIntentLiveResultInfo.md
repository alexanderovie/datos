[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleSearchIntentLiveResultInfo

# Class: DataforseoLabsGoogleSearchIntentLiveResultInfo

Defined in: main.ts:107442

## Implements

- [`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleSearchIntentLiveResultInfo**(`data?`): `DataforseoLabsGoogleSearchIntentLiveResultInfo`

Defined in: main.ts:107453

#### Parameters

##### data?

[`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md)

#### Returns

`DataforseoLabsGoogleSearchIntentLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)[]

Defined in: main.ts:107449

array of items with relevant traffic estimation data

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:107447

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:107445

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResultInfo.md#language_code)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:107462

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:107485

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleSearchIntentLiveResultInfo`

Defined in: main.ts:107478

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleSearchIntentLiveResultInfo`
