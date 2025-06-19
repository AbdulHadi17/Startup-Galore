import Searchbar from "../../components/searchbar";

export default async function  Home({searchParams}:{searchParams:Promise<{query?:string}>}) {

const query = (await searchParams).query as string;

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
  </>
 );
}
