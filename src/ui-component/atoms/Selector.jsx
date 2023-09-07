import React, { memo } from "react";
import { Select, Tag } from "antd";

const TagRender = (props) => {
  const { label, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      color="#4096ff"
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
      }}
    >
      {label}
    </Tag>
  );
};

const Selector = ({
  style = {},
  labelStyle = {},
  selectStyle = {},
  messageStyle = {},
  visileLabel = true,
  visibleMessage = true,
  mode = "",
  label = "",
  message = "", // messageText
  type = "", // '' | 'warning' | 'error'
  options = [],
  defaultValue = [],
  onFocus,
  onBlur,
  onChange,
  hiddenMode = "hidden",
  value = [],
  ...restProps
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = React.useCallback(
    (...args) => {
      setIsFocused(true);
      onFocus && onFocus(...args);
    },
    [onFocus]
  );

  const handleBlur = React.useCallback(
    (...args) => {
      setIsFocused(false);
      onBlur && onBlur(...args);
    },
    [onBlur]
  );

  React.useEffect(() => {
    if (mode !== "multiple" && Array.isArray(value) && value?.length > 1) {
      onChange && onChange([value[0]]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  return (
    <div
      className="flex flex-col justify-start items-start w-fit-content h-fit-content relative"
      style={style}
    >
      <Select
        className="min-w-200"
        mode={mode} // Nếu muốn sử dụng selector đơn thì truyền "" vào
        // showArrow
        tagRender={TagRender}
        defaultValue={defaultValue}
        value={value}
        style={selectStyle}
        options={options}
        dropdownStyle={{
          zIndex: 9999,
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        {...restProps}
      />
    </div>
  );
};

export default memo(Selector);

