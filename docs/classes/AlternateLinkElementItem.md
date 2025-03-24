[**Documentation**](../README.md)

***

[Documentation](../README.md) / AlternateLinkElementItem

# Class: AlternateLinkElementItem

Defined in: main.ts:181683

## Extends

- [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

## Implements

- [`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AlternateLinkElementItem**(`data`?): `AlternateLinkElementItem`

Defined in: main.ts:181690

#### Parameters

##### data?

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md)

#### Returns

`AlternateLinkElementItem`

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`constructor`](BaseOnPageLinkItemInfo.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23723

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`_discriminator`](BaseOnPageLinkItemInfo.md#_discriminator)

***

### direction?

> `optional` **direction**: `string`

Defined in: main.ts:23715

direction of the link
possible values: internal, external

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`direction`](../interfaces/IAlternateLinkElementItem.md#direction)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`direction`](BaseOnPageLinkItemInfo.md#direction)

***

### dofollow?

> `optional` **dofollow**: `boolean`

Defined in: main.ts:23708

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`dofollow`](../interfaces/IAlternateLinkElementItem.md#dofollow)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`dofollow`](BaseOnPageLinkItemInfo.md#dofollow)

***

### domain\_from?

> `optional` **domain\_from**: `string`

Defined in: main.ts:23690

referring domain
the link was found on this domain

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`domain_from`](../interfaces/IAlternateLinkElementItem.md#domain_from)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`domain_from`](BaseOnPageLinkItemInfo.md#domain_from)

***

### domain\_to?

> `optional` **domain\_to**: `string`

Defined in: main.ts:23693

referenced domain
the link is pointing to this domain

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`domain_to`](../interfaces/IAlternateLinkElementItem.md#domain_to)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`domain_to`](BaseOnPageLinkItemInfo.md#domain_to)

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

Defined in: main.ts:23718

link is broken
indicates whether a link is directing to a broken page or resource

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`is_broken`](../interfaces/IAlternateLinkElementItem.md#is_broken)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`is_broken`](BaseOnPageLinkItemInfo.md#is_broken)

***

### is\_link\_relation\_conflict?

> `optional` **is\_link\_relation\_conflict**: `boolean`

Defined in: main.ts:23721

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`is_link_relation_conflict`](../interfaces/IAlternateLinkElementItem.md#is_link_relation_conflict)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`is_link_relation_conflict`](BaseOnPageLinkItemInfo.md#is_link_relation_conflict)

***

### link\_from?

> `optional` **link\_from**: `string`

Defined in: main.ts:23702

referring page
absolute URL of the page on which the link was found

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`link_from`](../interfaces/IAlternateLinkElementItem.md#link_from)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`link_from`](BaseOnPageLinkItemInfo.md#link_from)

***

### link\_to?

> `optional` **link\_to**: `string`

Defined in: main.ts:23705

referenced page
absolute URL of the page to which the link is pointing

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`link_to`](../interfaces/IAlternateLinkElementItem.md#link_to)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`link_to`](BaseOnPageLinkItemInfo.md#link_to)

***

### page\_from?

> `optional` **page\_from**: `string`

Defined in: main.ts:23696

referring page
relative URL of the page on which the link was found

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`page_from`](../interfaces/IAlternateLinkElementItem.md#page_from)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`page_from`](BaseOnPageLinkItemInfo.md#page_from)

***

### page\_from\_scheme?

> `optional` **page\_from\_scheme**: `string`

Defined in: main.ts:23710

url scheme of the referring page

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`page_from_scheme`](../interfaces/IAlternateLinkElementItem.md#page_from_scheme)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`page_from_scheme`](BaseOnPageLinkItemInfo.md#page_from_scheme)

***

### page\_to?

> `optional` **page\_to**: `string`

Defined in: main.ts:23699

referenced page
relative URL of the page to which the link is pointing

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`page_to`](../interfaces/IAlternateLinkElementItem.md#page_to)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`page_to`](BaseOnPageLinkItemInfo.md#page_to)

***

### page\_to\_scheme?

> `optional` **page\_to\_scheme**: `string`

Defined in: main.ts:23712

url scheme of the referenced page

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`page_to_scheme`](../interfaces/IAlternateLinkElementItem.md#page_to_scheme)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`page_to_scheme`](BaseOnPageLinkItemInfo.md#page_to_scheme)

***

### page\_to\_status\_code?

> `optional` **page\_to\_status\_code**: `number`

Defined in: main.ts:181686

status code of the referenced page
status code of the page to which the link is pointing

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`page_to_status_code`](../interfaces/IAlternateLinkElementItem.md#page_to_status_code)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23687

type of element

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`type`](../interfaces/IAlternateLinkElementItem.md#type)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`type`](BaseOnPageLinkItemInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:181695

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`init`](BaseOnPageLinkItemInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:181713

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`toJSON`](BaseOnPageLinkItemInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `AlternateLinkElementItem`

Defined in: main.ts:181706

#### Parameters

##### data

`any`

#### Returns

`AlternateLinkElementItem`

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`fromJS`](BaseOnPageLinkItemInfo.md#fromjs)
