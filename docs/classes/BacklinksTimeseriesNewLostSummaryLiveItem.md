[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksTimeseriesNewLostSummaryLiveItem

# Class: BacklinksTimeseriesNewLostSummaryLiveItem

Defined in: main.ts:169455

## Implements

- [`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksTimeseriesNewLostSummaryLiveItem()

> **new BacklinksTimeseriesNewLostSummaryLiveItem**(`data`?): [`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)

Defined in: main.ts:169484

#### Parameters

##### data?

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md)

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)

## Properties

### date?

> `optional` **date**: `string`

Defined in: main.ts:169462

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`date`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#date)

***

### lost\_backlinks?

> `optional` **lost\_backlinks**: `number`

Defined in: main.ts:169468

number of lost backlinks
number of lost backlinks of the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`lost_backlinks`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_backlinks)

***

### lost\_referring\_domains?

> `optional` **lost\_referring\_domains**: `number`

Defined in: main.ts:169474

number of lost referring domains
number of lost referring domains of the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`lost_referring_domains`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_referring_domains)

***

### lost\_referring\_main\_domains?

> `optional` **lost\_referring\_main\_domains**: `number`

Defined in: main.ts:169480

number of lost referring main domains
number of lost referring main domains of the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`lost_referring_main_domains`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_referring_main_domains)

***

### new\_backlinks?

> `optional` **new\_backlinks**: `number`

Defined in: main.ts:169465

number of new backlinks
number of new backlinks pointing to the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`new_backlinks`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_backlinks)

***

### new\_referring\_domains?

> `optional` **new\_referring\_domains**: `number`

Defined in: main.ts:169471

number of new referring domains
number of new referring domains pointing to the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`new_referring_domains`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_referring_domains)

***

### new\_referring\_main\_domains?

> `optional` **new\_referring\_main\_domains**: `number`

Defined in: main.ts:169477

number of new referring main domains
number of new referring main domains pointing to the target

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`new_referring_main_domains`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_referring_main_domains)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:169457

type of element

#### Implementation of

[`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[`type`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:169493

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:169517

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)

Defined in: main.ts:169510

#### Parameters

##### data

`any`

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)
