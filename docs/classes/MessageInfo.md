[**Documentation**](../README.md)

***

[Documentation](../README.md) / MessageInfo

# Class: MessageInfo

Defined in: main.ts:25956

## Implements

- [`IMessageInfo`](../interfaces/IMessageInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MessageInfo**(`data`?): `MessageInfo`

Defined in: main.ts:25966

#### Parameters

##### data?

[`IMessageInfo`](../interfaces/IMessageInfo.md)

#### Returns

`MessageInfo`

## Properties

### level?

> `optional` **level**: `string`

Defined in: main.ts:25959

level of error
can take the following values: fatal, error, warning, info

#### Implementation of

[`IMessageInfo`](../interfaces/IMessageInfo.md).[`level`](../interfaces/IMessageInfo.md#level)

***

### message?

> `optional` **message**: `string`

Defined in: main.ts:25962

message associated with an error
message providing the details of the detected error

#### Implementation of

[`IMessageInfo`](../interfaces/IMessageInfo.md).[`message`](../interfaces/IMessageInfo.md#message)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:25975

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:25993

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MessageInfo`

Defined in: main.ts:25986

#### Parameters

##### data

`any`

#### Returns

`MessageInfo`
