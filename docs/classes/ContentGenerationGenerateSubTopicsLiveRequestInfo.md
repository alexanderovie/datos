[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationGenerateSubTopicsLiveRequestInfo

# Class: ContentGenerationGenerateSubTopicsLiveRequestInfo

Defined in: main.ts:194338

## Implements

- [`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentGenerationGenerateSubTopicsLiveRequestInfo**(`data?`): `ContentGenerationGenerateSubTopicsLiveRequestInfo`

Defined in: main.ts:194360

#### Parameters

##### data?

[`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md)

#### Returns

`ContentGenerationGenerateSubTopicsLiveRequestInfo`

## Properties

### creativity\_index?

> `optional` **creativity\_index**: `number`

Defined in: main.ts:194350

creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
default value: 0.8
learn more about this parameter on our help center

#### Implementation of

[`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md).[`creativity_index`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md#creativity_index)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:194356

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md).[`tag`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md#tag)

***

### topic?

> `optional` **topic**: `string`

Defined in: main.ts:194343

main topic of the content to generate
required field
main topic for content generation;
can contain from 1 to 50 tokens

#### Implementation of

[`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md).[`topic`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md#topic)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:194369

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:194388

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ContentGenerationGenerateSubTopicsLiveRequestInfo`

Defined in: main.ts:194381

#### Parameters

##### data

`any`

#### Returns

`ContentGenerationGenerateSubTopicsLiveRequestInfo`
