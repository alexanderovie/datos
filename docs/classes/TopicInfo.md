[**Documentation**](../README.md)

***

[Documentation](../README.md) / TopicInfo

# Class: TopicInfo

Defined in: main.ts:185340

## Implements

- [`ITopicInfo`](../interfaces/ITopicInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new TopicInfo**(`data?`): `TopicInfo`

Defined in: main.ts:185362

#### Parameters

##### data?

[`ITopicInfo`](../interfaces/ITopicInfo.md)

#### Returns

`TopicInfo`

## Properties

### author?

> `optional` **author**: `string`

Defined in: main.ts:185346

content author name

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`author`](../interfaces/ITopicInfo.md#author)

***

### h\_title?

> `optional` **h\_title**: `string`

Defined in: main.ts:185342

meta title

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`h_title`](../interfaces/ITopicInfo.md#h_title)

***

### language?

> `optional` **language**: `string`

Defined in: main.ts:185348

content language

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`language`](../interfaces/ITopicInfo.md#language)

***

### level?

> `optional` **level**: `number`

Defined in: main.ts:185350

HTML level

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`level`](../interfaces/ITopicInfo.md#level)

***

### main\_title?

> `optional` **main\_title**: `string`

Defined in: main.ts:185344

main title of the block

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`main_title`](../interfaces/ITopicInfo.md#main_title)

***

### primary\_content?

> `optional` **primary\_content**: [`SectionContentItemInfo`](SectionContentItemInfo.md)[]

Defined in: main.ts:185353

primary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`primary_content`](../interfaces/ITopicInfo.md#primary_content)

***

### secondary\_content?

> `optional` **secondary\_content**: [`SectionContentItemInfo`](SectionContentItemInfo.md)[]

Defined in: main.ts:185356

secondary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`secondary_content`](../interfaces/ITopicInfo.md#secondary_content)

***

### table\_content?

> `optional` **table\_content**: [`TableContentInfo`](TableContentInfo.md)[]

Defined in: main.ts:185358

content of the table on the page

#### Implementation of

[`ITopicInfo`](../interfaces/ITopicInfo.md).[`table_content`](../interfaces/ITopicInfo.md#table_content)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:185371

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:185407

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `TopicInfo`

Defined in: main.ts:185400

#### Parameters

##### data

`any`

#### Returns

`TopicInfo`
