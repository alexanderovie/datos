[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppListingsSearchLiveItem

# Class: AppDataAppleAppListingsSearchLiveItem

Defined in: main.ts:220848

## Implements

- [`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataAppleAppListingsSearchLiveItem**(`data`?): `AppDataAppleAppListingsSearchLiveItem`

Defined in: main.ts:220870

#### Parameters

##### data?

[`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md)

#### Returns

`AppDataAppleAppListingsSearchLiveItem`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:220850

ID of the returned app

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md).[`app_id`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md#app_id)

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:220859

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md).[`check_url`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md#check_url)

***

### item?

> `optional` **item**: [`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)

Defined in: main.ts:220866

detailed information about the app

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md).[`item`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md#item)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:220856

language code in a POST array

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md).[`language_code`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:220854

location code in a POST array

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md).[`location_code`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:220852

search engine domain in a POST array

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md).[`se_domain`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md#se_domain)

***

### time\_update?

> `optional` **time\_update**: `string`

Defined in: main.ts:220864

date and time when SERP data was last updated
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2023-05-23 10:16:19 +00:00

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md).[`time_update`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md#time_update)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:220879

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:220902

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataAppleAppListingsSearchLiveItem`

Defined in: main.ts:220895

#### Parameters

##### data

`any`

#### Returns

`AppDataAppleAppListingsSearchLiveItem`
