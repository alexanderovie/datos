[**Documentation**](../README.md)

***

[Documentation](../README.md) / TopicInfo

# Class: TopicInfo

Defined in: main.ts:182521

## Implements

- [`ITopicInfo`](../interfaces/ITopicInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TopicInfo()

> **new TopicInfo**(`data`?): [`TopicInfo`](TopicInfo.md)

Defined in: main.ts:182543

#### Parameters

##### data?

[`ITopicInfo`](../interfaces/ITopicInfo.md)

#### Returns

[`TopicInfo`](TopicInfo.md)

## Properties

### author?

> `optional` **author**: `string`

Defined in: main.ts:182527

content author name

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`author`](../interfaces/ITopicInfo.md#author)

***

### h\_title?

> `optional` **h\_title**: `string`

Defined in: main.ts:182523

meta title

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`h_title`](../interfaces/ITopicInfo.md#h_title)

***

### language?

> `optional` **language**: `string`

Defined in: main.ts:182529

content language

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`language`](../interfaces/ITopicInfo.md#language)

***

### level?

> `optional` **level**: `number`

Defined in: main.ts:182531

HTML level

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`level`](../interfaces/ITopicInfo.md#level)

***

### main\_title?

> `optional` **main\_title**: `string`

Defined in: main.ts:182525

main title of the block

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`main_title`](../interfaces/ITopicInfo.md#main_title)

***

### primary\_content?

> `optional` **primary\_content**: [`SectionContentItemInfo`](SectionContentItemInfo.md)[]

Defined in: main.ts:182534

primary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`primary_content`](../interfaces/ITopicInfo.md#primary_content)

***

### secondary\_content?

> `optional` **secondary\_content**: [`SectionContentItemInfo`](SectionContentItemInfo.md)[]

Defined in: main.ts:182537

secondary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`secondary_content`](../interfaces/ITopicInfo.md#secondary_content)

***

### table\_content?

> `optional` **table\_content**: [`TableContentInfo`](TableContentInfo.md)[]

Defined in: main.ts:182539

content of the table on the page

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`table_content`](../interfaces/ITopicInfo.md#table_content)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:182552

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:182588

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`TopicInfo`](TopicInfo.md)

Defined in: main.ts:182581

#### Parameters

##### data

`any`

#### Returns

[`TopicInfo`](TopicInfo.md)
