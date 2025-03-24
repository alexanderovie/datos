[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixStatusResultInfo

# Class: AppendixStatusResultInfo

Defined in: main.ts:250766

## Implements

- [`IAppendixStatusResultInfo`](../interfaces/IAppendixStatusResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppendixStatusResultInfo**(`data`?): `AppendixStatusResultInfo`

Defined in: main.ts:250797

#### Parameters

##### data?

[`IAppendixStatusResultInfo`](../interfaces/IAppendixStatusResultInfo.md)

#### Returns

`AppendixStatusResultInfo`

## Properties

### api?

> `optional` **api**: `string`

Defined in: main.ts:250781

name of the API
the list of APIs:
serp
keywords_data
appendix
dataforseo_labs
domain_analytics
merchant
on_page
business_data
backlinks
app_data
content_analysis
content_generation

#### Implementation of

[`IAppendixStatusResultInfo`](../interfaces/IAppendixStatusResultInfo.md).[`api`](../interfaces/IAppendixStatusResultInfo.md#api)

***

### endpoints?

> `optional` **endpoints**: [`AppendixStatusEndpointsInfo`](AppendixStatusEndpointsInfo.md)[]

Defined in: main.ts:250793

array of objects that contain status information for API endpoints

#### Implementation of

[`IAppendixStatusResultInfo`](../interfaces/IAppendixStatusResultInfo.md).[`endpoints`](../interfaces/IAppendixStatusResultInfo.md#endpoints)

***

### status?

> `optional` **status**: `string`

Defined in: main.ts:250791

current status
you can find all information about your API statuses for the last 60 days here
the list of possible current statuses:
major_outage
partial_outage
long_response_time
long_execution_time
webhook_delay
send_delay

#### Implementation of

[`IAppendixStatusResultInfo`](../interfaces/IAppendixStatusResultInfo.md).[`status`](../interfaces/IAppendixStatusResultInfo.md#status)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:250806

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:250829

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppendixStatusResultInfo`

Defined in: main.ts:250822

#### Parameters

##### data

`any`

#### Returns

`AppendixStatusResultInfo`
