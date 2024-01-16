import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

const ChipComponent = () => {
  const [chips, setChips] = useState([]);
  const [items, setItems] = useState([
    "John Cena",
    "Roman Reigns",
    "Jay Cutler",
    "Arnold",
    "Roney coleman",
    "hitler",
  ]);

  const handleChipClick = (item) => {
    setChips((prevChips) => [
      ...prevChips,
      { id: prevChips.length + 1, label: item },
    ]);
    setItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  const handleChipRemove = (id, label) => {
    setChips((prevChips) => prevChips.filter((chip) => chip.id !== id));
    setItems((prevItems) => [...prevItems, label]);
  };

  return (
    <div
      style={{
        width: "50%",
        borderRadius: "5px",
        border: "none",
        marginLeft: "25%",
        marginTop: "10px",
      }}
    >
      <Autocomplete
        multiple
        id="chips-autocomplete"
        options={items.map((item, index) => ({ id: index + 1, label: item }))}
        value={chips}
        onChange={(_, newValue) => setChips(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Type here..." variant="outlined" />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              key={index}
              label={option.label}
              onDelete={() => handleChipRemove(option.id, option.label)}
              avatar={<Avatar>{option.label[0]}</Avatar>}
              {...getTagProps({ index })}
            />
          ))
        }
        renderOption={(props, option) => (
          <li
            {...props}
            style={{ listStyleType: "none" }}
            onClick={() => handleChipClick(option.label)}
          >
            <Avatar style={{ marginRight: "8px" }}>{option.label[0]}</Avatar>
            {option.label}
          </li>
        )}
        getOptionLabel={(option) => option.label}
      />
    </div>
  );
};

export default ChipComponent;
