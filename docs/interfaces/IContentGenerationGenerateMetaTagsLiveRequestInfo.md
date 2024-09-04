[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IContentGenerationGenerateMetaTagsLiveRequestInfo

# Interface: IContentGenerationGenerateMetaTagsLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### creativity\_index?

> `optional` **creativity\_index**: `number`

creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1;
default value: 0.8
learn more about this parameter on our help center

#### Defined in

main.ts:170313

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:170319

***

### text?

> `optional` **text**: `string`

initial target text
required field
text input for generating content;
can contain from 1 to 500 tokens
learn more about tokens on our help center

#### Defined in

main.ts:170306
