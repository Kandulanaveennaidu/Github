import { useMemo } from "react";
import styles from "./FormContainer.module.css";

const FormContainer = ({
  featureDescription,
  serviceDescription,
  propTop,
  propWidth,
  propWidth1,
}) => {
  const card4Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const flexibleSecureApplicationStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const networkingStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.card4} style={card4Style}>
      <div
        className={styles.flexibleSecureApplication}
        style={flexibleSecureApplicationStyle}
      >
        {featureDescription}
      </div>
      <div className={styles.networking} style={networkingStyle}>
        {serviceDescription}
      </div>
      <div className={styles.icon} />
    </div>
  );
};

export default FormContainer;
