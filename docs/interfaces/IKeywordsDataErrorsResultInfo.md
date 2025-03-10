[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataErrorsResultInfo

# Interface: IKeywordsDataErrorsResultInfo

Defined in: main.ts:135283

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:135290

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### error\_code?

> `optional` **error\_code**: `number`

Defined in: main.ts:135294

error code

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:135297

error message or error URL
error message (see full list) or URL that caused an error

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:135292

corresponding API function

***

### http\_code?

> `optional` **http\_code**: `number`

Defined in: main.ts:135304

HTTP status code

***

### http\_method?

> `optional` **http\_method**: `string`

Defined in: main.ts:135302

HTTP method

***

### http\_response?

> `optional` **http\_response**: `string`

Defined in: main.ts:135310

HTTP response
server response

***

### http\_time?

> `optional` **http\_time**: `number`

Defined in: main.ts:135307

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

***

### http\_url?

> `optional` **http\_url**: `string`

Defined in: main.ts:135300

URL that caused an error
URL you used for making an API call or pingback/postback URL

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:135285

id of the task
