[**Documentation**](../README.md)

***

[Documentation](../README.md) / AboutThisResultElement

# Class: AboutThisResultElement

Defined in: main.ts:23895

## Implements

- [`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AboutThisResultElement()

> **new AboutThisResultElement**(`data`?): [`AboutThisResultElement`](AboutThisResultElement.md)

Defined in: main.ts:23918

#### Parameters

##### data?

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md)

#### Returns

[`AboutThisResultElement`](AboutThisResultElement.md)

## Properties

### language?

> `optional` **language**: `string`

Defined in: main.ts:23908

the language of the result

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`language`](../interfaces/IAboutThisResultElement.md#language)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:23910

location for which the result is relevant

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`location`](../interfaces/IAboutThisResultElement.md#location)

***

### related\_terms?

> `optional` **related\_terms**: `string`[]

Defined in: main.ts:23914

related search terms that appear in the result

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`related_terms`](../interfaces/IAboutThisResultElement.md#related_terms)

***

### search\_terms?

> `optional` **search\_terms**: `string`[]

Defined in: main.ts:23912

matching search terms that appear in the result

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`search_terms`](../interfaces/IAboutThisResultElement.md#search_terms)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:23901

source of additional information about the result

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`source`](../interfaces/IAboutThisResultElement.md#source)

***

### source\_info?

> `optional` **source\_info**: `string`

Defined in: main.ts:23904

additional information about the result
description of the website from Wikipedia or another additional context

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`source_info`](../interfaces/IAboutThisResultElement.md#source_info)

***

### source\_url?

> `optional` **source\_url**: `string`

Defined in: main.ts:23906

URL to full information from the 'source'

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`source_url`](../interfaces/IAboutThisResultElement.md#source_url)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23897

type of element

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`type`](../interfaces/IAboutThisResultElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:23899

result’s URL

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`url`](../interfaces/IAboutThisResultElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:23927

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:23960

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AboutThisResultElement`](AboutThisResultElement.md)

Defined in: main.ts:23953

#### Parameters

##### data

`any`

#### Returns

[`AboutThisResultElement`](AboutThisResultElement.md)
