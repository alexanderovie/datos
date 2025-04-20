[**Documentation**](../README.md)

***

[Documentation](../README.md) / HtmlContentInfo

# Class: HtmlContentInfo

Defined in: main.ts:178356

## Implements

- [`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new HtmlContentInfo**(`data?`): `HtmlContentInfo`

Defined in: main.ts:178386

#### Parameters

##### data?

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md)

#### Returns

`HtmlContentInfo`

## Properties

### automated\_readability\_index?

> `optional` **automated\_readability\_index**: `number`

Defined in: main.ts:178365

Automated Readability Index

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`automated_readability_index`](../interfaces/IHtmlContentInfo.md#automated_readability_index)

***

### coleman\_liau\_readability\_index?

> `optional` **coleman\_liau\_readability\_index**: `number`

Defined in: main.ts:178367

Coleman–Liau Index

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`coleman_liau_readability_index`](../interfaces/IHtmlContentInfo.md#coleman_liau_readability_index)

***

### dale\_chall\_readability\_index?

> `optional` **dale\_chall\_readability\_index**: `number`

Defined in: main.ts:178369

Dale–Chall Readability Index

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`dale_chall_readability_index`](../interfaces/IHtmlContentInfo.md#dale_chall_readability_index)

***

### description\_to\_content\_consistency?

> `optional` **description\_to\_content\_consistency**: `number`

Defined in: main.ts:178376

consistency of the meta description tag with the page content
measured from 0 to 1

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`description_to_content_consistency`](../interfaces/IHtmlContentInfo.md#description_to_content_consistency)

***

### flesch\_kincaid\_readability\_index?

> `optional` **flesch\_kincaid\_readability\_index**: `number`

Defined in: main.ts:178371

Flesch–Kincaid Readability Index

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`flesch_kincaid_readability_index`](../interfaces/IHtmlContentInfo.md#flesch_kincaid_readability_index)

***

### meta\_keywords\_to\_content\_consistency?

> `optional` **meta\_keywords\_to\_content\_consistency**: `number`

Defined in: main.ts:178382

consistency of meta keywordstag with the page content
measured from 0 to 1

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`meta_keywords_to_content_consistency`](../interfaces/IHtmlContentInfo.md#meta_keywords_to_content_consistency)

***

### plain\_text\_rate?

> `optional` **plain\_text\_rate**: `number`

Defined in: main.ts:178361

plaintext rate value
plain_text_size to size ratio

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`plain_text_rate`](../interfaces/IHtmlContentInfo.md#plain_text_rate)

***

### plain\_text\_size?

> `optional` **plain\_text\_size**: `number`

Defined in: main.ts:178358

total size of the text on the page measured in bytes

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`plain_text_size`](../interfaces/IHtmlContentInfo.md#plain_text_size)

***

### plain\_text\_word\_count?

> `optional` **plain\_text\_word\_count**: `number`

Defined in: main.ts:178363

number of words on the page

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`plain_text_word_count`](../interfaces/IHtmlContentInfo.md#plain_text_word_count)

***

### smog\_readability\_index?

> `optional` **smog\_readability\_index**: `number`

Defined in: main.ts:178373

SMOG Readability Index

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`smog_readability_index`](../interfaces/IHtmlContentInfo.md#smog_readability_index)

***

### title\_to\_content\_consistency?

> `optional` **title\_to\_content\_consistency**: `number`

Defined in: main.ts:178379

consistency of the meta title tag with the page content
measured from 0 to 1

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`title_to_content_consistency`](../interfaces/IHtmlContentInfo.md#title_to_content_consistency)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:178395

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:178422

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `HtmlContentInfo`

Defined in: main.ts:178415

#### Parameters

##### data

`any`

#### Returns

`HtmlContentInfo`
