import FontClass from "types/enums/FontClass";
import joinClasses from "utils/joinClasses";

export type Props = {
  children:
    | number
    | string
    | JSX.Element
    | Array<JSX.Element | string | number | boolean>;
  className?: string;
  display?: string;
  fontClass: FontClass;
  textAlign?: "center" | "left" | "right";
  textTransform?: "none" | "uppercase";
};

export default function BodyText({
  children,
  className,
  display,
  fontClass,
  textAlign,
  textTransform,
}: Props): JSX.Element {
  const classNameJoined = joinClasses(fontClass, className);

  const style = {
    ...(textAlign != null ? { textAlign } : {}),
    ...(textTransform != null ? { textTransform } : {}),
    ...(display != null ? { display } : {}),
  };

  switch (fontClass) {
    case FontClass.Body1:
    case FontClass.Body1Bold:
    case FontClass.Body1Medium:
    case FontClass.Body1SemiBold:
    case FontClass.Body2:
    case FontClass.Body2Bold:
    case FontClass.Body2Medium:
    case FontClass.Body2SemiBold:
    case FontClass.Body3:
    case FontClass.Body3Bold:
    case FontClass.Body3Medium:
    case FontClass.Body3SemiBold:
      return (
        <div className={classNameJoined} style={style}>
          {children}
        </div>
      );
    default:
      throw new Error(`Unexpected fontClass of ${fontClass}`);
  }
}
