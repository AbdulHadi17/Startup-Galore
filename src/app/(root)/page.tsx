import StartupCard, { StartupCardType } from "@/components/StartupCard";
import Searchbar from "../../components/searchbar";
// import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function  Home({searchParams}:{searchParams:Promise<{query?:string}>}) {

const query = (await searchParams).query as string;

// const posts = await client.fetch(STARTUPS_QUERY);
const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY});

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
    posts.map((post:StartupCardType) => (
      <StartupCard key={post?._id} post={post} />
    ))
  ) : (
    <p className="text-black text-sm font-normal">No Posts To Show</p>
  )}
</ul>

</section>

<SanityLive />
  </>
 );
}
