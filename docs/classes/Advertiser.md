[**Documentation**](../README.md)

***

[Documentation](../README.md) / Advertiser

# Class: Advertiser

Defined in: main.ts:63317

## Implements

- [`IAdvertiser`](../interfaces/IAdvertiser.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Advertiser()

> **new Advertiser**(`data`?): [`Advertiser`](Advertiser.md)

Defined in: main.ts:63335

#### Parameters

##### data?

[`IAdvertiser`](../interfaces/IAdvertiser.md)

#### Returns

[`Advertiser`](Advertiser.md)

## Properties

### advertiser\_id?

> `optional` **advertiser\_id**: `string`

Defined in: main.ts:63322

unique identifier of the advertiser account
can be used to obtain data on advertising campaigns from the Google Ads Search endpoint

#### Implementation of

[`IAdvertiser`](../interfaces/IAdvertiser.md).[`advertiser_id`](../interfaces/IAdvertiser.md#advertiser_id)

***

### approx\_ads\_count?

> `optional` **approx\_ads\_count**: `number`

Defined in: main.ts:63331

ads count
the approximate number of ads that are run by the advertiser account across all available Google Ads platforms

#### Implementation of

[`IAdvertiser`](../interfaces/IAdvertiser.md).[`approx_ads_count`](../interfaces/IAdvertiser.md#approx_ads_count)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:63325

location of the advertiser account
country code associated with the advertiser account

#### Implementation of

[`IAdvertiser`](../interfaces/IAdvertiser.md).[`location`](../interfaces/IAdvertiser.md#location)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:63319

type of element

#### Implementation of

[`IAdvertiser`](../interfaces/IAdvertiser.md).[`type`](../interfaces/IAdvertiser.md#type)

***

### verified?

> `optional` **verified**: `boolean`

Defined in: main.ts:63328

verified advertiser account
equals true if advertiser account is verified by Google Ads

#### Implementation of

[`IAdvertiser`](../interfaces/IAdvertiser.md).[`verified`](../interfaces/IAdvertiser.md#verified)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:63344

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:63365

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Advertiser`](Advertiser.md)

Defined in: main.ts:63358

#### Parameters

##### data

`any`

#### Returns

[`Advertiser`](Advertiser.md)
