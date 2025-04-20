[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageResourceIssueInfo

# Class: OnPageResourceIssueInfo

Defined in: main.ts:178975

resource errors and warnings

## Implements

- [`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageResourceIssueInfo**(`data?`): `OnPageResourceIssueInfo`

Defined in: main.ts:178983

#### Parameters

##### data?

[`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md)

#### Returns

`OnPageResourceIssueInfo`

## Properties

### errors?

> `optional` **errors**: [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)[]

Defined in: main.ts:178977

resource errors

#### Implementation of

[`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md).[`errors`](../interfaces/IOnPageResourceIssueInfo.md#errors)

***

### warnings?

> `optional` **warnings**: [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)[]

Defined in: main.ts:178979

resource warnings

#### Implementation of

[`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md).[`warnings`](../interfaces/IOnPageResourceIssueInfo.md#warnings)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:178992

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:179018

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageResourceIssueInfo`

Defined in: main.ts:179011

#### Parameters

##### data

`any`

#### Returns

`OnPageResourceIssueInfo`
