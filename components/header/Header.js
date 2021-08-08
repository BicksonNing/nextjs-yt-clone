import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className='flex flex-col sm:flex-row items-center justify-between m-5 h-auto '>
      <div className='flex flex-grow justify-evenly max-w-2xl '>
        <HeaderItem title='HOME' Icon={HomeIcon} />
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
        <HeaderItem title='SEARCH' Icon={SearchIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>
      <Image
        className='object-contain'
        src='/hululogo.png'
        width={180}
        height={90}
      />
    </header>
  );
}

export default Header;
