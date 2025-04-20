[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentGenerationGenerateMetaTagsLiveRequestInfo

# Interface: IContentGenerationGenerateMetaTagsLiveRequestInfo

Defined in: main.ts:194130

## Indexable

\[`key`: `string`\]: `any`

## Properties

### creativity\_index?

> `optional` **creativity\_index**: `number`

Defined in: main.ts:194143

creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1;
default value: 0.8
learn more about this parameter on our help center

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:194149

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:194136

initial target text
required field
text input for generating content;
can contain from 1 to 500 tokens
learn more about tokens on our help center
