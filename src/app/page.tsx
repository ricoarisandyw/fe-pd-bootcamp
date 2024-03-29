'use client';

import PrimaryButton from '@/components/button/PrimaryButton';
import RoundedButton from '@/components/button/RoundedButton';
import Dropdown from '@/components/form/Dropdown';
import IconChat from '@/components/icon/IconChat';
import ItemBestVenue from '@/components/pages/home/ItemBestVenue';
import ItemNearby from '@/components/pages/home/ItemNearby';
import Footer from '@/components/pages/public/Footer';
import CityService from '@/service/CityService';
import VenueService from '@/service/VenueService';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';

export default function Home() {
  // SWR is cool library that will chace our response in 'getVenue' key.
  const { data } = useSWR('getVenue', async () => {
    const [all, nearby] = await Promise.all([
      VenueService.getVenue(),
      CityService.nearby()
    ])
    return {
      all,
      nearby
    }
  })
  const router = useRouter()
  const handleClickViewAll = () => router.push('/venue')

  return (
    <main>
      {/* HERO SECTION */}
      <div className='flex' style={{
        background: `url('/images/home.jpg')`,
        backgroundSize: "cover"
      }}>
        <div className='max-w-[800px] m-auto pt-[222px] pb-[227px] text-white'>
          <div className='text-center font-avenir font-extrabold leading-[52px] text-[54px] z-2 relative'>
            Find your best place in your town, for your <span className={['relative z-[5]',
                'after:z-[-1] after:rotate-[-4deg] after:absolute after:top-0 after:left-0 after:ml-[50%] after:mr-[50%] after:translate-x-[-50%] after:mt-4  after:bg-[#FFA48F] after:w-[289px] after:h-[28px]'
              ].join(' ')}>special day</span>
          </div>
          <div className='mt-[12px] text-center'>
            Showing results for Venue vendors in Jakarta, Indonesia
          </div>
          <div className='flex gap-3 mt-[51px] justify-center'>
            <Dropdown options={["All"]} />
            <Dropdown options={["All"]} />
            <Dropdown options={["All"]} />
            <PrimaryButton className='px-[20px] py-[12px]' onClick={handleClickViewAll}>Find Vendors</PrimaryButton>
          </div>
        </div>
      </div>
      {/* Explore Nearby */}
      <div className='max-w-[1260px] mx-auto pt-[80px] px-[90px]'>
        <div className='text-[40px] font-extrabold font-avenir'>
          Explore nearby
        </div>
        <div className='grid grid-cols-4 gap-x-[16px] gap-y-[40px] mt-[40px]'>
          {data?.nearby?.data.nearbies.map((near, i) => <ItemNearby key={i} image={near.thumbnailUrl} location={near.cityName} venueSize={near.totalVenue} />)}
        </div>
      </div>
      {/* BANNER */}
      <div className='max-w-[1260px] mx-auto px-[90px] mt-[60px]'>
        <div className='h-[81px] w-full relative'>
          <Image src="/images/home-banner.jpg" fill style={{
            objectFit: "contain"
          }} alt={"home-banner"} />
        </div>
      </div>
      {/* BEST VENUES */}
      <div className='max-w-[1260px] mx-auto px-[90px] mt-[60px]'>
        <div className='flex'>
          <div className='flex-1'>
            <div className='font-extrabold text-[40px] font-avenir'>Venue Terbaik di Indonesia</div>
            <div className='font-black text-[24px] mt-[12px] text-[#828282] font-avenir'>Lihat rekomendasi dengan berbagai macam budget</div>
          </div>
          <div className='my-auto'>
            <a onClick={handleClickViewAll} className='cursor-pointer font-black text-[24px] text-system border-b border-b-system border-solid'>Lihat semua venue</a>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-x-[46px] gap-y-[38px] mt-[32px]'>
          {data?.all?.data.venues.map((venue) => <ItemBestVenue key={venue.name} {...venue} />)}
        </div>
      </div>
      {/* CHAT ADMIN */}
      <div className='max-w-[1260px] mt-[103px] px-[90px] mb-[170px] flex mx-auto pb-[296px]'>
        <RoundedButton className='rounded-full text-white flex px-[20px] py-[12px] mx-auto'>
          <IconChat />
          <span className='ml-[8px] my-auto'>Chat Admin</span>
        </RoundedButton>
      </div>
      {/* FOOTER */}
      <Footer />
    </main>
  )
}
