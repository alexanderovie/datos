[**Documentation**](../README.md)

***

[Documentation](../README.md) / PageMetrics

# Class: PageMetrics

Defined in: main.ts:177416

## Implements

- [`IPageMetrics`](../interfaces/IPageMetrics.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new PageMetrics**(`data`?): `PageMetrics`

Defined in: main.ts:177456

#### Parameters

##### data?

[`IPageMetrics`](../interfaces/IPageMetrics.md)

#### Returns

`PageMetrics`

## Properties

### broken\_links?

> `optional` **broken\_links**: `number`

Defined in: main.ts:177431

number of broken links
number of broken links across all crawled pages on a target website

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`broken_links`](../interfaces/IPageMetrics.md#broken_links)

***

### broken\_resources?

> `optional` **broken\_resources**: `number`

Defined in: main.ts:177434

number of broken resources
the number of images and other resources with broken links

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`broken_resources`](../interfaces/IPageMetrics.md#broken_resources)

***

### checks?

> `optional` **checks**: `object`

Defined in: main.ts:177452

page-specific on-page check-ups

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`checks`](../interfaces/IPageMetrics.md#checks)

***

### duplicate\_content?

> `optional` **duplicate\_content**: `number`

Defined in: main.ts:177428

number of pages with duplicate content

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`duplicate_content`](../interfaces/IPageMetrics.md#duplicate_content)

***

### duplicate\_description?

> `optional` **duplicate\_description**: `number`

Defined in: main.ts:177426

number of pages with duplicate descriptions

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`duplicate_description`](../interfaces/IPageMetrics.md#duplicate_description)

***

### duplicate\_title?

> `optional` **duplicate\_title**: `number`

Defined in: main.ts:177424

number of pages with duplicate titles

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`duplicate_title`](../interfaces/IPageMetrics.md#duplicate_title)

***

### links\_external?

> `optional` **links\_external**: `number`

Defined in: main.ts:177419

number of external links
the number of links pointing to other websites

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`links_external`](../interfaces/IPageMetrics.md#links_external)

***

### links\_internal?

> `optional` **links\_internal**: `number`

Defined in: main.ts:177422

number of internal links
the number of links pointing to other pages within the target website

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`links_internal`](../interfaces/IPageMetrics.md#links_internal)

***

### links\_relation\_conflict?

> `optional` **links\_relation\_conflict**: `number`

Defined in: main.ts:177437

number of links present on the target website that may have a conflict
for example, if "links_relation_conflict": 2, the target website is referring to the same source by at least one internal link with the rel="nofollow" attribute and by at least one dofollow link

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`links_relation_conflict`](../interfaces/IPageMetrics.md#links_relation_conflict)

***

### non\_indexable?

> `optional` **non\_indexable**: `number`

Defined in: main.ts:177450

number of non-indexable pages
number of pages that are blocked from being indexed by Google and other search engines by robots.txt, HTTP headers, or meta tags settings;
you can receive a list of non-indexable URLs using this endpoint

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`non_indexable`](../interfaces/IPageMetrics.md#non_indexable)

***

### onpage\_score?

> `optional` **onpage\_score**: `number`

Defined in: main.ts:177446

shows how website is optimized on a 100-point scale
this field shows how website is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means website does not have any critical on-page issues and important warnings;
note that this value depends on the number of crawled pages;
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`onpage_score`](../interfaces/IPageMetrics.md#onpage_score)

***

### redirect\_loop?

> `optional` **redirect\_loop**: `number`

Defined in: main.ts:177440

number of redirect chains that start and end at the same URL
number of redirect chains where the destination URL redirects back to the original URL

#### Implementation of

[`IPageMetrics`](../interfaces/IPageMetrics.md).[`redirect_loop`](../interfaces/IPageMetrics.md#redirect_loop)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:177465

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:177499

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `PageMetrics`

Defined in: main.ts:177492

#### Parameters

##### data

`any`

#### Returns

`PageMetrics`
