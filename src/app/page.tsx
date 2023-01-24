import PrimaryButton from '@/components/button/PrimaryButton'
import RoundedButton from '@/components/button/RoundedButton'
import Dropdown from '@/components/form/Dropdown'
import IconChat from '@/components/icon/IconChat'
import ItemBestVenue from '@/components/pages/home/ItemBestVenue'
import ItemNearby from '@/components/pages/home/ItemNearby'
import Footer from '@/components/pages/public/Footer'
import { Inter } from '@next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <div className='flex' style={{
        background: `url('/images/home.jpg')`,
        backgroundSize: "cover"
      }}>
        <div className='max-w-[800px] m-auto pt-[222px] pb-[227px] text-white'>
          <div className='text-center font-avenir font-extrabold leading-[52px] text-[54px]'>
            Find your best place in your town, for your special day
          </div>
          <div className='mt-[12px] text-center'>
            Showing results for Venue vendors in Jakarta, Indonesia
          </div>
          <div className='flex gap-3 mt-[51px] justify-center'>
            <Dropdown options={["All"]} />
            <Dropdown options={["All"]} />
            <Dropdown options={["All"]} />
            <PrimaryButton className='px-[20px] py-[12px]'>Find Vendors</PrimaryButton>
          </div>
        </div>
      </div>
      {/* Explore Nearby */}
      <div className='max-w-[1260px] mx-auto pt-[80px] px-[90px]'>
        <div className='text-[40px] font-extrabold font-avenir'>
          Explore nearby
        </div>
        <div className='grid grid-cols-4 gap-x-[16px] gap-y-[40px] mt-[40px]'>
          {Array.from(Array(7)).map((_, i) => <ItemNearby key={i} image='/images/city.jpg' location='Surabya' venueSize='15' />)}
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
            <a className='font-black text-[24px] text-system border-b border-b-system border-solid'>Lihat semua venue</a>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-x-[46px] gap-y-[38px] mt-[32px]'>
          {Array.from(Array(7)).map((_, i) => <ItemBestVenue key={i + " hotel ciputra"} image='/images/city.jpg' reviews={20} star={3} venueName="Hotel Ciputra World Surabaya" />)}
        </div>
      </div>
      {/* CHAT ADMIN */}
      <div className='max-w-[1260px] mt-[103px] px-[90px] mb-[170px] flex'>
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
