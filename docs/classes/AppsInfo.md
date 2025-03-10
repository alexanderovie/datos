[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppsInfo

# Class: AppsInfo

Defined in: main.ts:211349

## Implements

- [`IAppsInfo`](../interfaces/IAppsInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppsInfo()

> **new AppsInfo**(`data`?): [`AppsInfo`](AppsInfo.md)

Defined in: main.ts:211359

#### Parameters

##### data?

[`IAppsInfo`](../interfaces/IAppsInfo.md)

#### Returns

[`AppsInfo`](AppsInfo.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:211351

ID of the app

#### Implementation of

[`IAppsInfo`](../interfaces/IAppsInfo.md).[`app_id`](../interfaces/IAppsInfo.md#app_id)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:211353

title of the app

#### Implementation of

[`IAppsInfo`](../interfaces/IAppsInfo.md).[`title`](../interfaces/IAppsInfo.md#title)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:211355

URL to the app page on Google Play

#### Implementation of

[`IAppsInfo`](../interfaces/IAppsInfo.md).[`url`](../interfaces/IAppsInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:211368

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:211387

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppsInfo`](AppsInfo.md)

Defined in: main.ts:211380

#### Parameters

##### data

`any`

#### Returns

[`AppsInfo`](AppsInfo.md)
