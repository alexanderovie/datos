[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixStatusEndpointsInfo

# Class: AppendixStatusEndpointsInfo

Defined in: main.ts:251510

## Implements

- [`IAppendixStatusEndpointsInfo`](../interfaces/IAppendixStatusEndpointsInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppendixStatusEndpointsInfo**(`data?`): `AppendixStatusEndpointsInfo`

Defined in: main.ts:251531

#### Parameters

##### data?

[`IAppendixStatusEndpointsInfo`](../interfaces/IAppendixStatusEndpointsInfo.md)

#### Returns

`AppendixStatusEndpointsInfo`

## Properties

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:251517

name of the endpoint
the list of possible endpoints:
task_get
task_post
live
postback/pingback

#### Implementation of

[`IAppendixStatusEndpointsInfo`](../interfaces/IAppendixStatusEndpointsInfo.md).[`endpoint`](../interfaces/IAppendixStatusEndpointsInfo.md#endpoint)

***

### status?

> `optional` **status**: `string`

Defined in: main.ts:251527

current status
you can find all information about the statuses of our endpoints for the last 60 days here
the list of possible current statuses:
major_outage
partial_outage
long_response_time
long_execution_time
webhook_delay
send_delay

#### Implementation of

[`IAppendixStatusEndpointsInfo`](../interfaces/IAppendixStatusEndpointsInfo.md).[`status`](../interfaces/IAppendixStatusEndpointsInfo.md#status)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:251540

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:251558

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppendixStatusEndpointsInfo`

Defined in: main.ts:251551

#### Parameters

##### data

`any`

#### Returns

`AppendixStatusEndpointsInfo`
