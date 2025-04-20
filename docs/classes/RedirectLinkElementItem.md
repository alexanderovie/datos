[**Documentation**](../README.md)

***

[Documentation](../README.md) / RedirectLinkElementItem

# Class: RedirectLinkElementItem

Defined in: main.ts:182338

## Extends

- [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

## Implements

- [`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new RedirectLinkElementItem**(`data?`): `RedirectLinkElementItem`

Defined in: main.ts:182342

#### Parameters

##### data?

[`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md)

#### Returns

`RedirectLinkElementItem`

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`constructor`](BaseOnPageLinkItemInfo.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23731

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`_discriminator`](BaseOnPageLinkItemInfo.md#_discriminator)

***

### direction?

> `optional` **direction**: `string`

Defined in: main.ts:23723

direction of the link
possible values: internal, external

#### Implementation of

[`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md).[`direction`](../interfaces/IRedirectLinkElementItem.md#direction)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`direction`](BaseOnPageLinkItemInfo.md#direction)

***

### dofollow?

> `optional` **dofollow**: `boolean`

Defined in: main.ts:23716

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Implementation of

[`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md).[`dofollow`](../interfaces/IRedirectLinkElementItem.md#dofollow)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`dofollow`](BaseOnPageLinkItemInfo.md#dofollow)

***

### domain\_from?

> `optional` **domain\_from**: `string`

Defined in: main.ts:23698

referring domain
the link was found on this domain

#### Implementation of

[`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md).[`domain_from`](../interfaces/IRedirectLinkElementItem.md#domain_from)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`domain_from`](BaseOnPageLinkItemInfo.md#domain_from)

***

### domain\_to?

> `optional` **domain\_to**: `string`

Defined in: main.ts:23701

referenced domain
the link is pointing to this domain

#### Implementation of

[`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md).[`domain_to`](../interfaces/IRedirectLinkElementItem.md#domain_to)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`domain_to`](BaseOnPageLinkItemInfo.md#domain_to)

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

Defined in: main.ts:23726

link is broken
indicates whether a link is directing to a broken page or resource

#### Implementation of

[`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md).[`is_broken`](../interfaces/IRedirectLinkElementItem.md#is_broken)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`is_broken`](BaseOnPageLinkItemInfo.md#is_broken)

***

### is\_link\_relation\_conflict?

> `optional` **is\_link\_relation\_conflict**: `boolean`

Defined in: main.ts:23729

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Implementation of

[`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md).[`is_link_relation_conflict`](../interfaces/IRedirectLinkElementItem.md#is_link_relation_conflict)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`is_link_relation_conflict`](BaseOnPageLinkItemInfo.md#is_link_relation_conflict)

***

### link\_from?

> `optional` **link\_from**: `string`

Defined in: main.ts:23710

referring page
absolute URL of the page on which the link was found

#### Implementation of

[`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md).[`link_from`](../interfaces/IRedirectLinkElementItem.md#link_from)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`link_from`](BaseOnPageLinkItemInfo.md#link_from)

***

### link\_to?

> `optional` **link\_to**: `string`

Defined in: main.ts:23713

referenced page
absolute URL of the page to which the link is pointing

#### Implementation of

[`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md).[`link_to`](../interfaces/IRedirectLinkElementItem.md#link_to)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`link_to`](BaseOnPageLinkItemInfo.md#link_to)

***

### page\_from?

> `optional` **page\_from**: `string`

Defined in: main.ts:23704

referring page
relative URL of the page on which the link was found

#### Implementation of

[`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md).[`page_from`](../interfaces/IRedirectLinkElementItem.md#page_from)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`page_from`](BaseOnPageLinkItemInfo.md#page_from)

***

### page\_from\_scheme?

> `optional` **page\_from\_scheme**: `string`

Defined in: main.ts:23718

url scheme of the referring page

#### Implementation of

[`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md).[`page_from_scheme`](../interfaces/IRedirectLinkElementItem.md#page_from_scheme)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`page_from_scheme`](BaseOnPageLinkItemInfo.md#page_from_scheme)

***

### page\_to?

> `optional` **page\_to**: `string`

Defined in: main.ts:23707

referenced page
relative URL of the page to which the link is pointing

#### Implementation of

[`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md).[`page_to`](../interfaces/IRedirectLinkElementItem.md#page_to)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`page_to`](BaseOnPageLinkItemInfo.md#page_to)

***

### page\_to\_scheme?

> `optional` **page\_to\_scheme**: `string`

Defined in: main.ts:23720

url scheme of the referenced page

#### Implementation of

[`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md).[`page_to_scheme`](../interfaces/IRedirectLinkElementItem.md#page_to_scheme)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`page_to_scheme`](BaseOnPageLinkItemInfo.md#page_to_scheme)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23695

type of element

#### Implementation of

[`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md).[`type`](../interfaces/IRedirectLinkElementItem.md#type)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`type`](BaseOnPageLinkItemInfo.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:182347

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`init`](BaseOnPageLinkItemInfo.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:182364

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`toJSON`](BaseOnPageLinkItemInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `RedirectLinkElementItem`

Defined in: main.ts:182357

#### Parameters

##### data

`any`

#### Returns

`RedirectLinkElementItem`

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`fromJS`](BaseOnPageLinkItemInfo.md#fromjs)
