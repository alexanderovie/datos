[**Documentation**](../README.md)

***

[Documentation](../README.md) / DeliveryInfo

# Class: DeliveryInfo

Defined in: main.ts:198270

## Implements

- [`IDeliveryInfo`](../interfaces/IDeliveryInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DeliveryInfo**(`data?`): `DeliveryInfo`

Defined in: main.ts:198281

#### Parameters

##### data?

[`IDeliveryInfo`](../interfaces/IDeliveryInfo.md)

#### Returns

`DeliveryInfo`

## Properties

### delivery\_message?

> `optional` **delivery\_message**: `string`

Defined in: main.ts:198273

delivery information
message accompanying the delivery information as posted by the seller

#### Implementation of

[`IDeliveryInfo`](../interfaces/IDeliveryInfo.md).[`delivery_message`](../interfaces/IDeliveryInfo.md#delivery_message)

***

### delivery\_price?

> `optional` **delivery\_price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:198277

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

#### Implementation of

[`IDeliveryInfo`](../interfaces/IDeliveryInfo.md).[`delivery_price`](../interfaces/IDeliveryInfo.md#delivery_price)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:198290

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:198308

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DeliveryInfo`

Defined in: main.ts:198301

#### Parameters

##### data

`any`

#### Returns

`DeliveryInfo`
