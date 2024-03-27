import { X } from "lucide-react";
import "./alert.scss";
import { ReactNode } from "react";
import { AlertTypes } from "../../types";

interface IProps {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}

const Alert = ({ type, icon, title, description, children }: IProps) => {
  return (
    <>
      <div className={type}>
        <div className="alert-header">
          <div className="title">
            {icon}
            <h3>{title}</h3>
          </div>
          <X className="close" size={20} />
        </div>

        {children ? children : <p>{description}</p>}
      </div>
    </>
  );
};

export default Alert;
