[**Documentation**](../README.md)

***

[Documentation](../README.md) / MessageInfo

# Class: MessageInfo

Defined in: main.ts:25964

## Implements

- [`IMessageInfo`](../interfaces/IMessageInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MessageInfo**(`data?`): `MessageInfo`

Defined in: main.ts:25974

#### Parameters

##### data?

[`IMessageInfo`](../interfaces/IMessageInfo.md)

#### Returns

`MessageInfo`

## Properties

### level?

> `optional` **level**: `string`

Defined in: main.ts:25967

level of error
can take the following values: fatal, error, warning, info

#### Implementation of

[`IMessageInfo`](../interfaces/IMessageInfo.md).[`level`](../interfaces/IMessageInfo.md#level)

***

### message?

> `optional` **message**: `string`

Defined in: main.ts:25970

message associated with an error
message providing the details of the detected error

#### Implementation of

[`IMessageInfo`](../interfaces/IMessageInfo.md).[`message`](../interfaces/IMessageInfo.md#message)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:25983

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:26001

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MessageInfo`

Defined in: main.ts:25994

#### Parameters

##### data

`any`

#### Returns

`MessageInfo`
