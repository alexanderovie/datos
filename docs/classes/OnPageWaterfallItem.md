[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageWaterfallItem

# Class: OnPageWaterfallItem

Defined in: main.ts:182688

## Implements

- [`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageWaterfallItem**(`data`?): `OnPageWaterfallItem`

Defined in: main.ts:182724

#### Parameters

##### data?

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md)

#### Returns

`OnPageWaterfallItem`

## Properties

### connection\_time?

> `optional` **connection\_time**: `number`

Defined in: main.ts:182699

time to connect to a server
the time it takes until the connection with a server is established (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`connection_time`](../interfaces/IOnPageWaterfallItem.md#connection_time)

***

### dom\_complete?

> `optional` **dom\_complete**: `number`

Defined in: main.ts:182696

time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`dom_complete`](../interfaces/IOnPageWaterfallItem.md#dom_complete)

***

### download\_time?

> `optional` **download\_time**: `number`

Defined in: main.ts:182709

time it takes for a browser to receive a response (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`download_time`](../interfaces/IOnPageWaterfallItem.md#download_time)

***

### duration\_time?

> `optional` **duration\_time**: `number`

Defined in: main.ts:182711

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`duration_time`](../interfaces/IOnPageWaterfallItem.md#duration_time)

***

### fetch\_end?

> `optional` **fetch\_end**: `number`

Defined in: main.ts:182717

time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`fetch_end`](../interfaces/IOnPageWaterfallItem.md#fetch_end)

***

### fetch\_start?

> `optional` **fetch\_start**: `number`

Defined in: main.ts:182714

time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`fetch_start`](../interfaces/IOnPageWaterfallItem.md#fetch_start)

***

### page\_url?

> `optional` **page\_url**: `string`

Defined in: main.ts:182690

URL of the page

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`page_url`](../interfaces/IOnPageWaterfallItem.md#page_url)

***

### request\_sent\_time?

> `optional` **request\_sent\_time**: `number`

Defined in: main.ts:182705

time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`request_sent_time`](../interfaces/IOnPageWaterfallItem.md#request_sent_time)

***

### resources?

> `optional` **resources**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:182720

resource-specific timing
contains separate arrays with timing for each resource found on the page

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`resources`](../interfaces/IOnPageWaterfallItem.md#resources)

***

### time\_to\_interactive?

> `optional` **time\_to\_interactive**: `number`

Defined in: main.ts:182693

Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`time_to_interactive`](../interfaces/IOnPageWaterfallItem.md#time_to_interactive)

***

### time\_to\_secure\_connection?

> `optional` **time\_to\_secure\_connection**: `number`

Defined in: main.ts:182702

time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`time_to_secure_connection`](../interfaces/IOnPageWaterfallItem.md#time_to_secure_connection)

***

### waiting\_time?

> `optional` **waiting\_time**: `number`

Defined in: main.ts:182707

time to first byte (TTFB) in milliseconds

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`waiting_time`](../interfaces/IOnPageWaterfallItem.md#waiting_time)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:182733

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:182765

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageWaterfallItem`

Defined in: main.ts:182758

#### Parameters

##### data

`any`

#### Returns

`OnPageWaterfallItem`
