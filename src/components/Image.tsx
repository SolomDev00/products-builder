interface IProps {
  className: string;
  imageURL: string;
  alt: string;
}

const Image = ({ imageURL, alt, className }: IProps) => {
  return <img src={imageURL} alt={alt} className={className} />;
};

export default Image;
