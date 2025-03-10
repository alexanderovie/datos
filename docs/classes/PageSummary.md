[**Documentation**](../README.md)

***

[Documentation](../README.md) / PageSummary

# Class: PageSummary

Defined in: main.ts:163337

## Implements

- [`IPageSummary`](../interfaces/IPageSummary.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PageSummary()

> **new PageSummary**(`data`?): [`PageSummary`](PageSummary.md)

Defined in: main.ts:163408

#### Parameters

##### data?

[`IPageSummary`](../interfaces/IPageSummary.md)

#### Returns

[`PageSummary`](PageSummary.md)

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:163355

indicates the number of backlinks

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`backlinks`](../interfaces/IPageSummary.md#backlinks)

***

### backlinks\_spam\_score?

> `optional` **backlinks\_spam\_score**: `number`

Defined in: main.ts:163358

average spam score of the backlinks pointing to the page
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`backlinks_spam_score`](../interfaces/IPageSummary.md#backlinks_spam_score)

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

Defined in: main.ts:163361

number of broken backlinks
number of broken backlinks pointing to the page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`broken_backlinks`](../interfaces/IPageSummary.md#broken_backlinks)

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

Defined in: main.ts:163364

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`broken_pages`](../interfaces/IPageSummary.md#broken_pages)

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:163342

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`first_seen`](../interfaces/IPageSummary.md#first_seen)

***

### lost\_date?

> `optional` **lost\_date**: `string`

Defined in: main.ts:163348

date and time when the last backlink for this page was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`lost_date`](../interfaces/IPageSummary.md#lost_date)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:163353

page rank
rank of the page
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`rank`](../interfaces/IPageSummary.md#rank)

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:163366

indicates the number of referring domains

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_domains`](../interfaces/IPageSummary.md#referring_domains)

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

Defined in: main.ts:163368

number of domains pointing at least one nofollow link to the page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_domains_nofollow`](../interfaces/IPageSummary.md#referring_domains_nofollow)

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

Defined in: main.ts:163375

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_ips`](../interfaces/IPageSummary.md#referring_ips)

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

Defined in: main.ts:163392

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_attributes`](../interfaces/IPageSummary.md#referring_links_attributes)

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

Defined in: main.ts:163404

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_countries`](../interfaces/IPageSummary.md#referring_links_countries)

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

Defined in: main.ts:163395

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_platform_types`](../interfaces/IPageSummary.md#referring_links_platform_types)

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

Defined in: main.ts:163401

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, summary

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_semantic_locations`](../interfaces/IPageSummary.md#referring_links_semantic_locations)

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

Defined in: main.ts:163384

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_tld`](../interfaces/IPageSummary.md#referring_links_tld)

***

### referring\_links\_types?

> `optional` **referring\_links\_types**: `object`

Defined in: main.ts:163389

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_types`](../interfaces/IPageSummary.md#referring_links_types)

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:163370

indicates the number of referring main domains

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_main_domains`](../interfaces/IPageSummary.md#referring_main_domains)

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

Defined in: main.ts:163372

number of main domains pointing at least one nofollow link to the page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_main_domains_nofollow`](../interfaces/IPageSummary.md#referring_main_domains_nofollow)

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:163379

indicates the number of pages pointing to the page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_pages`](../interfaces/IPageSummary.md#referring_pages)

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

Defined in: main.ts:163381

number of referring pages pointing at least one nofollow link to the page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_pages_nofollow`](../interfaces/IPageSummary.md#referring_pages_nofollow)

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

Defined in: main.ts:163377

number of referring subnetworks

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_subnets`](../interfaces/IPageSummary.md#referring_subnets)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:163417

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:163490

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`PageSummary`](PageSummary.md)

Defined in: main.ts:163483

#### Parameters

##### data

`any`

#### Returns

[`PageSummary`](PageSummary.md)
