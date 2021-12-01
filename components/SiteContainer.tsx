import { FunctionComponent } from "react";
import { PropsWithChildren } from "react";

interface IProps {
  title: string;
  description?: string;
}

const SiteContainer: FunctionComponent<PropsWithChildren<IProps>> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="container max-w-4xl pt-10">
      <h1>{title}</h1>
      {description ? <p>{description}</p> : ""}
      {children}
    </div>
  );
};

export default SiteContainer;
