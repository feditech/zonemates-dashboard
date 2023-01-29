import { title } from "process";

interface DropDownPropType {
  title?: string;

  options?: Array<any>;

  style?:any;
  

}

const DropDown: React.FC<DropDownPropType> = ({
  title,
  options,
  style
}) => {
  return (
    <select
    defaultValue={'default'}
      style={style}
      className={
       `bg-white border border-grey text-grey text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm  `
      }
    >
      <option value={'default'}>{title}</option>
      {options?.map((el: any, index: React.Key) => (
        <option key={index} value={el.value}>
          {el.title}
        </option>
      ))}
    </select>
  );
};
export default DropDown;
