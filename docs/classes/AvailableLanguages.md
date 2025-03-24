[**Documentation**](../README.md)

***

[Documentation](../README.md) / AvailableLanguages

# Class: AvailableLanguages

Defined in: main.ts:102576

## Implements

- [`IAvailableLanguages`](../interfaces/IAvailableLanguages.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AvailableLanguages**(`data`?): `AvailableLanguages`

Defined in: main.ts:102592

#### Parameters

##### data?

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md)

#### Returns

`AvailableLanguages`

## Properties

### available\_sources?

> `optional` **available\_sources**: `string`[]

Defined in: main.ts:102580

supported sources
contains the sources of data supported for a specific location and language combination
only google and bing are currently available

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`available_sources`](../interfaces/IAvailableLanguages.md#available_sources)

***

### keywords?

> `optional` **keywords**: `number`

Defined in: main.ts:102586

the number of keywords available for the given location and language

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`keywords`](../interfaces/IAvailableLanguages.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:102584

language code according to ISO 639-1

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`language_code`](../interfaces/IAvailableLanguages.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:102582

language name

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`language_name`](../interfaces/IAvailableLanguages.md#language_name)

***

### serps?

> `optional` **serps**: `number`

Defined in: main.ts:102588

the number of SERP pages available for the given location and language

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`serps`](../interfaces/IAvailableLanguages.md#serps)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:102601

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:102626

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AvailableLanguages`

Defined in: main.ts:102619

#### Parameters

##### data

`any`

#### Returns

`AvailableLanguages`
