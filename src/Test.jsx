import React, { useState, useEffect } from "react";
import {
  Grow,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Autocomplete
} from "@mui/material";

const sampleUsers = [
  { name: "Mickey Mouse" },
  { name: "John Wick" },
  { name: "Tom Kirkman" },
  { name: "Donald Duck" },
  { name: "Daisy Duck" },
  { name: "Goofy" },
  { name: "Pluto" }
];

export default function App() {
  const retrievedBugData = {
    creator: "Mickey Mouse",
    title: "A title",
    description: "A Description",
    project: "Project",
    members: ["Minnie Mouse", "Donald Duck", "Goofy", "Pluto"],
    severity: "High",
    status: "Pending"
  };

  const [bugData, setBugData] = useState({
    creator: "",
    title: "",
    description: "",
    project: "",
    members: [],
    severity: "",
    status: ""
  });

  const handleRetrieve = () => {
    console.log(bugData);
    setBugData(retrievedBugData);
  };

  return (
    <div className="App">
      <Typography variant="h6"> Creating a Bug </Typography>
      <TextField
        name="creator"
        style={{ margin: "10px" }}
        variant="outlined"
        label="Creator"
        fullWidth
        value={bugData.creator}
        onChange={(e) => setBugData({ ...bugData, creator: e.target.value })}
      />
      <TextField
        name="title"
        variant="outlined"
        style={{ margin: "10px" }}
        label="Title"
        fullWidth
        value={bugData.title}
        onChange={(e) => setBugData({ ...bugData, title: e.target.value })}
      />
      <TextField
        name="description"
        style={{ margin: "10px" }}
        multiline
        rows={4}
        variant="outlined"
        label="Description"
        fullWidth
        value={bugData.description}
        onChange={(e) =>
          setBugData({ ...bugData, description: e.target.value })
        }
      />
      <TextField
        name="project"
        style={{ margin: "10px" }}
        variant="outlined"
        label="Project"
        fullWidth
        value={bugData.project}
        onChange={(e) => setBugData({ ...bugData, project: e.target.value })}
      />
      <Autocomplete
        multiple
        style={{ margin: "10px" }}
        limitTags={1}
        options={sampleUsers}
        getOptionLabel={(option) => option.name}
        fullWidth
        onChange={(e, newMember) =>
          setBugData({ ...bugData, members: newMember })
        }
        getOptionSelected={(option, value) => option.name === value.name}
        renderInput={(params) => (
          <TextField
            {...params}
            name="members"
            variant="outlined"
            label="Members"
            placeholder="Add a member"
            value={bugData.members}
          />
        )}
      />

      <FormControl fullWidth variant="outlined" style={{ margin: "10px" }}>
        <InputLabel>Severity</InputLabel>
        <Select
          name="severity"
          label="Severity"
          value={bugData.severity}
          onChange={(e) => setBugData({ ...bugData, severity: e.target.value })}
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" style={{ margin: "10px" }}>
        <InputLabel>Status</InputLabel>
        <Select
          name="status"
          variant="outlined"
          label="Status"
          value={bugData.status}
          onChange={(e) => setBugData({ ...bugData, status: e.target.value })}
        >
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Assigned">Assigned</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </FormControl>
      <Button
        onClick={handleRetrieve}
        color="primary"
        variant="contained"
        size="small"
      >
        Retrieve Sample Data
      </Button>
    </div>
  );
}
