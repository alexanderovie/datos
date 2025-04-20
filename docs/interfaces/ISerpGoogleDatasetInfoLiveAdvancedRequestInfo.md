[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleDatasetInfoLiveAdvancedRequestInfo

# Interface: ISerpGoogleDatasetInfoLiveAdvancedRequestInfo

Defined in: main.ts:62846

## Indexable

\[`key`: `string`\]: `any`

## Properties

### dataset\_id?

> `optional` **dataset\_id**: `string`

Defined in: main.ts:62852

ID of the dataset
required field
you can find dataset ID in the dataset URL or dataset item of Google Dataset Search result
example:
L2cvMTFqbl85ZHN6MQ==

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:62868

device type
optional field
possible value: desktop

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:62864

search engine language code
optional field
if you use this field, you don’t need to specify language_name
possible value:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:62858

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:62873

device operating system
optional field
possible values: windows, macos
default value: windows

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:62879

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
