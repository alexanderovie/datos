[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAlternateLinkElementItem

# Interface: IAlternateLinkElementItem

Defined in: main.ts:182135

## Extends

- [`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### direction?

> `optional` **direction**: `string`

Defined in: main.ts:23838

direction of the link
possible values: internal, external

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`direction`](IBaseOnPageLinkItemInfo.md#direction)

***

### dofollow?

> `optional` **dofollow**: `boolean`

Defined in: main.ts:23831

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`dofollow`](IBaseOnPageLinkItemInfo.md#dofollow)

***

### domain\_from?

> `optional` **domain\_from**: `string`

Defined in: main.ts:23813

referring domain
the link was found on this domain

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`domain_from`](IBaseOnPageLinkItemInfo.md#domain_from)

***

### domain\_to?

> `optional` **domain\_to**: `string`

Defined in: main.ts:23816

referenced domain
the link is pointing to this domain

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`domain_to`](IBaseOnPageLinkItemInfo.md#domain_to)

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

Defined in: main.ts:23841

link is broken
indicates whether a link is directing to a broken page or resource

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`is_broken`](IBaseOnPageLinkItemInfo.md#is_broken)

***

### is\_link\_relation\_conflict?

> `optional` **is\_link\_relation\_conflict**: `boolean`

Defined in: main.ts:23844

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`is_link_relation_conflict`](IBaseOnPageLinkItemInfo.md#is_link_relation_conflict)

***

### link\_from?

> `optional` **link\_from**: `string`

Defined in: main.ts:23825

referring page
absolute URL of the page on which the link was found

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`link_from`](IBaseOnPageLinkItemInfo.md#link_from)

***

### link\_to?

> `optional` **link\_to**: `string`

Defined in: main.ts:23828

referenced page
absolute URL of the page to which the link is pointing

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`link_to`](IBaseOnPageLinkItemInfo.md#link_to)

***

### page\_from?

> `optional` **page\_from**: `string`

Defined in: main.ts:23819

referring page
relative URL of the page on which the link was found

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`page_from`](IBaseOnPageLinkItemInfo.md#page_from)

***

### page\_from\_scheme?

> `optional` **page\_from\_scheme**: `string`

Defined in: main.ts:23833

url scheme of the referring page

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`page_from_scheme`](IBaseOnPageLinkItemInfo.md#page_from_scheme)

***

### page\_to?

> `optional` **page\_to**: `string`

Defined in: main.ts:23822

referenced page
relative URL of the page to which the link is pointing

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`page_to`](IBaseOnPageLinkItemInfo.md#page_to)

***

### page\_to\_scheme?

> `optional` **page\_to\_scheme**: `string`

Defined in: main.ts:23835

url scheme of the referenced page

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`page_to_scheme`](IBaseOnPageLinkItemInfo.md#page_to_scheme)

***

### page\_to\_status\_code?

> `optional` **page\_to\_status\_code**: `number`

Defined in: main.ts:182138

status code of the referenced page
status code of the page to which the link is pointing

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23810

type of element

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`type`](IBaseOnPageLinkItemInfo.md#type)
