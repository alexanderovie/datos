[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationCheckGrammarLiveResultInfo

# Class: ContentGenerationCheckGrammarLiveResultInfo

Defined in: main.ts:194554

## Implements

- [`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentGenerationCheckGrammarLiveResultInfo**(`data`?): `ContentGenerationCheckGrammarLiveResultInfo`

Defined in: main.ts:194572

#### Parameters

##### data?

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md)

#### Returns

`ContentGenerationCheckGrammarLiveResultInfo`

## Properties

### initial\_text?

> `optional` **initial\_text**: `string`

Defined in: main.ts:194562

initial text in the POST request

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`initial_text`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#initial_text)

***

### input\_tokens?

> `optional` **input\_tokens**: `number`

Defined in: main.ts:194556

number of input tokens in the POST request

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`input_tokens`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#input_tokens)

***

### items?

> `optional` **items**: [`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)[]

Defined in: main.ts:194568

contains grammar or spelling errors and related data

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`items`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:194566

the number of results returned in the items array

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`items_count`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:194564

language code in the POST request

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`language_code`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#language_code)

***

### new\_tokens?

> `optional` **new\_tokens**: `number`

Defined in: main.ts:194560

number of new tokens in the response

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`new_tokens`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#new_tokens)

***

### output\_tokens?

> `optional` **output\_tokens**: `number`

Defined in: main.ts:194558

number of output tokens in the response

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`output_tokens`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#output_tokens)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:194581

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:194608

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ContentGenerationCheckGrammarLiveResultInfo`

Defined in: main.ts:194601

#### Parameters

##### data

`any`

#### Returns

`ContentGenerationCheckGrammarLiveResultInfo`
