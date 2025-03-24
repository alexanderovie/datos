[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo

# Class: DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo

Defined in: main.ts:108692

## Implements

- [`IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo**(`data`?): `DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`

Defined in: main.ts:108703

#### Parameters

##### data?

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md)

#### Returns

`DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleCategoriesForKeywordsLiveItem`](DataforseoLabsGoogleCategoriesForKeywordsLiveItem.md)[]

Defined in: main.ts:108699

contains keywords and related keyword difficulty scores

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:108697

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:108695

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo.md#language_code)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:108712

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:108735

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`

Defined in: main.ts:108728

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleCategoriesForKeywordsLiveResultInfo`
