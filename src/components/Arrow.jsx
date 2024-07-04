export function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : "";
  
    return (
      <svg
        onClick={props.onClick}
        className={`sm:w-[50px] bottom-[5px] h-[20px] w-[20px] sm:h-[50px] absolute transform -translate-y-1/2 fill-black bg-white rounded-lg p-1 cursor-pointer ${props.left ? "left-[10px]" : "right-[10px]"} ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left ? (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        ) : (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    );
  }
  