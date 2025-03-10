[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageRedirectChainsItem

# Interface: IOnPageRedirectChainsItem

Defined in: main.ts:179617

## Indexable

\[`key`: `string`\]: `any`

## Properties

### chain?

> `optional` **chain**: [`BaseOnPageLinkItemInfo`](../classes/BaseOnPageLinkItemInfo.md)[]

Defined in: main.ts:179622

contains links that form a chain

***

### is\_redirect\_loop?

> `optional` **is\_redirect\_loop**: `boolean`

Defined in: main.ts:179620

indicates if redirects in chain start and end at the same URL
if true, the last URL from the chain redirects back to the original URL
