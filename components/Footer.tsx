import Link from "next/link";
// import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Scholarship Discovery", href: "#scholarships" },
      { label: "SOP Feedback", href: "#sop-feedback" },
      { label: "Application Tracker", href: "#tracking" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "SOP Guides", href: "#" },
      { label: "Scholarship Guides", href: "#" },
      { label: "Masters Resources", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white border-t border-gray-100 pt-20 pb-10 px-4 md:px-20 xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
        <div className="lg:col-span-2">
          <Link href="/" className="text-3xl font-bold text-white mb-6 block">
            UniPath
          </Link>
          <p className="text-gray-100 mb-8 max-w-sm">
            Empowering students to achieve their college dreams with AI-driven
            insights and personalized guidance.
          </p>
          <div className="flex gap-4 text-gray-100">
            <Link href="#" className="hover:text-primary transition-colors">
              {/* <Twitter className="w-5 h-5" /> */}
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              {/* <Linkedin className="w-5 h-5" /> */}
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              {/* <Instagram className="w-5 h-5" /> */}
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              {/* <Github className="w-5 h-5" /> */}
            </Link>
          </div>
        </div>

        {footerLinks.map((column, index) => (
          <div key={index} className="flex flex-col">
            <h4 className="font-semibold text-white mb-6">{column.title}</h4>
            <ul className="flex flex-col gap-4">
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t-1 border-gray-500 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="text-gray-100 text-sm">
          © {new Date().getFullYear()} UniPath. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
