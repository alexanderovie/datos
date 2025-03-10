[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataBingAudienceEstimationTaskPostRequestInfo

# Interface: IKeywordsDataBingAudienceEstimationTaskPostRequestInfo

Defined in: main.ts:149858

## Indexable

\[`key`: `string`\]: `any`

## Properties

### age?

> `optional` **age**: `string`[]

Defined in: main.ts:149883

selection of age ranges for targeting
possible values: eighteen_to_twenty_four, fifty_to_sixty_four, sixty_five_and_above, thirteen_to_seventeen, thirty_five_to_forty_nine, twenty_five_to_thirty_four, unknown, zero_to_twelve

***

### bid?

> `optional` **bid**: `number`

Defined in: main.ts:149886

desired bid setting value in USD
maximum value: 1000

***

### daily\_budget?

> `optional` **daily\_budget**: `number`

Defined in: main.ts:149889

daily campaign budget value in USD
maximum value: 10000

***

### gender?

> `optional` **gender**: `string`[]

Defined in: main.ts:149892

gender to target
possible values: male, female, unknown

***

### industry?

> `optional` **industry**: `string`[]

Defined in: main.ts:149896

industry of LinkedIn profile targeting
if you use this field, you can receive the list of available industry names  with industry_id by making a separate request to the https://api.dataforseo.com/v3/keywords_data/bing/audience_estimation/industries
example: 806301758

***

### job\_function?

> `optional` **job\_function**: `string`[]

Defined in: main.ts:149900

job function of LinkedIn profile targeting
if you use this field, you can receive the list of available job function names  with job_function_id by making a separate request to the https://api.dataforseo.com/v3/keywords_data/bing/audience_estimation/job_functions
example: 806300451

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:149872

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:149880

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius (in km)” format
the data will be provided for the country the specified coordinates belong to
example:
29.6821525,-82.4098881,100

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:149865

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom
