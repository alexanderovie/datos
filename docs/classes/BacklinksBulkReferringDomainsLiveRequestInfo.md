[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkReferringDomainsLiveRequestInfo

# Class: BacklinksBulkReferringDomainsLiveRequestInfo

Defined in: main.ts:173206

## Implements

- [`IBacklinksBulkReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksBulkReferringDomainsLiveRequestInfo**(`data`?): `BacklinksBulkReferringDomainsLiveRequestInfo`

Defined in: main.ts:173235

#### Parameters

##### data?

[`IBacklinksBulkReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveRequestInfo.md)

#### Returns

`BacklinksBulkReferringDomainsLiveRequestInfo`

## Properties

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:173231

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksBulkReferringDomainsLiveRequestInfo.md#tag)

***

### targets?

> `optional` **targets**: `string`[]

Defined in: main.ts:173225

domains, subdomains or webpages to get the number of referring domains for
required field
you can set up to 1000 domains, subdomains or webpages
the domain or subdomain should be specified without https:// and www.
the page should be specified with absolute URL (including http:// or https://)
example:
"targets": [
  "forbes.com",
  "cnn.com",
  "bbc.com",
  "yelp.com",
  "https://www.apple.com/iphone/",
  "https://ahrefs.com/blog/",
  "ibm.com",
  "https://variety.com/",
  "https://stackoverflow.com/",
  "www.trustpilot.com"
]

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveRequestInfo.md).[`targets`](../interfaces/IBacklinksBulkReferringDomainsLiveRequestInfo.md#targets)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173244

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173266

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksBulkReferringDomainsLiveRequestInfo`

Defined in: main.ts:173259

#### Parameters

##### data

`any`

#### Returns

`BacklinksBulkReferringDomainsLiveRequestInfo`
