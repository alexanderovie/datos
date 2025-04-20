[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationGenerateMetaTagsLiveRequestInfo

# Class: ContentGenerationGenerateMetaTagsLiveRequestInfo

Defined in: main.ts:194066

## Implements

- [`IContentGenerationGenerateMetaTagsLiveRequestInfo`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentGenerationGenerateMetaTagsLiveRequestInfo**(`data?`): `ContentGenerationGenerateMetaTagsLiveRequestInfo`

Defined in: main.ts:194089

#### Parameters

##### data?

[`IContentGenerationGenerateMetaTagsLiveRequestInfo`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md)

#### Returns

`ContentGenerationGenerateMetaTagsLiveRequestInfo`

## Properties

### creativity\_index?

> `optional` **creativity\_index**: `number`

Defined in: main.ts:194079

creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1;
default value: 0.8
learn more about this parameter on our help center

#### Implementation of

[`IContentGenerationGenerateMetaTagsLiveRequestInfo`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md).[`creativity_index`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md#creativity_index)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:194085

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentGenerationGenerateMetaTagsLiveRequestInfo`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md).[`tag`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md#tag)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:194072

initial target text
required field
text input for generating content;
can contain from 1 to 500 tokens
learn more about tokens on our help center

#### Implementation of

[`IContentGenerationGenerateMetaTagsLiveRequestInfo`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md).[`text`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md#text)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:194098

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:194117

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ContentGenerationGenerateMetaTagsLiveRequestInfo`

Defined in: main.ts:194110

#### Parameters

##### data

`any`

#### Returns

`ContentGenerationGenerateMetaTagsLiveRequestInfo`
