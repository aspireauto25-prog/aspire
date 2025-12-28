import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  link: string;
}

const SocialLink = (props: Props) => {
  return (
    <a
      href={props.link}
      className="w-16 h-16 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
    >
      <props.icon className="text-2xl" />
    </a>
  );
};

export default SocialLink;
