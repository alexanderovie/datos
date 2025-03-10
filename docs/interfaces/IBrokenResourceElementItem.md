[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBrokenResourceElementItem

# Interface: IBrokenResourceElementItem

Defined in: main.ts:177907

## Extends

- [`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### accept\_type?

> `optional` **accept\_type**: `string`

Defined in: main.ts:177919

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

***

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](../classes/CacheControl.md)

Defined in: main.ts:23269

instructions for caching

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`cache_control`](IBaseOnPageResourceItemInfo.md#cache_control)

***

### checks?

> `optional` **checks**: `object`

Defined in: main.ts:23272

website checks
on-page check-ups related to the page

#### Index Signature

\[`key`: `string`\]: `boolean`

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`checks`](IBaseOnPageResourceItemInfo.md#checks)

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

Defined in: main.ts:23274

type of encoding

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`content_encoding`](IBaseOnPageResourceItemInfo.md#content_encoding)

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

Defined in: main.ts:23259

page size after encoding
indicates the size of the encoded page measured in bytes

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`encoded_size`](IBaseOnPageResourceItemInfo.md#encoded_size)

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:23267

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`fetch_time`](IBaseOnPageResourceItemInfo.md#fetch_time)

***

### fetch\_timing?

> `optional` **fetch\_timing**: [`FetchTiming`](../classes/FetchTiming.md)

Defined in: main.ts:177914

resource fething time range

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](../classes/LastModified.md)

Defined in: main.ts:23281

contains data on changes related to the resource
if there is no data, the value will be null

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`last_modified`](IBaseOnPageResourceItemInfo.md#last_modified)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:23249

location header
indicates the URL to redirect a page to

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`location`](IBaseOnPageResourceItemInfo.md#location)

***

### media\_type?

> `optional` **media\_type**: `string`

Defined in: main.ts:23276

types of media used to display a page

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`media_type`](IBaseOnPageResourceItemInfo.md#media_type)

***

### meta?

> `optional` **meta**: [`PageMetaInfo`](../classes/PageMetaInfo.md)

Defined in: main.ts:177912

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

Defined in: main.ts:23253

resource errors and warnings

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`resource_errors`](IBaseOnPageResourceItemInfo.md#resource_errors)

***

### resource\_type?

> `optional` **resource\_type**: `string`

Defined in: main.ts:23244

type of the returned resource

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`resource_type`](IBaseOnPageResourceItemInfo.md#resource_type)

***

### server?

> `optional` **server**: `string`

Defined in: main.ts:23278

server version

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`server`](IBaseOnPageResourceItemInfo.md#server)

***

### size?

> `optional` **size**: `number`

Defined in: main.ts:23256

resource size
indicates the size of a given page measured in bytes

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`size`](IBaseOnPageResourceItemInfo.md#size)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:23246

status code of the page

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`status_code`](IBaseOnPageResourceItemInfo.md#status_code)

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

Defined in: main.ts:23262

compressed page size
indicates the compressed size of a given page

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`total_transfer_size`](IBaseOnPageResourceItemInfo.md#total_transfer_size)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:23251

page URL

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`url`](IBaseOnPageResourceItemInfo.md#url)
