[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksDomainPagesLiveItem

# Interface: IBacklinksDomainPagesLiveItem

Defined in: main.ts:166389

## Indexable

\[`key`: `string`\]: `any`

## Properties

### content\_encoding?

> `optional` **content\_encoding**: `string`

Defined in: main.ts:166433

type of encoding

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:166397

domain
domain where the page was found

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

Defined in: main.ts:166431

page size after encoding
indicates the size of the encoded page, in bytes

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:166421

most recent date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

***

### first\_visited?

> `optional` **first\_visited**: `string`

Defined in: main.ts:166411

date and time of the first page visit
date and time when our crawler visited this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

***

### ip?

> `optional` **ip**: `string`

Defined in: main.ts:166405

Internet Protocol address

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:166426

location header
indicates the URL to redirect a page to if exists

***

### main\_domain?

> `optional` **main\_domain**: `string`

Defined in: main.ts:166394

main website domain
main website domain does not include subdomains

***

### media\_type?

> `optional` **media\_type**: `string`

Defined in: main.ts:166435

types of media used to display a page

***

### meta?

> `optional` **meta**: [`BacklinksPageMeta`](../classes/BacklinksPageMeta.md)

Defined in: main.ts:166439

page meta data

***

### page?

> `optional` **page**: `string`

Defined in: main.ts:166403

page URL
relevant page URL

***

### page\_summary?

> `optional` **page\_summary**: [`PageSummary`](../classes/PageSummary.md)

Defined in: main.ts:166441

contains backlink data for this page

***

### prev\_visited?

> `optional` **prev\_visited**: `string`

Defined in: main.ts:166416

previous to the most recent date when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

***

### server?

> `optional` **server**: `string`

Defined in: main.ts:166437

server version

***

### size?

> `optional` **size**: `number`

Defined in: main.ts:166428

indicates the page size, in bytes

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:166423

HTTP status code of the page

***

### tld?

> `optional` **tld**: `string`

Defined in: main.ts:166400

top-level domain
top-level domain in the DNS root zone

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:166391

type of element
