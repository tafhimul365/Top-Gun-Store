import ReviewCard from '../ReviewCard/ReviewCard';
import useReview from '../../Utilities/myHooks/useReview'
import CustomLink from '../CustomLink/CustomLink';

const Home = () => {
    const [reviews] = useReview()

    const reviewAll = () => {

    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 m-12 '>

                <div>
                    <img className='w-96' src='gunpic.png' alt="logo" /><br /><br />
                    <p className='text-3xl  text-rose-900 text-left font-bold'>Smith & Wesson M&P15</p>
                </div>
                <div>
                    <h1 className="text-5xl text-blue-900 font-bold">
                        Top Gun Store
                    </h1><br />
                    <p className="text-2xl text-black-900 text-left font-light">M&P15 Rifles are the ideal modern sporting rifle.  Built to perform multiple uses under various conditions, M&P15 Rifles are as versatile as they are reliable.   Engineered for a wide variety of recreational, sport shooting and professional applications, M&P15 Rifles are easy to accessorize, but hard to put down. M&P15 Rifles are lightweight and rugged embodying the best combination of function and form.</p>
                </div>
            </div>
            <div className='customer-review mb-8'>
                <h1 className="text-3xl text-blue-900 font-bold" >Customer Reviews</h1>
                {
                    reviews.slice(0, 3).map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)

                }
                <button onClick={reviewAll} className=' bg-gray-400  font-medium text-white text-xl px-2'>{<CustomLink className='click' to='/review'>Click for all</CustomLink>}</button>
                {/* <CustomLink className='click' to='/review'></CustomLink> */}
            </div>
        </div>
    );
};

export default Home;