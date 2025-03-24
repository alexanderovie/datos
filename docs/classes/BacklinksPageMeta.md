[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksPageMeta

# Class: BacklinksPageMeta

Defined in: main.ts:165508

## Implements

- [`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksPageMeta**(`data`?): `BacklinksPageMeta`

Defined in: main.ts:165556

#### Parameters

##### data?

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md)

#### Returns

`BacklinksPageMeta`

## Properties

### canonical?

> `optional` **canonical**: `string`

Defined in: main.ts:165512

canonical page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`canonical`](../interfaces/IBacklinksPageMeta.md#canonical)

***

### charset?

> `optional` **charset**: `string`

Defined in: main.ts:165548

character encoding
examples:
utf-8

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`charset`](../interfaces/IBacklinksPageMeta.md#charset)

***

### external\_links\_count?

> `optional` **external\_links\_count**: `number`

Defined in: main.ts:165516

number of external links on the page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`external_links_count`](../interfaces/IBacklinksPageMeta.md#external_links_count)

***

### h1?

> `optional` **h1**: `string`[]

Defined in: main.ts:165530

h1 tag
content of h1 tags

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`h1`](../interfaces/IBacklinksPageMeta.md#h1)

***

### h2?

> `optional` **h2**: `string`[]

Defined in: main.ts:165533

h2 tag
content of h2 tags

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`h2`](../interfaces/IBacklinksPageMeta.md#h2)

***

### h3?

> `optional` **h3**: `string`[]

Defined in: main.ts:165536

h3 tag
content of h3 tags

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`h3`](../interfaces/IBacklinksPageMeta.md#h3)

***

### images\_alt?

> `optional` **images\_alt**: `string`[]

Defined in: main.ts:165538

content of alt tags

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`images_alt`](../interfaces/IBacklinksPageMeta.md#images_alt)

***

### images\_count?

> `optional` **images\_count**: `number`

Defined in: main.ts:165518

number of images on the page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`images_count`](../interfaces/IBacklinksPageMeta.md#images_count)

***

### internal\_links\_count?

> `optional` **internal\_links\_count**: `number`

Defined in: main.ts:165514

number of internal links on the page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`internal_links_count`](../interfaces/IBacklinksPageMeta.md#internal_links_count)

***

### language?

> `optional` **language**: `string`

Defined in: main.ts:165544

page content language
example:
en

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`language`](../interfaces/IBacklinksPageMeta.md#language)

***

### page\_spam\_score?

> `optional` **page\_spam\_score**: `number`

Defined in: main.ts:165523

spam score of the page
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`page_spam_score`](../interfaces/IBacklinksPageMeta.md#page_spam_score)

***

### platform\_type?

> `optional` **platform\_type**: `string`[]

Defined in: main.ts:165550

type of a platform

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`platform_type`](../interfaces/IBacklinksPageMeta.md#platform_type)

***

### powered\_by?

> `optional` **powered\_by**: `string`[]

Defined in: main.ts:165540

CMS details

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`powered_by`](../interfaces/IBacklinksPageMeta.md#powered_by)

***

### social\_media\_tags?

> `optional` **social\_media\_tags**: `object`

Defined in: main.ts:165527

array of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`social_media_tags`](../interfaces/IBacklinksPageMeta.md#social_media_tags)

***

### technologies?

> `optional` **technologies**: `object`

Defined in: main.ts:165552

website technologies

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`technologies`](../interfaces/IBacklinksPageMeta.md#technologies)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:165510

page title

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`title`](../interfaces/IBacklinksPageMeta.md#title)

***

### words\_count?

> `optional` **words\_count**: `number`

Defined in: main.ts:165520

number of words on the page

#### Implementation of

[`IBacklinksPageMeta`](../interfaces/IBacklinksPageMeta.md).[`words_count`](../interfaces/IBacklinksPageMeta.md#words_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:165565

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:165634

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksPageMeta`

Defined in: main.ts:165627

#### Parameters

##### data

`any`

#### Returns

`BacklinksPageMeta`
