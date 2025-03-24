[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageContentParsingItem

# Class: OnPageContentParsingItem

Defined in: main.ts:185250

## Implements

- [`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageContentParsingItem**(`data`?): `OnPageContentParsingItem`

Defined in: main.ts:185264

#### Parameters

##### data?

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md)

#### Returns

`OnPageContentParsingItem`

## Properties

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:185256

date and time when the content was fethced
example:
"2022-11-01 10:02:52 +00:00"

#### Implementation of

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md).[`fetch_time`](../interfaces/IOnPageContentParsingItem.md#fetch_time)

***

### page\_content?

> `optional` **page\_content**: [`PageContentInfo`](PageContentInfo.md)

Defined in: main.ts:185260

parsed content of the page

#### Implementation of

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md).[`page_content`](../interfaces/IOnPageContentParsingItem.md#page_content)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:185258

status code of the page

#### Implementation of

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md).[`status_code`](../interfaces/IOnPageContentParsingItem.md#status_code)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:185252

type of element

#### Implementation of

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md).[`type`](../interfaces/IOnPageContentParsingItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:185273

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:185293

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageContentParsingItem`

Defined in: main.ts:185286

#### Parameters

##### data

`any`

#### Returns

`OnPageContentParsingItem`
