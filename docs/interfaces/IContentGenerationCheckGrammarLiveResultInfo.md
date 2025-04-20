[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentGenerationCheckGrammarLiveResultInfo

# Interface: IContentGenerationCheckGrammarLiveResultInfo

Defined in: main.ts:195159

## Indexable

\[`key`: `string`\]: `any`

## Properties

### initial\_text?

> `optional` **initial\_text**: `string`

Defined in: main.ts:195167

initial text in the POST request

***

### input\_tokens?

> `optional` **input\_tokens**: `number`

Defined in: main.ts:195161

number of input tokens in the POST request

***

### items?

> `optional` **items**: [`ContentGenerationCheckGrammarLiveItem`](../classes/ContentGenerationCheckGrammarLiveItem.md)[]

Defined in: main.ts:195173

contains grammar or spelling errors and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:195171

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:195169

language code in the POST request

***

### new\_tokens?

> `optional` **new\_tokens**: `number`

Defined in: main.ts:195165

number of new tokens in the response

***

### output\_tokens?

> `optional` **output\_tokens**: `number`

Defined in: main.ts:195163

number of output tokens in the response
