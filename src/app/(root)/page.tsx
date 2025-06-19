import StartupCard from "@/components/StartupCard";
import Searchbar from "../../components/searchbar";

export default async function  Home({searchParams}:{searchParams:Promise<{query?:string}>}) {

const query = (await searchParams).query as string;
const posts = [
  {
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1 , name:"Abdul Hadi" },
    _id: 1,
    description: "This is a description",
    image: "https://images.unsplash.com/photo-1750126833705-ba98013f16f3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    category: "Robots",
    title: "We Robots",
  },
];


  return (
  <>
  <section className="bg-[#EE2B69] pattern w-full min-h-[530px] py-10 px-6 flex justify-center items-center flex-col">
<h1 className="uppercase bg-black px-6 py-6 my-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5;
  "> Pitch Your Startup, <br />
          Connect With Entrepreneurs</h1>
  
<p className="font-medium text-[20px] text-white text-center break-words max-w-3xl"> Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
Competitions.</p>

<Searchbar query={query}/>
  </section>

<section className="px-6 py-10 max-w-7xl mx-auto">

  <p className="font-semibold text-[30px] text-black">{query?`Search Results for "${query}"`:"All Startups"}</p>

  <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
  {posts?.length > 0 ? (
    posts.map((post, key) => (
      <StartupCard key={post?._id} post={post} />
    ))
  ) : (
    <p className="text-black text-sm font-normal">No Posts To Show</p>
  )}
</ul>

</section>


  </>
 );
}
