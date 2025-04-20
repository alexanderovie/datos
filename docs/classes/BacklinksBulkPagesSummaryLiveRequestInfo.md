[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkPagesSummaryLiveRequestInfo

# Class: BacklinksBulkPagesSummaryLiveRequestInfo

Defined in: main.ts:174712

## Implements

- [`IBacklinksBulkPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksBulkPagesSummaryLiveRequestInfo**(`data?`): `BacklinksBulkPagesSummaryLiveRequestInfo`

Defined in: main.ts:174743

#### Parameters

##### data?

[`IBacklinksBulkPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md)

#### Returns

`BacklinksBulkPagesSummaryLiveRequestInfo`

## Properties

### include\_subdomains?

> `optional` **include\_subdomains**: `boolean`

Defined in: main.ts:174724

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md).[`include_subdomains`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md#include_subdomains)

***

### rank\_scale?

> `optional` **rank\_scale**: `string`

Defined in: main.ts:174733

defines the scale used for calculating and displaying the rank, domain_from_rank, and page_from_rank values
optional field
you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale
possible values:
one_hundred — rank values are displayed on a 0–100 scale
one_thousand — rank values are displayed on a 0–1000 scale
default value: one_thousand
learn more about how this parameter works and how ranking metrics are calculated in this Help Center article

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md).[`rank_scale`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md#rank_scale)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:174739

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md#tag)

***

### targets?

> `optional` **targets**: `string`[]

Defined in: main.ts:174719

domains, subdomains or webpages to get summary data for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)
you can specify up to 1000 pages, domains, or subdomains in each request.
note that the URLs you set in a single request cannot belong to more than 100 different domains.

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md).[`targets`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md#targets)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:174752

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:174776

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksBulkPagesSummaryLiveRequestInfo`

Defined in: main.ts:174769

#### Parameters

##### data

`any`

#### Returns

`BacklinksBulkPagesSummaryLiveRequestInfo`
