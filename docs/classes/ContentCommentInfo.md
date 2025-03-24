[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentCommentInfo

# Class: ContentCommentInfo

Defined in: main.ts:27137

## Implements

- [`IContentCommentInfo`](../interfaces/IContentCommentInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentCommentInfo**(`data`?): `ContentCommentInfo`

Defined in: main.ts:27154

#### Parameters

##### data?

[`IContentCommentInfo`](../interfaces/IContentCommentInfo.md)

#### Returns

`ContentCommentInfo`

## Properties

### author?

> `optional` **author**: `string`

Defined in: main.ts:27146

author of the comment

#### Implementation of

[`IContentCommentInfo`](../interfaces/IContentCommentInfo.md).[`author`](../interfaces/IContentCommentInfo.md#author)

***

### have\_form?

> `optional` **have\_form**: `boolean`

Defined in: main.ts:27147

#### Implementation of

[`IContentCommentInfo`](../interfaces/IContentCommentInfo.md).[`have_form`](../interfaces/IContentCommentInfo.md#have_form)

***

### primary\_content?

> `optional` **primary\_content**: [`SectionContentItemInfo`](SectionContentItemInfo.md)[]

Defined in: main.ts:27150

primary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`IContentCommentInfo`](../interfaces/IContentCommentInfo.md).[`primary_content`](../interfaces/IContentCommentInfo.md#primary_content)

***

### publish\_date?

> `optional` **publish\_date**: `string`

Defined in: main.ts:27144

date when the comment was published

#### Implementation of

[`IContentCommentInfo`](../interfaces/IContentCommentInfo.md).[`publish_date`](../interfaces/IContentCommentInfo.md#publish_date)

***

### rating?

> `optional` **rating**: [`ContentRatingInfo`](ContentRatingInfo.md)

Defined in: main.ts:27140

product’s rating
contains information about the rating a customer has given to the product

#### Implementation of

[`IContentCommentInfo`](../interfaces/IContentCommentInfo.md).[`rating`](../interfaces/IContentCommentInfo.md#rating)

***

### title?

> `optional` **title**: `number`

Defined in: main.ts:27142

title of the customer’s comment

#### Implementation of

[`IContentCommentInfo`](../interfaces/IContentCommentInfo.md).[`title`](../interfaces/IContentCommentInfo.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:27163

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:27189

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ContentCommentInfo`

Defined in: main.ts:27182

#### Parameters

##### data

`any`

#### Returns

`ContentCommentInfo`
