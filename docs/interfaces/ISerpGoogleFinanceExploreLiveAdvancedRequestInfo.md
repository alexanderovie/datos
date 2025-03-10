[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleFinanceExploreLiveAdvancedRequestInfo

# Interface: ISerpGoogleFinanceExploreLiveAdvancedRequestInfo

Defined in: main.ts:89194

## Indexable

\[`key`: `string`\]: `any`

## Properties

### device?

> `optional` **device**: `string`

Defined in: main.ts:89226

device type
optional field
possible value: desktop

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:89222

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:89215

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:89208

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:89201

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

***

### news\_type?

> `optional` **news\_type**: `string`

Defined in: main.ts:89236

financial news filters
optional field
possible values: top_stories, local_market, world_markets
default value: top_stories
Note: if you specify local_market or world_markets, the charge per task will be multiplied by 2

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:89230

device operating system
optional field
possible values: windows

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:89242

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
