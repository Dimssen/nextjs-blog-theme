import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <img
        src="https://cdn.discordapp.com/attachments/938769562206367766/1216843348300529664/Logo2.png?ex=66e9e4ae&is=66e8932e&hm=eabea6f78cc93bdbc97dd241c408e7f4cfebf0fc510e2d47a9fa22ca28b3c271&"
        alt="Dim's Capes"
        className="block w-18 h-18 mx-auto mb-4 rounded-full"
      />
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">
          {name}
        </Link>
      </p>
    </header>
  );
}
