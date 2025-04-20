[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo

# Class: KeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo

Defined in: main.ts:138704

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo**(`data?`): `KeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`

Defined in: main.ts:138818

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md)

#### Returns

`KeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:138767

starting date of the time range
optional field
date format: "yyyy-mm-dd"
minimal value: 4 years from the current date
by default, data is returned for the past 12 months;
Note: the indicated date cannot be greater than that specified in date_to and/or yesterday’s date;if Status endpoint returns false in the actual_data field, date_from can be set to the month before last and prior;
if Status endpoint returns true in the actual_data field, date_from can be set to the last month and prior

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:138775

ending date of the time range
optional field
Note: the indicated date cannot be greater than the past month, Google Ads does not return data on the current month;
if you don’t specify this field, yesterday’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2022-11-30"

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md#date_to)

***

### include\_adult\_keywords?

> `optional` **include\_adult\_keywords**: `boolean`

Defined in: main.ts:138781

include keywords associated with adult content
optional field
if set to true, adult keywords will be included in the response
default value: false
note that the API may return no data for such keywords due to Google Ads restrictions

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md).[`include_adult_keywords`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md#include_adult_keywords)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:138717

keywords
required field
The maximum number of keywords you can specify: 1000
The maximum number of characters for each keyword: 80
The maximum number of words for each keyword phrase: 10
the keywords you specify will be converted to a lowercase format
Note #1: Google Ads may return no data for certain groups of keywords;
Note #2: Google Ads provides combined search volume values for groups of similar keywords
to obtain search volume for similar keywords, we recommend submitting such keywords in separate requests;
Note #3: Google Ads doesn’t allow using certain symbols and characters (e.g., UTF symbols, emojis), so you can’t use them when setting a task;
to learn more about which symbols and characters can be used, please refer to this article
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:138754

search engine language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
en

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:138748

full name of search engine language
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
English

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:138733

search engine location code
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_coordinate;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
2840

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:138742

GPS coordinates of a location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_code;
location_coordinate parameter should be specified in the “latitude,longitude” format;
the data will be provided for the country the specified coordinates belong to;
example:
52.6178549,-155.352142

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:138725

full name of search engine location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md#location_name)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:138808

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special character in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md#pingback_url)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:138797

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special character in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md).[`postback_url`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md#postback_url)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:138759

include Google search partners
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Google and partner sites that host Google search;
default value: false – results are returned for Google search sites

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md#search_partners)

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: main.ts:138786

results sorting parameters
optional field
use these parameters to sort the results by relevance, search_volume, competition_index, low_top_of_page_bid, or high_top_of_page_bid in the descending order
default value: relevance

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md).[`sort_by`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md#sort_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:138814

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data array of the response

#### Implementation of

[`IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md).[`tag`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:138827

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:138861

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`

Defined in: main.ts:138854

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`
