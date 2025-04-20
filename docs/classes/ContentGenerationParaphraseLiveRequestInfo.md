[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationParaphraseLiveRequestInfo

# Class: ContentGenerationParaphraseLiveRequestInfo

Defined in: main.ts:194610

## Implements

- [`IContentGenerationParaphraseLiveRequestInfo`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentGenerationParaphraseLiveRequestInfo**(`data?`): `ContentGenerationParaphraseLiveRequestInfo`

Defined in: main.ts:194632

#### Parameters

##### data?

[`IContentGenerationParaphraseLiveRequestInfo`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md)

#### Returns

`ContentGenerationParaphraseLiveRequestInfo`

## Properties

### creativity\_index?

> `optional` **creativity\_index**: `number`

Defined in: main.ts:194622

creativity of content generation
required field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1;
default value: 0.8
learn more about this parameter on our help center

#### Implementation of

[`IContentGenerationParaphraseLiveRequestInfo`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md).[`creativity_index`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md#creativity_index)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:194628

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentGenerationParaphraseLiveRequestInfo`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md).[`tag`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md#tag)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:194615

target text
required field
can contain from 1 to 500 tokens
learn more about tokens on our help center

#### Implementation of

[`IContentGenerationParaphraseLiveRequestInfo`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md).[`text`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md#text)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:194641

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:194660

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ContentGenerationParaphraseLiveRequestInfo`

Defined in: main.ts:194653

#### Parameters

##### data

`any`

#### Returns

`ContentGenerationParaphraseLiveRequestInfo`
