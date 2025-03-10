[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageWaterfallItem

# Interface: IOnPageWaterfallItem

Defined in: main.ts:180382

## Indexable

\[`key`: `string`\]: `any`

## Properties

### connection\_time?

> `optional` **connection\_time**: `number`

Defined in: main.ts:180393

time to connect to a server
the time it takes until the connection with a server is established (in milliseconds)

***

### dom\_complete?

> `optional` **dom\_complete**: `number`

Defined in: main.ts:180390

time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds)

***

### download\_time?

> `optional` **download\_time**: `number`

Defined in: main.ts:180403

time it takes for a browser to receive a response (in milliseconds)

***

### duration\_time?

> `optional` **duration\_time**: `number`

Defined in: main.ts:180405

total time it takes until a browser receives a complete response from a server (in milliseconds)

***

### fetch\_end?

> `optional` **fetch\_end**: `number`

Defined in: main.ts:180411

time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page

***

### fetch\_start?

> `optional` **fetch\_start**: `number`

Defined in: main.ts:180408

time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page

***

### page\_url?

> `optional` **page\_url**: `string`

Defined in: main.ts:180384

URL of the page

***

### request\_sent\_time?

> `optional` **request\_sent\_time**: `number`

Defined in: main.ts:180399

time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds)

***

### resources?

> `optional` **resources**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:180414

resource-specific timing
contains separate arrays with timing for each resource found on the page

***

### time\_to\_interactive?

> `optional` **time\_to\_interactive**: `number`

Defined in: main.ts:180387

Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds)

***

### time\_to\_secure\_connection?

> `optional` **time\_to\_secure\_connection**: `number`

Defined in: main.ts:180396

time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds)

***

### waiting\_time?

> `optional` **waiting\_time**: `number`

Defined in: main.ts:180401

time to first byte (TTFB) in milliseconds
