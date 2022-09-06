type Props = {
  title: string;
};
const TitleHeading = (props: Props): JSX.Element => {
  return <h1 className="text-xl font-black">{props.title}</h1>;
};

export default TitleHeading;
