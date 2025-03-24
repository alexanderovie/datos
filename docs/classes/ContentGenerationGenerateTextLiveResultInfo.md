[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationGenerateTextLiveResultInfo

# Class: ContentGenerationGenerateTextLiveResultInfo

Defined in: main.ts:193348

## Implements

- [`IContentGenerationGenerateTextLiveResultInfo`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentGenerationGenerateTextLiveResultInfo**(`data`?): `ContentGenerationGenerateTextLiveResultInfo`

Defined in: main.ts:193364

#### Parameters

##### data?

[`IContentGenerationGenerateTextLiveResultInfo`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md)

#### Returns

`ContentGenerationGenerateTextLiveResultInfo`

## Properties

### generated\_text?

> `optional` **generated\_text**: `string`

Defined in: main.ts:193356

resulting text

#### Implementation of

[`IContentGenerationGenerateTextLiveResultInfo`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md).[`generated_text`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md#generated_text)

***

### input\_tokens?

> `optional` **input\_tokens**: `number`

Defined in: main.ts:193350

number of input tokens

#### Implementation of

[`IContentGenerationGenerateTextLiveResultInfo`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md).[`input_tokens`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md#input_tokens)

***

### new\_tokens?

> `optional` **new\_tokens**: `number`

Defined in: main.ts:193354

number of new tokens

#### Implementation of

[`IContentGenerationGenerateTextLiveResultInfo`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md).[`new_tokens`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md#new_tokens)

***

### output\_tokens?

> `optional` **output\_tokens**: `number`

Defined in: main.ts:193352

number of output tokens

#### Implementation of

[`IContentGenerationGenerateTextLiveResultInfo`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md).[`output_tokens`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md#output_tokens)

***

### supplement\_token?

> `optional` **supplement\_token**: `string`

Defined in: main.ts:193360

token for generating subsequent results
you can use this parameter to continue the generation from the end of the current result;
supplement_token values are unique for each subsequent task

#### Implementation of

[`IContentGenerationGenerateTextLiveResultInfo`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md).[`supplement_token`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md#supplement_token)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:193373

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:193394

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ContentGenerationGenerateTextLiveResultInfo`

Defined in: main.ts:193387

#### Parameters

##### data

`any`

#### Returns

`ContentGenerationGenerateTextLiveResultInfo`
