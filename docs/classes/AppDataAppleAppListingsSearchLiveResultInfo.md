[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppListingsSearchLiveResultInfo

# Class: AppDataAppleAppListingsSearchLiveResultInfo

Defined in: main.ts:220942

## Implements

- [`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataAppleAppListingsSearchLiveResultInfo**(`data`?): `AppDataAppleAppListingsSearchLiveResultInfo`

Defined in: main.ts:220957

#### Parameters

##### data?

[`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md)

#### Returns

`AppDataAppleAppListingsSearchLiveResultInfo`

## Properties

### count?

> `optional` **count**: `number`

Defined in: main.ts:220946

the number of items in the results array

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[`count`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#count)

***

### items?

> `optional` **items**: [`AppDataAppleAppListingsSearchLiveItem`](AppDataAppleAppListingsSearchLiveItem.md)[]

Defined in: main.ts:220953

array of apps and related data

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[`items`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#items)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:220948

offset in the results array of returned apps

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[`offset`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:220951

token for subsequent requests
you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[`offset_token`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#offset_token)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:220944

the total number of relevant results in the database

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveResultInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md).[`total_count`](../interfaces/IAppDataAppleAppListingsSearchLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:220966

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:220991

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataAppleAppListingsSearchLiveResultInfo`

Defined in: main.ts:220984

#### Parameters

##### data

`any`

#### Returns

`AppDataAppleAppListingsSearchLiveResultInfo`
