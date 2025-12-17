import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  subtitle: string;
  title: string;
  value: string;
}

const InfoCard = (props: Props) => {
  return (
    <div
      className="contact-card bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-xl animate-slide-up"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
        <props.icon className="text-primary text-2xl" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{props.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{props.subtitle}</p>
      <h4 className="text-primary text-xl font-bold">{props.value}</h4>
    </div>
  );
};

export default InfoCard;
