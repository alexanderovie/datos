[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseDataforseoLabsSerpElementItem

# Interface: IBaseDataforseoLabsSerpElementItem

Defined in: main.ts:22835

## Extended by

- [`IOrganicDataforseoLabsSerpElementItem`](IOrganicDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphDataforseoLabsSerpElementItem`](IKnowledgeGraphDataforseoLabsSerpElementItem.md)
- [`IPeopleAlsoAskDataforseoLabsSerpElementItem`](IPeopleAlsoAskDataforseoLabsSerpElementItem.md)
- [`IVideoDataforseoLabsSerpElementItem`](IVideoDataforseoLabsSerpElementItem.md)
- [`IRelatedSearchesDataforseoLabsSerpElementItem`](IRelatedSearchesDataforseoLabsSerpElementItem.md)
- [`IImagesDataforseoLabsSerpElementItem`](IImagesDataforseoLabsSerpElementItem.md)
- [`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](IPeopleAlsoSearchDataforseoLabsSerpElementItem.md)
- [`ICarouselDataforseoLabsSerpElementItem`](ICarouselDataforseoLabsSerpElementItem.md)
- [`IMultiCarouselDataforseoLabsSerpElementItem`](IMultiCarouselDataforseoLabsSerpElementItem.md)
- [`ITopStoriesDataforseoLabsSerpElementItem`](ITopStoriesDataforseoLabsSerpElementItem.md)
- [`IAnswerBoxDataforseoLabsSerpElementItem`](IAnswerBoxDataforseoLabsSerpElementItem.md)
- [`IMathSolverDataforseoLabsSerpElementItem`](IMathSolverDataforseoLabsSerpElementItem.md)
- [`IMapDataforseoLabsSerpElementItem`](IMapDataforseoLabsSerpElementItem.md)
- [`IFeaturedSnippetDataforseoLabsSerpElementItem`](IFeaturedSnippetDataforseoLabsSerpElementItem.md)
- [`ILocalPackDataforseoLabsSerpElementItem`](ILocalPackDataforseoLabsSerpElementItem.md)
- [`IHotelsPackDataforseoLabsSerpElementItem`](IHotelsPackDataforseoLabsSerpElementItem.md)
- [`ITwitterDataforseoLabsSerpElementItem`](ITwitterDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)
- [`IPaidDataforseoLabsSerpElementItem`](IPaidDataforseoLabsSerpElementItem.md)
- [`IGoogleReviewsDataforseoLabsSerpElementItem`](IGoogleReviewsDataforseoLabsSerpElementItem.md)
- [`IGooglePostsDataforseoLabsSerpElementItem`](IGooglePostsDataforseoLabsSerpElementItem.md)
- [`IGoogleFlightsDataforseoLabsSerpElementItem`](IGoogleFlightsDataforseoLabsSerpElementItem.md)
- [`IShoppingDataforseoLabsSerpElementItem`](IShoppingDataforseoLabsSerpElementItem.md)
- [`IJobsDataforseoLabsSerpElementItem`](IJobsDataforseoLabsSerpElementItem.md)
- [`IEventsDataforseoLabsSerpElementItem`](IEventsDataforseoLabsSerpElementItem.md)
- [`IMentionCarouselDataforseoLabsSerpElementItem`](IMentionCarouselDataforseoLabsSerpElementItem.md)
- [`IRecipesDataforseoLabsSerpElementItem`](IRecipesDataforseoLabsSerpElementItem.md)
- [`ITopSightsDataforseoLabsSerpElementItem`](ITopSightsDataforseoLabsSerpElementItem.md)
- [`IScholarlyArticlesDataforseoLabsSerpElementItem`](IScholarlyArticlesDataforseoLabsSerpElementItem.md)
- [`IPopularProductsDataforseoLabsSerpElementItem`](IPopularProductsDataforseoLabsSerpElementItem.md)
- [`IPodcastsDataforseoLabsSerpElementItem`](IPodcastsDataforseoLabsSerpElementItem.md)
- [`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](IQuestionsAndAnswersDataforseoLabsSerpElementItem.md)
- [`IFindResultsOnDataforseoLabsSerpElementItem`](IFindResultsOnDataforseoLabsSerpElementItem.md)
- [`IStocksBoxDataforseoLabsSerpElementItem`](IStocksBoxDataforseoLabsSerpElementItem.md)
- [`IVisualStoriesDataforseoLabsSerpElementItem`](IVisualStoriesDataforseoLabsSerpElementItem.md)
- [`ICommercialUnitsDataforseoLabsSerpElementItem`](ICommercialUnitsDataforseoLabsSerpElementItem.md)
- [`ILocalServicesDataforseoLabsSerpElementItem`](ILocalServicesDataforseoLabsSerpElementItem.md)
- [`IGoogleHotelsDataforseoLabsSerpElementItem`](IGoogleHotelsDataforseoLabsSerpElementItem.md)

## Properties

### position?

> `optional` **position**: `string`

Defined in: main.ts:22847

the alignment of the element in SERP
can take the following values:
left, right

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22843

absolute rank in SERP
absolute position among all the elements in SERP

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22840

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22837

type of element

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22849

the XPath of the element
