[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksTimeseriesNewLostSummaryLiveItem

# Class: BacklinksTimeseriesNewLostSummaryLiveItem

Defined in: main.ts:171864

## Implements

- [`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksTimeseriesNewLostSummaryLiveItem**(`data`?): `BacklinksTimeseriesNewLostSummaryLiveItem`

Defined in: main.ts:171893

#### Parameters

##### data?

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md)

#### Returns

`BacklinksTimeseriesNewLostSummaryLiveItem`

## Properties

### date?

> `optional` **date**: `string`

Defined in: main.ts:171871

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`date`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#date)

***

### lost\_backlinks?

> `optional` **lost\_backlinks**: `number`

Defined in: main.ts:171877

number of lost backlinks
number of lost backlinks of the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`lost_backlinks`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_backlinks)

***

### lost\_referring\_domains?

> `optional` **lost\_referring\_domains**: `number`

Defined in: main.ts:171883

number of lost referring domains
number of lost referring domains of the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`lost_referring_domains`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_referring_domains)

***

### lost\_referring\_main\_domains?

> `optional` **lost\_referring\_main\_domains**: `number`

Defined in: main.ts:171889

number of lost referring main domains
number of lost referring main domains of the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`lost_referring_main_domains`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_referring_main_domains)

***

### new\_backlinks?

> `optional` **new\_backlinks**: `number`

Defined in: main.ts:171874

number of new backlinks
number of new backlinks pointing to the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`new_backlinks`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_backlinks)

***

### new\_referring\_domains?

> `optional` **new\_referring\_domains**: `number`

Defined in: main.ts:171880

number of new referring domains
number of new referring domains pointing to the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`new_referring_domains`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_referring_domains)

***

### new\_referring\_main\_domains?

> `optional` **new\_referring\_main\_domains**: `number`

Defined in: main.ts:171886

number of new referring main domains
number of new referring main domains pointing to the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`new_referring_main_domains`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_referring_main_domains)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:171866

type of element

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`type`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:171902

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:171926

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksTimeseriesNewLostSummaryLiveItem`

Defined in: main.ts:171919

#### Parameters

##### data

`any`

#### Returns

`BacklinksTimeseriesNewLostSummaryLiveItem`
