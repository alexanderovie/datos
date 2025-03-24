[**Documentation**](../README.md)

***

[Documentation](../README.md) / AboutThisResultElement

# Class: AboutThisResultElement

Defined in: main.ts:24234

## Implements

- [`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AboutThisResultElement**(`data`?): `AboutThisResultElement`

Defined in: main.ts:24257

#### Parameters

##### data?

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md)

#### Returns

`AboutThisResultElement`

## Properties

### language?

> `optional` **language**: `string`

Defined in: main.ts:24247

the language of the result

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`language`](../interfaces/IAboutThisResultElement.md#language)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:24249

location for which the result is relevant

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`location`](../interfaces/IAboutThisResultElement.md#location)

***

### related\_terms?

> `optional` **related\_terms**: `string`[]

Defined in: main.ts:24253

related search terms that appear in the result

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`related_terms`](../interfaces/IAboutThisResultElement.md#related_terms)

***

### search\_terms?

> `optional` **search\_terms**: `string`[]

Defined in: main.ts:24251

matching search terms that appear in the result

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`search_terms`](../interfaces/IAboutThisResultElement.md#search_terms)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:24240

source of additional information about the result

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`source`](../interfaces/IAboutThisResultElement.md#source)

***

### source\_info?

> `optional` **source\_info**: `string`

Defined in: main.ts:24243

additional information about the result
description of the website from Wikipedia or another additional context

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`source_info`](../interfaces/IAboutThisResultElement.md#source_info)

***

### source\_url?

> `optional` **source\_url**: `string`

Defined in: main.ts:24245

URL to full information from the 'source'

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`source_url`](../interfaces/IAboutThisResultElement.md#source_url)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24236

type of element

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`type`](../interfaces/IAboutThisResultElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:24238

result’s URL

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`url`](../interfaces/IAboutThisResultElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:24266

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:24299

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AboutThisResultElement`

Defined in: main.ts:24292

#### Parameters

##### data

`any`

#### Returns

`AboutThisResultElement`
