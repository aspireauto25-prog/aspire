interface Props {
  content: string;
  Icon: React.ElementType;
  label: string;
}

const RentFeature = ({ content, Icon, label }: Props) => {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
        <Icon className="text-2xl text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{label}</h3>
      <p className="text-gray-600 dark:text-gray-400">{content}</p>
    </div>
  );
};

export default RentFeature;
