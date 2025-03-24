[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsStatusInfo

# Class: DataforseoLabsStatusInfo

Defined in: main.ts:101506

## Implements

- [`IDataforseoLabsStatusInfo`](../interfaces/IDataforseoLabsStatusInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsStatusInfo**(`data`?): `DataforseoLabsStatusInfo`

Defined in: main.ts:101515

#### Parameters

##### data?

[`IDataforseoLabsStatusInfo`](../interfaces/IDataforseoLabsStatusInfo.md)

#### Returns

`DataforseoLabsStatusInfo`

## Properties

### date\_update?

> `optional` **date\_update**: `string`

Defined in: main.ts:101511

update date of the Google endpoints
indicates the last date when the Google endpoints of DataForSEO Labs API were updated;
example:
2022-05-16

#### Implementation of

[`IDataforseoLabsStatusInfo`](../interfaces/IDataforseoLabsStatusInfo.md).[`date_update`](../interfaces/IDataforseoLabsStatusInfo.md#date_update)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:101524

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:101541

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsStatusInfo`

Defined in: main.ts:101534

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsStatusInfo`
