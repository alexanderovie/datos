[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseProductInformationItem

# Class: BaseProductInformationItem

Defined in: main.ts:25403

## Extended by

- [`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)
- [`ProductInformationTextItem`](ProductInformationTextItem.md)
- [`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

## Implements

- [`IBaseProductInformationItem`](../interfaces/IBaseProductInformationItem.md)

## Constructors

### Constructor

> **new BaseProductInformationItem**(`data?`): `BaseProductInformationItem`

Defined in: main.ts:25411

#### Parameters

##### data?

[`IBaseProductInformationItem`](../interfaces/IBaseProductInformationItem.md)

#### Returns

`BaseProductInformationItem`

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:25409

***

### section\_name?

> `optional` **section\_name**: `string`

Defined in: main.ts:25407

name of the section related to product information specified in the contents

#### Implementation of

[`IBaseProductInformationItem`](../interfaces/IBaseProductInformationItem.md).[`section_name`](../interfaces/IBaseProductInformationItem.md#section_name)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:25405

type of element

#### Implementation of

[`IBaseProductInformationItem`](../interfaces/IBaseProductInformationItem.md).[`type`](../interfaces/IBaseProductInformationItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:25421

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:25450

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BaseProductInformationItem`

Defined in: main.ts:25428

#### Parameters

##### data

`any`

#### Returns

`BaseProductInformationItem`
