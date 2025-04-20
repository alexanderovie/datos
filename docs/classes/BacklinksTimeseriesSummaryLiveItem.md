[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksTimeseriesSummaryLiveItem

# Class: BacklinksTimeseriesSummaryLiveItem

Defined in: main.ts:171732

## Implements

- [`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksTimeseriesSummaryLiveItem**(`data?`): `BacklinksTimeseriesSummaryLiveItem`

Defined in: main.ts:171768

#### Parameters

##### data?

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md)

#### Returns

`BacklinksTimeseriesSummaryLiveItem`

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:171744

number of backlinks for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`backlinks`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#backlinks)

***

### backlinks\_nofollow?

> `optional` **backlinks\_nofollow**: `number`

Defined in: main.ts:171746

number of nofollow backlinks for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`backlinks_nofollow`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#backlinks_nofollow)

***

### date?

> `optional` **date**: `string`

Defined in: main.ts:171739

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`date`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#date)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:171742

target rank for the given date
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`rank`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#rank)

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:171753

number of referring domains for the given date
referring domains include subdomains that are counted as separate domains for this metric

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_domains`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_domains)

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

Defined in: main.ts:171755

number of domains pointing at least one nofollow link to the target for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_domains_nofollow)

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

Defined in: main.ts:171762

number of referring IP addresses for the given date
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_ips`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_ips)

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:171757

number of referring main domains for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_main_domains)

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

Defined in: main.ts:171759

number of main domains pointing at least one nofollow link to the target for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_main_domains_nofollow)

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:171748

number of pages pointing to target for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_pages`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_pages)

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

Defined in: main.ts:171750

number of referring pages pointing at least one nofollow link to the target for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_pages_nofollow)

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

Defined in: main.ts:171764

number of referring subnetworks for the given date

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_subnets)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:171734

type of element

#### Implementation of

[`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[`type`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:171777

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:171806

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksTimeseriesSummaryLiveItem`

Defined in: main.ts:171799

#### Parameters

##### data

`any`

#### Returns

`BacklinksTimeseriesSummaryLiveItem`
