[**Documentation**](../README.md)

***

[Documentation](../README.md) / IImageLinkElementItem

# Interface: IImageLinkElementItem

Defined in: main.ts:179255

## Extends

- [`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### direction?

> `optional` **direction**: `string`

Defined in: main.ts:23491

direction of the link
possible values: internal, external

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`direction`](IBaseOnPageLinkItemInfo.md#direction)

***

### dofollow?

> `optional` **dofollow**: `boolean`

Defined in: main.ts:23484

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`dofollow`](IBaseOnPageLinkItemInfo.md#dofollow)

***

### domain\_from?

> `optional` **domain\_from**: `string`

Defined in: main.ts:23466

referring domain
the link was found on this domain

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`domain_from`](IBaseOnPageLinkItemInfo.md#domain_from)

***

### domain\_to?

> `optional` **domain\_to**: `string`

Defined in: main.ts:23469

referenced domain
the link is pointing to this domain

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`domain_to`](IBaseOnPageLinkItemInfo.md#domain_to)

***

### image\_alt?

> `optional` **image\_alt**: `string`

Defined in: main.ts:179264

alternative text for the image

***

### image\_src?

> `optional` **image\_src**: `string`

Defined in: main.ts:179266

url of the image

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

Defined in: main.ts:23494

link is broken
indicates whether a link is directing to a broken page or resource

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`is_broken`](IBaseOnPageLinkItemInfo.md#is_broken)

***

### is\_link\_relation\_conflict?

> `optional` **is\_link\_relation\_conflict**: `boolean`

Defined in: main.ts:23497

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`is_link_relation_conflict`](IBaseOnPageLinkItemInfo.md#is_link_relation_conflict)

***

### link\_attribute?

> `optional` **link\_attribute**: `string`[]

Defined in: main.ts:179260

link attribute added to external link
indicates link attributes added to the link_to on the page_from
example:
["ugc","noopener"]

***

### link\_from?

> `optional` **link\_from**: `string`

Defined in: main.ts:23478

referring page
absolute URL of the page on which the link was found

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`link_from`](IBaseOnPageLinkItemInfo.md#link_from)

***

### link\_to?

> `optional` **link\_to**: `string`

Defined in: main.ts:23481

referenced page
absolute URL of the page to which the link is pointing

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`link_to`](IBaseOnPageLinkItemInfo.md#link_to)

***

### page\_from?

> `optional` **page\_from**: `string`

Defined in: main.ts:23472

referring page
relative URL of the page on which the link was found

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`page_from`](IBaseOnPageLinkItemInfo.md#page_from)

***

### page\_from\_scheme?

> `optional` **page\_from\_scheme**: `string`

Defined in: main.ts:23486

url scheme of the referring page

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`page_from_scheme`](IBaseOnPageLinkItemInfo.md#page_from_scheme)

***

### page\_to?

> `optional` **page\_to**: `string`

Defined in: main.ts:23475

referenced page
relative URL of the page to which the link is pointing

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`page_to`](IBaseOnPageLinkItemInfo.md#page_to)

***

### page\_to\_scheme?

> `optional` **page\_to\_scheme**: `string`

Defined in: main.ts:23488

url scheme of the referenced page

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`page_to_scheme`](IBaseOnPageLinkItemInfo.md#page_to_scheme)

***

### page\_to\_status\_code?

> `optional` **page\_to\_status\_code**: `number`

Defined in: main.ts:179269

status code of the referenced page
status code of the page to which the link is pointing

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:179262

anchor text

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23463

type of element

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`type`](IBaseOnPageLinkItemInfo.md#type)
