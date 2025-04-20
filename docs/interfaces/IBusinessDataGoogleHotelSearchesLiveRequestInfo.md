[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleHotelSearchesLiveRequestInfo

# Interface: IBusinessDataGoogleHotelSearchesLiveRequestInfo

Defined in: main.ts:230248

## Indexable

\[`key`: `string`\]: `any`

## Properties

### adults?

> `optional` **adults**: `number`

Defined in: main.ts:230334

number of adults
optional field
if you don’t specify this field, the default value of 2 will be applied;
note that you can specify up to 6 persons including both adults and children
example:
1

***

### amenities?

> `optional` **amenities**: `string`[]

Defined in: main.ts:230417

hotel amenities
optional field
you can use this field to specify different hotel amenities
example:
  [
            "free_parking",
            "pets_allowed"
        ]

possible values:
"air_conditioning",
"all_inclusive_available",
"bar",
"free_breakfast",
"fitness_center",
"kid_friendly",
"free_parking",
"pets_allowed",
"pool",
"restaurant",
"room_service",
"spa",
"free_wifi",
"parking",
"indoor_pool",
"outdoor_pool",
"wheelchair_accessible",
"beach_access"

***

### check\_in?

> `optional` **check\_in**: `string`

Defined in: main.ts:230313

check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"
Note: the value cannot precede the today’s date

***

### check\_out?

> `optional` **check\_out**: `string`

Defined in: main.ts:230322

check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"
Note: the value cannot be less than or equal to check_in;
the range between check_in and check_out values cannot exceed 30 days

***

### children?

> `optional` **children**: `string`[]

Defined in: main.ts:230344

number and age of children
optional field
if you don’t specify this field, no children will be included in the search;
age of child can be from 0 to 17;
note that you can specify up to 6 persons including both adults and children
set the following value if you want to include one 14-year-old child:
[14]
set the following value if you want to include one 13-year-old child and one 8-year-old child:
[13,8]

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:230327

currency
optional field
example:
"USD"

***

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:230305

parsing depth
optional field
number of results in Google Hotels
default value: 20 organic results
max value: 140
Note: your account will be billed per each 20 organic results regardless of paid listings in the response;
thus, setting a depth above 20 may result in additional charges if Google Hotels return more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

***

### free\_cancellation?

> `optional` **free\_cancellation**: `boolean`

Defined in: main.ts:230383

hotels with a free cancellation
optional field
set this field to true if you want to get the list of hotels with free cancellation of reservations
default value: false

***

### is\_vacation\_rentals?

> `optional` **is\_vacation\_rentals**: `boolean`

Defined in: main.ts:230388

search for vacation rentals
optional field
set this field to true if you want to get the list of vacation rentals instead of hotels
default value: false

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:230258

keyword
optional field
the keyword you specify is used to search for the list of hotels;
if you don’t use this field, we will return the list of hotels found in a specified location;
you can specify up to 700 characters in the keyword filed
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
Note: in order to obtain accurate search results, the location name is appended to the keyword automatically
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:230296

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:230289

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:230273

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:230282

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
Note: if the coordinates are used to set a location, the search will occur in the nearest settlement
example:
53.476225,-2.243572

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:230266

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom
Note: in order to obtain accurate search results, the location_name you specify will be automatically appended to the keyword

***

### max\_price?

> `optional` **max\_price**: `number`

Defined in: main.ts:230378

maximum price per night
optional field
the currency of this value depends on the currency field
example:
600

***

### min\_price?

> `optional` **min\_price**: `number`

Defined in: main.ts:230372

minimum price per night
optional field
the currency of this value depends on the currency field
example:
100

***

### min\_rating?

> `optional` **min\_rating**: `number`

Defined in: main.ts:230356

minimum rating
optional field
you can use this field to specify guest rating higher than a certain value
example:
2.5

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: main.ts:230366

results sorting parameters
optional field
you can use this field to sort the results
possible types of sorting:
relevance – sort by most relevant
lowest_price – sort by the lowest price
highest_rating – sort by highest rating
most_reviewed – sort by most reviewed
default value: relevance

***

### stars?

> `optional` **stars**: `string`[]

Defined in: main.ts:230350

hotel stars
optional field
set this field to [5] if you want to get the list of 5-star hotels only
example:
[3,4,5]

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:230423

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
