[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseOnPageLinkItemInfo

# Class: BaseOnPageLinkItemInfo

Defined in: main.ts:23693

## Extended by

- [`AnchorLinkElementItem`](AnchorLinkElementItem.md)
- [`ImageLinkElementItem`](ImageLinkElementItem.md)
- [`AlternateLinkElementItem`](AlternateLinkElementItem.md)
- [`RedirectLinkElementItem`](RedirectLinkElementItem.md)

## Implements

- [`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md)

## Constructors

### Constructor

> **new BaseOnPageLinkItemInfo**(`data?`): `BaseOnPageLinkItemInfo`

Defined in: main.ts:23733

#### Parameters

##### data?

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md)

#### Returns

`BaseOnPageLinkItemInfo`

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23731

***

### direction?

> `optional` **direction**: `string`

Defined in: main.ts:23723

direction of the link
possible values: internal, external

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`direction`](../interfaces/IBaseOnPageLinkItemInfo.md#direction)

***

### dofollow?

> `optional` **dofollow**: `boolean`

Defined in: main.ts:23716

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`dofollow`](../interfaces/IBaseOnPageLinkItemInfo.md#dofollow)

***

### domain\_from?

> `optional` **domain\_from**: `string`

Defined in: main.ts:23698

referring domain
the link was found on this domain

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`domain_from`](../interfaces/IBaseOnPageLinkItemInfo.md#domain_from)

***

### domain\_to?

> `optional` **domain\_to**: `string`

Defined in: main.ts:23701

referenced domain
the link is pointing to this domain

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`domain_to`](../interfaces/IBaseOnPageLinkItemInfo.md#domain_to)

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

Defined in: main.ts:23726

link is broken
indicates whether a link is directing to a broken page or resource

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`is_broken`](../interfaces/IBaseOnPageLinkItemInfo.md#is_broken)

***

### is\_link\_relation\_conflict?

> `optional` **is\_link\_relation\_conflict**: `boolean`

Defined in: main.ts:23729

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`is_link_relation_conflict`](../interfaces/IBaseOnPageLinkItemInfo.md#is_link_relation_conflict)

***

### link\_from?

> `optional` **link\_from**: `string`

Defined in: main.ts:23710

referring page
absolute URL of the page on which the link was found

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`link_from`](../interfaces/IBaseOnPageLinkItemInfo.md#link_from)

***

### link\_to?

> `optional` **link\_to**: `string`

Defined in: main.ts:23713

referenced page
absolute URL of the page to which the link is pointing

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`link_to`](../interfaces/IBaseOnPageLinkItemInfo.md#link_to)

***

### page\_from?

> `optional` **page\_from**: `string`

Defined in: main.ts:23704

referring page
relative URL of the page on which the link was found

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`page_from`](../interfaces/IBaseOnPageLinkItemInfo.md#page_from)

***

### page\_from\_scheme?

> `optional` **page\_from\_scheme**: `string`

Defined in: main.ts:23718

url scheme of the referring page

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`page_from_scheme`](../interfaces/IBaseOnPageLinkItemInfo.md#page_from_scheme)

***

### page\_to?

> `optional` **page\_to**: `string`

Defined in: main.ts:23707

referenced page
relative URL of the page to which the link is pointing

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`page_to`](../interfaces/IBaseOnPageLinkItemInfo.md#page_to)

***

### page\_to\_scheme?

> `optional` **page\_to\_scheme**: `string`

Defined in: main.ts:23720

url scheme of the referenced page

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`page_to_scheme`](../interfaces/IBaseOnPageLinkItemInfo.md#page_to_scheme)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23695

type of element

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`type`](../interfaces/IBaseOnPageLinkItemInfo.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:23743

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:23788

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BaseOnPageLinkItemInfo`

Defined in: main.ts:23761

#### Parameters

##### data

`any`

#### Returns

`BaseOnPageLinkItemInfo`
