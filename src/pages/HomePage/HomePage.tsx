

type HelloWorldProps = {
  userName: string;
};
const HelloWorld: React.FC<HelloWorldProps> = ({ children, userName }) => (
  <div>
    <p>Hello, {userName}</p>
    {children}
  </div>
);

export default HelloWorld;