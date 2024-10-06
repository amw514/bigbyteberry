import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Chatbots", href: "/services/ai-chatbots" },
        { name: "Automation", href: "/services/automation-solutions" },
        { name: "SaaS Development", href: "/services/saas-development" },
        { name: "Mobile Apps", href: "/services/mobile-app-development" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "MVP for Startups", href: "/services/mvp-for-startups" },
        { name: "Web Development", href: "/services/web-development" },
        { name: "UI/UX Design", href: "/services/ui-ux-design" },
        { name: "SEO Optimization", href: "/services/seo-optimization" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Blogs", href: "/blogs" },
        { name: "FAQs", href: "/faqs" },
        { name: "Contact", href: "/#contact" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col justify-between">
            <div>
              <Link href="/">
                <Image
                  src="/logowithtext.png"
                  alt="BigByteBerry Logo"
                  width={180}
                  height={120}
                  className="filter brightness-0 invert mb-4"
                />
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              © BigByteBerry {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
