
import { Controller } from "react-hook-form";
import SizeSelect from './SizeSelect';

const WrapperSelect = ({ control, name, sizes }) => {
    return (
        <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ref, ...props } }) => (
          <SizeSelect
            onValueChange={onChange}
            value={value}
            forwardedRef={ref}
            sizes={sizes}
          />
        )}
      />
      {console.log("select item:", name)}
    </>
    );
}

export default WrapperSelect;
