import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

const LinkButton = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="btn-primary px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
