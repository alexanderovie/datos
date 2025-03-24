[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationGenerateLiveRequestInfo

# Class: ContentGenerationGenerateLiveRequestInfo

Defined in: main.ts:192710

## Implements

- [`IContentGenerationGenerateLiveRequestInfo`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentGenerationGenerateLiveRequestInfo**(`data`?): `ContentGenerationGenerateLiveRequestInfo`

Defined in: main.ts:192803

#### Parameters

##### data?

[`IContentGenerationGenerateLiveRequestInfo`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md)

#### Returns

`ContentGenerationGenerateLiveRequestInfo`

## Properties

### avoid\_starting\_words?

> `optional` **avoid\_starting\_words**: `string`[]

Defined in: main.ts:192781

words or phrases to avoid in the beginning of the generated text
optional field
you can specify up to 50 terms;
example:
["SEO", "search engine optimization"]

#### Implementation of

[`IContentGenerationGenerateLiveRequestInfo`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md).[`avoid_starting_words`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md#avoid_starting_words)

***

### avoid\_words?

> `optional` **avoid\_words**: `string`[]

Defined in: main.ts:192775

words or phrases to avoid when generating a text
optional field
you can specify up to 50 terms;
example:
["term", "optimization"]

#### Implementation of

[`IContentGenerationGenerateLiveRequestInfo`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md).[`avoid_words`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md#avoid_words)

***

### creativity\_index?

> `optional` **creativity\_index**: `number`

Defined in: main.ts:192738

creativity of content generation
optional field
if you use this field, you don’t need to use top_k / top_p / temperature
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
default value: 0.8
learn more about this parameter on our help center

#### Implementation of

[`IContentGenerationGenerateLiveRequestInfo`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md).[`creativity_index`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md#creativity_index)

***

### max\_new\_tokens?

> `optional` **max\_new\_tokens**: `number`

Defined in: main.ts:192723

generation limit for new tokens
required field if max_tokens is not specified
the maximum number of new tokens for generated content;
maximum value: 300;
Note: the number does not include tokens specified in the text field;
learn more about this parameter on our help center

#### Implementation of

[`IContentGenerationGenerateLiveRequestInfo`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md).[`max_new_tokens`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md#max_new_tokens)

***

### max\_tokens?

> `optional` **max\_tokens**: `number`

Defined in: main.ts:192730

generation limit for all tokens
required field if max_new_tokens is not specified
the maximum total number of tokens for generated content;
maximum value: 1024;
Note: the number includes tokens specified in the text field
learn more about this parameter on our help center

#### Implementation of

[`IContentGenerationGenerateLiveRequestInfo`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md).[`max_tokens`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md#max_tokens)

***

### stop\_words?

> `optional` **stop\_words**: `string`[]

Defined in: main.ts:192787

words or phrases to end the text
optional field
you can specify up to 50 terms;
example:
["now","subscribe"]

#### Implementation of

[`IContentGenerationGenerateLiveRequestInfo`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md).[`stop_words`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md#stop_words)

***

### supplement\_token?

> `optional` **supplement\_token**: `string`

Defined in: main.ts:192793

token for generating subsequent results
optional field
provided in the identical filed of the response to each request;
you can use this parameter to continue the generation of text from the initial response
supplement_token values are unique for each subsequent task

#### Implementation of

[`IContentGenerationGenerateLiveRequestInfo`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md).[`supplement_token`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md#supplement_token)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:192799

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentGenerationGenerateLiveRequestInfo`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md).[`tag`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md#tag)

***

### temperature?

> `optional` **temperature**: `number`

Defined in: main.ts:192769

controls the randomness in the output
optional field
if you use creativity_index, this field will be ignored
the lower the temperature, the more likely the model will choose words with a higher probability of occurrence;
can take values from 0 to 1;
default value: 0.7
learn more about this parameter on our help center

#### Implementation of

[`IContentGenerationGenerateLiveRequestInfo`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md).[`temperature`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md#temperature)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:192716

initial target text
required field
text input for content generation;
can contain from 1 to 500 tokens
learn more about tokens on our help center

#### Implementation of

[`IContentGenerationGenerateLiveRequestInfo`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md).[`text`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md#text)

***

### token\_repetition\_penalty?

> `optional` **token\_repetition\_penalty**: `number`

Defined in: main.ts:192744

token repetition
optional field
limits the repetition of the same tokens in the generated content;
can take values from 0.5 to 2;
default value: 1

#### Implementation of

[`IContentGenerationGenerateLiveRequestInfo`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md).[`token_repetition_penalty`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md#token_repetition_penalty)

***

### top\_k?

> `optional` **top\_k**: `number`

Defined in: main.ts:192752

the number of initial tokens in each iteration for choosing a subsequent word
optional field
if you use creativity_index, this field will be ignored
the higher the number, the more high-probability tokens will be shortlisted for generation;
can take values from 1 to 100;
default value: 40
learn more about this parameter on our help center

#### Implementation of

[`IContentGenerationGenerateLiveRequestInfo`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md).[`top_k`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md#top_k)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: main.ts:192761

excludes initial tokens with probability lower than one
optional field
if you use creativity_index, this field will be ignored
the higher the value, the less low-probability tokens may be shortlisted for generation;
can take values from 0 to 1
default value: 0.9
Note:if both top_k and top_p are used, top_k acts first;
learn more about this parameter on our help center

#### Implementation of

[`IContentGenerationGenerateLiveRequestInfo`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md).[`top_p`](../interfaces/IContentGenerationGenerateLiveRequestInfo.md#top_p)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:192812

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:192853

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ContentGenerationGenerateLiveRequestInfo`

Defined in: main.ts:192846

#### Parameters

##### data

`any`

#### Returns

`ContentGenerationGenerateLiveRequestInfo`
