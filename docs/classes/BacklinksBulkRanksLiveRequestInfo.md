[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkRanksLiveRequestInfo

# Class: BacklinksBulkRanksLiveRequestInfo

Defined in: main.ts:172552

## Implements

- [`IBacklinksBulkRanksLiveRequestInfo`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksBulkRanksLiveRequestInfo**(`data?`): `BacklinksBulkRanksLiveRequestInfo`

Defined in: main.ts:172590

#### Parameters

##### data?

[`IBacklinksBulkRanksLiveRequestInfo`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md)

#### Returns

`BacklinksBulkRanksLiveRequestInfo`

## Properties

### rank\_scale?

> `optional` **rank\_scale**: `string`

Defined in: main.ts:172580

defines the scale used for calculating and displaying the rank, domain_from_rank, and page_from_rank values
optional field
you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale
possible values:
one_hundred — rank values are displayed on a 0–100 scale
one_thousand — rank values are displayed on a 0–1000 scale
default value: one_thousand
learn more about how this parameter works and how ranking metrics are calculated in this Help Center article

#### Implementation of

[`IBacklinksBulkRanksLiveRequestInfo`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md).[`rank_scale`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md#rank_scale)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:172586

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksBulkRanksLiveRequestInfo`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md#tag)

***

### targets?

> `optional` **targets**: `string`[]

Defined in: main.ts:172571

domains, subdomains or webpages to get rank for
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

[`IBacklinksBulkRanksLiveRequestInfo`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md).[`targets`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md#targets)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:172599

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:172622

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksBulkRanksLiveRequestInfo`

Defined in: main.ts:172615

#### Parameters

##### data

`any`

#### Returns

`BacklinksBulkRanksLiveRequestInfo`
