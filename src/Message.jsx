import "./Message.css";

export const Message = (props) => {
  console.log(props.name);
  return <div>Hello{props.name}!</div>;
};
