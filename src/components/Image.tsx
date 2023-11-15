interface IProps {
  className: string;
  imageURL: string;
  alt: string;
  title?: string;
}

const Image = ({ imageURL, alt, className, title }: IProps) => {
  return <img src={imageURL} alt={alt} className={className} title={title} />;
};

export default Image;
