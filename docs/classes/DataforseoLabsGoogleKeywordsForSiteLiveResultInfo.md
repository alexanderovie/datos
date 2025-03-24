[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordsForSiteLiveResultInfo

# Class: DataforseoLabsGoogleKeywordsForSiteLiveResultInfo

Defined in: main.ts:104586

## Implements

- [`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleKeywordsForSiteLiveResultInfo**(`data`?): `DataforseoLabsGoogleKeywordsForSiteLiveResultInfo`

Defined in: main.ts:104610

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md)

#### Returns

`DataforseoLabsGoogleKeywordsForSiteLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

Defined in: main.ts:104606

contains keyword ideas and related data

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:104598

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:104594

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:104592

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#location_code)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:104600

current offset value

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:104604

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#offset_token)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:104588

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:104590

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:104596

total number of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:104619

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:104648

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleKeywordsForSiteLiveResultInfo`

Defined in: main.ts:104641

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleKeywordsForSiteLiveResultInfo`
