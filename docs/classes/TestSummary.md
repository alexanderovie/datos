[**Documentation**](../README.md)

***

[Documentation](../README.md) / TestSummary

# Class: TestSummary

Defined in: main.ts:183966

## Implements

- [`ITestSummary`](../interfaces/ITestSummary.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new TestSummary**(`data?`): `TestSummary`

Defined in: main.ts:183978

#### Parameters

##### data?

[`ITestSummary`](../interfaces/ITestSummary.md)

#### Returns

`TestSummary`

## Properties

### error?

> `optional` **error**: `number`

Defined in: main.ts:183970

number of serious microdata errors

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`error`](../interfaces/ITestSummary.md#error)

***

### fatal?

> `optional` **fatal**: `number`

Defined in: main.ts:183968

number of fatal microdata errors

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`fatal`](../interfaces/ITestSummary.md#fatal)

***

### info?

> `optional` **info**: `number`

Defined in: main.ts:183974

number of microdata information flags

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`info`](../interfaces/ITestSummary.md#info)

***

### warning?

> `optional` **warning**: `number`

Defined in: main.ts:183972

number of microdata warnings

#### Implementation of

[`ITestSummary`](../interfaces/ITestSummary.md).[`warning`](../interfaces/ITestSummary.md#warning)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:183987

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:184007

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `TestSummary`

Defined in: main.ts:184000

#### Parameters

##### data

`any`

#### Returns

`TestSummary`
