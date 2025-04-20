[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingDomainRankOverviewLiveRequestInfo

# Class: DataforseoLabsBingDomainRankOverviewLiveRequestInfo

Defined in: main.ts:129082

## Implements

- [`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsBingDomainRankOverviewLiveRequestInfo**(`data?`): `DataforseoLabsBingDomainRankOverviewLiveRequestInfo`

Defined in: main.ts:129145

#### Parameters

##### data?

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md)

#### Returns

`DataforseoLabsBingDomainRankOverviewLiveRequestInfo`

## Properties

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:129125

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:129116

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#language_name)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:129130

the maximum number of returned results for domain
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#limit)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:129107

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:129097

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#location_name)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:129135

offset in the results array of returned items
optional field
default value: 0
if you specify the 10 value, the first ten items in the results array will be omitted and the data will be provided for the successive items

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#offset)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:129141

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:129087

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[`target`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#target)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:129154

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:129178

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsBingDomainRankOverviewLiveRequestInfo`

Defined in: main.ts:129171

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsBingDomainRankOverviewLiveRequestInfo`
