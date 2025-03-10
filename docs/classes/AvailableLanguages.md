[**Documentation**](../README.md)

***

[Documentation](../README.md) / AvailableLanguages

# Class: AvailableLanguages

Defined in: main.ts:100673

## Implements

- [`IAvailableLanguages`](../interfaces/IAvailableLanguages.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AvailableLanguages()

> **new AvailableLanguages**(`data`?): [`AvailableLanguages`](AvailableLanguages.md)

Defined in: main.ts:100689

#### Parameters

##### data?

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md)

#### Returns

[`AvailableLanguages`](AvailableLanguages.md)

## Properties

### available\_sources?

> `optional` **available\_sources**: `string`[]

Defined in: main.ts:100677

supported sources
contains the sources of data supported for a specific location and language combination
only google and bing are currently available

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`available_sources`](../interfaces/IAvailableLanguages.md#available_sources)

***

### keywords?

> `optional` **keywords**: `number`

Defined in: main.ts:100683

the number of keywords available for the given location and language

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`keywords`](../interfaces/IAvailableLanguages.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:100681

language code according to ISO 639-1

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`language_code`](../interfaces/IAvailableLanguages.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:100679

language name

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`language_name`](../interfaces/IAvailableLanguages.md#language_name)

***

### serps?

> `optional` **serps**: `number`

Defined in: main.ts:100685

the number of SERP pages available for the given location and language

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`serps`](../interfaces/IAvailableLanguages.md#serps)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:100698

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:100723

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AvailableLanguages`](AvailableLanguages.md)

Defined in: main.ts:100716

#### Parameters

##### data

`any`

#### Returns

[`AvailableLanguages`](AvailableLanguages.md)
