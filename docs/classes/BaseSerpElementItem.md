[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseSerpElementItem

# Class: BaseSerpElementItem

Defined in: main.ts:21981

## Extended by

- [`PaidSerpElementItem`](PaidSerpElementItem.md)
- [`OrganicSerpElementItem`](OrganicSerpElementItem.md)
- [`FeaturedSnippetSerpElementItem`](FeaturedSnippetSerpElementItem.md)
- [`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)
- [`KnowledgeGraphDescriptionItemSerpElementItem`](KnowledgeGraphDescriptionItemSerpElementItem.md)
- [`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)
- [`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)
- [`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)
- [`KnowledgeGraphExpandedItemSerpElementItem`](KnowledgeGraphExpandedItemSerpElementItem.md)
- [`KnowledgeGraphPartItemSerpElementItem`](KnowledgeGraphPartItemSerpElementItem.md)
- [`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)
- [`KnowledgeGraphHotelsBookingItemSerpElementItem`](KnowledgeGraphHotelsBookingItemSerpElementItem.md)
- [`KnowledgeGraphAiOverviewItemSerpElementItem`](KnowledgeGraphAiOverviewItemSerpElementItem.md)
- [`KnowledgeGraphSerpElementItem`](KnowledgeGraphSerpElementItem.md)
- [`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)
- [`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)
- [`PeopleAlsoSearchSerpElementItem`](PeopleAlsoSearchSerpElementItem.md)
- [`ImagesSerpElementItem`](ImagesSerpElementItem.md)
- [`TwitterSerpElementItem`](TwitterSerpElementItem.md)
- [`GoogleReviewsSerpElementItem`](GoogleReviewsSerpElementItem.md)
- [`JobsSerpElementItem`](JobsSerpElementItem.md)
- [`MapSerpElementItem`](MapSerpElementItem.md)
- [`AppSerpElementItem`](AppSerpElementItem.md)
- [`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)
- [`CarouselSerpElementItem`](CarouselSerpElementItem.md)
- [`VideoSerpElementItem`](VideoSerpElementItem.md)
- [`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)
- [`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)
- [`GoogleFlightsSerpElementItem`](GoogleFlightsSerpElementItem.md)
- [`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)
- [`EventsSerpElementItem`](EventsSerpElementItem.md)
- [`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)
- [`MultiCarouselSerpElementItem`](MultiCarouselSerpElementItem.md)
- [`RecipesSerpElementItem`](RecipesSerpElementItem.md)
- [`TopSightsSerpElementItem`](TopSightsSerpElementItem.md)
- [`ScholarlyArticlesSerpElementItem`](ScholarlyArticlesSerpElementItem.md)
- [`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)
- [`PodcastsSerpElementItem`](PodcastsSerpElementItem.md)
- [`StocksBoxSerpElementItem`](StocksBoxSerpElementItem.md)
- [`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)
- [`QuestionsAndAnswersSerpElementItem`](QuestionsAndAnswersSerpElementItem.md)
- [`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)
- [`VisualStoriesSerpElementItem`](VisualStoriesSerpElementItem.md)
- [`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)
- [`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)
- [`GoogleHotelsSerpElementItem`](GoogleHotelsSerpElementItem.md)
- [`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)
- [`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)
- [`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)
- [`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)
- [`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)
- [`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)
- [`RefineProductsSerpElementItem`](RefineProductsSerpElementItem.md)
- [`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)
- [`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)
- [`DiscussionsAndForumsSerpElementItem`](DiscussionsAndForumsSerpElementItem.md)
- [`CompareSitesSerpElementItem`](CompareSitesSerpElementItem.md)
- [`CoursesSerpElementItem`](CoursesSerpElementItem.md)
- [`AiOverviewSerpElementItem`](AiOverviewSerpElementItem.md)
- [`ThirdPartyReviewsSerpElementItem`](ThirdPartyReviewsSerpElementItem.md)
- [`EventItemSerpElementItem`](EventItemSerpElementItem.md)
- [`DictionarySerpElementItem`](DictionarySerpElementItem.md)

## Implements

- [`IBaseSerpElementItem`](../interfaces/IBaseSerpElementItem.md)

## Constructors

### Constructor

> **new BaseSerpElementItem**(`data?`): `BaseSerpElementItem`

Defined in: main.ts:21994

#### Parameters

##### data?

[`IBaseSerpElementItem`](../interfaces/IBaseSerpElementItem.md)

#### Returns

`BaseSerpElementItem`

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21992

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IBaseSerpElementItem`](../interfaces/IBaseSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21987

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseSerpElementItem`](../interfaces/IBaseSerpElementItem.md).[`rank_group`](../interfaces/IBaseSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`IBaseSerpElementItem`](../interfaces/IBaseSerpElementItem.md).[`type`](../interfaces/IBaseSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:22004

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:22329

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BaseSerpElementItem`

Defined in: main.ts:22012

#### Parameters

##### data

`any`

#### Returns

`BaseSerpElementItem`
