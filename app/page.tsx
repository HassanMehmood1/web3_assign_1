import Image from 'next/image'
import { Inter } from 'next/font/google'
import RpcProviderExample from './Wallet'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='text-center'>
        <h1 className='text-3xl py-3 font-bold bg-green-400'>Social Wallets</h1>
        <h2 className='text-2xl py-5 font-bold bg-red-400'>Wallets connecting using Social Media</h2>
        <RpcProviderExample />
		</main>
  )
}
