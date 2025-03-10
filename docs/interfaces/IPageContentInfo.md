[**Documentation**](../README.md)

***

[Documentation](../README.md) / IPageContentInfo

# Interface: IPageContentInfo

Defined in: main.ts:182815

## Indexable

\[`key`: `string`\]: `any`

## Properties

### comments?

> `optional` **comments**: [`ContentCommentInfo`](../classes/ContentCommentInfo.md)[]

Defined in: main.ts:182833

array of comments displayed on the page
contains objects with information on comments related to displayed products

***

### contacts?

> `optional` **contacts**: [`Contacts`](../classes/Contacts.md)

Defined in: main.ts:182836

contact information
contains contact information displayed on the page

***

### footer?

> `optional` **footer**: [`PageSectionContentInfo`](../classes/PageSectionContentInfo.md)

Defined in: main.ts:182819

parsed content of the footer

***

### header?

> `optional` **header**: [`PageSectionContentInfo`](../classes/PageSectionContentInfo.md)

Defined in: main.ts:182817

content of the header of the table

***

### main\_topic?

> `optional` **main\_topic**: [`TopicInfo`](../classes/TopicInfo.md)[]

Defined in: main.ts:182822

main topic on the page
you can find more information about topic priority calculation in this help center article

***

### offers?

> `optional` **offers**: [`ContentOfferInfo`](../classes/ContentOfferInfo.md)[]

Defined in: main.ts:182830

array of products displayed on the page
contains objects with information on products displayed on the page

***

### ratings?

> `optional` **ratings**: [`ContentRatingInfo`](../classes/ContentRatingInfo.md)[]

Defined in: main.ts:182827

contains objects with rating information for the products displayed on the page

***

### secondary\_topic?

> `optional` **secondary\_topic**: [`TopicInfo`](../classes/TopicInfo.md)[]

Defined in: main.ts:182825

secondary topic on the page
you can find more information about topic priority calculation in this help center article
