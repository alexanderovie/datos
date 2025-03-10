[**Documentation**](../README.md)

***

[Documentation](../README.md) / BrokenResourceElementItem

# Class: BrokenResourceElementItem

Defined in: main.ts:177852

## Extends

- [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

## Implements

- [`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BrokenResourceElementItem()

> **new BrokenResourceElementItem**(`data`?): [`BrokenResourceElementItem`](BrokenResourceElementItem.md)

Defined in: main.ts:177868

#### Parameters

##### data?

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md)

#### Returns

[`BrokenResourceElementItem`](BrokenResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`constructor`](BaseOnPageResourceItemInfo.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23144

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`_discriminator`](BaseOnPageResourceItemInfo.md#_discriminator)

***

### accept\_type?

> `optional` **accept\_type**: `string`

Defined in: main.ts:177864

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`accept_type`](../interfaces/IBrokenResourceElementItem.md#accept_type)

***

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](CacheControl.md)

Defined in: main.ts:23130

instructions for caching

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`cache_control`](../interfaces/IBrokenResourceElementItem.md#cache_control)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`cache_control`](BaseOnPageResourceItemInfo.md#cache_control)

***

### checks?

> `optional` **checks**: `object`

Defined in: main.ts:23133

website checks
on-page check-ups related to the page

#### Index Signature

\[`key`: `string`\]: `boolean`

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`checks`](../interfaces/IBrokenResourceElementItem.md#checks)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`checks`](BaseOnPageResourceItemInfo.md#checks)

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

Defined in: main.ts:23135

type of encoding

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`content_encoding`](../interfaces/IBrokenResourceElementItem.md#content_encoding)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`content_encoding`](BaseOnPageResourceItemInfo.md#content_encoding)

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

Defined in: main.ts:23120

page size after encoding
indicates the size of the encoded page measured in bytes

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`encoded_size`](../interfaces/IBrokenResourceElementItem.md#encoded_size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`encoded_size`](BaseOnPageResourceItemInfo.md#encoded_size)

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:23128

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`fetch_time`](../interfaces/IBrokenResourceElementItem.md#fetch_time)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fetch_time`](BaseOnPageResourceItemInfo.md#fetch_time)

***

### fetch\_timing?

> `optional` **fetch\_timing**: [`FetchTiming`](FetchTiming.md)

Defined in: main.ts:177859

resource fething time range

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`fetch_timing`](../interfaces/IBrokenResourceElementItem.md#fetch_timing)

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](LastModified.md)

Defined in: main.ts:23142

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`last_modified`](../interfaces/IBrokenResourceElementItem.md#last_modified)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`last_modified`](BaseOnPageResourceItemInfo.md#last_modified)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:23110

location header
indicates the URL to redirect a page to

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`location`](../interfaces/IBrokenResourceElementItem.md#location)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`location`](BaseOnPageResourceItemInfo.md#location)

***

### media\_type?

> `optional` **media\_type**: `string`

Defined in: main.ts:23137

types of media used to display a page

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`media_type`](../interfaces/IBrokenResourceElementItem.md#media_type)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`media_type`](BaseOnPageResourceItemInfo.md#media_type)

***

### meta?

> `optional` **meta**: [`PageMetaInfo`](PageMetaInfo.md)

Defined in: main.ts:177857

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`meta`](../interfaces/IBrokenResourceElementItem.md#meta)

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

Defined in: main.ts:23114

resource errors and warnings

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`resource_errors`](../interfaces/IBrokenResourceElementItem.md#resource_errors)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`resource_errors`](BaseOnPageResourceItemInfo.md#resource_errors)

***

### resource\_type?

> `optional` **resource\_type**: `string`

Defined in: main.ts:23105

type of the returned resource

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`resource_type`](../interfaces/IBrokenResourceElementItem.md#resource_type)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`resource_type`](BaseOnPageResourceItemInfo.md#resource_type)

***

### server?

> `optional` **server**: `string`

Defined in: main.ts:23139

server version

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`server`](../interfaces/IBrokenResourceElementItem.md#server)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`server`](BaseOnPageResourceItemInfo.md#server)

***

### size?

> `optional` **size**: `number`

Defined in: main.ts:23117

resource size
indicates the size of a given page measured in bytes

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`size`](../interfaces/IBrokenResourceElementItem.md#size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`size`](BaseOnPageResourceItemInfo.md#size)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:23107

status code of the page

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`status_code`](../interfaces/IBrokenResourceElementItem.md#status_code)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`status_code`](BaseOnPageResourceItemInfo.md#status_code)

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

Defined in: main.ts:23123

compressed page size
indicates the compressed size of a given page

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`total_transfer_size`](../interfaces/IBrokenResourceElementItem.md#total_transfer_size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`total_transfer_size`](BaseOnPageResourceItemInfo.md#total_transfer_size)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:23112

page URL

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`url`](../interfaces/IBrokenResourceElementItem.md#url)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`url`](BaseOnPageResourceItemInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:177873

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`init`](BaseOnPageResourceItemInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:177893

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`toJSON`](BaseOnPageResourceItemInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BrokenResourceElementItem`](BrokenResourceElementItem.md)

Defined in: main.ts:177886

#### Parameters

##### data

`any`

#### Returns

[`BrokenResourceElementItem`](BrokenResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fromJS`](BaseOnPageResourceItemInfo.md#fromjs)
