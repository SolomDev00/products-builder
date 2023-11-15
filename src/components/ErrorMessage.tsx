interface IProps {
  msg: string;
}

const ErrorMessage = ({ msg }: IProps) => {
  return msg ? (
    <span className="block text-red-700 font-medium text-sm">{msg}</span>
  ) : null;
};

export default ErrorMessage;
