[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentGenerationCheckGrammarLiveRequestInfo

# Interface: IContentGenerationCheckGrammarLiveRequestInfo

Defined in: main.ts:194410

## Indexable

\[`key`: `string`\]: `any`

## Properties

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:194419

code of the text language
required field if you do not specify language_name
see the List of Languages for Content Generation Check Grammar API

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:194423

name of the text language
required field if you do not specify language_code
see the List of Languages for Content Generation Check Grammar API

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:194429

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:194415

target text
required field
can contain from 1 to 10000 tokens
learn more about tokens on our help center
