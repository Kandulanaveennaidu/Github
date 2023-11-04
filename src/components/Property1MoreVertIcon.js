import { useMemo } from "react";
import styles from "./Property1MoreVertIcon.module.css";

const Property1MoreVertIcon = ({
  imageDimensions,
  property1MoreVertIconWidth,
  property1MoreVertIconHeight,
  property1MoreVertIconOverflow,
  property1MoreVertIconPosition,
  property1MoreVertIconTop,
  property1MoreVertIconLeft,
}) => {
  const property1MoreVertIconStyle = useMemo(() => {
    return {
      width: property1MoreVertIconWidth,
      height: property1MoreVertIconHeight,
      overflow: property1MoreVertIconOverflow,
      position: property1MoreVertIconPosition,
      top: property1MoreVertIconTop,
      left: property1MoreVertIconLeft,
    };
  }, [
    property1MoreVertIconWidth,
    property1MoreVertIconHeight,
    property1MoreVertIconOverflow,
    property1MoreVertIconPosition,
    property1MoreVertIconTop,
    property1MoreVertIconLeft,
  ]);

  return (
    <img
      className={styles.property1moreVertIcon}
      alt=""
      src={imageDimensions}
      style={property1MoreVertIconStyle}
    />
  );
};

export default Property1MoreVertIcon;
