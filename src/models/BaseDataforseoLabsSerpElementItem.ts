import { ApiException, throwException } from "./ApiException"

export interface IBaseDataforseoLabsSerpElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined

    [key: string]: any;

    }

export class BaseDataforseoLabsSerpElementItem  implements IBaseDataforseoLabsSerpElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;
    
    /** the XPath of the element */

    xpath?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseDataforseoLabsSerpElementItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.position = data["position"];
            this.xpath = data["xpath"];
        }
    }

    static fromJS(data: any): BaseDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "local_pack") {

            const { LocalPackDataforseoLabsSerpElementItem } = require('./LocalPackDataforseoLabsSerpElementItem');
            let result = new LocalPackDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "featured_snippet") {

            const { FeaturedSnippetDataforseoLabsSerpElementItem } = require('./FeaturedSnippetDataforseoLabsSerpElementItem');
            let result = new FeaturedSnippetDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "organic") {

            const { OrganicDataforseoLabsSerpElementItem } = require('./OrganicDataforseoLabsSerpElementItem');
            let result = new OrganicDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "answer_box") {

            const { AnswerBoxDataforseoLabsSerpElementItem } = require('./AnswerBoxDataforseoLabsSerpElementItem');
            let result = new AnswerBoxDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "carousel") {

            const { CarouselDataforseoLabsSerpElementItem } = require('./CarouselDataforseoLabsSerpElementItem');
            let result = new CarouselDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "multi_carousel") {

            const { MultiCarouselDataforseoLabsSerpElementItem } = require('./MultiCarouselDataforseoLabsSerpElementItem');
            let result = new MultiCarouselDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_flights") {

            const { GoogleFlightsDataforseoLabsSerpElementItem } = require('./GoogleFlightsDataforseoLabsSerpElementItem');
            let result = new GoogleFlightsDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_reviews") {

            const { GoogleReviewsDataforseoLabsSerpElementItem } = require('./GoogleReviewsDataforseoLabsSerpElementItem');
            let result = new GoogleReviewsDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_posts") {

            const { GooglePostsDataforseoLabsSerpElementItem } = require('./GooglePostsDataforseoLabsSerpElementItem');
            let result = new GooglePostsDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "images") {

            const { ImagesDataforseoLabsSerpElementItem } = require('./ImagesDataforseoLabsSerpElementItem');
            let result = new ImagesDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "jobs") {

            const { JobsDataforseoLabsSerpElementItem } = require('./JobsDataforseoLabsSerpElementItem');
            let result = new JobsDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_description_item") {

            const { KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem } = require('./KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem');
            let result = new KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_row_item") {

            const { KnowledgeGraphRowItemDataforseoLabsSerpElementItem } = require('./KnowledgeGraphRowItemDataforseoLabsSerpElementItem');
            let result = new KnowledgeGraphRowItemDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_images_item") {

            const { KnowledgeGraphImagesItemDataforseoLabsSerpElementItem } = require('./KnowledgeGraphImagesItemDataforseoLabsSerpElementItem');
            let result = new KnowledgeGraphImagesItemDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph") {

            const { KnowledgeGraphDataforseoLabsSerpElementItem } = require('./KnowledgeGraphDataforseoLabsSerpElementItem');
            let result = new KnowledgeGraphDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "hotels_pack") {

            const { HotelsPackDataforseoLabsSerpElementItem } = require('./HotelsPackDataforseoLabsSerpElementItem');
            let result = new HotelsPackDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "map") {

            const { MapDataforseoLabsSerpElementItem } = require('./MapDataforseoLabsSerpElementItem');
            let result = new MapDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "paid") {

            const { PaidDataforseoLabsSerpElementItem } = require('./PaidDataforseoLabsSerpElementItem');
            let result = new PaidDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "people_also_ask") {

            const { PeopleAlsoAskDataforseoLabsSerpElementItem } = require('./PeopleAlsoAskDataforseoLabsSerpElementItem');
            let result = new PeopleAlsoAskDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "related_searches") {

            const { RelatedSearchesDataforseoLabsSerpElementItem } = require('./RelatedSearchesDataforseoLabsSerpElementItem');
            let result = new RelatedSearchesDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "people_also_search") {

            const { PeopleAlsoSearchDataforseoLabsSerpElementItem } = require('./PeopleAlsoSearchDataforseoLabsSerpElementItem');
            let result = new PeopleAlsoSearchDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "shopping") {

            const { ShoppingDataforseoLabsSerpElementItem } = require('./ShoppingDataforseoLabsSerpElementItem');
            let result = new ShoppingDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "top_stories") {

            const { TopStoriesDataforseoLabsSerpElementItem } = require('./TopStoriesDataforseoLabsSerpElementItem');
            let result = new TopStoriesDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "twitter") {

            const { TwitterDataforseoLabsSerpElementItem } = require('./TwitterDataforseoLabsSerpElementItem');
            let result = new TwitterDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "video") {

            const { VideoDataforseoLabsSerpElementItem } = require('./VideoDataforseoLabsSerpElementItem');
            let result = new VideoDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "events") {

            const { EventsDataforseoLabsSerpElementItem } = require('./EventsDataforseoLabsSerpElementItem');
            let result = new EventsDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "mention_carousel") {

            const { MentionCarouselDataforseoLabsSerpElementItem } = require('./MentionCarouselDataforseoLabsSerpElementItem');
            let result = new MentionCarouselDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "recipes") {

            const { RecipesDataforseoLabsSerpElementItem } = require('./RecipesDataforseoLabsSerpElementItem');
            let result = new RecipesDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "top_sights") {

            const { TopSightsDataforseoLabsSerpElementItem } = require('./TopSightsDataforseoLabsSerpElementItem');
            let result = new TopSightsDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "scholarly_articles") {

            const { ScholarlyArticlesDataforseoLabsSerpElementItem } = require('./ScholarlyArticlesDataforseoLabsSerpElementItem');
            let result = new ScholarlyArticlesDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "popular_products") {

            const { PopularProductsDataforseoLabsSerpElementItem } = require('./PopularProductsDataforseoLabsSerpElementItem');
            let result = new PopularProductsDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "podcasts") {

            const { PodcastsDataforseoLabsSerpElementItem } = require('./PodcastsDataforseoLabsSerpElementItem');
            let result = new PodcastsDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "questions_and_answers") {

            const { QuestionsAndAnswersDataforseoLabsSerpElementItem } = require('./QuestionsAndAnswersDataforseoLabsSerpElementItem');
            let result = new QuestionsAndAnswersDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "find_results_on") {

            const { FindResultsOnDataforseoLabsSerpElementItem } = require('./FindResultsOnDataforseoLabsSerpElementItem');
            let result = new FindResultsOnDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "stocks_box") {

            const { StocksBoxDataforseoLabsSerpElementItem } = require('./StocksBoxDataforseoLabsSerpElementItem');
            let result = new StocksBoxDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "commercial_units") {

            const { CommercialUnitsDataforseoLabsSerpElementItem } = require('./CommercialUnitsDataforseoLabsSerpElementItem');
            let result = new CommercialUnitsDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "local_services") {

            const { LocalServicesDataforseoLabsSerpElementItem } = require('./LocalServicesDataforseoLabsSerpElementItem');
            let result = new LocalServicesDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_hotels") {

            const { GoogleHotelsDataforseoLabsSerpElementItem } = require('./GoogleHotelsDataforseoLabsSerpElementItem');
            let result = new GoogleHotelsDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "math_solver") {

            const { MathSolverDataforseoLabsSerpElementItem } = require('./MathSolverDataforseoLabsSerpElementItem');
            let result = new MathSolverDataforseoLabsSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        return data;
    }
}