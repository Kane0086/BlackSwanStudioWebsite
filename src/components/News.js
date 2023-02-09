import NewsBox from '../templates/NewsBox';
import './../styles/News.css';

function News() {
  return (
    <section className="News">
      <div className="news-container">
        <h1 className="title">NEWS</h1>
        <div className='box-container'>
            <div className='latest-news'>
                <NewsBox/>
            </div>
            <div className='older-news'>
                <div className='older-box'>
                <NewsBox/>
                    
                </div>
                <div className='older-box'>

                <NewsBox/>
                </div>
                <div className='older-box'>
                <NewsBox/>

                </div>
                <div className='older-box'>
                <NewsBox/>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default News;
