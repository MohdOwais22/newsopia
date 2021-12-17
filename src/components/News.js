import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

    static defaultProps = {
        country:'in',
        pageSize:8,
        category:'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
     capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    
    constructor(props){
        super(props);
        
        this.state = {
            articles:[],
            loading: true,
            page: 1,
            totalResults:0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - Newsopia`
    }

        async updateNews(){
            this.props.setProgress(10);
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
            let data = await fetch(url)
            this.props.setProgress(40);
            let parsedData =await data.json()
            this.props.setProgress(70);
        
            this.setState( {
                 articles : parsedData.articles,
                 totalResults: parsedData.totalResults
                } )
                this.props.setProgress(100);
        }
        async componentDidMount(){
            this.updateNews();
        }
        
        fetchMoreData  = async()=>{
            this.setState( {page : this.state.page + 1 });
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData =await data.json()
          
            this.setState( {
                 articles : this.state.articles.concat(parsedData.articles),
                 totalResults: parsedData.totalResults
                } )
        };
       
    

    render() {
        return (
          
            <>
                <h1 className='text-center' style={{marginTop:'90px'}}>Newsopia -- Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
               {!this.state.loading && <Spinner/>} 
                <InfiniteScroll
                dataLength={this.state.articles.length} 
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner/>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }>
                <div className='container'>
                <div className='row'>

                {this.state.articles.map((element)=>{
                    return  <div className='col-md-3 mx-3 my-3' key={element.url} >
                <NewsItem title={element.title?element.title.slice(0,80):" "} description={element.description?element.description.slice(0,80):" "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} samay={element.publishedAt} source={element.source.name} />
                </div>
                })}
                
                </div>
                </div>
                </InfiniteScroll>
            </>
                
            

            
        )
    }
}


