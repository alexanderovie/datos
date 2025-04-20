[**Documentation**](../README.md)

***

[Documentation](../README.md) / PageMetaInfo

# Class: PageMetaInfo

Defined in: main.ts:178474

## Implements

- [`IPageMetaInfo`](../interfaces/IPageMetaInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new PageMetaInfo**(`data?`): `PageMetaInfo`

Defined in: main.ts:178545

#### Parameters

##### data?

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md)

#### Returns

`PageMetaInfo`

## Properties

### broken\_html?

> `optional` **broken\_html**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

Defined in: main.ts:178541

resource errors and warnings

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`broken_html`](../interfaces/IPageMetaInfo.md#broken_html)

***

### canonical?

> `optional` **canonical**: `string`

Defined in: main.ts:178494

canonical page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`canonical`](../interfaces/IPageMetaInfo.md#canonical)

***

### charset?

> `optional` **charset**: `number`

Defined in: main.ts:178479

code page
example: 65001

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`charset`](../interfaces/IPageMetaInfo.md#charset)

***

### content?

> `optional` **content**: [`HtmlContentInfo`](HtmlContentInfo.md)

Defined in: main.ts:178528

overall information about content of the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`content`](../interfaces/IPageMetaInfo.md#content)

***

### cumulative\_layout\_shift?

> `optional` **cumulative\_layout\_shift**: `number`

Defined in: main.ts:178523

Core Web Vitals metric measuring the layout stability of the page
measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page. Learn more.

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`cumulative_layout_shift`](../interfaces/IPageMetaInfo.md#cumulative_layout_shift)

***

### deprecated\_tags?

> `optional` **deprecated\_tags**: `string`[]

Defined in: main.ts:178530

deprecated tags on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`deprecated_tags`](../interfaces/IPageMetaInfo.md#deprecated_tags)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:178488

content of the meta description tag

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`description`](../interfaces/IPageMetaInfo.md#description)

***

### description\_length?

> `optional` **description\_length**: `number`

Defined in: main.ts:178516

length of the description tag in characters

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`description_length`](../interfaces/IPageMetaInfo.md#description_length)

***

### duplicate\_meta\_tags?

> `optional` **duplicate\_meta\_tags**: `string`[]

Defined in: main.ts:178532

duplicate meta tags on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`duplicate_meta_tags`](../interfaces/IPageMetaInfo.md#duplicate_meta_tags)

***

### external\_links\_count?

> `optional` **external\_links\_count**: `number`

Defined in: main.ts:178498

number of external links on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`external_links_count`](../interfaces/IPageMetaInfo.md#external_links_count)

***

### favicon?

> `optional` **favicon**: `string`

Defined in: main.ts:178490

favicon of the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`favicon`](../interfaces/IPageMetaInfo.md#favicon)

***

### follow?

> `optional` **follow**: `boolean`

Defined in: main.ts:178482

indicates whether a page’s ‘meta robots’ allows crawlers to follow the links on the page
if false, the page’s ‘meta robots’ tag contains “nofollow” parameter instructing crawlers not to follow the links on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`follow`](../interfaces/IPageMetaInfo.md#follow)

***

### generator?

> `optional` **generator**: `string`

Defined in: main.ts:178484

meta tag generator

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`generator`](../interfaces/IPageMetaInfo.md#generator)

***

### htags?

> `optional` **htags**: `object`

Defined in: main.ts:178486

HTML header tags

#### Index Signature

\[`key`: `string`\]: `string`[]

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`htags`](../interfaces/IPageMetaInfo.md#htags)

***

### images\_count?

> `optional` **images\_count**: `number`

Defined in: main.ts:178502

number of images on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`images_count`](../interfaces/IPageMetaInfo.md#images_count)

***

### images\_size?

> `optional` **images\_size**: `number`

Defined in: main.ts:178504

total size of images on the page measured in bytes

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`images_size`](../interfaces/IPageMetaInfo.md#images_size)

***

### inbound\_links\_count?

> `optional` **inbound\_links\_count**: `number`

Defined in: main.ts:178500

number of internal links pointing at the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`inbound_links_count`](../interfaces/IPageMetaInfo.md#inbound_links_count)

***

### internal\_links\_count?

> `optional` **internal\_links\_count**: `number`

Defined in: main.ts:178496

number of internal links on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`internal_links_count`](../interfaces/IPageMetaInfo.md#internal_links_count)

***

### meta\_keywords?

> `optional` **meta\_keywords**: `string`

Defined in: main.ts:178492

content of the keywords meta tag

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`meta_keywords`](../interfaces/IPageMetaInfo.md#meta_keywords)

***

### meta\_title?

> `optional` **meta\_title**: `string`

Defined in: main.ts:178526

meta title of the page
meta tag in the head section of an HTML document that defines the title of a page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`meta_title`](../interfaces/IPageMetaInfo.md#meta_title)

***

### render\_blocking\_scripts\_count?

> `optional` **render\_blocking\_scripts\_count**: `number`

Defined in: main.ts:178518

number of scripts on the page that block page rendering

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`render_blocking_scripts_count`](../interfaces/IPageMetaInfo.md#render_blocking_scripts_count)

***

### render\_blocking\_stylesheets\_count?

> `optional` **render\_blocking\_stylesheets\_count**: `number`

Defined in: main.ts:178520

number of CSS styles on the page that block page rendering

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`render_blocking_stylesheets_count`](../interfaces/IPageMetaInfo.md#render_blocking_stylesheets_count)

***

### scripts\_count?

> `optional` **scripts\_count**: `number`

Defined in: main.ts:178506

number of scripts on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`scripts_count`](../interfaces/IPageMetaInfo.md#scripts_count)

***

### scripts\_size?

> `optional` **scripts\_size**: `number`

Defined in: main.ts:178508

total size of scripts on the page measured in bytes

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`scripts_size`](../interfaces/IPageMetaInfo.md#scripts_size)

***

### social\_media\_tags?

> `optional` **social\_media\_tags**: `object`

Defined in: main.ts:178539

object of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`social_media_tags`](../interfaces/IPageMetaInfo.md#social_media_tags)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:178535

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`spell`](../interfaces/IPageMetaInfo.md#spell)

***

### stylesheets\_count?

> `optional` **stylesheets\_count**: `number`

Defined in: main.ts:178510

number of stylesheets on the page

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`stylesheets_count`](../interfaces/IPageMetaInfo.md#stylesheets_count)

***

### stylesheets\_size?

> `optional` **stylesheets\_size**: `number`

Defined in: main.ts:178512

total size of stylesheets on the page measured in bytes

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`stylesheets_size`](../interfaces/IPageMetaInfo.md#stylesheets_size)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:178476

page title

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`title`](../interfaces/IPageMetaInfo.md#title)

***

### title\_length?

> `optional` **title\_length**: `number`

Defined in: main.ts:178514

length of the title tag in characters

#### Implementation of

[`IPageMetaInfo`](../interfaces/IPageMetaInfo.md).[`title_length`](../interfaces/IPageMetaInfo.md#title_length)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:178554

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:178620

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `PageMetaInfo`

Defined in: main.ts:178613

#### Parameters

##### data

`any`

#### Returns

`PageMetaInfo`
