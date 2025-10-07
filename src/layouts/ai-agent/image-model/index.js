import { useState } from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDBox from 'components/MDBox';
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';
import Card from '@mui/material/Card';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MessageIcon from '@mui/icons-material/Message';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

const suggestedPrompts = [
  "Find images that belong to Jeff Murray?",
  "Show me bill AB1281861",
  "Show me a summary of Jeff Murray's latest bill"
];

function ImageModel() {
  const [query, setQuery] = useState('');
  const [agent, setAgent] = useState('festival-ops');
  const [sources, setSources] = useState('all');

  const handlePromptClick = (prompt) => {
    setQuery(prompt);
  };

  const handleSubmit = () => {
    if (query.trim()) {
      console.log('Query submitted:', query);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox maxWidth="900px" mx="auto" px={3}>
          <MDBox textAlign="center" mb={4}>
            <MDBox component="h1" fontSize="2rem" fontWeight="regular" mb={1}>
              Good morning, Alice
            </MDBox>
            <MDBox component="h2" fontSize="1.5rem" fontWeight="regular" color="info">
              What Bizbeam assistant can I help with?
            </MDBox>
          </MDBox>

          <Card sx={{ p: 3, mb: 3 }}>
            <MDBox mb={2}>
              <MDInput
                fullWidth
                placeholder="Ask Bizbeam Assistant about your images..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                sx={{
                  '& .MuiInputBase-root': {
                    fontSize: '1.125rem',
                    backgroundColor: '#f8f9fa',
                    '&:hover': {
                      backgroundColor: '#ffffff'
                    }
                  }
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton size="small">
                        <SettingsIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={handleSubmit}
                        sx={{
                          ml: 1,
                          backgroundColor: '#e9ecef',
                          '&:hover': {
                            backgroundColor: '#dee2e6'
                          }
                        }}
                      >
                        <ArrowUpwardIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </MDBox>

            <MDBox display="flex" gap={2}>
              <FormControl sx={{ minWidth: 200 }}>
                <Select
                  value={agent}
                  onChange={(e) => setAgent(e.target.value)}
                  displayEmpty
                  sx={{
                    backgroundColor: '#f8f9fa',
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    }
                  }}
               
              </FormControl>

              <FormControl sx={{ minWidth: 150 }}>
                <Select
                  value={sources}
                  onChange={(e) => setSources(e.target.value)}
                  displayEmpty
                  sx={{
                    backgroundColor: '#f8f9fa',
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    }
                  }}
                >
                  <MenuItem value="all">All Sources</MenuItem>
                  <MenuItem value="database">Database</MenuItem>
                  <MenuItem value="api">API Data</MenuItem>
                  <MenuItem value="reports">Reports</MenuItem>
                </Select>
              </FormControl>
            </MDBox>
          </Card>

          <MDBox>
            {suggestedPrompts.map((prompt, index) => (
              <MDButton
                key={index}
                fullWidth
                variant="outlined"
                color="dark"
                onClick={() => handlePromptClick(prompt)}
                sx={{
                  mb: 2,
                  justifyContent: 'flex-start',
                  textTransform: 'none',
                  py: 1.5,
                  px: 2,
                  borderColor: '#dee2e6',
                  color: '#495057',
                  '&:hover': {
                    backgroundColor: '#f8f9fa',
                    borderColor: '#dee2e6'
                  }
                }}
              >
                <MessageIcon sx={{ mr: 2, fontSize: '1rem', color: '#6c757d' }} />
                {prompt}
              </MDButton>
            ))}
          </MDBox>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default ImageModel;
