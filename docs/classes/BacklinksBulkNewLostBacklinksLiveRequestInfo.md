[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkNewLostBacklinksLiveRequestInfo

# Class: BacklinksBulkNewLostBacklinksLiveRequestInfo

Defined in: main.ts:173564

## Implements

- [`IBacklinksBulkNewLostBacklinksLiveRequestInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksBulkNewLostBacklinksLiveRequestInfo**(`data`?): `BacklinksBulkNewLostBacklinksLiveRequestInfo`

Defined in: main.ts:173606

#### Parameters

##### data?

[`IBacklinksBulkNewLostBacklinksLiveRequestInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveRequestInfo.md)

#### Returns

`BacklinksBulkNewLostBacklinksLiveRequestInfo`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:173596

starting date of the time range
optional field
this field indicates the date which will be used as a threshold for new and lost backlinks;
the backlinks that appeared in our index after the specified date will be considered as new;
the backlinks that weren’t found after the specified date, but were present before, will be considered as lost;
default value: today’s date -(minus) one month;
e.g. if today is 2021-10-13, default date_from will be 2021-09-13.
minimum value equals today’s date -(minus) one year;
e.g. if today is 2021-10-13, minimum date_from will be 2020-10-13.
date format: "yyyy-mm-dd"
example:
"2021-01-01"

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveRequestInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveRequestInfo.md).[`date_from`](../interfaces/IBacklinksBulkNewLostBacklinksLiveRequestInfo.md#date_from)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:173602

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveRequestInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksBulkNewLostBacklinksLiveRequestInfo.md#tag)

***

### targets?

> `optional` **targets**: `string`[]

Defined in: main.ts:173583

domains, subdomains or webpages to get new & lost backlinks for
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

[`IBacklinksBulkNewLostBacklinksLiveRequestInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveRequestInfo.md).[`targets`](../interfaces/IBacklinksBulkNewLostBacklinksLiveRequestInfo.md#targets)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173615

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173638

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksBulkNewLostBacklinksLiveRequestInfo`

Defined in: main.ts:173631

#### Parameters

##### data

`any`

#### Returns

`BacklinksBulkNewLostBacklinksLiveRequestInfo`
