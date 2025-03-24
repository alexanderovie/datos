[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseOnPageResourceItemInfo

# Interface: IBaseOnPageResourceItemInfo

Defined in: main.ts:23581

## Extended by

- [`IHtmlResourceElementItem`](IHtmlResourceElementItem.md)
- [`IStylesheetResourceElementItem`](IStylesheetResourceElementItem.md)
- [`IScriptResourceElementItem`](IScriptResourceElementItem.md)
- [`IImageResourceElementItem`](IImageResourceElementItem.md)
- [`IBrokenResourceElementItem`](IBrokenResourceElementItem.md)

## Properties

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](../classes/CacheControl.md)

Defined in: main.ts:23608

instructions for caching

***

### checks?

> `optional` **checks**: `object`

Defined in: main.ts:23611

website checks
on-page check-ups related to the page

#### Index Signature

\[`key`: `string`\]: `boolean`

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

Defined in: main.ts:23613

type of encoding

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

Defined in: main.ts:23598

page size after encoding
indicates the size of the encoded page measured in bytes

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:23606

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](../classes/LastModified.md)

Defined in: main.ts:23620

contains data on changes related to the resource
if there is no data, the value will be null

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:23588

location header
indicates the URL to redirect a page to

***

### media\_type?

> `optional` **media\_type**: `string`

Defined in: main.ts:23615

types of media used to display a page

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

Defined in: main.ts:23592

resource errors and warnings

***

### resource\_type?

> `optional` **resource\_type**: `string`

Defined in: main.ts:23583

type of the returned resource

***

### server?

> `optional` **server**: `string`

Defined in: main.ts:23617

server version

***

### size?

> `optional` **size**: `number`

Defined in: main.ts:23595

resource size
indicates the size of a given page measured in bytes

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:23585

status code of the page

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

Defined in: main.ts:23601

compressed page size
indicates the compressed size of a given page

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:23590

page URL
