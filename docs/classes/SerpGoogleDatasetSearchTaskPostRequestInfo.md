[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetSearchTaskPostRequestInfo

# Class: SerpGoogleDatasetSearchTaskPostRequestInfo

Defined in: main.ts:59792

## Implements

- [`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleDatasetSearchTaskPostRequestInfo**(`data?`): `SerpGoogleDatasetSearchTaskPostRequestInfo`

Defined in: main.ts:59894

#### Parameters

##### data?

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md)

#### Returns

`SerpGoogleDatasetSearchTaskPostRequestInfo`

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:59817

parsing depth
optional field
number of results in SERP
default value: 20
max value: 700
Note: your account will be billed per each SERP containing up to 20 results;
thus, setting a depth above 20 may result in additional charges if the search engine returns more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[`depth`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#depth)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:59832

device type
optional field
possible value: desktop

#### Implementation of

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[`device`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#device)

***

### file\_formats?

> `optional` **file\_formats**: `string`[]

Defined in: main.ts:59845

file formats of the dataset
optional field
possible values: other, archive, text, image, document, tabular

#### Implementation of

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[`file_formats`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#file_formats)

***

### is\_free?

> `optional` **is\_free**: `boolean`

Defined in: main.ts:59853

indicates whether displayed datasets are free
optional field
possible values: true, false

#### Implementation of

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[`is_free`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#is_free)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:59800

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”.
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:59828

search engine language code
optional field
possible value:
en

#### Implementation of

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:59823

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English

#### Implementation of

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#language_name)

***

### last\_updated?

> `optional` **last\_updated**: `string`

Defined in: main.ts:59841

last time the dataset was updated
optional field
possible values: 1m, 1y, 3y

#### Implementation of

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[`last_updated`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#last_updated)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:59837

device operating system
optional field
possible values: windows, macos
default value: windows

#### Implementation of

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[`os`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#os)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:59890

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

#### Implementation of

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:59879

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
only value: advanced

#### Implementation of

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:59874

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

#### Implementation of

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:59808

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#priority)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:59863

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#tag)

***

### topics?

> `optional` **topics**: `string`[]

Defined in: main.ts:59857

dataset topics
optional field
possible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering

#### Implementation of

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[`topics`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#topics)

***

### usage\_rights?

> `optional` **usage\_rights**: `string`

Defined in: main.ts:59849

usage rights of the dataset
optional field
possible values: commercial, noncommercial

#### Implementation of

[`ISerpGoogleDatasetSearchTaskPostRequestInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md).[`usage_rights`](../interfaces/ISerpGoogleDatasetSearchTaskPostRequestInfo.md#usage_rights)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:59903

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:59943

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleDatasetSearchTaskPostRequestInfo`

Defined in: main.ts:59936

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleDatasetSearchTaskPostRequestInfo`
