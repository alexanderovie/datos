[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAvailableLanguages

# Interface: IAvailableLanguages

Defined in: main.ts:100742

## Indexable

\[`key`: `string`\]: `any`

## Properties

### available\_sources?

> `optional` **available\_sources**: `string`[]

Defined in: main.ts:100746

supported sources
contains the sources of data supported for a specific location and language combination
only google and bing are currently available

***

### keywords?

> `optional` **keywords**: `number`

Defined in: main.ts:100752

the number of keywords available for the given location and language

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:100750

language code according to ISO 639-1

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:100748

language name

***

### serps?

> `optional` **serps**: `number`

Defined in: main.ts:100754

the number of SERP pages available for the given location and language
