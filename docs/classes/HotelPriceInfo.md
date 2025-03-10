[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelPriceInfo

# Class: HotelPriceInfo

Defined in: main.ts:226575

## Implements

- [`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new HotelPriceInfo()

> **new HotelPriceInfo**(`data`?): [`HotelPriceInfo`](HotelPriceInfo.md)

Defined in: main.ts:226604

#### Parameters

##### data?

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md)

#### Returns

[`HotelPriceInfo`](HotelPriceInfo.md)

## Properties

### check\_in?

> `optional` **check\_in**: `string`

Defined in: main.ts:226589

check-in date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`check_in`](../interfaces/IHotelPriceInfo.md#check_in)

***

### check\_out?

> `optional` **check\_out**: `string`

Defined in: main.ts:226594

check-out date and time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`check_out`](../interfaces/IHotelPriceInfo.md#check_out)

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:226582

price currency
USD is applied by default, unless specified in the POST array

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`currency`](../interfaces/IHotelPriceInfo.md#currency)

***

### discount\_text?

> `optional` **discount\_text**: `string`

Defined in: main.ts:226584

text about a discount applied

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`discount_text`](../interfaces/IHotelPriceInfo.md#discount_text)

***

### items?

> `optional` **items**: [`HotelPriceItemInfo`](HotelPriceItemInfo.md)[]

Defined in: main.ts:226600

encountered item types
types of search engine results encountered in the items array;
possible item types: hotel_search_item

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`items`](../interfaces/IHotelPriceInfo.md#items)

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:226577

price per night

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`price`](../interfaces/IHotelPriceInfo.md#price)

***

### price\_without\_discount?

> `optional` **price\_without\_discount**: `number`

Defined in: main.ts:226579

full price per night without a discount applied

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`price_without_discount`](../interfaces/IHotelPriceInfo.md#price_without_discount)

***

### visitors?

> `optional` **visitors**: `number`

Defined in: main.ts:226596

number of hotel visitors for this price

#### Implementation of

[`IHotelPriceInfo`](../interfaces/IHotelPriceInfo.md).[`visitors`](../interfaces/IHotelPriceInfo.md#visitors)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:226613

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:226641

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelPriceInfo`](HotelPriceInfo.md)

Defined in: main.ts:226634

#### Parameters

##### data

`any`

#### Returns

[`HotelPriceInfo`](HotelPriceInfo.md)
