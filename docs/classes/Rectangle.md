[**Documentation**](../README.md)

***

[Documentation](../README.md) / Rectangle

# Class: Rectangle

Defined in: main.ts:24467

## Implements

- [`IRectangle`](../interfaces/IRectangle.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new Rectangle**(`data?`): `Rectangle`

Defined in: main.ts:24481

#### Parameters

##### data?

[`IRectangle`](../interfaces/IRectangle.md)

#### Returns

`Rectangle`

## Properties

### height?

> `optional` **height**: `number`

Defined in: main.ts:24477

height of the element in pixels

#### Implementation of

[`IRectangle`](../interfaces/IRectangle.md).[`height`](../interfaces/IRectangle.md#height)

***

### width?

> `optional` **width**: `number`

Defined in: main.ts:24475

width of the element in pixels

#### Implementation of

[`IRectangle`](../interfaces/IRectangle.md).[`width`](../interfaces/IRectangle.md#width)

***

### x?

> `optional` **x**: `number`

Defined in: main.ts:24470

x-axis coordinate
x-axis coordinate of the top-left corner of the result’s snippet, where top-left corner of the screen is the origin

#### Implementation of

[`IRectangle`](../interfaces/IRectangle.md).[`x`](../interfaces/IRectangle.md#x)

***

### y?

> `optional` **y**: `number`

Defined in: main.ts:24473

y-axis coordinate
y-axis coordinate of the top-left corner of the result’s snippet, where top-left corner of the screen is the origin

#### Implementation of

[`IRectangle`](../interfaces/IRectangle.md).[`y`](../interfaces/IRectangle.md#y)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:24490

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:24510

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `Rectangle`

Defined in: main.ts:24503

#### Parameters

##### data

`any`

#### Returns

`Rectangle`
