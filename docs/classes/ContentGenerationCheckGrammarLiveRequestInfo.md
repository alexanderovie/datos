[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationCheckGrammarLiveRequestInfo

# Class: ContentGenerationCheckGrammarLiveRequestInfo

Defined in: main.ts:194344

## Implements

- [`IContentGenerationCheckGrammarLiveRequestInfo`](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentGenerationCheckGrammarLiveRequestInfo**(`data`?): `ContentGenerationCheckGrammarLiveRequestInfo`

Defined in: main.ts:194367

#### Parameters

##### data?

[`IContentGenerationCheckGrammarLiveRequestInfo`](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md)

#### Returns

`ContentGenerationCheckGrammarLiveRequestInfo`

## Properties

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:194353

code of the text language
required field if you do not specify language_name
see the List of Languages for Content Generation Check Grammar API

#### Implementation of

[`IContentGenerationCheckGrammarLiveRequestInfo`](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md).[`language_code`](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:194357

name of the text language
required field if you do not specify language_code
see the List of Languages for Content Generation Check Grammar API

#### Implementation of

[`IContentGenerationCheckGrammarLiveRequestInfo`](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md).[`language_name`](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md#language_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:194363

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentGenerationCheckGrammarLiveRequestInfo`](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md).[`tag`](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md#tag)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:194349

target text
required field
can contain from 1 to 10000 tokens
learn more about tokens on our help center

#### Implementation of

[`IContentGenerationCheckGrammarLiveRequestInfo`](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md).[`text`](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md#text)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:194376

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:194396

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ContentGenerationCheckGrammarLiveRequestInfo`

Defined in: main.ts:194389

#### Parameters

##### data

`any`

#### Returns

`ContentGenerationCheckGrammarLiveRequestInfo`
