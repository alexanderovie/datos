[**Documentation**](../README.md)

***

[Documentation](../README.md) / IPages

# Interface: IPages

Defined in: main.ts:178538

## Indexable

\[`key`: `string`\]: `any`

## Properties

### page?

> `optional` **page**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:178544

information about the page with duplicate content

***

### similarity?

> `optional` **similarity**: `number`

Defined in: main.ts:178542

content similarity score
by default, the content is considered duplicate if the value is greater than or equals 6
can take values from 0 to 10
