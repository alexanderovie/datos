[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo

# Class: DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo

Defined in: main.ts:121410

## Implements

- [`IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo**(`data`?): `DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`

Defined in: main.ts:121473

#### Parameters

##### data?

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md)

#### Returns

`DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`

## Properties

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

Defined in: main.ts:121463

ignore highly similar keywords
optional field
if set to true, only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#ignore_synonyms)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:121458

display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid"]

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md).[`item_types`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#item_types)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:121449

language code
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:121441

full name of the language
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:121433

location code
if you use this field, you don’t have to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:121425

full name of the location
if you use this field, you don’t have to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:121469

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#tag)

***

### targets?

> `optional` **targets**: `string`[]

Defined in: main.ts:121417

target domains and websites
required field
you can specify domains, subdomains, and webpages in this field;
domains and subdomains should be specified without https:// and www.;
pages should be specified with absolute URL, including https:// and www.;
you can set up to 1000 domains, subdomains or webpages

#### Implementation of

[`IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md).[`targets`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#targets)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:121482

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:121514

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`

Defined in: main.ts:121507

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`
