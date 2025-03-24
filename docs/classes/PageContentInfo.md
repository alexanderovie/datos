[**Documentation**](../README.md)

***

[Documentation](../README.md) / PageContentInfo

# Class: PageContentInfo

Defined in: main.ts:185108

## Implements

- [`IPageContentInfo`](../interfaces/IPageContentInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new PageContentInfo**(`data`?): `PageContentInfo`

Defined in: main.ts:185133

#### Parameters

##### data?

[`IPageContentInfo`](../interfaces/IPageContentInfo.md)

#### Returns

`PageContentInfo`

## Properties

### comments?

> `optional` **comments**: [`ContentCommentInfo`](ContentCommentInfo.md)[]

Defined in: main.ts:185126

array of comments displayed on the page
contains objects with information on comments related to displayed products

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`comments`](../interfaces/IPageContentInfo.md#comments)

***

### contacts?

> `optional` **contacts**: [`Contacts`](Contacts.md)

Defined in: main.ts:185129

contact information
contains contact information displayed on the page

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`contacts`](../interfaces/IPageContentInfo.md#contacts)

***

### footer?

> `optional` **footer**: [`PageSectionContentInfo`](PageSectionContentInfo.md)

Defined in: main.ts:185112

parsed content of the footer

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`footer`](../interfaces/IPageContentInfo.md#footer)

***

### header?

> `optional` **header**: [`PageSectionContentInfo`](PageSectionContentInfo.md)

Defined in: main.ts:185110

content of the header of the table

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`header`](../interfaces/IPageContentInfo.md#header)

***

### main\_topic?

> `optional` **main\_topic**: [`TopicInfo`](TopicInfo.md)[]

Defined in: main.ts:185115

main topic on the page
you can find more information about topic priority calculation in this help center article

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`main_topic`](../interfaces/IPageContentInfo.md#main_topic)

***

### offers?

> `optional` **offers**: [`ContentOfferInfo`](ContentOfferInfo.md)[]

Defined in: main.ts:185123

array of products displayed on the page
contains objects with information on products displayed on the page

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`offers`](../interfaces/IPageContentInfo.md#offers)

***

### ratings?

> `optional` **ratings**: [`ContentRatingInfo`](ContentRatingInfo.md)[]

Defined in: main.ts:185120

contains objects with rating information for the products displayed on the page

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`ratings`](../interfaces/IPageContentInfo.md#ratings)

***

### secondary\_topic?

> `optional` **secondary\_topic**: [`TopicInfo`](TopicInfo.md)[]

Defined in: main.ts:185118

secondary topic on the page
you can find more information about topic priority calculation in this help center article

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`secondary_topic`](../interfaces/IPageContentInfo.md#secondary_topic)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:185142

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:185186

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `PageContentInfo`

Defined in: main.ts:185179

#### Parameters

##### data

`any`

#### Returns

`PageContentInfo`
