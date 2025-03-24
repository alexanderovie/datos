[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonApplicableVouchersItem

# Class: AmazonApplicableVouchersItem

Defined in: main.ts:205702

## Implements

- [`IAmazonApplicableVouchersItem`](../interfaces/IAmazonApplicableVouchersItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AmazonApplicableVouchersItem**(`data`?): `AmazonApplicableVouchersItem`

Defined in: main.ts:205719

#### Parameters

##### data?

[`IAmazonApplicableVouchersItem`](../interfaces/IAmazonApplicableVouchersItem.md)

#### Returns

`AmazonApplicableVouchersItem`

## Properties

### fixed\_discount?

> `optional` **fixed\_discount**: `number`

Defined in: main.ts:205708

value of the fixed discount

#### Implementation of

[`IAmazonApplicableVouchersItem`](../interfaces/IAmazonApplicableVouchersItem.md).[`fixed_discount`](../interfaces/IAmazonApplicableVouchersItem.md#fixed_discount)

***

### fixed\_discount\_currency?

> `optional` **fixed\_discount\_currency**: `string`

Defined in: main.ts:205710

currency code of the fixed discount

#### Implementation of

[`IAmazonApplicableVouchersItem`](../interfaces/IAmazonApplicableVouchersItem.md).[`fixed_discount_currency`](../interfaces/IAmazonApplicableVouchersItem.md#fixed_discount_currency)

***

### important\_details?

> `optional` **important\_details**: `string`

Defined in: main.ts:205715

important details about the terms of discount vouchers

#### Implementation of

[`IAmazonApplicableVouchersItem`](../interfaces/IAmazonApplicableVouchersItem.md).[`important_details`](../interfaces/IAmazonApplicableVouchersItem.md#important_details)

***

### percentage\_discount?

> `optional` **percentage\_discount**: `number`

Defined in: main.ts:205713

value of the percentage discount
if the discount is fixed, the value will be null

#### Implementation of

[`IAmazonApplicableVouchersItem`](../interfaces/IAmazonApplicableVouchersItem.md).[`percentage_discount`](../interfaces/IAmazonApplicableVouchersItem.md#percentage_discount)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:205706

text of the voucher

#### Implementation of

[`IAmazonApplicableVouchersItem`](../interfaces/IAmazonApplicableVouchersItem.md).[`text`](../interfaces/IAmazonApplicableVouchersItem.md#text)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:205704

type of element

#### Implementation of

[`IAmazonApplicableVouchersItem`](../interfaces/IAmazonApplicableVouchersItem.md).[`type`](../interfaces/IAmazonApplicableVouchersItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:205728

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:205750

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AmazonApplicableVouchersItem`

Defined in: main.ts:205743

#### Parameters

##### data

`any`

#### Returns

`AmazonApplicableVouchersItem`
