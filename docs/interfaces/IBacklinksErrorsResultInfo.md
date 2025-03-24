[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksErrorsResultInfo

# Interface: IBacklinksErrorsResultInfo

Defined in: main.ts:161221

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:161228

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### error\_code?

> `optional` **error\_code**: `number`

Defined in: main.ts:161232

error code

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:161235

error message or error URL
error message (see full list) or URL that caused an error

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:161230

corresponding API function

***

### http\_code?

> `optional` **http\_code**: `number`

Defined in: main.ts:161242

HTTP status code

***

### http\_method?

> `optional` **http\_method**: `string`

Defined in: main.ts:161240

HTTP method

***

### http\_response?

> `optional` **http\_response**: `string`

Defined in: main.ts:161247

HTTP response
server response

***

### http\_time?

> `optional` **http\_time**: `number`

Defined in: main.ts:161244

time taken by HTTP request

***

### http\_url?

> `optional` **http\_url**: `string`

Defined in: main.ts:161238

URL that caused an error
URL you used for making an API call

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:161223

id of the task
