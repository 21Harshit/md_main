import Head from 'next/head'
import Link from 'next/link';
// import Carousels from '../Components/Carousels';
import Header from '../Components/Header'
import Typed from "react-typed";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import styles from "./style.module.css"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



interface Props{
  posts: [Post];
}

const getConfigurableProps = () => ({
  showArrows: false,
  showStatus:false, 
  showIndicators: true,
  infiniteLoop:true,
  showThumbs:false,
  useKeyboardArrows: false,
  autoPlay: true,
  stopOnHover: true,
  swipeable: true

});


export default function Home({ posts }: Props) {

  return (
    <div className="mx-auto mt-0 max-w-10xl">
      <Head>
        <title>Mailer Daemon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <nav className=' bg-gray-900'>
          <ul className='flex px-2 py-2 mx-2 justify-between'>
          <li className='font-bold flex text-orange-400' >
          <img className='w-10 h-10 md:w-11 md:h-11 ' src="data:image/jpeg;base64,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"></img> 
          <h1 className='px-1 text-sm md:text-lg'>Mailer Daemon <p className=' text-lime-500 text-xs md:text-sm'>It's news till it's new</p></h1> </li>
          <p className='flex space-x-6'>  
          <li className='py-2.5 text-sm md:text-lg text-slate-400  hover:text-white'><a rel="noopener noreferrer" target="_blank " href="">Placementor</a></li>
          <li className='py-2.5  pr-5 text-sm md:text-lg text-slate-400 hover:text-white'><a rel="noopener noreferrer" target="_blank " href="https://www.iitism.ac.in/iitismnew/">IIT(ISM)</a></li>
          </p> 
         </ul> 
        </nav>
  </div>
    
  <div className='flex flex-wrap ml-10 md:ml-20'>
  
  <div className='w-1/2 mt-5 mb-3 pb-2 pt-8 pr-5 pl-5 md:pb-14 md:pt-14 md:pl-10 md:pr-10  md:my-10'>
         <img className="rounded-lg " src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"></img>
         <span className='text-xs md:text-lg'>#placementdaemon</span>
  </div>
  <div className='w-1/2 mt-5 mb-3 pb-2 pt-8 pr-5 pl-5 md:pb-14 md:pt-14 md:pl-10 md:pr-10  md:my-10'> <img  className="rounded-lg" src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"></img>
  <span className='text-xs md:text-lg'>#campusdaemon</span>
  </div>

  </div>
<div>
<div className=' flex-wrap ml-10 mr-20 md:ml-40 md:mr-52'>
   <div className='flex flex-nowrap py-5 md:py-8'>
       <div className='w-1/2 md:w-1/5 md:h-48 h-24 mt-2 rounded-lg  ml-3 md:ml-10 bg-red-600'>
       1</div>
       <div className='w-1/2 md:w-1/5 md:h-48 h-24 mt-2 rounded-lg  ml-3 md:ml-10 bg-gray-600'>2</div>
       <div className='w-1/2 md:w-1/5 md:h-48 h-24 mt-2 rounded-lg  ml-3 md:ml-10 bg-zinc-600'>3</div>
       <div className='w-1/2 md:w-1/5 md:h-48 h-24 mt-2 rounded-lg  ml-3 md:ml-10 bg-amber-400'>4</div>
   </div>
   
   <div className='flex flex-nowrap py-5 md:py-8'>
       <div className='w-1/2 md:w-1/5 md:h-48 h-24 mt-2 rounded-lg  ml-3 md:ml-10 bg-red-600'>1</div>
       <div className='w-1/2 md:w-1/5 md:h-48 h-24 mt-2 rounded-lg  ml-3 md:ml-10 bg-gray-600'>2</div>
       <div className='w-1/2 md:w-1/5 md:h-48 h-24 mt-2 rounded-lg  ml-3 md:ml-10 bg-zinc-600'>3</div>
       <div className='w-1/2 md:w-1/5 md:h-48 h-24 mt-2 rounded-lg  ml-3 md:ml-10 bg-amber-400'>4</div>
   </div>

   <div className='flex flex-nowrap py-5 md:py-8'>
       <div className='w-1/2 md:w-1/5 md:h-48 h-24 mt-2 rounded-lg  ml-3 md:ml-10 bg-red-600'>1</div>
       <div className='w-1/2 md:w-1/5 md:h-48 h-24 mt-2 rounded-lg ml-3  md:ml-10 bg-gray-600'>2</div>
       <div className='w-1/2 md:w-1/5 md:h-48 h-24 mt-2 rounded-lg  ml-3 md:ml-10 bg-zinc-600'>3</div>
       <div className='w-1/2 md:w-1/5 md:h-48 h-24 mt-2 rounded-lg  ml-3 md:ml-10 bg-amber-400'>4</div>
   </div>

</div>
<div>
  4
</div>
</div>

<div className=' flex flex-auto ml-5 mr-5 mt-3 md:ml-10 md:mr-10'>
  
<div className="flex-auto grid grid-cols-1 gap-3 p-2 md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:p-6">
        {posts.map(post => {
          return (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="overflow-hidden border rounded-lg cursor-pointer group">
                <img className="object-cover w-full transition-transform duration-200 ease-in-out h-60 group-hover:scale-105" src={urlFor(post.mainImage).url()!} alt="" />
                <div className="flex justify-between p-5 bg-white">
                  <div>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p className="text-xs">{post.description} by {post.author.name}</p>
                  </div>
                  <img className="w-12 h-12 rounded-full" src={urlFor(post.author.image).url()!} alt="" />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

</div>

<div className=' bg-blue-800'>
  <a target="_blank" href="https://www.facebook.com/MDiitism/"><img className="w-6 h-6 md:w-8 md:h-8" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png" ></img></a>
</div>



</div>
  
          


  )
}

export const getServerSideProps = async () => {
  //turns a homepage into server side rendering
  const query = `*[_type == "post"]| order(_createdAt desc){
    _id,
    title,
    author -> {
      name,
      image
    },
      description,
      slug,
      mainImage
  }`

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  }

}
