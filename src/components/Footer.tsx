import Image from 'next/image'
import Link from 'next/link'
import BookNow from './BookNow'

export default function Footer() {
  return (
    <footer className="text-white py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="text-gray-400 uppercase text-sm font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-gray-300">Apps</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Workflows</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Database</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Mobile</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 uppercase text-sm font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-gray-300">AI apps</Link></li>
              <li><Link href="#" className="hover:text-gray-300">External apps</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Integrations</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Self-hosting</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 uppercase text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blogs" className="hover:text-gray-300">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 uppercase text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/faqs" className="hover:text-gray-300">FAQs</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-300">PRIVACY POLICY</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
            </ul>
            <div className="mt-6 ">
              <BookNow/>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/logowithtext.png" width={200} height={80} alt="logo" />
          </div>
          <div className="text-sm text-gray-400 mt-4 md:mt-0">
            © BigByteBerry 2024
          </div>
        </div>
      </div>
    </footer>
  )
}