[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageResourceIssueItemInfo

# Class: OnPageResourceIssueItemInfo

Defined in: main.ts:178886

## Implements

- [`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageResourceIssueItemInfo**(`data?`): `OnPageResourceIssueItemInfo`

Defined in: main.ts:178908

#### Parameters

##### data?

[`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md)

#### Returns

`OnPageResourceIssueItemInfo`

## Properties

### column?

> `optional` **column**: `number`

Defined in: main.ts:178890

column where the error was found

#### Implementation of

[`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md).[`column`](../interfaces/IOnPageResourceIssueItemInfo.md#column)

***

### line?

> `optional` **line**: `number`

Defined in: main.ts:178888

line where the error was found

#### Implementation of

[`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md).[`line`](../interfaces/IOnPageResourceIssueItemInfo.md#line)

***

### message?

> `optional` **message**: `string`

Defined in: main.ts:178893

text message of the error
the full list of possible HTML errors can be found here

#### Implementation of

[`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md).[`message`](../interfaces/IOnPageResourceIssueItemInfo.md#message)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:178904

status code of the error
possible values:
0 — Unidentified Error;
501 — Html Parse Error;
1501 — JS Parse Error;
2501 — CSS Parse Error;
3501 — Image Parse Error;
3502 — Image Scale Is Zero;
3503 — Image Size Is Zero;
3504 — Image Format Invalid

#### Implementation of

[`IOnPageResourceIssueItemInfo`](../interfaces/IOnPageResourceIssueItemInfo.md).[`status_code`](../interfaces/IOnPageResourceIssueItemInfo.md#status_code)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:178917

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:178937

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageResourceIssueItemInfo`

Defined in: main.ts:178930

#### Parameters

##### data

`any`

#### Returns

`OnPageResourceIssueItemInfo`
