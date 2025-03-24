[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo

# Class: DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo

Defined in: main.ts:115684

## Implements

- [`IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo**(`data`?): `DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`

Defined in: main.ts:115750

#### Parameters

##### data?

[`IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md)

#### Returns

`DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`

## Properties

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

Defined in: main.ts:115730

ignore highly similar keywords
optional field
if set to true, all highly similar keywords will be excluded from the ranking and traffic calculations, the results will be based on data for main keywords from groups of synonyms
default value: false

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#ignore_synonyms)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:115725

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:115716

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#language_name)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:115735

the maximum number of returned results for domain
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#limit)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:115707

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:115698

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#location_name)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:115740

offset in the results array of returned items
optional field
default value: 0
if you specify the 10 value, the first ten items in the results array will be omitted and the data will be provided for the successive items

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#offset)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:115746

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:115689

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Implementation of

[`IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:115759

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:115784

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`

Defined in: main.ts:115777

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`
