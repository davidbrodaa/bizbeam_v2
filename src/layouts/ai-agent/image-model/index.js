import { useState } from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDBox from 'components/MDBox';
import Card from '@mui/material/Card';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Input } from 'components/ui/input';
import { Button } from 'components/ui/button';

const suggestedPrompts = [
  "Find images that belong to Jeff Murray?",
  "Show me bill AB1281861",
  "Show me a summary of Jeff Murray's latest bill"
];

function ImageModel() {
  const [query, setQuery] = useState('');

  const handlePromptClick = (prompt) => {
    setQuery(prompt);
  };

  const handleSubmit = () => {
    if (query.trim()) {
      console.log('Query submitted:', query);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={6}>
        <MDBox maxWidth="900px" mx="auto" px={3}>
          <MDBox textAlign="center" mb={5}>
            <MDBox
              component="h1"
              fontSize="2.5rem"
              fontWeight="400"
              mb={1}
              sx={{ color: '#344767' }}
            >
              Good morning, Alice
            </MDBox>
            <MDBox
              component="h2"
              fontSize="1.75rem"
              fontWeight="400"
              sx={{ color: '#1976d2' }}
            >
              What Bizbeam assistant can I help with?
            </MDBox>
          </MDBox>

          <Card
            sx={{
              mb: 4,
              p: 2.5,
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              borderRadius: '12px'
            }}
          >
            <div style={{ position: 'relative' }}>
              <Input
                placeholder="Ask Bizbeam Assistant about your images..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                style={{
                  width: '100%',
                  padding: '14px 100px 14px 16px',
                  fontSize: '15px',
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  color: '#6c757d'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  display: 'flex',
                  gap: '8px'
                }}
              >
                <Button
                  size="sm"
                  variant="ghost"
                  style={{
                    padding: '8px',
                    minWidth: 'auto',
                    backgroundColor: '#f8f9fa',
                    border: 'none',
                    borderRadius: '8px'
                  }}
                >
                  <SettingsIcon style={{ fontSize: 18, color: '#6c757d' }} />
                </Button>
                <Button
                  size="sm"
                  onClick={handleSubmit}
                  style={{
                    padding: '8px',
                    minWidth: 'auto',
                    backgroundColor: '#e9ecef',
                    border: 'none',
                    borderRadius: '8px'
                  }}
                >
                  <ArrowUpwardIcon style={{ fontSize: 18, color: '#495057' }} />
                </Button>
              </div>
            </div>
          </Card>

          <MDBox>
            {suggestedPrompts.map((prompt, index) => (
              <Card
                key={index}
                onClick={() => handlePromptClick(prompt)}
                sx={{
                  mb: 2,
                  p: 2.5,
                  cursor: 'pointer',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: '#f8f9fa',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                  }
                }}
              >
                <MDBox display="flex" alignItems="center" gap={2}>
                  <MDBox
                    component="span"
                    sx={{
                      color: '#adb5bd',
                      fontSize: '15px',
                      lineHeight: '1.5'
                    }}
                  >
                    =�
                  </MDBox>
                  <MDBox
                    component="span"
                    sx={{
                      color: '#495057',
                      fontSize: '15px',
                      fontWeight: '400'
                    }}
                  >
                    {prompt}
                  </MDBox>
                </MDBox>
              </Card>
            ))}
          </MDBox>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default ImageModel;
