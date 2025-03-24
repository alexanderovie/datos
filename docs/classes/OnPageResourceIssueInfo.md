[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageResourceIssueInfo

# Class: OnPageResourceIssueInfo

Defined in: main.ts:178565

resource errors and warnings

## Implements

- [`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageResourceIssueInfo**(`data`?): `OnPageResourceIssueInfo`

Defined in: main.ts:178573

#### Parameters

##### data?

[`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md)

#### Returns

`OnPageResourceIssueInfo`

## Properties

### errors?

> `optional` **errors**: [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)[]

Defined in: main.ts:178567

resource errors

#### Implementation of

[`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md).[`errors`](../interfaces/IOnPageResourceIssueInfo.md#errors)

***

### warnings?

> `optional` **warnings**: [`OnPageResourceIssueItemInfo`](OnPageResourceIssueItemInfo.md)[]

Defined in: main.ts:178569

resource warnings

#### Implementation of

[`IOnPageResourceIssueInfo`](../interfaces/IOnPageResourceIssueInfo.md).[`warnings`](../interfaces/IOnPageResourceIssueInfo.md#warnings)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:178582

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:178608

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageResourceIssueInfo`

Defined in: main.ts:178601

#### Parameters

##### data

`any`

#### Returns

`OnPageResourceIssueInfo`
