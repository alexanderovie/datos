[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseOnPageLinkItemInfo

# Interface: IBaseOnPageLinkItemInfo

Defined in: main.ts:23800

## Extended by

- [`IAnchorLinkElementItem`](IAnchorLinkElementItem.md)
- [`IImageLinkElementItem`](IImageLinkElementItem.md)
- [`IAlternateLinkElementItem`](IAlternateLinkElementItem.md)
- [`IRedirectLinkElementItem`](IRedirectLinkElementItem.md)

## Properties

### direction?

> `optional` **direction**: `string`

Defined in: main.ts:23830

direction of the link
possible values: internal, external

***

### dofollow?

> `optional` **dofollow**: `boolean`

Defined in: main.ts:23823

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

***

### domain\_from?

> `optional` **domain\_from**: `string`

Defined in: main.ts:23805

referring domain
the link was found on this domain

***

### domain\_to?

> `optional` **domain\_to**: `string`

Defined in: main.ts:23808

referenced domain
the link is pointing to this domain

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

Defined in: main.ts:23833

link is broken
indicates whether a link is directing to a broken page or resource

***

### is\_link\_relation\_conflict?

> `optional` **is\_link\_relation\_conflict**: `boolean`

Defined in: main.ts:23836

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

***

### link\_from?

> `optional` **link\_from**: `string`

Defined in: main.ts:23817

referring page
absolute URL of the page on which the link was found

***

### link\_to?

> `optional` **link\_to**: `string`

Defined in: main.ts:23820

referenced page
absolute URL of the page to which the link is pointing

***

### page\_from?

> `optional` **page\_from**: `string`

Defined in: main.ts:23811

referring page
relative URL of the page on which the link was found

***

### page\_from\_scheme?

> `optional` **page\_from\_scheme**: `string`

Defined in: main.ts:23825

url scheme of the referring page

***

### page\_to?

> `optional` **page\_to**: `string`

Defined in: main.ts:23814

referenced page
relative URL of the page to which the link is pointing

***

### page\_to\_scheme?

> `optional` **page\_to\_scheme**: `string`

Defined in: main.ts:23827

url scheme of the referenced page

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23802

type of element
