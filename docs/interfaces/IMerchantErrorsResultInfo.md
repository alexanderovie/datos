[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantErrorsResultInfo

# Interface: IMerchantErrorsResultInfo

Defined in: main.ts:196696

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:196703

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### error\_code?

> `optional` **error\_code**: `number`

Defined in: main.ts:196707

error code

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:196710

error message or error URL
error message (see full list) or URL that caused an error

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:196705

corresponding API function

***

### http\_code?

> `optional` **http\_code**: `number`

Defined in: main.ts:196717

HTTP status code

***

### http\_method?

> `optional` **http\_method**: `string`

Defined in: main.ts:196715

HTTP method

***

### http\_response?

> `optional` **http\_response**: `string`

Defined in: main.ts:196723

HTTP response
server response

***

### http\_time?

> `optional` **http\_time**: `number`

Defined in: main.ts:196720

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

***

### http\_url?

> `optional` **http\_url**: `string`

Defined in: main.ts:196713

URL that caused an error
URL you used for making an API call or pingback/postback URL

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:196698

id of the task
