interface NullDataProps {
  title: string;
}

const NullData: React.FC<NullDataProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center h-screen text-2xl">
      <p className="font-medium">{title}</p>
    </div>
  );
};

export default NullData;
