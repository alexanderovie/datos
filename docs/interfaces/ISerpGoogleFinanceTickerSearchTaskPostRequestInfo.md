[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleFinanceTickerSearchTaskPostRequestInfo

# Interface: ISerpGoogleFinanceTickerSearchTaskPostRequestInfo

Defined in: main.ts:94242

## Indexable

\[`key`: `string`\]: `any`

## Properties

### category?

> `optional` **category**: `string`

Defined in: main.ts:94292

category of financial instruments to search for
optional field
possible values: all, stock, index, mutual_fund, currency, futures
default value: all

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:94251

company or financial instrument name
required field
in this field, you can enter the name of a company or financial instrument to search for relevant tickers;
you can specify up to 700 characters in the keyword field;
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:94279

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:94272

full name of search engine language
required field if you don’t specify language_code 
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:94265

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:94258

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to  https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:94325

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:94314

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:: advanced, html

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:94309

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:94287

task priority
optional field
can take the following values:
1 – normal execution priority (set by default);
2 – high execution priority
You will be additionally charged for the tasks with high execution priority;
The cost can be calculated on the Pricing page

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:94298

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
