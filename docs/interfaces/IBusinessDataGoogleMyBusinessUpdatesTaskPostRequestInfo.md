[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo

# Interface: IBusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo

Defined in: main.ts:227070

## Indexable

\[`key`: `string`\]: `any`

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:227133

parsing depth
optional field
number of updates in SERP
we strongly recommend setting the parsing depth in the multiples of ten, because our systems processes ten updates in a row
please note that Google returns 4490 updates maximum
default value: 10

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:227081

keyword
required field
the keyword you specify should indicate the name of the local establishment
you can specify up to 700 characters in the keyword filed
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;this field can also be used to pass cid (unique, google-defined id of the business entity) or place_id (identifier of the business entity in Google Maps) parameters
example:
cid:194604053573767737
place_id:GhIJQWDl0CIeQUARxks3icF8U8A
learn more about the cid and place_id identifiers in this help center article

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:227126

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:227119

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to the https://api.dataforseo.com/v3/business_data/google/languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:227103

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:227112

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9
example:
53.476225,-2.243572,200

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:227096

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:227161

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

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:227150

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:227089

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:227139

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
