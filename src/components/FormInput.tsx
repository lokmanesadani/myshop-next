import { faTimesCircle, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, TextField, Typography, styled } from "@mui/material";
import { useRef, useState } from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiBaseInput-root": {
    fontSize: "10px !important",
    backgroundColor: "transparent",
  },
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.primary.main,
  },

  "& .MuiOutlinedInput-root": {
    padding: "0px",
    "&:hover fieldset": {
      border: "1px solid " + theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiOutlinedInput-input": {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #fff inset",
    },
  },
}));

const StyledIcon = styled(FontAwesomeIcon)<{ isfocus: number }>(
  ({ theme, isfocus }) => ({
    fontSize: "18px",
    color: isfocus ? theme.palette.primary.main : "#00000077",
    cursor: "pointer",
    padding: "15px",
    width: "28px",
    height: "18px",
  })
);
type FormInputType = {
  label: string;
  type: string;
  icon?: any;
  reg: any;
  err: any;
  validator?: any[];
  rest?: any;
};
const FormInput = ({
  label,
  type,
  icon,
  reg,
  err,
  validator,
  ...rest
}: FormInputType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [password, setPassword] = useState("");

  const handleClick = () => {
    setShowPassword(!showPassword);
  };
  const handleShowPassword = () => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    }
    return type;
  };

  const handleShowIcon = () => {
    if (type === "password") {
      return showPassword ? faEyeSlash : icon;
    }
    return icon;
  };
  const handleIcon = () => {
    if (!!inputRef.current && document.activeElement !== inputRef.current) {
      inputRef.current.focus();
    }
    label === "Password" && handleClick();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <StyledInput
        fullWidth
        {...rest}
        {...reg}
        onChange={(e) => {
          reg.onChange(e);
          validator && setPassword(e.target.value);
        }}
        error={!!err}
        inputRef={inputRef}
        size="small"
        color="primary"
        InputProps={{
          sx: { fontSize: 15, height: "50px" },
          endAdornment: (
            <StyledIcon
              isfocus={isFocused ? 1 : 0}
              onClick={handleIcon}
              onMouseDown={(e) => e.preventDefault()}
              icon={handleShowIcon()}
            />
          ),
        }}
        InputLabelProps={{
          sx: {
            fontSize: 14,
            padding: 0,
            top: "6px",
            "&.MuiInputLabel-shrink": { top: "0", fontSize: 15 },
          },
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        label={label}
        type={handleShowPassword()}
      />
      <Box sx={{ minHeight: "20px", marginBottom: "10px" }}>
        {err && (
          <Typography
            sx={{
              fontSize: "11px",
            }}
            color="error"
            variant="caption"
          >
            {err.message}
          </Typography>
        )}
      </Box>
      {validator && (
        <Box sx={{ minHeight: "20px", marginBottom: "10px" }}>
          {validator.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                marginBottom: "4px",
                gap: "5px",
                paddingLeft: "10px",
                transition: "all 0.3s ease",
                color:
                  password === ""
                    ? "#909090"
                    : item.regex.test(password)
                    ? "success.main"
                    : "error.main",
              }}
            >
              <FontAwesomeIcon
                style={{ transition: "all 0.2s ease" }}
                opacity={password === "" ? 0.4 : 1}
                icon={item.regex.test(password) ? faCheckCircle : faTimesCircle}
                color={"inherit"}
              />
              <Typography
                sx={{
                  transition: "all 0.2s ease",
                  fontSize: "12.5px",
                  color: "inherit",
                }}
              >
                {item.message}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FormInput;
