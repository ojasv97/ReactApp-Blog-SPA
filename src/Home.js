import BlogsList from './BlogsList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs, isLoaded, error}  = useFetch('http://localhost:8000/blogs');
    return (
        <div className = 'home'> 
            {error && <p>Error while loading...</p>}
            {isLoaded && <p>Loading....</p>}   
            {blogs && <BlogsList blogs = {blogs} title="All blogs!"/>}
            {/* <BlogsList blogs = { blogs.filter((blog) => (
                blog.author==='mario'
            ))} title = {"Mario's blogs!"}> </BlogsList> */}
        </div>
    )
}

export default Home


//Handler

// const Home = () => {
//     const handleClick = ( name ) => {
//         console.log('hello '+name);
//     }
//     return (
//         <div className="Home">
//             <h2>Homepage</h2>
//             <button onClick = { () => {handleClick('Ojas')} }>Click me</button>
//         </div>
//     );
// }